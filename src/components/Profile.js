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
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
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
  const [form] = Form.useForm();
  const [componentDisabled, setComponentDisabled] = useState(true);
  const { firstName, lastName, phone, email, address } = useAppContext();
  console.log(firstName, lastName, phone, email, address);
  const [command, setCommand] = useState("Edit Profile");
  const handle = () => {
    if (componentDisabled) {
      setCommand("Submit");
      setComponentDisabled(false);
    }
  };
  useEffect(() => {
    form.setFieldValue({
      firstName: firstName,
      lastName: lastName,
      address: address,
      phone: phone,
      email: email,
    });
  }, []);
  return (
    <div className="pt-[80px] w-[100%] h-[calc(100%_-_80px)] bg-[#eeeeee]">
      <div className="w-[100%]  flex items-center justify-center">
        <div className="bg-[#ffff] h-[400px] flex items-center  w-[300px] rounded-[20px] mr-[20px]">
          <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          {/* <h1 className="text-[28px]">{firstName + lastName}</h1> */}
          {/* {edit ? (
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          ) : null} */}
        </div>
        <div className="bg-[#ffff] rounded-[20px] h-[400px]  w-[800px] flex justify-center items-center">
          <Form
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
            <Form.Item name="firstName" label="First Name">
              <Input />
            </Form.Item>
            <Form.Item label="Last Name" name="lastName">
              <Input />
            </Form.Item>
            <Form.Item label="Address" name="address">
              <Input />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            {/* <Form.Item label="Birth">
              <DatePicker className="w-[100%]" />
            </Form.Item> */}
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
