import { BodyLong, BodyShort, Box, Heading, Link } from "@navikt/ds-react";
import type { EttersendtVedlegg } from "../soknad/SoknadType";
import styles from "./EttersendteVedlegg.module.css";
import { format } from "date-fns";
import { FilePdfIcon } from "@navikt/aksel-icons";

interface Props {
  ettersendteVedlegg: EttersendtVedlegg[];
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
                format(new Date(vedlegg.tidspunkt), "dd.MM.yyyy 'kl. 'HH:mm")}
            </BodyLong>
            <Link className={styles.link} href={vedlegg.url}>
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
