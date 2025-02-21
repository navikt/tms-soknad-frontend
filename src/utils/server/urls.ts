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
  local: 'http://localhost:3000/soknadskvittering',
  development: 'http://tms-soknadskvittering',
  production: 'http://tms-soknadskvittering',
};

const BASE_URL: EnvUrl = {
  local: 'http://localhost:4321/minside/soknad',
  development: 'https://www.ansatt.dev.nav.no/minside/soknad',
  production: 'https://www.nav.no/minside/soknad',
};

const MIN_SIDE_URL: EnvUrl = {
  local: 'http://localhost:4321/minside',
  development: 'https://www.ansatt.dev.nav.no/minside',
  production: 'https://www.nav.no/minside',
};

const KONTOREGISTER_URL = {
  local: 'http://localhost:3000/api/borger/v1/hent-aktiv-konto',
  development:
    'http://sokos-kontoregister-person/api/borger/v1/hent-aktiv-konto',
  production:
    'http://sokos-kontoregister-person/api/borger/v1/hent-aktiv-konto',
};

export const soknadApiUrl = SOKNAD_API_URL[getEnvironment()];
export const baseUrl = BASE_URL[getEnvironment()];
export const minSideUrl = MIN_SIDE_URL[getEnvironment()];
export const enkeltSoknadUrl = (soknadsId: string) =>
  `${baseUrl}/id/${soknadsId}`;
export const getAlleSoknaderUrl = `${soknadApiUrl}/kvitteringer/alle`;
export const getSoknadUrl = (soknadsId: string) =>
  `${soknadApiUrl}/kvittering/${soknadsId}`;
export const getKontoUrl = KONTOREGISTER_URL[getEnvironment()];
