import { describe, expect, it } from "vitest";
import { clinicAddress, getClinicMapUrl } from "@/lib/clinic-location";

describe("Clinic location", () => {
  it("uses the supplied clinic address for the Google Maps destination", () => {
    expect(clinicAddress).toEqual({
      street: "Praça João Pessoa, nº 151 - Centro",
      city: "Rio Tinto - PB",
      postalCode: "58297-000",
    });
    const url = new URL(getClinicMapUrl("test-browser-key") ?? "");
    expect(url.pathname).toBe("/maps/embed/v1/place");
    expect(url.searchParams.get("q")).toBe("Praça João Pessoa, nº 151 - Centro, Rio Tinto - PB, 58297-000, Brasil");
    expect(url.searchParams.has("center")).toBe(false);
  });
});