import { getKontoUrl } from './urls';
import { parseIdportenToken } from '@navikt/oasis';
import { getOboToken } from './token.ts';
import { getEnvironment } from './environment.ts';

export const fetchKontonummer = async (token: string): Promise<any> => {
  const audience =
    getEnvironment() === 'dev'
      ? 'dev-gcp:okonomi:sokos-kontoregister-person'
      : 'prod-gcp:oko:sokos-kontoregister-person';
  const oboToken = await getOboToken(token, audience);
  const parsedToken = parseIdportenToken(token);

  if (!parsedToken.ok) {
    console.error('Could not parse token' + parsedToken.error);
    return { kontonummer: null };
  }

  const pid = parsedToken.pid;
  const response = await fetch(getKontoUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${oboToken}`,
    },
    body: JSON.stringify({ Kontohaver: pid }),
  });

  const data = await response.json();
  return data;
};
