import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './ManufacturerList';
import ModelList from './ModelList';
import AutomobileList from './AutomobileList';
import ManufacturerForm from './ManufacturerForm';
import ModelForm from './ModelForm';
import AutomobileForm from './AutomobileForm';
import TechnicianList from './TechnicianList';
import TechnicianForm from './TechnicianForm';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import ServiceHistoryList from './ServiceHistoryList';
import SalespersonForm from './SalespersonForm';
import SalespersonList from './SalespersonList';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import NewSaleForm from './NewSaleForm';
import SalesList from './SalesList';
import SalespersonHistoryList from './SalespersonHistoryList';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" element={<ManufacturerList />} />
          <Route path="/manufacturers/create" element={<ManufacturerForm />} />
          <Route path="/models" element={<ModelList />} />
          <Route path="/models/create" element={<ModelForm />} />
          <Route path="/automobiles" element={<AutomobileList />} />
          <Route path="/automobiles/create" element={<AutomobileForm />} />
          <Route path="/technicians" element={<TechnicianList />} />
          <Route path="/technicians/create" element={<TechnicianForm />} />
          <Route path="/salesperson" element={<SalespersonList />} />
          <Route path="/salesperson/create" element={<SalespersonForm />} />
          <Route path="/customer" element={<CustomerList />} />
          <Route path="/customer/create" element={<CustomerForm />} />
          <Route path="/saleslist" element={<SalesList />} />
          <Route path="/newsale/create" element={<NewSaleForm />} />
          <Route path="/salespersonhistory" element={<SalespersonHistoryList />} />
          <Route path="/appointments/" element={<AppointmentList />} />
          <Route path="/appointments/create" element={<AppointmentForm />} />
          <Route path="/appointments/history" element={<ServiceHistoryList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
