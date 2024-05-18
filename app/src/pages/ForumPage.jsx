import "../styles/ForumPage.css";
import Button from "../widgets/Button/Button.jsx";
import { useState, useEffect } from "react";

export const ForumPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [passwordError, setPasswordError] = useState(
    "Password cannot be empty"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      default:
        console.log();
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Email incorrect");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 5 || e.target.value.length > 20) {
      setPasswordError("Password length must be in range [5;20]");
      if (!e.target.value) {
        setPasswordError("Password cannot be empty");
      }
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="page_wrapper">
      <h1>ForumPage</h1>
      <form className="form_wrapper">
        <label htmlFor="email" className="text_label">
          Email
        </label>
        {emailDirty && emailError && (
          <div style={{ color: "red" }}>{emailError}</div>
        )}
        <input
          onChange={(e) => emailHandler(e)}
          type="text"
          name="email"
          placeholder="Email..."
          className="text_input"
          value={email}
          onBlur={(e) => {
            blurHandler(e);
          }}
        />
        <label htmlFor="password" className="text_label">
          Password
        </label>
        {passwordDirty && passwordError && (
          <div style={{ color: "red" }}>{passwordError}</div>
        )}
        <input
          onChange={(e) => passwordHandler(e)}
          type="password"
          name="password"
          value={password}
          placeholder="Password..."
          className="text_input"
          onBlur={(e) => {
            blurHandler(e);
          }}
        />
        <Button disabled={!formValid} type="submit">
          Register!
        </Button>
      </form>
    </div>
  );
};
