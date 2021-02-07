import React, { useState, useEffect } from "react";

export default function MobileUpload() {
  const [name, setName] = useState("Kambing");
  const [count, setCount] = useState(0);
  //is like component did mount
  useEffect(() => {
    document.title = `You hava click ${count}`;
  }, [count]);
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const haha = () => {
    async function f() {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000);
      });

      let result = await promise; // wait until the promise resolves (*)

      alert(result); // "done!"
    }

    f();
  };

  const handleClickCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div className="container-xl">
        <div className="dialog">
          <label>{name}</label>
          <input value={name} type="text" onChange={handleChange} />
          <button onClick={handleClickCount}>click</button>
          
        </div>
      </div>
    </div>
  );
}
