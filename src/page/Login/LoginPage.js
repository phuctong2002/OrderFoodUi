import { Link } from "react-router-dom";
import bgLogin from "./../../assets/images/bgLogin.png";
import logo from "./../../assets/images/logo.png";
import {
  LinkedinOutlined,
  InstagramOutlined,
  GoogleOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

import { useRef } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import Checkbox from "antd/lib/checkbox/Checkbox";
import { useAppContext } from "../../context/appContext";
const LoginPage = () => {
  const {setUser} = useAppContext();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const onChange = (e) => {
    // console.log(`checked = ${e.target.checked}`);
  };

  const login = async()=>{
    try{
      const response = await axios.post( "/api/v1/user/login", {
        email: email.current.value,
        password: password.current.value,
      })
      // set data in context nhe anh em
      setUser( response.data);
      navigate("/");
    }catch(error){

    }


  }

  const goHome = ()=>{
    navigate("/");
  }

  return (
    <div className="flex">
      <div className="h-screen w-2/5 ">
        <img src={logo} className="h-[120px] w-[200px] ml-[20px] cursor-pointer" onClick={goHome}></img>
        <div className="w-[360px]  mr-[auto] ml-[auto] ">
          <h1 className="text-center text-[36px] m-[0px]">Sign In</h1>
          <p className="text-[#9c9e99]"></p>
          <div className="h-[80px]">
            <h2 className="text-left text-[#9c9e99] mt-[20px]">Email</h2>
            <input
              ref={email}
              type="text"
              className="text-left block h-[36px] w-[350px] rounded-[18px] pl-[18px] border-2 border-solid border-[#ea6e11]"
            />
          </div>
          <div className="h-[80px]">
            <h2 className="text-left text-[#9c9e99] mt-[20px]">Password</h2>
            <input
              ref={password}
              type="password"
              className="text-left block h-[36px] w-[350px] rounded-[18px] pl-[18px] border-2 border-solid border-[#ea6e11]"
            />
          </div>

          <div className="flex justify-between mt-[16px]">
            <p className="text-[#9c9e99]">
              {" "}
              <Checkbox onChange={onChange}>Remember me</Checkbox>
            </p>
            <p>Forgot Password</p>
          </div>
          <button className="bg-[#ea6e11] h-[36px] w-[160px] rounded-[18px] mb-[20px]" onClick={login}>
            Sign in
          </button>
          <p className="mb-[10px]">or sign in with other acccounts</p>
          <div className="list-icon text-[30px] flex justify-center">
            <FacebookOutlined className="px-[10px]" />
            <GoogleOutlined className="px-[10px]" />
            <InstagramOutlined className="px-[10px]" />
            <LinkedinOutlined className="px-[10px]" />
          </div>
          <div className="flex justify-center mt-[20px]">
            <p>Don't have an account?</p>
            <p className="text-[#ea6e11]"><Link to="/register">Click here to sign up</Link></p>
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

export default LoginPage;
