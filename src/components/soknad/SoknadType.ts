export interface SoknadsObject {
  soknadsId: string;
  tittel: string;
  temakode: string;
  skjemanummer: string;
  tidspunktMottatt: string;
  fristEttersending: string;
  linkSoknad: string;
  journalpostId: string;
  mottatteVedlegg: MotatteVedlegg[];
  manglendeVedlegg: ManglendeVedlegg[];
  opprettet: string;
}

export interface SoknadsData {
  soknad: Soknad;
  manglendeVedlegg: ManglendeVedlegg[];
  ettersendte: MotatteVedlegg[];
}

export interface Soknad {
  soknadsId: string;
  tittel: string;
  temakode: string;
  skjemanummer: string;
  tidspunktMottatt: string;
  fristEttersending: string;
  linkSoknad: string;
  journalpostId: string;
  vedlegg: MotatteVedlegg[];
}

export interface MotatteVedlegg {
  vedleggsId: string;
  brukerErAvsender: true;
  erEttersending: false;
  tittel: string;
  linkVedlegg: string;
  tidspunktMottatt: string;
}

export interface ManglendeVedlegg {
  vedleggsId: string;
  brukerErAvsender: true;
  tittel: string;
  beskrivelse: null;
  linkEttersending: string;
  tidspunktEtterspurt: string;
}
