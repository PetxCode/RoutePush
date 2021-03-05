import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { app } from "../base";
// import

const db = app.firestore().collection("case");
const Gather = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await db.onSnapshot((snapshot) => {
      const item = [];
      snapshot.forEach((doc) => {
        item.push({ ...doc.data(), id: doc.id });
      });
      setData(item);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data.map(({ title, details, desc, id }) => (
        <div key={id}>
          <h2>
            <Button>
              <Link to={`/new/${id}`}>{title}</Link>
            </Button>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Gather;
