export interface Data {
  soknad: Soknad;
  manglendeVedlegg: ManglendeVedlegg[];
  ettersendte: EttersendtVedlegg[];
}

export interface Soknad {
  soknadsId: string;
  tittel: string;
  tidspunkt: string;
  ettersendingsfrist: string;
  url?: string;
  vedlegg: Vedlegg[];
  ettersendte: EttersendtVedlegg[];
}

export interface Vedlegg {
  url: string;
  tittel: string;
}

export interface ManglendeVedlegg {
  type: string;
  tittel: string;
  url?: string;
  beskrivelse?: string;
}

export interface EttersendtVedlegg {
  tittel: string;
  url: string;
  tidspunkt: string;
}
