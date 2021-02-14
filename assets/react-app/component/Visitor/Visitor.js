import axios from "axios";
import React, { useState, useEffect } from "react";
import { setDefaultLocale } from "react-datepicker";

export default function Visitor() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("api/admin/test/test")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);

  console.log(data);

  return <div>kambing</div>;
}
