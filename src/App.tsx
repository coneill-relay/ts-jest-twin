import React from "react";
import ReactDOM from "react-dom";
import {Button} from "./component";

ReactDOM.render(
  <Button isSmall={false} variant="primary">click me</Button>, 
  document.getElementById("app"));