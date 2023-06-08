import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse">
          <ul className="navbar-nav mb-2 mb-lg-0 nav-fill w-70">
            <select className="dropdown mr-2" onChange={event => window.location.href = event.target.value}>
              <option className="nav-item" value="">Inventory</option>
              <option className="nav-item" value="/manufacturers">Manufacturers</option>
              <option className="nav-item" value="/manufacturers/create">Create a Manufacturer</option>
              <option className="nav-item" value="/models">Models</option>
              <option className="nav-item" value="/models/create">Create a Model</option>
              <option className="nav-item" value="/automobiles">Automobiles</option>
              <option className="nav-item" value="/automobiles/create">Create an Automobile</option>
            </select>
            <select className="nav-item" onChange={event => window.location.href = event.target.value}>
              <option value="">Sales</option>
              <option className="nav-item" value="/salesperson">Salespeople</option>
              <option className="nav-item" value="/salesperson/create">Add a Salesperson</option>
              <option className="nav-item" value="/customer">Customers</option>
              <option className="nav-item" value="/customer/create">Add a Customer</option>
              <option className="nav-item" value="/saleslist">Sales</option>
              <option className="nav-item" value="/newsale/create">Add a sale</option>
              <option className="nav-item" value="/salespersonhistory">Salesperson History</option>
            </select>
            <select className="nav-item" onChange={event => window.location.href = event.target.value}>
              <option className="nav-item" value="">Service</option>
              <option className="nav-item" value="/appointments">Appointment List</option>
              <option className="nav-item" value="/appointments/create">Make an Appointment</option>
              <option className="nav-item" value="/appointments/history">Service History</option>
              <option className="nav-item" value="/technicians">Technicians List</option>
              <option className="nav-item" value="/technicians/create">Add a technician</option>
            </select>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
