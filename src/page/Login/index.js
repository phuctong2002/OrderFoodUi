import React, { Fragment } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message, Checkbox } from "antd";
import {
  MailOutlined,
  UnlockOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import welcome from "../../assets/images/welcome.svg";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    const str = "api/v1" + window.location.pathname;
    const response = await axios.post( str, values)
    console.log( response);
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const registerPage = () => {
    navigate("/register");
  };
  return (
    <div
      className="w-screen h-screen bg-gradient-to-r from-[#83EAF1] to-[#63A4FF]
    flex justify-center items-center"
    >
      <div className="w-3/5 h-3/5 bg-white grid grid-cols-12 rounded-md shadow-xl">
        <div className="col-span-5 flex items-center justify-center px-5">
          <img src={welcome} alt="welcome"></img>
        </div>
        <div className="col-span-7 flex flex-col items-center">
          <h1 className="font-semibold text-3xl text-center mt-10">Welcome</h1>
          <div className="w-4/5 mt-12">
            <Form name="basic" autoComplete="off" onFinish={handleSubmit}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  className="rounded-3xl pl-3 text-base "
                  size="large"
                  placeholder="Email"
                  prefix={<MailOutlined className="pr-[10px]" />}
                />
              </Form.Item>
              <Form.Item
                className="mt-8"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input
                  className="rounded-3xl pl-3 text-base"
                  type="password"
                  size="large"
                  placeholder="Password"
                  prefix={<UnlockOutlined className="pr-[10px]" />}
                />
              </Form.Item>
              {window.location.pathname == "/register" ? (
                <Form.Item
                  className="mt-8"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input
                    className="rounded-3xl pl-3 text-base"
                    type="password"
                    size="large"
                    placeholder="Refill Password"
                    prefix={<UnlockOutlined className="pr-[10px]" />}
                  />
                </Form.Item>
              ) : (
                <Fragment />
              )}
              <Form.Item>
                <div className="flex flex-row justify-between text-[13px]">
                  <div className="leading-[40px]">
                    <Checkbox onChange={onChange} />
                    Remember Me
                  </div>
                  <Button
                    className="h-[40px] px-[24px]  rounded-[4px] bg-[#019160] block"
                    htmlType="submit"
                  >
                    {window.location.pathname == "/register"
                      ? "Sign up"
                      : "Sign in"}
                  </Button>
                </div>
              </Form.Item>
            </Form>

            {window.location.pathname == "/login" ? (
              <div className="mt-[60px] flex flex-row justify-center">
                <div className="w-[150px]">
                  <p
                    className=" m-[0px] leading-[40px] hover:text-[blue] hover:cursor-pointer"
                    onClick={registerPage}
                  >
                    Create your account <ArrowRightOutlined />
                  </p>
                </div>
              </div>
            ) : (
              <Fragment />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
