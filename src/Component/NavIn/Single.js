import { Button } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../../base";

const db = app.firestore().collection("case");

const Single = () => {
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
      <center>Awesome</center>
      {data.map(({ id, title, details, desc }) => (
        <div key={id}>
          <Button>
            <Link to={`/details/${id}`}>{title}</Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Single;
