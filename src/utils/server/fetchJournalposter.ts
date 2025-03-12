import { parseIdportenToken } from '@navikt/oasis';
import { getOboToken } from './token.ts';
import { getEnvironment } from './environment.ts';
import { getSAFUrl } from './urls.ts';
import type { Soknad } from '@src/components/soknad/SoknadType.ts';

export const fetchJournalposter = async (token: string, tema: string) => {
  const safSelvbetjeningApiAudience =
    getEnvironment() === 'dev'
      ? 'dev-fss:teamdokumenthandtering:safselvbetjening'
      : 'prod-fss:teamdokumenthandtering:safselvbetjening';
  const parsedToken = parseIdportenToken(token);

  if (!parsedToken.ok) {
    console.error('Could not parse token' + parsedToken.error);
    return { navn: null, ident: null };
  }

  const pid = parsedToken.pid;
  const oboToken = await getOboToken(token, safSelvbetjeningApiAudience);
  const safResponse = await fetch(`${getSAFUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${oboToken}`,
    },
    body: JSON.stringify({
      query: `query GetDocuments($ident: String!, $tema: [Tema]!) {
dokumentoversiktSelvbetjening(ident: $ident, tema: $tema) {
    tema {
      navn
      dokumenter {
        tittel
        journalpostId
        dato
      }
    }
  }
}`,
      variables: {
        ident: pid,
        tema: tema,
      },
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching from API: ' + error);
    });

  console.log(safResponse);
};
