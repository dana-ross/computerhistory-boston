import Footer from "./Footer";
import Header from "./Header";
import "./CompanyDetails.css";
import { useParams } from "react-router-dom";
import { getCompanies } from "./ConfigContext";
import Company from "./Company";
import LandmarkLogo from "./LandmarkLogo";
import FourOhFour from "./404";
import Leaflet, { LatLngTuple } from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { setMap } from "./MapContext";
import React from "react";

function updateMapContext(map: Leaflet.Map) {
  setMap(map);
}

export default function CompanyDetails() {
  const { slug } = useParams();
  const companyRecords = getCompanies().filter((company: Company) => {
    return company.slug === slug;
  });

  if (companyRecords.length === 0) {
    return <FourOhFour />;
  } else {
    return (
      <div className="company-container">
        <Header></Header>
        <main>
          <LandmarkLogo landmark={companyRecords[0]}></LandmarkLogo>
          <h1>{companyRecords[0].name}</h1>
          <p>{companyRecords[0].description}</p>
          <h2>Known Locations</h2>
          {companyRecords.map((company) => {
            return (
              <div>
                <address>
                  {company.address.street}
                  <br />
                  {company.address.city}, {company.address.state}{" "}
                  {company.address.zip}
                </address>
                <div className="map">
                  <MapContainer
                    center={company.location as LatLngTuple}
                    zoom={12}
                    whenCreated={updateMapContext}
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={company.location} />
                  </MapContainer>
                </div>
              </div>
            );
          })}
          {!!companyRecords[0] && !!companyRecords[0].links.length && (
            <div className="company-links">
              <h3>Links:</h3>
              {companyRecords[0].linksUnorderedList()}
            </div>
          )}
          <p>
            <a href="/">⇦ Return to the Map</a>
          </p>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
