import Landmark from "./Landmark";

interface LandmarkLogoProps {
  landmark: Landmark;
}

function logoURL(logo: string) {
  return logo && logo.length ? `${process.env.PUBLIC_URL}/logos/${logo}` : "";
}
export default function LandmarkLogo({ landmark }: LandmarkLogoProps) {
  const imgurl = logoURL(landmark.logo);
  if (!imgurl) {
    return null;
  }

  return <img src={imgurl} alt={landmark.name + " logo"} className="logo" />;
}
