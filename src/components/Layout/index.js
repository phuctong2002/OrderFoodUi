import {
  AppstoreOutlined,
  BellOutlined,
  SearchOutlined,
  UserOutlined,
  MailOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faNewspaper,
  faFile,
  faSignOut,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {faUser} from "@fortawesome/free-regular-svg-icons"
import { Input, Col, Row } from "antd";
import logo from "../../assets/images/logo.png";
import style from "../../assets/css/home.module.css";
import { useAppContext } from "../../context/appContext";

export default function DefaultLayout({ children }) {
  const {logoutUser} = useAppContext();  
  const userMail = localStorage.getItem("mail");
  const navigate = useNavigate();
  const user = useRef();
  const list = useRef();
  const onChangeFunc = (e) => {
    // console.log(e.target.value);
  };
  const onPressEnter = async (e) => {
    // console.log(e.target.value);
    e.target.value = "";
  };
  const signOutHandle = ()=>{
    logoutUser();
    navigate("/login");
  }
  const profileHandle = ()=>{
    navigate("/detail-profile");
  }
  const userHandle = (e)=>{
    
    if( list.current.style.display == "none" ){
      list.current.style.display = "block"
    }else{
      list.current.style.display = "none";
    }
  }
  useEffect( ()=>{
    const handleClick = (event)=>{
      if( user.current.contains(event.target) === false){
        list.current.style.display = "none";
      }
    }
    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener('click', handleClick);
    };
  },[]);

  return (
    <div className="flex flex-row">
      <div className="w-[240px] h-screen">
        <div className="h-[80px] flex justify-center">
          <img src={logo} className="h-[80px] block w-[80px]" />
        </div>
        <div className="mx-[20px] my-[3px] h-[2px] bg-[#CAD9DE]"></div>
        <div className="dashboard text-left pl-[40px] mt-[20px]">
          {/* <p>Home</p> */}
        </div>
        {/* <div className="mx-[40px] my-[3px] h-[1px] bg-[#CAD9DE]"></div> */}
        <div className="text-left  mt-[20px] box-border">
          <div className="pl-[40px] leading-[60px] hover:cursor-default hover:bg-[#5ac3de] flex items-center mt-[24px] " onClick={ ()=> navigate("/")}>
            <AppstoreOutlined className="text-[20px] mr-[24px] text-[red]" />
            <p className="m-[0px]">Home</p>
          </div>
          <div className="pl-[40px] leading-[60px] hover:cursor-default hover:bg-[#5ac3de] flex items-center mt-[24px] " onClick={ ()=> navigate("/")}>
          <FontAwesomeIcon
              className="text-[20px]  mr-[24px] w-[20px]"
              icon={faFile}
            />
            <p className="m-[0px]">Review</p>
          </div>
          <div className="pl-[40px] leading-[60px] hover:cursor-default hover:bg-[#5ac3de] flex items-center mt-[24px] " onClick={ ()=> navigate("/")}>
          <FontAwesomeIcon
              className="text-[20px] mr-[24px] w-[20px]"
              icon={faNewspaper}
            />
            <p className="m-[0px]">News</p>
          </div>
          <div className="pl-[40px] leading-[60px] hover:cursor-default hover:bg-[#5ac3de] flex items-center mt-[24px] " onClick={ ()=> navigate("/")}>
          <FontAwesomeIcon
              className="text-[20px] mr-[24px] w-[20px]"
              icon={faFile}
            />
            <p className="m-[0px]">Sale</p>
          </div>
          <div className="pl-[40px] leading-[60px] hover:cursor-default hover:bg-[#5ac3de] flex items-center mt-[24px] " onClick={ ()=> navigate("/")}>
          <FontAwesomeIcon
              className="text-[20px] mr-[24px] w-[20px]"
              icon={faLocationDot}
            />
            <p className="m-[0px]">Location</p>
          </div>
          <div className="pl-[40px] leading-[60px] hover:cursor-default hover:bg-[#5ac3de] flex items-center mt-[24px] " onClick={ ()=> navigate("/admin/order")}>
          <FontAwesomeIcon
              className="text-[20px] mr-[24px] w-[20px]"
              icon={faUserShield}
            />
            <p className="m-[0px]">Admin</p>
          </div>
        </div>
        <div className="mx-[40px] my-[3px] h-[1px] bg-[#CAD9DE]"></div>
      </div>
      <div className="h-screen w-[calc(100%_-_240px)]">
        <div className="header h-[80px]">
          <Row align="middle" className="h-[80px]">
            <Col span={10} className="flex justify-items-center pl-[20px]">
              <Input
                size="large"
                placeholder="Search..."
                prefix={<SearchOutlined />}
                style={{
                  borderRadius: 20,
                }}
                onChange={onChangeFunc}
                onPressEnter={onPressEnter}
              />
            </Col>
            <Col span={14}>
              <div align="right" className="pr-[40px] leading-[44px]">
                <div className="inline-block relative">
                  <BellOutlined className="text-[24px] px-[10px]" />
                </div>
                <div className="inline-block relative">
                  <MailOutlined className="text-[24px] px-[10px]" />
                </div>
                <div className="inline-block relative">
                  <ShoppingCartOutlined className="text-[24px] px-[10px] hover:cursor-default hover:bg-[#2c2c2c] hover:text-[white]"   onClick={()=> navigate("/cart")} />
                </div>
                <div className="inline-block relative " >
                  <div className={` hidden absolute z-10 top-[44px] right-[10px] rounded-[12px]`} ref={list} >
                    <div className={`${style.triangle} mr-[6px]`}></div>
                    <div className="hover:bg-[#0c8ce9] hover:cursor-default text-[#fff] text-left h-[40px] leading-[40px] w-[200px] bg-[#2c2c2c]" onClick={profileHandle}>
                      <FontAwesomeIcon icon={faUser} className="inline-block w-[60px]" />
                      <h1 className="inline-block text-[#fff]">Profile</h1>
                    </div>
                    <div className="text-[#fff] text-left h-[40px]  hover:bg-[#0c8ce9] hover:cursor-default leading-[40px] w-[200px] bg-[#2c2c2c] " onClick={signOutHandle}>
                      <FontAwesomeIcon icon={faSignOut} className="inline-block w-[60px]" />
                      <h1 className="inline-block text-[#fff]">Log out</h1>
                    </div>
                  </div>
                  <UserOutlined ref={user} className="leading-[44px] text-[24px] px-[10px] hover:cursor-default hover:bg-[#2c2c2c] hover:text-[white]"onClick={userHandle} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {children}
      </div>
    </div>
  );
}
