import * as Icons from "react-icons/fa"
import carVid from "./assets/pexels-taryn-elliott-5309381-1920x1080-25fps.mp4"

function MainPage() {

  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">CarCar<Icons.FaCar style={{ marginLeft: '2px' }} /></h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          The premiere solution for automobile dealership
          management!
        </p>
      </div>
      <video src={carVid} autoPlay loop muted width="100%" />
    </div >
  );
}

export default MainPage;
