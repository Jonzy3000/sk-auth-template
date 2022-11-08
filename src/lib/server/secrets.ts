const authProviders = {
  google: {
    clientId: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_SECRET,
  },
  secretKey: import.meta.env.VITE_JWT_SECRET_KEY,
};

export const secrets = {
  authProviders,
};
