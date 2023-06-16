import * as Icons from "react-icons/fa"
import carVid from "./assets/car.mp4"

function MainPage() {
  return (
    <div className='main'>
      <div style={{position: 'absolute', top: '0',bottom: '0',width: '100%', height: '100%',backgroundColor: 'rgba(0,0,0,0.6',zIndex: '-1'}} className='overlay'></div>
      <video src={carVid} autoPlay loop muted style={{position: 'absolute', width: '100%', left: '50%', top: '50%', height: '100%', objectFit: 'cover', transform: 'translate(-50%, -50%)', zIndex: '-2'}} />
      <div className='container justify-content-center p-5 m-4'></div>
      <div className='col text-center p-5'>
      <h1 style={{color: "white"}}>CarCar<Icons.FaCar style={{ fontSize: "30px", marginLeft: '2px' }} /></h1>
      <div className='text-white text-center m-4 px-5'>
          <div className='text-center'>
            <p className='h3'>
              The premiere solution for automobile dealership management.
            </p>
        </div>
      </div>
      </div>
    </div>
  );
}


export default MainPage;
