import * as Icons from "react-icons/fa"
import { NavLink } from "react-router-dom"
import carBG from "./assets/car.mp4"

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
      <div className="video">
        <video src={carBG} autoPlay loop muted />
      </div>
      <iframe style={{ width: "100%", height: "300" }} scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1105429429&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
        <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: '100'}} >
          <NavLink to="https://soundcloud.com/slanderofficial" title="SLANDER" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>SLANDER</NavLink>
          <NavLink to="https://soundcloud.com/slanderofficial/slander-dylan-matthew-r3hab" title="Love Is Gone ft. Dylan Matthew (R3HAB Remix)" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Love Is Gone ft. Dylan Matthew R3HAB Remix</NavLink>
          </div >
    </div >
  );
}

export default MainPage;
