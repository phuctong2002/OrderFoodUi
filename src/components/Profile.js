import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import {
  message,
  Upload,
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Image,
} from "antd";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../context/appContext";
import { useForm } from "antd/lib/form/Form";
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const Profile = () => {
  const [myForm] = useForm();
  
  const [componentDisabled, setComponentDisabled] = useState(false);
  const { firstName, lastName, phone, email, address, setUser } = useAppContext();
  const [command, setCommand] = useState("Edit Profile");
  const handle = () => {
    if (componentDisabled) {
      setCommand("Submit");
      setComponentDisabled(false);
    }
    if( !componentDisabled){
      const {ffirstName, flastName, faddress, femail,fphone} = myForm.getFieldsValue();
      // console.log(firstName, lastName, address);
      axios.put("/api/v1/user", {
        oldEmail: email,
        firstName: ffirstName, 
        lastName: flastName,
        phone: fphone,
        email: femail,
        address: faddress,
      }).then( ( res)=>{
        console.log(res.data.info);
        setUser(res.data.info)
      })
    }
  };
  useEffect(() => {
    myForm.setFieldsValue({
      "ffirstName": firstName,
      "flastName": lastName,
      "fphone": phone,
      "faddress": address,
      "femail": email,
    })
    setComponentDisabled(true);
  },[firstName]);
  
  return (
    <div className="pt-[80px] w-[100%] h-[calc(100%_-_80px)] bg-[#eeeeee]">
      <div className="w-[100%]  flex items-center justify-center">
        <div className="bg-[#ffff] h-[400px] flex items-center  w-[300px] rounded-[20px] mr-[20px]">
          <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        </div>
        <div className="bg-[#ffff] rounded-[20px] h-[400px]  w-[800px] flex justify-center items-center">
          <Form form={myForm}
            
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 18,
            }}
            layout="horizontal"
            disabled={componentDisabled}
            style={{
              width: 600,
              maxWidth: 600,
            }}
          >
            <Form.Item name="ffirstName" label="First Name">
              <Input />
            </Form.Item>
            <Form.Item label="Last Name" name="flastName">
              <Input />
            </Form.Item>
            <Form.Item label="Address" name="faddress">
              <Input />
            </Form.Item>
            <Form.Item label="Phone" name="fphone">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="femail">
              <Input />
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="flex justify-right">
        <Button
          type="primary"
          size="large"
          className="mt-[20px] ml-[auto] mr-[auto] block"
          onClick={handle}
        >
          {command}
        </Button>
      </div>
    </div>
  );
};
export default Profile;
