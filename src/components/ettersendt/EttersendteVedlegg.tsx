import { FilePdfIcon } from "@navikt/aksel-icons";
import { BodyLong, BodyShort, Box, Heading, Link } from "@navikt/ds-react";
import { format } from "date-fns";
import type { MotatteVedlegg } from "../soknad/SoknadType";
import styles from "./EttersendteVedlegg.module.css";

interface Props {
  ettersendteVedlegg: MotatteVedlegg[];
}

const EttersendteVedlegg = ({ ettersendteVedlegg }: Props) => {
  return (
    <>
      {ettersendteVedlegg.map((vedlegg) => {
        return (
          <Box
            className={styles.box}
            background="surface-subtle"
            padding="5"
            paddingInline="6"
            borderRadius="xlarge"
          >
            <Heading className={styles.heading} level="2" size="medium">
              Vedlegg mottatt
            </Heading>
            <BodyLong className={styles.date}>
              {" "}
              {"Mottatt av NAV: " +
                format(new Date(vedlegg.tidspunktMottatt), "dd.MM.yyyy 'kl. 'HH:mm")}
            </BodyLong>
            <Link className={styles.link} href={vedlegg.linkVedlegg}>
              <div className={styles.icon}>
                <FilePdfIcon fontSize="1.5rem" />
              </div>
              <BodyShort>{vedlegg.tittel}</BodyShort>
            </Link>
          </Box>
        );
      })}
    </>
  );
};

export default EttersendteVedlegg;
