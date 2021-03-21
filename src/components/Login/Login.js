import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  // React form hook
  const { register, errors, handleSubmit, watch } = useForm({
    mode: "onBlur",
  });
  const [newUser, setNewUser] = useState(true);
  // User state 
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    message: false,
    error: "",
  });

  const password = useRef({});
  password.current = watch("password", "");

  // User create using Email and password authentication signup method
  const onSubmit = (data) => {
    setUser(data);
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          const newUser = { ...user };
          newUser.message = true;
          newUser.error = "";
          setUser(newUser);
        })
        .catch((error) => {
          var errorMessage = error.message;
          const newUser = { ...user };
          newUser.message = false;
          newUser.error = errorMessage;
          setUser(newUser);
        });
    }
    // Sign in method with Email and password
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          // Signed in
          // var user = userCredential.user;
          const newUser = { ...user };
          newUser.message = true;
          newUser.error = "";
          setUser(newUser);
          setLoggedInUser(newUser);
          history.replace(from);
          // ...
        })
        .catch((error) => {
          var errorMessage = error.message;
          const newUser = { ...user };
          newUser.message = false;
          newUser.error = errorMessage;
          setUser(newUser);
        });
    }
  };
  //Google Sign in
  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };
  return (
    <div>
      <form className="form-style" onBlur={handleSubmit(onSubmit)}>
        <h4>{newUser ? "Create an account" : "Log in"}</h4>
        {newUser && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            ref={register({ required: true, maxLength: 20 })}
          />
        )}
        {errors.name && <p>Name is required</p>}

        <input
          type="text"
          name="email"
          placeholder="Email"
          ref={register({
            required: true,
            maxLength: 20,
            pattern: /\S+@\S+\.\S+/,
          })}
        />
        {errors.email && <p>Email is required</p>}

        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={register({
            required: "You must specify a password",
            pattern: {
              pattern: /\d{1}/,
              message: "Password must have at least 1 number",
            },
            minLength: {
              value: 6,
              message: "Password must have at least 6 characters",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        {newUser && (
          <input
            name="password_repeat"
            type="password"
            placeholder="Confirm Password"
            ref={register({
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />
        )}
        {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

        <input
          type="submit"
          onClick={handleSubmit(onSubmit)}
          value={newUser ? "Create an account" : "Log in"}
        />
        {newUser ? (
          <h6 className="text-center my-2">
            Already have an account?
            <span
              className="altr-btn"
              onClick={() => setNewUser(!newUser)}
              style={{ color: "salmon" }}
            >
              {" "}
              Login
            </span>
          </h6>
        ) : (
          <h6 className="text-center my-2">
            Do not have any account?
            <span
              className="altr-btn"
              onClick={() => setNewUser(!newUser)}
              style={{ color: "salmon" }}
            >
              {" "}
              Create an account
            </span>
          </h6>
        )}
        <h6 className="text-center" style={{ color: "red" }}>
          {user.error}
        </h6>
        {user.message && (
          <h6 className="text-center" style={{ color: "green" }}>
            {" "}
            User {newUser ? "created" : "logged in"} successfully{" "}
          </h6>
        )}
      </form>
      <h4 className="text-center">You can also</h4>

      <button onClick={handleGoogleSignIn} className="google-button">
        <div className="d-flex justify-content-between ">
          <div>
            <FontAwesomeIcon icon={faGoogle} />
          </div>{" "}
          <div> Continue with Google</div>
        </div>
      </button>
    </div>
  );
};

export default Login;
