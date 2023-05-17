import { Col, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,

} from "antd";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
const { TextArea } = Input;
const ConfirmOrder = () => {
  const [form]  = Form.useForm();
  const { cart,deleteAllItemsInCart } = useAppContext();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    var tmp = 0;
    cart.forEach(element => {
      tmp += element.price;
    });
    setTotal(tmp);
    fetch("hanhchinhvn/dist/tinh_tp.json").then((res) => console.log(res));
  }, [cart]);
  const order = async()=>{
    const info = form.getFieldsValue();
    const newDataCart = cart.map( element=> element._id)
    const newData = {
      ...info,
      total: total,
      cart: newDataCart,
    }
    try{
      const response = await axios.post( '/api/v1/order/', newData);
      console.log( response);
      // clear the order data
      // va hien thong bao thanh cong
      deleteAllItemsInCart();
      form.resetFields();
    }catch(error){
      // thong bao co loi nhe anh em
    }
  }
  return (
    <div className="bg-[#F0F2F5] h-[630px]">
      <Row className="">
        <Col span={16} className="">
          <h1 className="text-[30px] py-[30px]">ĐỊA CHỈ GIAO HÀNG</h1>

          <Form form={form}
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 20,
            }}
            layout="vertical"
            style={{
              width: "100%",
            }}
            className="flex"
          >
            <div className="w-[50%] flex flex-col items-center">
              <Form.Item
                label="Name"
                className="w-[360px]"
                rules={[
                  {
                    required: true,
                    message: "Please input your name",
                  },
                ]}
                name="name"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="SDT"
                className="w-[360px]"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number",
                  },
                ]}
                name="sdt"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                className="w-[360px]"
                rules={[
                  {
                    required: true,
                    message: "Please input your email",
                  },
                ]}
                name="email"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Province"
                className="w-[360px]"
                rules={[
                  {
                    required: true,
                    message: "Please input your name",
                  },
                ]}
                name= "province"
              >
                <Select>
                  <Select.Option value="Thanh Hoa">Thanh Hoa</Select.Option>
                </Select>
              </Form.Item>
            </div>
            <div className="w-[50%] flex flex-col items-center">
              <Form.Item
                label="District"
                className="w-[360px]"
                rules={[
                  {
                    required: true,
                    message: "Please input your name",
                  },
                ]}
                name="district"
              >
                <Select>
                  <Select.Option value="Tho Xuan">Tho Xuan</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Ward"
                className="w-[360px]"
                rules={[
                  {
                    required: true,
                    message: "Please input your name",
                  },
                ]}
                name="ward"
              >
                <Select>
                  <Select.Option value="Tho Lam">Tho Lam</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Address"
                className="w-[360px]"
                rules={[
                  {
                    required: true,
                    message: "Please input your address",
                  },
                ]}
                name = "address"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Thong tin bo sung"
                className="w-[360px]"
                rules={[
                  {
                    required: false,
                    message: "Please input your name",
                  },
                ]}
                name="option"
              >
                <TextArea rows={1} />
              </Form.Item>
              {/* <Form.Item label="Button"> */}
              {/* <Button>Button</Button> */}
              {/* </Form.Item> */}
            </div>
          </Form>
        </Col>
        <Col
          span={8}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="py-[30px] w-[240px] flex flex-col">
            <h1 className="text-left">Tom tat don hang</h1>
            <div className="flex justify-between">
              <p>Tam tinh </p>
              <p>{total} VND</p>
            </div>
            <div className="flex justify-between">
              <p>Tam tinh </p>
              <p>{total} VND</p>
            </div>
            <Button className="w-[100%]" type="primary" onClick={order}>
              Order
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ConfirmOrder;
