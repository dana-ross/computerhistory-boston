import Landmark from "./Landmark";

interface LandmarkLogoProps {
  landmark: Landmark
  className?: string
}

function logoURL(logo: string) {
  return logo && logo.length ? `/logos/${logo}` : "";
}
export default function LandmarkLogo({ landmark, className }: LandmarkLogoProps) {
  const imgurl = logoURL(landmark.logo);
  className += " logo mb-4";
  if (!imgurl) {
    return null;
  }

  return <img src={imgurl} alt={landmark.name} className={className} />;
}
