import {
  BodyLong,
  BodyShort,
  Box,
  ExpansionCard,
  Heading,
  Link,
} from "@navikt/ds-react";
import type { ManglendeVedlegg } from "../soknad/SoknadType";
import { FileExportIcon, UploadIcon } from "@navikt/aksel-icons";
import styles from "./Manglende.module.css";
import { format } from "date-fns";

interface Props {
  manglendeVedlegg: ManglendeVedlegg[];
  ettersendingsfrist: string;
}

const Manglende = ({ manglendeVedlegg, ettersendingsfrist }: Props) => {
  return (
    <>
      <Box
        className={styles.topBox}
        background="surface-action-subtle"
        padding="5"
        paddingInline="6"
        borderRadius="xlarge"
      >
        <Heading className={styles.heading} level="2" size="medium">
          Manglende dokumentasjon
        </Heading>
        <ul>
          {manglendeVedlegg.map(
            (vedlegg) =>
              vedlegg.type === "deg" && (
                <li key={vedlegg.tittel}>
                  <Link className={styles.link} href={vedlegg.url}>
                    <div className={styles.icon}>
                      <FileExportIcon fontSize="1.5rem" />
                    </div>
                    <BodyLong>{vedlegg.tittel}</BodyLong>
                  </Link>
                </li>
              )
          )}
        </ul>
        <BodyLong>
          <span>
            Fristen for ettersendelse er:{" "}
            <strong>
              {format(new Date(ettersendingsfrist), "dd.MM.yyyy")}
            </strong>
          </span>
        </BodyLong>
      </Box>
      <Box
        className={styles.bottomBox}
        background="surface-action-subtle"
        borderRadius="xlarge"
      >
        <Link className={styles.uploadLink} href={""}>
          <BodyLong><strong>Last opp dokumentasjon</strong></BodyLong>
          <div className={styles.uploadIcon}>
            <UploadIcon fontSize="1.25rem" />
          </div>
        </Link>
      </Box>
    </>
  );
};

export default Manglende;
