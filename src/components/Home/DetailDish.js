import React from "react";
import { DollarCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";
const DetailDish = (props) => {
  // console.log(process.env.REACT_APP_SERVER + "/" + props.item.path);
  const navigate = useNavigate();
  const{ addItemToCart} = useAppContext();
  return (
    <div className="w-[180px] inline-block mx-[20px] " >
      <div className={`relative z-[1] w-[120px] h-[120px] bg-[url('${process.env.REACT_APP_SERVER + "/" + (props.item.path).replace("\\", "/")}')] rounded-[60px] bg-cover bg-[white] ml-[auto] mr-[auto] cursor-pointer`} onClick={()=> navigate("detail-dish/"+props.item._id)}>
        <img className="w-[100%] h-[100%] object-cover rounded-[60px]" src={`${process.env.REACT_APP_SERVER + "/" + (props.item.path).replace("\\", "/")}`}/>
      </div>
      {/* <div className="relative z-[1] w-[120px] h-[120px] bg-[url('https://i.pinimg.com/564x/75/92/58/759258932ceffe0be4c0dfb4e1d9ec27.jpg')] rounded-[60px] bg-cover bg-[white] ml-[auto] mr-[auto] cursor-pointer" onClick={()=> navigate("detail-dish/"+props.item._id)}></div> */}
      <div className="px-[20px] mt-[-60px] bg-[white] relative z-[0] rounded-[20px] h-[180px]">
        <h1 className="pt-[80px] capitalize">{props.item.name}</h1>
        <div className="flex items-center justify-between pt-[20px]">
          <div className="flex items-center">
            <DollarCircleOutlined />
            <p className="pl-[4px] m-[0px]">300.0</p>
          </div>
          <PlusCircleOutlined className="text-[20px]" onClick={()=> addItemToCart(props.item)} />
        </div>
      </div>
    </div>
  );
};

export default DetailDish;
