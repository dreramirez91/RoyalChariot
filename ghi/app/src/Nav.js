import { NavLink } from 'react-router-dom';
import * as Icons from "react-icons/fa"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar<Icons.FaCar style={{ marginLeft: '2px' }} /></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse">
          <ul className="navbar-nav mb-2 mb-lg-0 nav-fill w-100">
            <div className="dropdown">
              <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Inventory
              </button>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/manufacturers">Manufacturers</NavLink></li>
                <li><NavLink className="dropdown-item" to="/manufacturers/create">Create a Manufacturer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/models">Models</NavLink></li>
                <li><NavLink className="dropdown-item" to="/models/create">Create a Model</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobiles">Automobiles</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobiles/create">Create an Automobile</NavLink></li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sales
              </button>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/salesperson">Salespeople</NavLink></li>
                <li><NavLink className="dropdown-item" to="/salesperson/create">Add a Salesperson</NavLink></li>
                <li><NavLink className="dropdown-item" to="/customer">Customers</NavLink></li>
                <li><NavLink className="dropdown-item" to="/customer/create">Add a Customer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/saleslist">Sales</NavLink></li>
                <li><NavLink className="dropdown-item" to="/newsale/create">Add a sale</NavLink></li>
                <li><NavLink className="dropdown-item" to="/salespersonhistory">Salesperson History</NavLink></li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
              </button>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/appointments">Appointment List</NavLink></li>
                <li><NavLink className="dropdown-item" to="/appointments/create">Make an Appointment</NavLink></li>
                <li><NavLink className="dropdown-item" to="/appointments/history">Service History</NavLink></li>
                <li><NavLink className="dropdown-item" to="/technicians">Technicians List</NavLink></li>
                <li><NavLink className="dropdown-item" to="/technicians/create">Add a technician</NavLink></li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav >
  )
}

export default Nav;
