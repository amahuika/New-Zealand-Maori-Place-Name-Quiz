import "./Map.css";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

const Map = (props) => {
  return (
    <Modal onHideMap={props.onClickHandle}>
      <div className="map-section">
        <div class="gmap_canvas">
          <iframe
            title="map"
            id="gmap_canvas"
            src={`https://maps.google.com/maps?q=${props.name},%20New%20Zealand&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>

        <div className="d-flex justify-content-between mt-2">
          <a
            href={`https://www.google.com/maps/place/${props.name},+New+Zealand`}
            className="btn btn-primary"
          >
            View on Google Maps
          </a>
          <Button class="btn-success px-3" onClickHandle={props.onClickHandle}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Map;
