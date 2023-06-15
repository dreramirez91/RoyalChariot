import { Link } from 'react-router-dom';
import * as Icons from "react-icons/fa"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">CarCar<Icons.FaCar style={{ marginLeft: '2px' }} /></Link>
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
                <li><Link className="dropdown-item" to="/manufacturers">Manufacturers</Link></li>
                <li><Link className="dropdown-item" to="/manufacturers/create">Create a Manufacturer</Link></li>
                <li><Link className="dropdown-item" to="/models">Models</Link></li>
                <li><Link className="dropdown-item" to="/models/create">Create a Model</Link></li>
                <li><Link className="dropdown-item" to="/automobiles">Automobiles</Link></li>
                <li><Link className="dropdown-item" to="/automobiles/create">Create an Automobile</Link></li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sales
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/salesperson">Salespeople</Link></li>
                <li><Link className="dropdown-item" to="/salesperson/create">Add a Salesperson</Link></li>
                <li><Link className="dropdown-item" to="/customer">Customers</Link></li>
                <li><Link className="dropdown-item" to="/customer/create">Add a Customer</Link></li>
                <li><Link className="dropdown-item" to="/saleslist">Sales</Link></li>
                <li><Link className="dropdown-item" to="/newsale/create">Add a sale</Link></li>
                <li><Link className="dropdown-item" to="/salespersonhistory">Salesperson History</Link></li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/appointments">Appointment List</Link></li>
                <li><Link className="dropdown-item" to="/appointments/create">Add an Appointment</Link></li>
                <li><Link className="dropdown-item" to="/appointments/history">Service History</Link></li>
                <li><Link className="dropdown-item" to="/technicians">Technicians List</Link></li>
                <li><Link className="dropdown-item" to="/technicians/create">Add a technician</Link></li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav >
  )
}

export default Nav;
