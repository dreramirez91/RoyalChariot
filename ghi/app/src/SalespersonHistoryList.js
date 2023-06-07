import React, { useState, useEffect } from "react";

function SalespersonHistoryList() {
  const [sales, setSales] = useState([]);
  const [salespeople, setSalespeople] = useState([]);
  const [filteredSales, setFilteredSales] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  async function fetchSales() {
    const response = await fetch("http://localhost:8090/api/sales/");
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setSales(data.sales);
    }
  }

  async function fetchSalespeople() {
    const response = await fetch("http://localhost:8090/api/salespeople/");
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setSalespeople(data.salespeople);
    }
  }

  useEffect(() => {
    fetchSales();
    fetchSalespeople();
  }, []);

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
    getFilteredSales(e.target.value);
  };

  const getFilteredSales = (e) => {
        const filtered = sales.filter((sale) => sale.salesperson.first_name === e)
      setFilteredSales(
        filtered
        );
    }

  return (
    <>
      <h1 style={{ marginTop: "10px" }}>Salesperson History</h1>
      <div className="mb-3">
        <select
          onChange={handleFilterChange}
          value={filterValue}
          required
          name="sale"
          className="form-select"
        >
          <option value="">Choose a salesperson</option>
          {salespeople.map((salesperson) => {
            return (
              <option
                key={salesperson.id}
                value={salesperson.first_name}
              >{`${salesperson.first_name} ${salesperson.last_name}`}</option>
            );
          })}
        </select>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Salesperson</th>
            <th scope="col">Customer</th>
            <th scope="col">VIN</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredSales.map((sale) => {
            return (
              <tr key={sale.id}>
                <td>
                  {" "}
                  {`${sale.salesperson.first_name} ${sale.salesperson.last_name}`}{" "}
                </td>
                <td>
                  {" "}
                  {`${sale.customer.first_name} ${sale.customer.last_name}`}{" "}
                </td>
                <td> {sale.automobile.vin}</td>
                <td> {sale.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default SalespersonHistoryList;
