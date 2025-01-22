import { getEnvironment } from "@src/utils/server/urls";

const REDIRECT_URI = {
  local: "http://localhost:4321/minside/soknad",
  development: "https://www.ansatt.dev.nav.no/minside/soknad",
  production: "https://www.nav.no/minside/soknad",
};

export const redirectUri = REDIRECT_URI[getEnvironment()];
export const loginUrl = `/minside/soknad/oauth2/login?redirect=${redirectUri}`;
