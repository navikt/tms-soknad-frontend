import type { SoknadsObject } from "@src/components/soknad/SoknadType";
import { getOboToken } from "@src/utils/server/token";
import { getAlleSoknaderUrl } from "@src/utils/server/urls";

export const fetchAlleSoknader = async (
  token: string,
): Promise<SoknadsObject[]> => {
  const audience = `${process.env.NAIS_CLUSTER_NAME}:min-side:tms-soknadskvittering`;
  const oboToken = await getOboToken(token, audience);

  const response = await fetch(getAlleSoknaderUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${oboToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      "http error with status " + response.status + "when fetching soknad"
    );
  }

  return await response.json();
};
