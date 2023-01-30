export interface City {
  id: string;
  name: string;
  latitude: number;
  altitude: number;
  country: {
    name: string;
  };
}
