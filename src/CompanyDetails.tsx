import Footer from "./Footer";
import Header from "./Header";
import "./CompanyDetails.css";
import { useParams } from "react-router-dom";
import { getCompanies } from "./ConfigContext";
import Company from "./Company";
import LandmarkLogo from "./LandmarkLogo";
import FourOhFour from "./404";
import ReturnToMap from "./ReturnToMap";
import { Helmet } from "react-helmet";
import LandmarkLocation from "./LandmarkLocation";

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
        <div>
          <main>
            <LandmarkLogo landmark={companyRecords[0]}></LandmarkLogo>
            <h1>{companyRecords[0].name}</h1>
            <p>{companyRecords[0].description}</p>
            <h2>Known Locations</h2>
            {companyRecords.map((company) => {
              return <LandmarkLocation company={company} />;
            })}
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
        <Helmet
          title={` ${companyRecords[0].name} : Boston's Computer History`}
        >
          <link
            rel="canonical"
            href={`https://www.computerhistory.boston/company/${companyRecords[0].slug}/`}
          />
        </Helmet>
        <Footer></Footer>
      </div>
    );
  }
}
