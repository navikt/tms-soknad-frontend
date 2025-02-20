type ValidKontonummer = {
  kontonummer: string;
  utenlandskKontoInfo?: {
    banknavn: string;
    bankkode: string;
    bankLandkode: string;
    valutakode: string;
    swiftBicKode: string;
    bankadresse1: string;
    bankadresse2: string;
    bankadresse3: string;
  };
};

type ErrorKontonummer = {
  feilmelding: string;
};

export type Kontonummer = ValidKontonummer | ErrorKontonummer;
