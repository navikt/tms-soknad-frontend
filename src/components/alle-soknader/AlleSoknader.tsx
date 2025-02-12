import { Link } from "@navikt/ds-react"
import type { SoknadsObject } from "../soknad/SoknadType"
import { enkeltSoknadUrl } from "@src/utils/server/urls"

interface Props {
  soknader: SoknadsObject[];
}

const AlleSoknader = ( {soknader }: Props) => {
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