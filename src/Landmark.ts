import Address from "./Address";
import { LatLngExpression } from "leaflet";
import Link from "./Link";
import Keyable from "./Keyable";
import formatSafeKey from "./formatSafeKey";

export default class Landmark implements Keyable {
  name: string;
  address: Address;
  location: LatLngExpression;
  description: string;
  links: Link[] = [];

  constructor(
    name: string,
    address: Address,
    location: LatLngExpression,
    description: string,
    links: Link[] = []
  ) {
    this.name = name;
    this.address = address;
    this.location = location;
    this.description = description;
    this.links = links;
  }

  key() {
    return formatSafeKey([this.name, this.address.street.split(' ').slice(0, 2).join('-')])
  }
}
