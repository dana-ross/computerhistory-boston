import Address from "./Address";
import { LatLngTuple } from "leaflet";
import Link from "./Link";
import Keyable from "./Keyable";
import formatSafeKey from "./formatSafeKey";

export default class Landmark implements Keyable {
  name: string;
  address: Address;
  location: LatLngTuple;
  description: string;
  links: Link[] = [];
  logo: string;

  constructor(
    name: string,
    address: Address,
    location: LatLngTuple,
    description: string,
    links: Link[] = [],
    logo: string
  ) {
    this.name = name;
    this.address = address;
    this.location = location;
    this.description = description;
    this.links = links;
    this.logo = logo ? logo : "";
  }

  key() {
    return formatSafeKey([this.name, this.address.street.split(' ').slice(0, 2).join('-')])
  }
}
