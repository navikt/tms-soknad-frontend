export const text = {
  title: {
    nb: "Søknader",
    nn: "Søknadar",
    en: "Applications",
  },
  name: {
    nb: "Navn",
    en: "Name",
    nn: "Navn",
  },
  minSide: {
    nb: "Min side",
    nn: "Mi side",
    en: "My page",
  },
  vedleggIngress: {
    nb: "Vi har mottatt søknaden din med alle nødvendige vedlegg, og vil ta kontakt med deg dersom vi har behov for mer dokumentasjon.",
    nn: "Vi har mottatt søknaden din med alle nødvendige vedlegg, og vil ta kontakt med deg dersom vi har behov for mer dokumentasjon.",
    en: "Vi har mottatt søknaden din med alle nødvendige vedlegg, og vil ta kontakt med deg dersom vi har behov for mer dokumentasjon.",
  },
  manglendeVedleggIngress: {
    nb: (dato: string) =>
      `Vi har mottatt søknaden din. Du må ettersende de vedleggene som mangler før vi kan behandle den. Siste frist for ettersendelse er ${dato}`,
    nn: (dato: string) =>
      `Vi har mottatt søknaden din. Du må ettersende de vedleggene som mangler før vi kan behandle den. Siste frist for ettersendelse er ${dato}`,
    en: (dato: string) =>
      `Vi har mottatt søknaden din. Du må ettersende de vedleggene som mangler før vi kan behandle den. Siste frist for ettersendelse er ${dato}`,
  },
};
