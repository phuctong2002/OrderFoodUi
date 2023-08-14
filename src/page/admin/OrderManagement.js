import { Table, Space } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import OrderItem from "../../components/admin/Order/OrderItem";

const OrderManagement = () => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const getOrder = async () => {
      try {
        const response = await axios.get("/api/v1/order");
       
        setOrder(response.data.data);
      } catch (error) {
        console.log("Error getting order");
      }
    };
    getOrder();
  }, []);
  return <div className="w-[100%] h-[100%] bg-[#1F1D2B] flex flex-col items-center rounded-[8px]">
    {
        order.map( (item, index)=>{
            return <OrderItem key={index} name={item.name} address={item.address} total={item.total} accept={item.accept} id={item._id}/>
        })
    }
    
  </div>;
};

export default OrderManagement;
