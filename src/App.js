import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home";
import { Login } from "./Component/Login";
import "antd/dist/antd.css";
import PropsComp from "./Component/PropsComp";
// import { userRef } from "./base";
import { app } from "./base";
import Gather from "./Component/Gather";
import Single from "./Component/NavIn/Single";
import Details from "./Component/NavIn/Details";
import HomeScreen from "./ClassFile/HomeScreen";
import DetailScreenModal from "./ClassFile/DetailScreenModal";
import DetailScreen from "./ClassFile/DetailScreen";

// const refUser = app.firestore().collection("newUser");
function App() {
  // useEffect(() => {
  //   function callFunct() {
  //     refUser.doc().set({
  //       email: "peter@test.com",
  //       password: "1234567890",
  //     });
  //     console.log("added new user");
  //   }

  //   callFunct();
  // }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />

          <Route exact path="/detail/:id" component={DetailScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
