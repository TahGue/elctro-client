import React, { useState } from "react";
import { useStateValue } from "../../providers/StateContext";
import { DISPLAY_FORM } from "../../providers/stateTypes";
import { ClickAway } from "../../ui/ClickAway";
import { Overlay } from "../../ui/Overlay";
import ForgetPassword from "./ForgetPassword";
import Login from "./login";
import SignUp from "./SignUp";

function Main() {
  const [currentPage, setCurrentPage] = useState("login");
  const [{ displayForm }, changeState] = useStateValue();
  return (
    <Overlay open={displayForm === "login"}>
      <ClickAway
        onClickAway={() =>
          changeState({
            type: DISPLAY_FORM,
            payload: "",
          })
        }
      >
        {currentPage === "login" && (
          <Login callbackUrl={""} setCurrentPage={setCurrentPage} />
        )}

        {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
        {currentPage === "forget" && (
          <ForgetPassword setCurrentPage={setCurrentPage} />
        )}
      </ClickAway>
    </Overlay>
  );
}

export default Main;
