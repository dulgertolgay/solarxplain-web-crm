export const fallbackLng = "tr";
export const languages = [fallbackLng, "en"];
export const cookieName = "i18next";
export const defaultNS = "translation";

export function getOptions(lng = fallbackLng, ns = defaultNS): any {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    keySeparator: false,
    load: "currentOnly",
    nsSeparator: ".",
  };
}
