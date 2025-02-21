import { BodyLong, BodyShort, Box, Heading, Link, Tag } from '@navikt/ds-react';
import type { SoknadsObject } from '../soknad/SoknadType';
import { enkeltSoknadUrl } from '@src/utils/server/urls';
import styles from './AlleSoknader.module.css';
import { format } from 'date-fns';
import { ChevronRightIcon } from '@navikt/aksel-icons';

interface Props {
  soknader: SoknadsObject[] | null;
}

const AlleSoknader = ({ soknader }: Props) => {
  if (!soknader) {
    return <div>Ingen søknader</div>;
  }

  return (
    <ul>
      {soknader.map((soknad) => (
        <li>
          <Box
            className={styles.box}
            background={
              soknad.manglendeVedlegg.length > 0
                ? 'surface-warning-subtle'
                : 'surface-subtle'
            }
            padding="5"
            paddingInline="6"
            borderRadius="xlarge"
          >
            <div className={styles.headingWrapper}>
              <Heading className={styles.heading} level="2" size="medium">
                Søknad mottatt
              </Heading>
              {soknad.manglendeVedlegg.length > 0 && (
                <Tag variant="neutral">Dokumentasjon mangler</Tag>
              )}
            </div>
            <BodyLong className={styles.date}>
              {' '}
              {'Mottatt av NAV: ' +
                format(
                  new Date(soknad.tidspunktMottatt),
                  "dd.MM.yyyy 'kl. 'HH:mm",
                )}
            </BodyLong>
            <Link
              className={
                soknad.manglendeVedlegg
                  ? `${styles.link} ${styles.manglende}`
                  : styles.link
              }
              href={enkeltSoknadUrl(soknad.soknadsId)}
            >
              <BodyShort>{soknad.tittel}</BodyShort>
              <div className={styles.chevron}>
                <ChevronRightIcon fontSize="1.25rem" />
              </div>
            </Link>
          </Box>
        </li>
      ))}
    </ul>
  );
};

export default AlleSoknader;
