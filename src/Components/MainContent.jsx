import marker from "../assets/marker.png";

export default function Main(props) {
  return (
    <>
      <article>
        <img className="japan" src={props.img.src} alt={props.img.alt} />
        <div className="mn">
          <div className="text">
            <img className="marker" src = {marker} alt="location" />
            <p className="location">{props.country}</p>
            <a href={props.googleMapsLink} target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </div>
          <h2 className="location_name">{props.title}</h2>
          <h4 className="date">{props.dates}</h4>
          <p className="info">{props.text}</p>
        </div>
      </article>
    </>
  );
}
