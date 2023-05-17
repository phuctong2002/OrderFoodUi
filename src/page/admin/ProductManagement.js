
import { PlusOutlined } from "@ant-design/icons";
import {
  Button, Cascader,  Checkbox,  DatePicker,  Form,  Input,  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,Pagination, Drawer 
} from "antd";

import { useRef, useState } from "react";
import DetailDish from "../../components/Home/DetailDish";
import ProductItem from "../../components/admin/Product/ProductItem";
import AddItem from "../../components/admin/Product/AddItem";
import axios from "axios";
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
  const [image, setImage] = useState();
  const [form] = Form.useForm();
  const uploadRef = useRef();
  const change = (e) => {
    // console.log(e);
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const submitInfo = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name",form.getFieldValue("name"));
    formData.append("description", form.getFieldValue("description"));
    formData.append("category", form.getFieldValue("category")); 
    formData.append("price", form.getFieldValue("price"));
    // console.log( formData);

    axios.post("/api/v1/product/upload-dish", formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then( (response=>{
        // console.log(response);
      }))
    form.resetFields();
    // console.log("asdfhasldfjalsd", uploadRef.current);

    if( uploadRef.current){
      uploadRef.current.fileList = null;
      // console.log( uploadRef.current);
    }
  }

  const uploadImage = (e)=>{
    // console.log(e.file);
    setImage(e.file);
  }


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
        <Form form={form} 
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
          
          
          <Form.Item label="name" name="name">
            <Input />
          </Form.Item>
          
          <Form.Item label="category" name="category">
            <Select>
              <Select.Option value="fruits">fruits</Select.Option>
              <Select.Option value="vegetables">vegetables</Select.Option>
              <Select.Option value="protein">protein</Select.Option>
              <Select.Option value="dairy">dairy</Select.Option>
              <Select.Option value="sweet">sweet</Select.Option>
              <Select.Option value="snack">snack</Select.Option>
              <Select.Option value="comfort food">comfort food</Select.Option>
              <Select.Option value="fast food">fast food</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="description" name="description">
            <Input />
          </Form.Item>
          
          
          
          <Form.Item label="price" name="price">
            <InputNumber />
          </Form.Item>
          
          
          <Form.Item
            label="image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            
          >
            <Upload  onChange={uploadImage} beforeUpload={() => false} listType="picture-card" ref={uploadRef}>
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
          {/* <Form.Item label="Add"> */}
            <Button className="ml-[90px]" onClick={submitInfo}>Submit</Button>
          {/* </Form.Item> */}
        </Form>
      </Drawer>
    </div>
  );
};

export default ProductManagement;
