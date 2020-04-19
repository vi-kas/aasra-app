export interface IEvent {
  id: number;
  title: string;
  link?: string;
  location: ILocation;
}

export interface ILocation {
  id: number;
  address: string;
  zip: number;
}
