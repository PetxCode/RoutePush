import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { app } from "../base";

const db = app.firestore().collection("studies");
const DetailScreen = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const getData = async () => {
    const docRef = await db.doc(id);
    const docData = await docRef.get();

    setData(docData.data());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <center>this is super Awesome</center>
      <div> Here is the ID: {data && data.title} </div>
    </div>
  );
};

export default DetailScreen;
