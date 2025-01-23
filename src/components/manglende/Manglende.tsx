import { BodyShort, ExpansionCard, Heading, Link } from "@navikt/ds-react";
import type { ManglendeVedlegg } from "../soknad/SoknadType";
import { FilePdfIcon } from "@navikt/aksel-icons";
import styles from './Manglende.module.css'
import { format } from "date-fns";


interface Props {
  manglendeVedlegg: ManglendeVedlegg[];
  ettersendingsfrist: string;
}

const Manglende = ({ manglendeVedlegg, ettersendingsfrist }: Props) => {
  return(
    <ExpansionCard aria-label="Demo med bare tittel">
      <ExpansionCard.Header>
          <ExpansionCard.Title>Manglende dokumentasjon</ExpansionCard.Title>
          <ExpansionCard.Description>
           {"Fristen for ettersendelse er: " + format(new Date(ettersendingsfrist), "dd.MM.yyyy")}
       </ExpansionCard.Description>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        <Heading level="4" size="xsmall" spacing>Du må ettersende følgende dokumentasjon          
        </Heading>
        <ul>
          {manglendeVedlegg.map((vedlegg) => (
            vedlegg.type === 'deg' && <li>
              <Link  href={vedlegg.url}>
                <BodyShort>
                  {vedlegg.tittel}
                </BodyShort>
            </Link>
            </li>
          ))}
        </ul>
        <Heading size='xsmall' level='4' spacing>
          Du må sørge for at følgende dokumenter blir sendt til Nav
        </Heading>
        {manglendeVedlegg.map((vedlegg) => (
          vedlegg.type === 'andre' && (
            <div className={styles.andre}>
              <Heading size='xsmall' level='4'>
                {vedlegg.tittel}
              </Heading>
              <BodyShort>
                {vedlegg.beskrivelse}
              </BodyShort>
            </div>
          )
        ))}
      </ExpansionCard.Content>
    </ExpansionCard>
  )
};

export default Manglende;