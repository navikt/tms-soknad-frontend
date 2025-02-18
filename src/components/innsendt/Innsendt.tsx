import { BodyLong, BodyShort, Box, Heading, Link } from '@navikt/ds-react';
import type { SoknadsObject } from '../soknad/SoknadType';
import { format } from 'date-fns';
import { FilePdfIcon } from '@navikt/aksel-icons';
import styles from './Innsendt.module.css';

interface Props {
  soknad: SoknadsObject;
}

const Innsendt = ({ soknad }: Props) => {
  if (!soknad) {
    return null;
  }

  const hasVedlegg = soknad.mottatteVedlegg.length > 0;

  return (
    <Box
      className={styles.box}
      background="surface-subtle"
      padding="5"
      paddingInline="6"
      borderRadius="xlarge"
    >
      <Heading className={styles.heading} level="2" size="medium">
        Kvittering på innsendt søknad
      </Heading>
      <BodyLong size="medium">
        {'Mottatt av NAV: ' +
          format(new Date(soknad?.tidspunktMottatt), "dd.MM.yyyy 'kl. 'HH:mm")}
      </BodyLong>
      <div className={styles.soknad}>
        <Heading className={styles.tittel} level="4" size="xsmall">
          Søknad:
        </Heading>
        <Link className={styles.link} href={soknad?.linkSoknad}>
          <div className={styles.icon}>
            <FilePdfIcon fontSize="1.5rem" />
          </div>
          <BodyShort>{soknad?.tittel}</BodyShort>
        </Link>
      </div>
      {hasVedlegg && (
        <div className={styles.vedleggsWrapper}>
          <Heading className={styles.tittel} level="4" size="xsmall">
            Vedlegg:
          </Heading>
          <ul>
            {soknad?.mottatteVedlegg.map((vedlegg) => {
              return (
                !vedlegg.erEttersending && (
                  <li key={vedlegg?.tittel}>
                    <Link className={styles.link} href={vedlegg.linkVedlegg}>
                      <div className={styles.icon}>
                        <FilePdfIcon fontSize="1.5rem" />
                      </div>
                      <BodyShort>{vedlegg?.tittel}</BodyShort>
                    </Link>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      )}
    </Box>
  );
};

export default Innsendt;
