import { BodyShort, ExpansionCard } from "@navikt/ds-react";
import type { soknad } from "../soknad/SoknadType";
import { format } from "date-fns";

interface Props {
  soknad: soknad;
}

const Innsendt = ({ soknad }: Props) => {
  return (
    <ExpansionCard aria-label="Demo med bare tittel">
      <ExpansionCard.Header>
        <ExpansionCard.Title>{soknad.tittel}</ExpansionCard.Title>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        <BodyShort>{"Mottatt av NAV: " + format(new Date(soknad.tidspunkt), "dd.MM.yyyy")}</BodyShort>
      </ExpansionCard.Content>
    </ExpansionCard>
  );
};

export default Innsendt;
