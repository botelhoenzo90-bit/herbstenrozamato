export const clinicAddress = {
  street: "Praça João Pessoa, nº 151 - Centro",
  city: "Rio Tinto - PB",
  postalCode: "58297-000",
};

export function getClinicMapUrl(browserKey: string | undefined) {
  if (!browserKey) return undefined;
  const address = `${clinicAddress.street}, ${clinicAddress.city}, ${clinicAddress.postalCode}, Brasil`;
  return `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(browserKey)}&q=${encodeURIComponent(address)}&zoom=17`;
}