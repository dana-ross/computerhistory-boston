import Footer from "./Footer";
import Header from "./Header";
import "./DetailsPage.css";
import { useLocation, useParams } from "react-router-dom";
import { getCompanies, getInstitutions, getLandmarks } from "./ConfigContext";
import Company from "./Company";
import LandmarkLogo from "./LandmarkLogo";
import FourOhFour from "./404";
import Leaflet, { LatLngTuple } from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { setMap } from "./MapContext";
import ReturnToMap from "./ReturnToMap";
import { Helmet } from "react-helmet";
import Sidebar from "./Sidebar";
import Landmark from "./Landmark";
import Institution from "./Institution";

function updateMapContext(map: Leaflet.Map) {
    setMap(map);
}

export default function DetailsPage() {
    const { slug } = useParams();
    const urlPath = useLocation().pathname;

    const location = urlPath.match(/\/([^/]*)\//);
    if (!location) {
        return <FourOhFour />;
    }
    const locationType = location[1];

    // TODO: Refactor into a function
    let landmarkRecords: Array<Landmark>;
    switch (locationType) {
        case "company":
            landmarkRecords = getCompanies().filter((company: Company) => {
                return company.slug === slug;
            });
            break;
        case "institution":
            landmarkRecords = getInstitutions().filter((institution: Institution) => {
                return institution.slug === slug;
            });
            break;
        case "landmark":
            landmarkRecords = getLandmarks().filter((landmark: Landmark) => {
                return landmark.slug === slug;
            })
            break;
        default:
            return <FourOhFour />;
    }

    if (landmarkRecords.length === 0) {
        return <FourOhFour />;
    } else {
        return (
            <div className="company-container flex">
                <Helmet
                    title={` ${landmarkRecords[0].name} : Boston's Computer History`}
                >
                    <link
                        rel="canonical"
                        href={`https://www.computerhistory.boston/company/${landmarkRecords[0].slug}/`}
                    />
                </Helmet>
                <Sidebar />
                <main>
                    <Header className="w-full mb-4" />
                    <div>
                        <main className="ml-4">
                            <h1 className="text-xl text-black my-4">
                                {landmarkRecords[0].logo ? <LandmarkLogo landmark={landmarkRecords[0]} className="w-32"></LandmarkLogo> : landmarkRecords[0].name}
                            </h1>
                            <p className="my-4">{landmarkRecords[0].description}</p>
                            <h2 className="text-lg text-black my-4">Known Locations</h2>
                            <div className="my-4">
                                {landmarkRecords.map((company) => {
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
                            <LandmarkLogo landmark={landmarkRecords[0]}></LandmarkLogo>
                            {!!landmarkRecords[0] && !!landmarkRecords[0].links.length && (
                                <div className="company-links">
                                    <h3>Links:</h3>
                                    {landmarkRecords[0].linksUnorderedList()}
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