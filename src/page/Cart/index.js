import { Button, Space, Table, Col, Row } from "antd";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";




const Cart = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          {/* <a>Invite {record.name}</a> */}
          <a onClick={() => deleteItemFromCart(record)}>Delete</a>
        </Space>
      ),
    },
  ];
  
  const { cart, deleteItemFromCart } = useAppContext();
  var total = 0;
  const newData = cart.map((item, index) => {
    total = total + item.price;
    return {
      name: item.name,
      quantity: 1,
      price: item.price,
      id: item._id,
    };
  });
  const navigate = useNavigate();
  const confirm = ()=>{
    navigate("/confirm-order");
  }
  // console.log(cart);
  return (
    <div className=" pl-[30px] bg-[#F0F2F5] h-[630px] ">
      <Row>
        <Col span={16}>
          <Table
            className="w-[600px] py-[30px]"
            columns={columns}
            dataSource={newData}
            pagination={{ pageSize: 6 }}
          />
        </Col>
        <Col span={8}>
          <div className="py-[30px] w-[240px] flex flex-col">
            <h1 className="text-left">Tom tat don hang</h1>
            <div className="flex justify-between">
              <p>Tam tinh </p>
              <p>{total} VND</p>
            </div>
            <div className="flex justify-between">
              <p>Tam tinh </p>
              <p>{total} VND</p>
            </div>
            <Button className="w-[100%]" type="primary" onClick={confirm}>
              Confirm
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Cart;
