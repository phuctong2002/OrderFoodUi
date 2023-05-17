import { Link, Navigate } from "react-router-dom";
import bgLogin from "./../../assets/images/bgLogin.png";
import logo from "./../../assets/images/logo.png";
import {
  LinkedinOutlined,
  InstagramOutlined,
  GoogleOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import Checkbox from "antd/lib/checkbox/Checkbox";
import axios from "axios";
import { useAppContext } from "../../context/appContext";
const SignUpPage = () => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const phone = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();
  const checkBox = useRef();

  const navigate = useNavigate();

  const {setUser} = useAppContext();
  const onChange = (e) => e.target.checked;
  // const onChange = (e) => {
  //   // console.log(`checked = ${e.target.checked}`);
  //   console.log( typeof( e.target.checked));
  //   return e.target.checked;
  // };
  const signUp = ()=>{
    // console.log( checkBox.current.state.checked);
    const firstNameValue = firstName.current.value;
    const lastNameValue = lastName.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const passwordConfirmationValue = passwordConfirmation.current.value;
    const phoneValue = phone.current.value;
    if( passwordValue === passwordConfirmationValue){
      if( firstNameValue && lastNameValue && emailValue && passwordValue && phoneValue){
        // call api nhe anh em
        axios.post("/api/v1/user/register", {
          "firstName": firstNameValue,
          "lastName": lastNameValue,
          "email": emailValue,
          "phone": phoneValue,
          "password": passwordValue,
        }).then( (res)=>{
          // console.log( res.status);
          // console.log( res.data);
          setUser({
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            phone: res.data.phone,
            email: res.data.email,
            token: res.data.token
          });
          navigate("/");
        })
        .catch( (error)=>{
          console.log( error.response.status);
        })




      }else{
        console.log("Please fill all the fields");
      }
    }else{
      console.log("pass khong trung nhau");
    }




  }


  const goHome = ()=>{
    navigate("/");
  }
  return (
    <div className="flex">
      <div className="h-screen w-2/5 ">
        <img src={logo} className="h-[120px] w-[200px] ml-[20px] cursor-pointer" onClick={goHome}></img>
        <div className="w-[480px]  mr-[auto] ml-[auto]">
          <h1 className="text-center text-[36px] m-[0px]">Sign Up</h1>
          <p className="text-[#9c9e99]">Stay in to stay connected</p>
          <div className="flex justify-between">
            <div>
              <h1 className="text-left text-[#9c9e99]">First Name</h1>
              <input
                ref={firstName}
                type="text"
                className="pl-[10px] h-[28px] w-[200px] rounded-[14px] border-2 border-solid border-[#ea6e11]"
              />
            </div>
            <div>
              <h1 className="text-left text-[#9c9e99]">Last Name</h1>
              <input
                ref={lastName}
                type="text"
                className="pl-[10px] h-[28px] w-[200px] rounded-[14px] border-2 border-solid border-[#ea6e11]"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-left text-[#9c9e99]">Email</h1>
              <input
                ref={email}
                type="text"
                className="pl-[10px] h-[28px] w-[200px] rounded-[14px] border-2 border-solid border-[#ea6e11]"
              />
            </div>
            <div>
              <h1 className="text-left text-[#9c9e99]">Phone No</h1>
              <input
                ref={phone}
                type="text"
                className="pl-[10px] h-[28px] w-[200px] rounded-[14px] border-2 border-solid border-[#ea6e11]"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-left text-[#9c9e99]">Password</h1>
              <input
                ref={password}
                type="password"
                className="h-[28px] w-[200px] rounded-[14px] border-2 border-solid border-[#ea6e11] pl-[10px]"
              />
            </div>
            <div>
              <h1 className="text-left text-[#9c9e99]">Confirm password</h1>
              <input
                ref={passwordConfirmation}
                type="password"
                className="pl-[10px] h-[28px] w-[200px] rounded-[14px] border-2 border-solid border-[#ea6e11]"
              />
            </div>
          </div>
          <p className="mt-[20px]">
            <Checkbox ref={checkBox} onChange={onChange}>
              {" "}
              I agree with the terms of use
            </Checkbox>
          </p>
          <button className="bg-[#ea6e11] h-[36px] w-[160px] rounded-[18px] mb-[20px]" onClick={signUp}>
            Sign up
          </button>
          <p className="mb-[10px]">or sign in with other acccounts</p>
          <div className="list-icon text-[30px] flex justify-center">
            <FacebookOutlined className="px-[10px]" />
            <GoogleOutlined className="px-[10px]" />
            <InstagramOutlined className="px-[10px]" />
            <LinkedinOutlined className="px-[10px]" />
          </div>

          <div className="flex justify-center mt-[20px]">
            <p>Already have account </p>
            <p className="text-[#ea6e11] pl-[4px]"><Link to="/login">Sign in</Link></p>
          </div>
        </div>
      </div>
      <div
        className="h-screen w-3/5 bg-cover"
        style={{ backgroundImage: `url(${bgLogin})` }}
      ></div>
    </div>
  );
};

export default SignUpPage;
