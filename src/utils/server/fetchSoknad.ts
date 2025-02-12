import type { SoknadsObject } from "@src/components/soknad/SoknadType";
import { getOboToken } from "@src/utils/server/token";
import { getSoknadUrl } from "@src/utils/server/urls";

export const fetchSoknad = async (
  token: string,
  id: string
): Promise<SoknadsObject> => {
  const oboToken = await getOboToken(token);

  const response = await fetch(getSoknadUrl(id), {
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
