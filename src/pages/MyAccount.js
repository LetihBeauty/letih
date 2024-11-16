import React from "react";
import "./MyAccount.css";
import Btn from "../components/Btn";

const MyAccount = () => {
  return (
    <div className="myAccount-container">
      <div className="green-box">
        <div className="content">
          <h1>WELCOME TO LETIH BEAUTY</h1>
          <p>
            Add your name and last name to have access to your treatment or
            procedure informations
          </p>
          <p id="input-description">First name and last name</p>
          <form className="form" action="submit">
            <input type="text" placeholder="" />
            <Btn customButtonClass="white">Log in</Btn>
          </form>
        </div>
      </div>
    </div>
  );
};
export default MyAccount;
