import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../base";
import DetailScreenModal from "./DetailScreenModal";
import img from "./img/img.jpg";
import { v4 as uuid } from "uuid";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getData = async () => {
    await app
      .firestore()
      .collection("studies")
      .onSnapshot((snapshot) => {
        const item = [];
        snapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setData(item);
        // console.log(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <center>This is Home Page</center>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {data.map(
          ({ details, id, title, desc, avatar, img1, img2, paragraph }) => (
            <div
              key={id}
              style={{
                width: "300px",
                // backgroundColor: "dodgerblue",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid dodgerblue",
                borderRadius: "5px",
                marginLeft: "10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "150px",
                  backgroundColor: "lightgray",
                }}
              >
                <img
                  src={img1}
                  alt="img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "5px 5px 0px 0px",
                  }}
                />
              </div>
              <Link to={`/detail/${id}`}>
                <img
                  src={avatar}
                  alt="img"
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    position: "relative",
                    bottom: "50px",
                    left: "10px",
                    border: "5px solid dodgerblue",
                    backgroundColor: "red",
                    marginBottom: "-50px",
                  }}
                />
              </Link>
              <h2
                style={{
                  width: "100%",
                  display: "flex",
                  padding: "10px",
                }}
              >
                {details}
              </h2>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  padding: "10px",
                }}
              >
                {desc}
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  padding: "10px",
                }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat
              </div>

              {open ? (
                <DetailScreenModal
                  id={id}
                  title={title}
                  details={details}
                  desc={desc}
                  paragraph={paragraph}
                  avatar={avatar}
                  img1={img1}
                  img2={img2}
                />
              ) : null}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HomeScreen;

// <Button
//                 style={{
//                   width: "150px",
//                   height: "40px",
//                   marginBottom: "20px",
//                   marginLeft: "10px",
//                 }}
//                 onClick={(id) => {
//                   setOpen(true);
//                   console.log(open);
//                   console.log("what are you saying");
//                 }}
//               >
//                 <Link onClick={handleOpen}>Read More</Link>
//               </Button>
