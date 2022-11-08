<script lang="ts">
  import { page } from "$app/stores";
  const { session } = $page.data;
</script>

<h2>Getting data from $app/stores</h2>
{JSON.stringify(session)}
