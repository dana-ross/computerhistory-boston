import { LatLngTuple } from "leaflet";
import Company from "./Company";
import Landmark from "./Landmark";
import Institution from "./Institution";
import companiesRaw from "./data/companies.json";
import landmarksRaw from "./data/landmarks.json";
import institutionsRaw from "./data/institutions.json";
import Link from "./Link";

interface MenuLink {
  targetPath: string,
  iconURL: string,
  label: string,
}

export default class Config {
  center: LatLngTuple;
  defaultZoom: number;
  companies = new Array<Company>();
  landmarks = new Array<Landmark>();
  institutions = new Array<Institution>();
  menuLinks = new Array<MenuLink>();

  constructor() {
    this.center = [42.361145, -71.057083];
    this.defaultZoom = 10;
    this.menuLinks = [
      {
        targetPath: "/",
        iconURL: "/icons/map.svg",
        label: "Map",
      },
      {
        targetPath: "/companies",
        iconURL: "/icons/briefcase.svg",
        label: "Companies",
      },
      {
        targetPath: "/institutions",
        iconURL: "/icons/building-library.svg",
        label: "Institutions",
      },
      {
        targetPath: "/landmarks",
        iconURL: "/icons/map-pin.svg",
        label: "Landmarks",
      }
    ]

    companiesRaw.forEach((rawCompany: any) => {
      this.companies.push(
        new Company(
          rawCompany.slug,
          rawCompany.name,
          rawCompany.address,
          rawCompany.location as LatLngTuple,
          rawCompany.description,
          rawCompany.links.map((link: any) => new Link(link.title, link.href)),
          rawCompany.logo ? rawCompany.logo : ""
        )
      );
    });

    landmarksRaw.forEach((rawLandmark: any) => {
      this.landmarks.push(
        new Landmark(
          rawLandmark.slug,
          rawLandmark.name,
          rawLandmark.address,
          rawLandmark.location as LatLngTuple,
          rawLandmark.description,
          rawLandmark.links.map((link: any) => new Link(link.title, link.href)),
          rawLandmark.logo ? rawLandmark.logo : ""
        )
      );
    });

    institutionsRaw.forEach((rawInstitution: any) => {
      this.institutions.push(
        new Landmark(
          rawInstitution.slug,
          rawInstitution.name,
          rawInstitution.address,
          rawInstitution.location as LatLngTuple,
          rawInstitution.description,
          rawInstitution.links.map(
            (link: any) => new Link(link.title, link.href)
          ),
          rawInstitution.logo ? rawInstitution.logo : ""
        )
      );
    });
  }
}
