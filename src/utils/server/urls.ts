const isDevelopment = process.env.NAIS_CLUSTER_NAME === 'dev-gcp';
export const isLocal = process.env.NODE_ENV === 'development';

export const getEnvironment = () => {
  if (isDevelopment) {
    return 'development';
  }

  if (isLocal) {
    return 'local';
  }

  return 'production';
};

type EnvUrl = { development: string; production: string; local: string };

<<<<<<< HEAD
const SOKNAD_API_URL = {
  local: "http://localhost:3000/soknadskvittering",
  development: "http://tms-soknadskvittering",
  production: "http://tms-soknadskvittering",
=======
const EXAMPLE_API_URL = {
  local: 'http://localhost:3000/api/something',
  development: 'http://example-your-api-app/api/something',
  production: 'http://example-your-api-app/api/something',
>>>>>>> 57e7d04d2d07ca4258f287b4c21944fd7d75eccc
};

const BASE_URL: EnvUrl = {
  local: 'http://localhost:4321/minside/soknad',
  development: 'https://www.ansatt.dev.nav.no/minside/soknad',
  production: 'https://www.nav.no/minside/soknad',
};

<<<<<<< HEAD
export const soknadApiUrl = SOKNAD_API_URL[getEnvironment()];
export const baseUrl = BASE_URL[getEnvironment()];
export const getSoknadUrl = (soknadsId: string) => `${soknadApiUrl}/kvittering/${soknadsId}`;
=======
export const exampleApiUrl = EXAMPLE_API_URL[getEnvironment()];
export const baseUrl = BASE_URL[getEnvironment()];
>>>>>>> 57e7d04d2d07ca4258f287b4c21944fd7d75eccc
