import "./Search.css";
import { useState } from "react";
import Config from "./Config";
import Company from "./Company";
import Fuse from "fuse.js";
import Landmark from "./Landmark";
import { getMap, getMarkers } from "./MapContext";
import { LatLngTuple } from "leaflet";
import LandmarkLogo from "./LandmarkLogo";

type FuseResult<T> = Fuse.FuseResult<T>;

const config = new Config();
const allLandmarks = new Array<Landmark>().concat(
  config.companies,
  config.institutions,
  config.landmarks
);

const fuse = new Fuse(allLandmarks, {
  keys: ["name", "address.city", "address.state", "address.zip", "description"],
});

function adjustLocation(location: LatLngTuple) {
  const adjustmentFactor = 0.2;
  const adjustedLocation: LatLngTuple = [
    location[0] + adjustmentFactor,
    location[1],
  ];
  return adjustedLocation;
}

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<FuseResult<Company>[]>([]);

  return (
    <div id="search">
      <input
        type="search"
        placeholder="Search"
        onChange={(event) => {
          setQuery(event.currentTarget.value);
          setResults(fuse.search(query));
        }}
        value={query}
      />
      {results && (
        <div id="search-results">
          <ul>
            {results.map((company) => {
              return (
                <li
                  key={company.item.key()}
                  onClick={(e) => {
                    getMap()?.flyTo(adjustLocation(company.item.location));
                    getMarkers()
                      .find((candidate) => {
                        return (
                          candidate.current &&
                          candidate.current
                            .getLatLng()
                            .equals(company.item.location)
                        );
                      })
                      ?.current?.openPopup();
                    setQuery("");
                    setResults([]);
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >
                  <div className="company-result">
                    <h3>{company.item.name}</h3>
                    <p>
                      {company.item.address.city}, {company.item.address.state}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
