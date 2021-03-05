import { Button } from "antd";
import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { app } from "../base";

export const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const RegisterUser = async () => {
    const newUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);

    await app.auth().currentUser.updateProfile({
      displayName: name,
    });
    // console.log(newUser);
  };

  const SignInUser = async () => {
    const newUser = await app
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(newUser);
  };

  return (
    <div>
      {toggle ? (
        <center
          style={{
            display: "flex",
            flexDirection: "column",
            // width: "500px",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "red",
          }}
        >
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            style={{
              width: "500px",
              height: "40px",
              margin: "10px",
            }}
          />

          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{
              width: "500px",
              height: "40px",
              margin: "10px",
            }}
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{
              width: "500px",
              height: "40px",
              margin: "10px",
            }}
          />

          <Button onClick={RegisterUser}>Register</Button>
          <br />
          <div
            style={{
              display: "flex",
            }}
          >
            <p>Already have an Account, please</p>
            <p
              style={{
                marginLeft: "5px",
                cursor: "pointer",
                color: "lightblue",
              }}
              onClick={handleToggle}
            >
              sign in here
            </p>
          </div>
        </center>
      ) : (
        <center
          style={{
            display: "flex",
            flexDirection: "column",
            // width: "500px",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "red",
          }}
        >
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{
              width: "500px",
              height: "40px",
              margin: "10px",
            }}
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{
              width: "500px",
              height: "40px",
              margin: "10px",
            }}
          />

          <Button onClick={SignInUser}>Sign in</Button>
          <br />
          <div
            style={{
              display: "flex",
            }}
          >
            <p>Don't have an Account, please</p>
            <p
              style={{
                marginLeft: "5px",
                cursor: "pointer",
                color: "lightblue",
              }}
              onClick={handleToggle}
            >
              Register in here
            </p>
          </div>
        </center>
      )}
    </div>
  );
};
