
import { PlusOutlined } from "@ant-design/icons";
import {
  Button, Cascader,  Checkbox,  DatePicker,  Form,  Input,  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,Pagination, Drawer 
} from "antd";

import { useState } from "react";
import DetailDish from "../../components/Home/DetailDish";
import ProductItem from "../../components/admin/Product/ProductItem";
import AddItem from "../../components/admin/Product/AddItem";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
const ProductManagement = () => {
    const [componentDisabled, setComponentDisabled] = useState(false);

  const change = (e) => {
    console.log(e);
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="item flex flex-wrap justify-around">
        <AddItem add={showDrawer} />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <Pagination onChange={change} defaultCurrent={1} total={50} />
      <Drawer
        width={600}
        title="Add Dish"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          disabled={componentDisabled}
          style={{
            maxWidth: 600,
          }}
        >
          
          
          <Form.Item label="Name">
            <Input />
          </Form.Item>
          
          <Form.Item label="Category">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Description">
            <Input />
          </Form.Item>
          
          
          
          <Form.Item label="Price">
            <InputNumber />
          </Form.Item>
          
          
          <Form.Item
            label="Image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item label="Add">
            <Button>Button</Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default ProductManagement;
