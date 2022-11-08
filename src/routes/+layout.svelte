<script lang="ts">
  import type { PageData } from "./$types";
  import { page } from "$app/stores";

  export let data: PageData;
  const { session } = data;
</script>

<h2>Getting data from PageData;</h2>
{JSON.stringify(session)}

<nav>
  {#if session.user}
    <a href="/api/auth/signout">Log out</a>
  {:else}
    <a href={`/api/auth/signin/google?redirect=${$page.url.href}`}> Log in </a>
  {/if}
</nav>

<main>
  <slot />
</main>
