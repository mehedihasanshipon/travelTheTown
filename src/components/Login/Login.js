import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

  const [user,setUser] = useState({
      name:'',
      email:'',
      password:''
  })  
  console.log('SetUser',user);
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async (data) => {
    console.log(data);
    setUser(data);
    if(user.email && user.password){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage);
            // ..
        });
    }
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h4>Create an account</h4>  
        <input type="text" name="name" placeholder="Name" ref={register({ required: true, maxLength: 20 })}/>
        {errors.name && <p>Name is required</p>}

        <input type="text" name="email" placeholder="Email" ref={register({ required: true, maxLength: 20,pattern:/\S+@\S+\.\S+/ })}/>
        {errors.email && <p>Email is required</p>}
        
        <input
          name="password"
          type="password"
          placeholder="Password" 
          ref={register({
            required: "You must specify a password",
            pattern:{
               pattern: /\d{1}/,
               message: "Password must have at least 1 number",
            },
            minLength: {
              value: 6,
              message: "Password must have at least 8 characters",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        {/* {errors.password && <p>{errors.pattern.message}</p>} */}

        <input
          name="password_repeat"
          type="password"
          placeholder="Comfirm Password" 
          ref={register({
            validate: (value) =>
              value === password.current || "The passwords do not match",
          })}
        />
        {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
        <input type="submit" onClick={handleSubmit(onSubmit)} />
        <h6 className="text-center my-2">Already have an account?<span style={{color:'salmon'}}>Login</span></h6>
      </form>
   
    </div>
  );
};

export default Login;
