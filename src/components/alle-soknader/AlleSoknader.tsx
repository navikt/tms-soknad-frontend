import { BodyLong, BodyShort, Box, Heading, Link } from "@navikt/ds-react";
import type { SoknadsObject } from "../soknad/SoknadType";
import { enkeltSoknadUrl } from "@src/utils/server/urls";
import styles from "./AlleSoknader.module.css";
import { format } from "date-fns";
import { FilePdfIcon } from "@navikt/aksel-icons";

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
            background={soknad.manglendeVedlegg ? "surface-warning-subtle" : "surface-subtle"}
            padding="5"
            paddingInline="6"
            borderRadius="xlarge"
          >
            <Heading className={styles.heading} level="2" size="medium">
              Søknad mottatt
            </Heading>
            <BodyLong className={styles.date}>
              {" "}
              {"Mottatt av NAV: " +
                format(new Date(soknad.tidspunktMottatt), "dd.MM.yyyy 'kl. 'HH:mm")}
            </BodyLong>
            <Link className={soknad.manglendeVedlegg ? `${styles.link} ${styles.manglende}` : styles.link} href={enkeltSoknadUrl(soknad.soknadsId)}>
              <div className={styles.icon}>
                <FilePdfIcon fontSize="1.5rem" />
              </div>
              <BodyShort>{soknad.tittel}</BodyShort>
            </Link>
          </Box>
        </li>
      ))}
    </ul>
  );
};

export default AlleSoknader;
