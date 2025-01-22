export interface Data {
  soknad: Soknad;
  manglendeVedlegg: ManglendeVedlegg[];
}

export interface Soknad {
  soknadsId: string;
  tittel: string;
  tidspunkt: string;
  ettersendingsfrist: string;
  url?: string;
  vedlegg: {
    url?: string;
    titler: [string];
  };
  ettersendte: [
    {
      tittel: string;
      url: string;
      tidspunkt: string;
    },
  ];
}

export interface ManglendeVedlegg {
  type: string;
  tittel: string;
  url?: string;
  beskrivelse?: string;
}
