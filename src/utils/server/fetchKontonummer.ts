import { getKontoUrl } from "./urls.ts";
import { parseIdportenToken } from "@navikt/oasis";
import { getOboToken } from "./token.ts";
import type { Kontonummer } from "@src/types/types.ts";

export const fetchKontonummer = async (token: string): Promise<Kontonummer> => {
  const audience = `${process.env.NAIS_CLUSTER_NAME}:okonomi:sokos-kontoregister-person`;
  const oboToken = await getOboToken(token, audience);
  const parsedToken = parseIdportenToken(token);

  if (!parsedToken.ok) {
    console.error("Could not parse token" + parsedToken.error);
    console.error("Cannot parse token");
    return { feilmelding: "Kunne ikke hente kontonummer" };
  }

  const pid = parsedToken.pid;
  const response = await fetch(getKontoUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${oboToken}`,
    },
    body: JSON.stringify({ kontohaver: pid }),
  });

  if (!response.ok) {
    console.error(
      "http error with status " + response.status + "when fetching kontonummer",
    );
    return { feilmelding: "Kunne ikke hente kontonummer" };
  }
  console.log("response", response);
  const data: Kontonummer = await response.json();
  console.log("data", data);
  if ("utenlandskKontoInfo" in data || "feilmelding" in data) {
    return data;
  }

  return { kontonummer: formatKontonummer(data.kontonummer) };
};

const formatKontonummer = (kontonummer: string): string => {
  return `${kontonummer.slice(0, 4)}.${kontonummer.slice(4, 6)}.${kontonummer.slice(6)}`;
};
