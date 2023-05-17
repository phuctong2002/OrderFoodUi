import {
  DollarCircleOutlined,
  CommentOutlined,
  PlusCircleOutlined,
  HeartOutlined,
  SearchOutlined,
  SendOutlined,
  DotChartOutlined,
} from "@ant-design/icons";
import { Input, Divider, Form, Radio, Skeleton, Space, Switch } from "antd";
import Comment from "../../components/Comment";
import style from "./../../assets/css/home.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  doc,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAppContext } from "../../context/appContext";

const DetailDish = () => {
  const [active, setActive] = useState(true);
  const { lastName, firstName, addItemToCart } = useAppContext();
  const { dishId } = useParams();
  const [detail, setDetail] = useState({});
  const [comments, setComments] = useState([]);
  const onChangeFunc = (e) => {
    // console.log(e.target.value);
  };
  const addItem = () => {
    addItemToCart(detail);
  };

  const onPressEnter = async (e) => {
    // console.log(e.target.value);
    /**write data into database */
    const docRef = await addDoc(collection(db, "review"), {
      user: firstName + lastName,
      dishId: dishId,
      time: Date.now(),
      content: e.target.value,
    });
    // console.log("Id of Document : " + docRef.id);
    e.target.value = "";
  };
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/api/v1/product/dish/" + dishId);
      setDetail(response.data);
    };
    getData();
    // get comments
    const getComments = () => {
      const q = query(collection(db, "review"), where("dishId", "==", dishId));
      const unsubscribe = onSnapshot(q, (querySnapShot) => {
        var newComments = [];
        querySnapShot.forEach((doc) => {
          newComments.push({
            content: doc.data().content,
            user: doc.data().user,
          });
        });
        setComments(newComments);
      });
    };
    getComments();
  }, []);
  return (
    <div className="h-[calc(100%_-_80px)] bg-[#e4e3e0] flex">
      <div
        className={`w-[900px] min-h-[100%] flex flex-col overflow-auto items-center ${style.nonescroll}`}
      >
        <div className="detail h-[320px] w-[660px] mt-[20px] flex ">
          <div className="detail-image  h-[320px] w-[400px] bg-cover">
            {/* <img className="w-[100%] h-[100%] object-cover" src={process.env.REACT_APP_SERVER+ "/"+detail.path.replace("\\", "/")}/> */}
            {
            detail?.path ? <img className="w-[100%] h-[100%] object-cover" src={process.env.REACT_APP_SERVER+ "/"+detail.path.replace("\\", "/")}/>:
            <Space className="h-[320px] w-[400px]">
            <Skeleton.Image   active={active} style={{ width: '400px', height: '320px' }}  />
          </Space>
            }
            
          </div>
          <div className="bg-[white] detail-info pl-[20px] w-[260px] h-[100%] text-left">
            <h1 className="text-[30px] mb-[10px] text-[#07133b]">
              {detail.name}
            </h1>
            <h1 className="text-[#969895]">{detail.calories} calories</h1>
            <div className="flex items-center h-[30px] mb-[32px] text-[#ea6e12]">
              <DollarCircleOutlined />
              <h1 className="m-[0] pl-[4px] text-[#ea6e12]">{detail.price}</h1>
              <PlusCircleOutlined
                className="hover:cursor-pointer ml-[80px] text-[20px]"
                onClick={addItem}
              />
            </div>
            <p>{detail.disc}</p>
          </div>
        </div>
        <div className="comment w-[660px] text-[20px] pt-[10px] g-[white]">
          <div className="flex justify-start pl-[20px]">
            <div className="flex items-center">
              <HeartOutlined />
              <p className="m-[0] pl-[4px] pr-[10px]">300</p>
            </div>
            <div className="flex items-center">
              <CommentOutlined />
              <p className="m-[0] pl-[4px]">20</p>
            </div>
          </div>
          {/* <div className="h-[2px] w-[600px]  bg-[black] mr-[auto] ml-[auto]"></div> */}
          <div className="">
            {/* <input type="text" className="w-[100%] h-[40px] mt-[10px] rounded-[20px] px-[20px] text-[20px]" placeholder={<SendOutlined />}></input> */}
            <Input
              size="large"
              placeholder="Comment..."
              suffix={<SendOutlined />}
              style={{
                borderRadius: 20,
              }}
              onChange={onChangeFunc}
              onPressEnter={onPressEnter}
            />
          </div>
          <div className="detail-comment">
            {comments.map((item, index) => {
              return <Comment user={item.user} content={item.content} />;
            })}
          </div>
        </div>
      </div>
      <div className="w-[calc(100%_-_900px)] bg-[blue] h-[100%]"></div>
    </div>
  );
};

export default DetailDish;
