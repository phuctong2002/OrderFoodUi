import { DollarCircleOutlined,PlusCircleOutlined } from "@ant-design/icons";

const TrendingItem = (props) => {
  return (
    <div className="h-[180px] w-[280px] bg-[pink] justify-between text-left rounded-[20px] flex items-center m-[10px]">
      <div className="info w-[160] pl-[20px] ">
        <h1 className="text-[20px]">Dish Name</h1>
        <p className="text-[#9C9E9B]">100 calories</p>
        <p className="text-[#9C9E9B]">40 persons</p>
        <div className="flex text-[#ea6e13] items-center justify-between pt-[20px]">
          <div className="flex items-center">
            <DollarCircleOutlined />
            <p className="pl-[4px] m-[0px]">300.0</p>
          </div>
          <PlusCircleOutlined className="text-[20px]" />
        </div>
      </div>
      <div className="img mr-[20px] w-[120px] h-[120px] bg-cover rounded-[60px] bg-[url('https://i.pinimg.com/564x/fa/cb/0f/facb0f127622a329c2ed48227b66d49d.jpg')]"></div>
    </div>
  );
};
export default TrendingItem;
