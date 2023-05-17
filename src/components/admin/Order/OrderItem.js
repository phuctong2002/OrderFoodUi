import {Button, Col, Row} from "antd"
import axios from "axios";
import { useState } from "react";
const OrderItem = ( props)=>{
    const [accept, setAccept] = useState("Accept");
    const handle = async()=>{
        setAccept("Success");
        try{
            const result = await axios.put("/api/v1/order", {accept: true, _id: props.id})
            console.log( result);
        }catch( error){
            console.log("Co loi nhe anh em");
        }
    }
    // props contains all the information about the order
    return <div className="h-[66px] m-[0 auto] w-[700px] bg-[#2d303e] my-[16px] rounded-[8px]">
        <Row align="middle"   className="w-[100%] h-[100%]">
            <Col  span={6}>{props?.name}</Col>
            <Col span={6}>{props?.address}</Col>
            <Col span={6}>{props?.total}</Col>
            <Col span={6}><Button style={{borderRadius:"12px"}} onClick={handle}>{accept}</Button></Col>
        </Row>
    </div>
}

export default OrderItem;