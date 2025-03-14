import { parseIdportenToken } from '@navikt/oasis';
import { getOboToken } from './token.ts';
import { getEnvironment } from './environment.ts';
import { getSAFUrl } from './urls.ts';

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
      query: `query($ident: String!, $tema: [Tema]!) {
dokumentoversiktSelvbetjening(ident: $ident, tema: $tema) {
    tema {
      navn
      journalposter {
        journalpostId
        dokumenter {
          tittel
          dokumentInfoId
        }
    }
    }
  }
}`,
      variables: {
        ident: pid,
        tema: [tema],
      },
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching from API: ' + error);
    });
  console.log(safResponse.data.dokumentoversiktSelvbetjening.tema);

  safResponse.data.dokumentoversiktSelvbetjening.tema.forEach(
    (temaItem: any) => {
      console.log(`Tema: ${temaItem.navn}`);

      temaItem.journalposter?.forEach((journalpost: any) => {
        console.log(`Journalpost ID: ${journalpost.journalpostId}`);

        journalpost.dokumenter?.forEach((dokument: any) => {
          console.log(`Dokument Title: ${dokument.tittel}`);
          console.log(`Dokument ID: ${dokument.dokumentInfoId}`);
          //console.log(`Dokument Format: ${dokument.variantFormat}`);
          //console.log(`Dokument Access: ${dokument.brukerHarTilgang}`);
        });
      });
    },
  );
};
