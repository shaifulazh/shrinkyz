import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

export default function Visitor() {
  const [data, setData] = useState(null);
  const [table, setTable] = useState(null);
  const [dataname, setDataname] = useState(null);

  useEffect(() => {
    axios
      .get("api/admin/test/test")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  function countObjs(arr) {
    // So the object doesn't inherit from Object.prototype and avoids property
    // name collisions
    var obj = Object.create(null);
    arr.forEach(function (item) {
      if (obj[item]) {
        obj[item]++;
      } else {
        obj[item] = 1;
      }
    });
    return obj;
  }

  const selectOnChange = (e) => {
    const target = e.target.value;
    if (target === "Country") {
      const country = data.map((ind) => {
        return ind.Country;
      });
      const countCountry = countObjs(country);
      setDataname("Country")
      setTable(countCountry);
    } else if (target === "State") {
      const state = data.map((ind) => {
        return ind.state;
      });

      const cstate = countObjs(state);
      setDataname("State")
      setTable(cstate);
    } else if (target === "City") {
      const city = data.map((ind) => ind.city);
      const ccity = countObjs(city);
      setDataname("City")
      setTable(ccity);
    } else if (target === "IP") {
      const ips = data.map(dat=>dat.ip)
      const ipd = countObjs(ips);
      setDataname("IP")
      setTable(ipd)
    }
  };

  if (data) {
    const state = data.map((ind) => {
      return ind.state;
    });
    const Country = data.map((ind) => {
      return ind.Country;
    });
    const visit = countObjs(state);
    const singledata = data[0];
    const name = Object.getOwnPropertyNames(singledata);
    console.log("name", name);
  }

  console.log(table);


  


  return (
    <div className="container">
      <div className="mt-3">
        {data && <h3>Total Visitor : {data.length}</h3>}

        <select
          className="mb-2"
          onChange={selectOnChange}
        >
           <option value=""  defaultValue>Please select an Option</option>
          <option value="Country">Country</option>
          <option value="State">State</option>
          <option value="City">City</option>
          <option value="IP">IP</option>
        </select>
        <br/>

        {table && dataname && (
          <div>
            <Table striped bordered hover size="sm"  >
              <thead>
                <tr>
                  <th>{dataname}</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                
                  {Object.getOwnPropertyNames(table).map((x, i)=> {
                     return( <tr key={i}>
                       <td>{x}</td><td>{table[x]}</td> 
                      </tr>)
                  })}
                
              </tbody>
            </Table>
            
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
}
