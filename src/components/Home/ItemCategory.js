import { RightOutlined } from "@ant-design/icons";

const ItemCategory = (props) => {
  return (
    <div className="w-[100px] inline-block h-[120px] mx-[20px] bg-[white] text-center pt-[10px] rounded-[12px] hover:bg-[#F19457] hover:text-[white] cursor-default" onClick={props.onClick}>
      <div className="h-[40px] w-[40px] mr-[auto] ml-[auto] bg-[url('https://i.pinimg.com/564x/20/b1/ec/20b1ecd496c523b2b0d2b0ac4cace692.jpg')] bg-cover  rounded-[20px] t-[10px]"></div>
      <h1>{props.name}</h1>
      <div className="h-[4px] bg-[#F7CAAB] w-[60px] ml-[auto] mr-[auto]"></div>
      <div className="w-[20px] h-[20px] bg-[#F19457] rounded-[10px] flex items-center justify-center ml-[auto] mr-[auto] mt-[10px]">
        <RightOutlined />
      </div>
    </div>
  );
};

export default ItemCategory;
