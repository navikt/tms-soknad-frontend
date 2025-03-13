import {
  BodyLong,
  Button,
  Heading,
} from '@navikt/ds-react';
import type { ManglendeVedlegg } from '../soknad/SoknadType';
import styles from "./Manglende.module.css";

interface Props {
  manglendeVedlegg: ManglendeVedlegg[];
  ettersendingsfrist: string;
}

const Manglende = ({ manglendeVedlegg, ettersendingsfrist }: Props) => {
  return (
    <div className={styles.container}>
      <Heading level="2" size="xsmall">
        Vedlegg som mangler
      </Heading>
      <ul>
        {manglendeVedlegg.map((vedlegg) => (
          <li key={vedlegg.tittel}>
            <BodyLong>{vedlegg.tittel}</BodyLong>
          </li>
        ))}
      </ul>
      <Button className={styles.button} variant='primary'>Send vedlegg</Button>
    </div>
  );
};

export default Manglende;
