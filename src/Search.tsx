import "./Search.css";
import { useState } from "react";
import Config from "./Config";
import Company from "./Company";
import Fuse from "fuse.js";
import Landmark from "./Landmark";
import { getMap, getMarkers } from "./MapContext";
import { LatLngTuple } from "leaflet";

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
        className="p-2 mx-4 text-xs"
      />
      {results && (
        <div id="search-results" className="bg-white p-0 ml-4">
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
                  className="p-2 hover:bg-slate-200"
                >
                  <div className="company-result text-xs">
                    <h3 className="m-0 p-0">{company.item.name}</h3>
                    <p className="m-0 p-0">
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
