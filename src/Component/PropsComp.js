import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { app } from "../base";

const db = app.firestore().collection("case");
const PropsComp = ({ title }) => {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState(null);

  const findData = async () => {
    const docRef = await db.doc(id);
    const docData = await docRef.get();
    setData(docData.data());
    console.log(data);
  };

  useEffect(() => {
    findData(id);
  }, []);

  return (
    <div>
      <center>Hello: {data && data.title}</center>
    </div>
  );
};

export default PropsComp;
