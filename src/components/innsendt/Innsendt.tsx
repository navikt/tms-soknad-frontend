import {BodyShort, ExpansionCard, Heading, Link} from "@navikt/ds-react";
import type { Soknad } from "../soknad/SoknadType";
import { format } from "date-fns";
import { FilePdfIcon } from '@navikt/aksel-icons';
import style from "./Innsendt.module.css";

interface Props {
  soknad: Soknad;
}

const Innsendt = ({ soknad }: Props) => {
  return (
    <ExpansionCard aria-label="Demo med bare tittel">
      <ExpansionCard.Header>
          <ExpansionCard.Title>Kvittering på innsendt søknad</ExpansionCard.Title>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        <BodyShort>
            {"Mottatt av NAV: " + format(new Date(soknad.tidspunkt), "dd.MM.yyyy")}
        </BodyShort>
          <div className={style.soknad}>
            <Heading level="4" size="xsmall">
              Søknad:
            </Heading>
            <Link className={style.tittel} href={soknad.url}>
                <FilePdfIcon fontSize="1.5rem" />
                <BodyShort>
                  {soknad.tittel}
                </BodyShort>
            </Link>
          </div>
          <Heading level="4" size="xsmall">
              Vedlegg:
          </Heading>
          <ul>
          {soknad.vedlegg.titler.map((tittel) => {
              return (
                  <li>
                    <Link className={style.tittel} href={soknad.vedlegg.url}>
                        <FilePdfIcon fontSize="1.5rem" />
                        <BodyShort>
                        {tittel}
                        </BodyShort>
                    </Link>±±±±±
                  </li>
              )
          })}
          </ul>±
      </ExpansionCard.Content>
    </ExpansionCard>
  );
};

export default Innsendt;
