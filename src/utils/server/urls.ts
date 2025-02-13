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

const SOKNAD_API_URL = {
  local: "http://localhost:3000/soknadskvittering",
  development: "http://tms-soknadskvittering",
  production: "http://tms-soknadskvittering",
};

const BASE_URL: EnvUrl = {
  local: 'http://localhost:4321/minside/soknad',
  development: 'https://www.ansatt.dev.nav.no/minside/soknad',
  production: 'https://www.nav.no/minside/soknad',
};

export const soknadApiUrl = SOKNAD_API_URL[getEnvironment()];
export const baseUrl = BASE_URL[getEnvironment()];
export const enkeltSoknadUrl = (soknadsId: string) => `${baseUrl}/id/${soknadsId}`;
export const getAlleSoknaderUrl = `${soknadApiUrl}/kvitteringer/alle`;
export const getSoknadUrl = (soknadsId: string) => `${soknadApiUrl}/kvittering/${soknadsId}`;
