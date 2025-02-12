import { Link } from "@navikt/ds-react"
import type { SoknadsObject } from "../soknad/SoknadType"
import { enkeltSoknadUrl } from "@src/utils/server/urls"

interface Props {
  soknader: SoknadsObject[] | null;
}

const AlleSoknader = ({ soknader }: Props) => {
  if(!soknader) {
    return <div>Ingen søknader</div>
  }

  soknader.map((soknad) => console.log(soknad))
  return(
    <ul>
    {soknader.map(
      (soknad) => (
          <li>
            <Link href={enkeltSoknadUrl(soknad?.soknadsId)}>
            {soknad.tittel}
            </Link>
          </li>
        )
    )}
  </ul>
  )
}

export default AlleSoknader;