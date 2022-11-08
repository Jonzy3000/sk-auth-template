# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> This is template is set up to use the vercel adapter, you may need to install a different [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Authenticating

This template is using [sk-auth](https://github.com/Dan6erbond/sk-auth), and is set up to use a google provider (more info [here](https://developers.google.com/identity/openid-connect/openid-connect) on this for google specific settings). In your .env you'll need to define the following environment variables.

```
VITE_GOOGLE_OAUTH_CLIENT_ID=
VITE_GOOGLE_OAUTH_CLIENT_SECRET=
VITE_JWT_SECRET_KEY=
```

The main logic of this is within `src/+layout.svelte` and `src/+layout.server.svelte`. Though one caveat of this approach is that every page in your application will be SSR. If you want to change this you can move the logic out of `+layout.server.svelte` and add it to a specific `+page.server.ts` (or [nested](https://kit.svelte.dev/docs/routing#layout) `+layout.server.ts`)