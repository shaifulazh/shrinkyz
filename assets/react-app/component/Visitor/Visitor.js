import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

export default function Visitor() {
  const [data, setData] = useState(null);
  const [table, setTable] = useState(null);

  useEffect(() => {
    axios
      .get("api/admin/test/test")
      .then((res) => {
        setData(res.data);
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

      setTable({ Country: countCountry });
    } else if (target === "State") {
      const state = data.map((ind) => {
        return ind.state;
      });

      const cstate = countObjs(state);
      setTable({ State: cstate });
    } else if (target === "City") {
      const city = data.map((ind) => ind.city);
      const ccity = countObjs(city);
      setTable({ City: ccity });
    } else if (target === "IP") {
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
          defaultValue={{ label: 2002, value: 2002 }}
          onChange={selectOnChange}
        >
          <option value="Country">Country</option>
          <option value="State">State</option>
          <option value="City">City</option>
          <option value="IP">IP</option>
        </select>

        {table && (
          <div>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>{Object.keys(table)[0]}</th>
                  <th>Table</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {table[Object.keys(table)[0]].map((x, i) => {
                    return <th>{x[Object.keys(x)[i]]}</th>;
                  })}
                </tr>
              </tbody>
            </Table>
          </div>
        )}

        <div></div>
      </div>
    </div>
  );
}
