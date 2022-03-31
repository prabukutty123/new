import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const input = {
  width: " 100%",
  padding: "12px 20px",
  margin: "8px 0",
  display: "inline-block",
  border: "1px solid #ccc",
  borderRradius: " 4px",
  boxSizing: "border-box",
};
const container = {
  borderRradius: "5px",
  backgroundColor: "#f2f2f2",
  padding: " 20px",
};

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // User Login info
  const database = [
    {
      user: "user1",
      password: "pass1",
    },
    {
      admin: "user2",
      adminpass: "pass2",
    },
    {
      sadmin: "user3",
      sadminpassword: "pass3",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload

    var { uname, pass } = document.forms[0];

    // Find user login info
    // const user=database.map((user)=>{
    //   return (user)
    // })

    // const found =user.find(element=>element.length)
    // console.log(found);
    const userData = database.find(
      (user) => user.admin === uname.value || user.user === uname.value || user.sadmin === uname.value
    );

    console.log(userData);
    const name = Object.values(userData)[0];

    // Compare user infouser
    if (userData) {
      if (userData.adminpass !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        dispatch({ type: "LOGIN", payload: userData });
        history.push("/Admin");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }

    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        dispatch({ type: "LOGIN", payload: userData });
        history.push("/User");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }

    if (userData) {
      if (userData.sadminpassword !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        dispatch({ type: "LOGIN", payload: userData });
        history.push("/SuperAdmin");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    event.preventDefault();
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && <div className="error">{errorMessages.message}</div>;
  console.log(isSubmitted);
  // JSX code for login form
  return (
    <div className="form" style={container}>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" style={input} placeholder="Username" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" style={input} placeholder="Password" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
export default Login;
