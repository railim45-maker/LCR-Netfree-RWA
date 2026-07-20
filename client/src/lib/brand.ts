export const RAILIM_LOGO_URL = "/manus-storage/railim-logo_8fd5247a.png";

export const BRAND_NAME = "Railim Nativa Donativa";

export function setSeo(title: string, description: string) {
  document.title = `${title} | ${BRAND_NAME}`;
  const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (metaDescription) {
    metaDescription.content = description;
  }
  const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.content = `${title} | ${BRAND_NAME}`;
  }
  const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.content = description;
  }
}
