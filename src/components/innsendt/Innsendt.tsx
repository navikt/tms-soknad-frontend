import {
  BodyLong,
  BodyShort,
  Box,
  ExpansionCard,
  Heading,
  Link,
} from "@navikt/ds-react";
import type { Soknad } from "../soknad/SoknadType";
import { format } from "date-fns";
import { FilePdfIcon } from "@navikt/aksel-icons";
import styles from "./Innsendt.module.css";

interface Props {
  soknad: Soknad;
}

const Innsendt = ({ soknad }: Props) => {
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
        {"Mottatt av NAV: " + format(new Date(soknad.tidspunkt), "dd.MM.yyyy 'kl. 'HH:mm")}
      </BodyLong>
      <div className={styles.soknad}>
        <Heading className={styles.tittel} level="4" size="xsmall">
          Søknad:
        </Heading>
        <Link className={styles.link} href={soknad.url}>
          <div className={styles.icon}>
            <FilePdfIcon fontSize="1.5rem" />
          </div>
          <BodyShort>{soknad.tittel}</BodyShort>
        </Link>
      </div>
      <Heading className={styles.tittel} level="4" size="xsmall">
        Vedlegg:
      </Heading>
      <ul>
        {soknad.vedlegg.map((vedlegg) => {
          return (
            <li key={vedlegg.tittel}>
              <Link className={styles.link} href={vedlegg.url}>
                <div className={styles.icon}>
                  <FilePdfIcon fontSize="1.5rem" />
                </div>
                <BodyShort>{vedlegg.tittel}</BodyShort>
              </Link>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default Innsendt;
