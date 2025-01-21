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
import ReturnToMap from "./ReturnToMap";
import { Helmet } from "react-helmet";
import Sidebar from "./Sidebar";

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
      <div className="company-container flex">
        <Helmet
          title={` ${companyRecords[0].name} : Boston's Computer History`}
        >
          <link
            rel="canonical"
            href={`https://www.computerhistory.boston/company/${companyRecords[0].slug}/`}
          />
        </Helmet>
        <Sidebar />
        <main>
          <Header className="w-full mb-4" />
          <div>
            <main className="ml-4">
              <LandmarkLogo landmark={companyRecords[0]}></LandmarkLogo>
              <h1 className="text-xl text-black my-4">{companyRecords[0].name}</h1>
              <p className="my-4">{companyRecords[0].description}</p>
              <h2 className="text-lg text-black my-4">Known Locations</h2>
              <div className="my-4">
                {companyRecords.map((company) => {
                  return (
                    <div className="bg-slate-200 w-72 p-4">
                      <div className="w-16 mb-4">
                        <MapContainer
                          center={company.location as LatLngTuple}
                          zoom={12}
                          whenCreated={updateMapContext}
                          className="w-64 h-64"
                        >
                          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                          <Marker position={company.location} />
                        </MapContainer>
                      </div>
                      <address className="not-italic text-sm">
                        {company.address.street}
                        <br />
                        {company.address.city}, {company.address.state}{" "}
                        {company.address.zip}
                      </address>
                    </div>
                  );
                })}
              </div>
            </main>
            <aside>
              <LandmarkLogo landmark={companyRecords[0]}></LandmarkLogo>
              {!!companyRecords[0] && !!companyRecords[0].links.length && (
                <div className="company-links">
                  <h3>Links:</h3>
                  {companyRecords[0].linksUnorderedList()}
                </div>
              )}
            </aside>
          </div>
          <ReturnToMap />
          <Footer></Footer>
        </main>

      </div>
    );
  }
}
