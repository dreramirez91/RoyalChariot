import carVid from "./assets/car.mp4"
import { NavLink } from "react-router-dom";
import * as Icons from "react-icons/fa"

function MainPage() {
  return (
    <div className='main'>
      <div style={{ position: 'absolute', top: '0', bottom: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6', zIndex: '-1' }} className='overlay'></div>
      <video src={carVid} autoPlay loop muted style={{ position: 'absolute', width: '100%', left: '50%', top: '50%', height: '100%', objectFit: 'cover', transform: 'translate(-50%, -50%)', zIndex: '-2' }} />
      <div className='container justify-content-center p-5 m-4'></div>
      <div className='col text-center p-5'>
        <h1 style={{ color: "white", textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "4px" }}>The Royal Chariot</h1>
        <div className='text-white text-center m-4 px-5'>
          <div className='text-center'>
            <p className='h3' style={{fontStyle:"italic"}}>
              Your premiere solution for automobile dealership management.
            </p>
          </div>
        </div>
      </div>

      <footer><hr style={{ color: "white" }} />© Copyright The Noble Carriage 2023. Registered Office: Miracle Lane, Aspen, Colorado, United States of America. Registered in USA: Number 843912</footer>
    </div>

  );

}


export default MainPage;
