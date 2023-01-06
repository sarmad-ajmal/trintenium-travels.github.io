export interface Airport {
  id: number;
  icao: string;
  iata: string;
  faa?: any;
  name: string;
  fullName: string;
  country: Country;
  state: Country;
  city: Country;
  fir: string;
  uir: string;
  magneticVariation: string;
  airportElevation: number;
  airportOfEntry: boolean;
  latitude: Latitude;
  longitude: Latitude;
  distanceFromBaseAirport: number;
  priority: number;
}

interface Latitude {
  decimal: number;
  dms: string;
}

interface Country {
  id: number;
  name: string;
}

export interface IAirporMenuItem {
  title: string;
  id: number;
}
export interface IAirportAutocomplete {
  label: string;
  onChange: (id: number|null) => void;
}
