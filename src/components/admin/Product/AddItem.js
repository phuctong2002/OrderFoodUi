import { Button } from "antd";
import {PlusOutlined} from "@ant-design/icons"

const AddItem = (props) => {
  return (
    <div className="text-[white] h-[240px] my-[20px] w-[200px] bg-[#1F1D2B] flex flex-col justify-center">
      <PlusOutlined className="text-[40px]" onClick={props.add}/>
      <h1 className="text-[white]">Add new dish</h1>
    </div>
  );
};

export default AddItem;
