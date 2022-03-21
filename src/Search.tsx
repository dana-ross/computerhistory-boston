import "./Search.css";
import { useState } from "react";
import Config from "./Config";
import Company from "./Company";
import Fuse from "fuse.js";
import Landmark from "./Landmark";
import MapState from "./MapState";

type FuseResult<T> = Fuse.FuseResult<T>;

const config = new Config();
const allLandmarks = new Array<Landmark>().concat(
  config.companies,
  config.institutions,
  config.landmarks
);
const fuse = new Fuse(allLandmarks, {
  keys: ["name", "address.city", "address.state", "address.zip"],
});

interface SearchProps {
  mapState: MapState;
}

export default function Search({ mapState }: SearchProps) {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<FuseResult<Company>[]>([]);

  return (
    <div id="search" className="hover-box">
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
                    mapState.setCenter(company.item.location);
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >
                  <h2>{company.item.name}</h2>
                  <p>
                    {company.item.address.city}, {company.item.address.state}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
