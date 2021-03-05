import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return (
    <div>
      <center>Awesome Pick: {id} </center>
    </div>
  );
};

export default Details;

// <Route path="/login" exact component={Login} />
//           <Route path="/" exact component={Home} />
//           <Route path="/single" exact component={Single} />
//           <Route path="/details/:id" exact component={Details} />
//           <Route path="/gather" exact component={Gather} />
//           <Route path="/new/:id" exact component={PropsComp} />
