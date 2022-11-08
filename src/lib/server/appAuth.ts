import { dev } from "$app/environment";
import { SvelteKitAuth } from "sk-auth";
import { GoogleOAuth2Provider } from "sk-auth/providers";
import { secrets } from "./secrets";

export const appAuth = new SvelteKitAuth({
  protocol: dev ? "http" : "https",
  providers: [
    new GoogleOAuth2Provider({
      ...secrets.authProviders.google,
      profile(profile) {
        return { ...profile, provider: "google" };
      },
    }),
  ],
  jwtSecret: secrets.authProviders.secretKey,
});
