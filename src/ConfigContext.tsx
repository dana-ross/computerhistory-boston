import React from "react";
import Landmark from "./Landmark";
import Config from "./Config";

const config = new Config();
export const ConfigContext = React.createContext(config);

interface ConfigContextProps {
    children: any;
}

export function getDefaultCenter() {
    return config.center;
}

export function getDefaultZoom() {
    return config.defaultZoom;
}

export function getCompanies() {
    return config.companies;
}

export function getInstitutions() {
    return config.institutions;
}

export function getLandmarks() {
    return config.landmarks;
}

export function getAllPOI() {
    return new Array<Landmark>().concat(
        config.companies,
        config.institutions,
        config.landmarks
    );
}

export default function ConfigProvider({ children }: ConfigContextProps) {
    return (
        <ConfigContext.Provider value={config}>
            {children}
        </ConfigContext.Provider>
    );
}