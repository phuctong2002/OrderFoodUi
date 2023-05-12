import {
  SearchOutlined,
  BellOutlined,
  MailOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Input, Col, Row, Button } from "antd";
import { useNavigate } from "react-router-dom";
import {
  collection,
  addDoc,
  getDocs,
  query,
  onSnapshot,
} from "firebase/firestore";

import style from "../../assets/css/home.module.css";
import { useAppContext } from "../../context/appContext";
import { db } from "../../firebase/config";
import ItemCategory from "../../components/Home/ItemCategory";
import DetailDish from "../../components/Home/DetailDish";
import ItemCart from "../../components/Home/ItemCart";
import TrendingItem from "../../components/Home/TrendingItem";
import axios from "axios";
const Home = () => {
  const {token, addItemToCart, cart} = useAppContext();
  cart.forEach( (item, index)=>{
    console.log(index);
  })
  const navigate = useNavigate();
  const [category , setCategory] = useState([]);
  const [dish, setDish] = useState([]);
  const onChangeFunc = (e) => {
    // console.log(e.target.value);
  };
  const onPressEnter = async (e) => {
    console.log(e.target.value);
  
    e.target.value = "";
  };


  const clickHandle = async(category)=>{
    const response = await axios.get("/api/v1/product/category/"+ category)
    // const dishInCategory = response.data.data.map((item, index)=> item.name)
    setDish(response.data.data);
  }
  const detailDish = (id)=>{
    console.log(id)
    navigate("detail-dish/"+id);
  }


  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await axios.get("/api/v1/product/category",{
          headers:{
            Authorization: "Bearer " + token
          }
        })
        const items = response.data.data.map( (item, index)=> item.name)
        setCategory( items);
      }catch(e){
        console.log("Loi nhe anh em");
      }

    }
    fetchData();
  },[]);

  return (
      <div
        className={`bg-[#E4E3E0] h-[calc(100%_-_80px)] overflow-auto ${style.scroll}`}
      >
        <Row>
          <Col span={16}>
            <div className="my-[8px] mx-[20px] bg-[url('https://img.freepik.com/free-photo/pieces-chicken-fillet-with-mushrooms-stewed-tomato-sauce-with-boiled-broccoli-rice-proper-nutrition-healthy-lifestyle-dietetic-menu-top-view_2829-20015.jpg?w=996&t=st=1680366806~exp=1680367406~hmac=904f16fd7c37bbed24baad0a0c4f211ab2a30df3e8dfb26eb185ea802f5d5c36')] h-[280px] bg-cover rounded-[10px]"></div>
          </Col>
          <Col span={8} className="flex justify-center" align="center">
            <div className="my-[8px]  w-[400px] bg-[url('https://img.freepik.com/free-photo/pieces-chicken-fillet-with-mushrooms-stewed-tomato-sauce-with-boiled-broccoli-rice-proper-nutrition-healthy-lifestyle-dietetic-menu-top-view_2829-20015.jpg?w=996&t=st=1680366806~exp=1680367406~hmac=904f16fd7c37bbed24baad0a0c4f211ab2a30df3e8dfb26eb185ea802f5d5c36')] h-[280px]  bg-cover rounded-[10px]">
              Sale
            </div>
          </Col>
        </Row>
        <div className="h-[480px] mt-[20px]">
          <Row>
            <Col span={16} align="left" className="">
              <div className="mx-[20px]">
                <div className="heade-title  flex items-end justify-between">
                  <h1 className="text-[32px]  font-[Toledo Serial Bold] m-[0px]">
                    Menu Category
                  </h1>
                  <div className="flex h-[30px]  items-center text-[16px]">
                    <p className="m-[0] leading-[30px] w-[60px]">View all </p>
                    <RightOutlined className="" />
                  </div>
                </div>
                <div className={`h-[140px]  w-[100%] overflow-x-auto whitespace-nowrap scrollbar-thumb ${style.nonescroll}`}>
                  {category.map((item, index) => <ItemCategory name={item} key={index} img="sdfasdfa" onClick={()=> clickHandle(item)}/>)}
                </div>
                <div className={`detail-dish h-[240px]  mt-[40px] overflow-x-auto whitespace-nowrap scrollbar-thumb ${style.nonescroll}`}>
                  {dish.map( (item, index)=> <DetailDish key={index} item={item} />)}
                </div>
              </div>
            </Col>
            <Col span={8} align="center">
              <div className="bg-[white] mx-[16px] pl-[20px] h-[100%] rounded-[8px]">
                <h1 className="text-[32px] text-left  font-[Toledo Serial Bold] m-[0px]">
                  My Cart
                </h1>
                <div className="w-[360px] h-[2px] bg-[#F0EFED] ml-[auto] mr-[auto] mb-[20px]"></div>
                <div className={`h-[320px] ${style.scroll} overflow-auto`}>
                  {/* cac mon da order o day nhe */}
                  {
                    cart.map((item, index)=> <ItemCart key={index} item={item}/>)
                  }
                </div>
                <Button
                  type="primary"
                  size="large"
                  className="mt-[20px] ml-[auto] mr-[auto] block"
                >
                  Check out
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="trending-orders mx-[20px] mt-[30px]">
          <h1 className="text-left text-[32px]">Trending Orders</h1>
          <div className="list-trending-item flex flex-wrap justify-center">
            <TrendingItem />
            <TrendingItem />
            <TrendingItem />
            <TrendingItem />
            <TrendingItem />
            <TrendingItem />
            <TrendingItem />
            <TrendingItem />
          </div>
        </div>
      </div>
  );
}

export default Home;
