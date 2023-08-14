import { RightOutlined } from "@ant-design/icons";

const ItemCategory = (props) => {
  console.log(props.path);
  return (
    <div className="w-[100px] inline-block h-[120px] mx-[20px] bg-[white] text-center pt-[10px] rounded-[12px] hover:bg-[#F19457] hover:text-[white] cursor-default" onClick={props.onClick}>
      <div className={`h-[40px] w-[40px] mr-[auto] ml-[auto] bg-[url('${process.env.REACT_APP_SERVER + "/" + (props.path).replace("\\", "/")}')] bg-cover  rounded-[20px] t-[10px]`}>
        <img className="w-[100%] h-[100%] object-cover rounded-[60px]" src={`${process.env.REACT_APP_SERVER + "/" + (props.path).replace("\\", "/")}`}/>
      </div>
      <h1 className="capitalize">{props.name}</h1>
      <div className="h-[4px] bg-[#F7CAAB] w-[60px] ml-[auto] mr-[auto]"></div>
      <div className="w-[20px] h-[20px] bg-[#F19457] rounded-[10px] flex items-center justify-center ml-[auto] mr-[auto] mt-[10px]">
        <RightOutlined />
      </div>
    </div>
  );
};

export default ItemCategory;
