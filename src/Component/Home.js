import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { app } from "../base";

const userRef = app.firestore().collection("users");
const realData = app.database().ref("user");
const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [dob, setDob] = useState("");

  const getUsers = () => {
    const res = userRef
      .doc()
      .set({
        email: email,
        password: password,
      })
      .then(() => {})
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // getUsers();
  }, []);

  const RegisterUser = async () => {
    const res = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(res.user.uid);
    await userRef.doc(res.user.uid).set({
      email,
      password,
      name,
      dob,
      contact,
    });
  };

  const logInUser = async () => {
    const res = await app.auth().signInWithEmailAndPassword(email, password);
    console.log(res.user.uid);
  };

  return (
    <div>
      <Header
        style={{
          color: "white",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          onClick={() => {}}
          style={{
            cursor: "pointer",
          }}
        >
          Logo
        </div>
        <div
          style={{
            cursor: "pointer",
          }}
        >
          Sign Up
        </div>
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            app
              .auth()
              .signOut()
              .then(() => {
                console.log("sign out successfully");
              })
              .catch((err) => console.log(err));
          }}
        >
          Sign Out
        </div>
      </Header>
      <center>Awsome</center>
      <center>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <input
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          placeholder="contact"
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />

        <input
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />

        <Button
          onClick={() => {
            logInUser();
            console.log("created data");
          }}
        >
          Sign In
        </Button>
        <Button
          onClick={() => {
            RegisterUser();
            console.log("created data");
          }}
        >
          Register
        </Button>
      </center>
    </div>
  );
};

export default Home;
