import { Button } from "antd";

const ProductItem = () => {
  return (
    <div className="h-[240px] my-[20px] w-[200px] bg-[#1F1D2B] flex flex-col justify-between">
      <div className="w-[200px] h-[200px] flex flex-col justify-between">
        <div className="relative z-[1] w-[120px] h-[120px] bg-[url('https://i.pinimg.com/564x/75/92/58/759258932ceffe0be4c0dfb4e1d9ec27.jpg')] rounded-[60px] bg-cover bg-[white] ml-[auto] mr-[auto] cursor-pointer"></div>
        <div>
            Mo ta tom tat thong tin cua san pham o day
        </div>
      </div>
      <Button className="w-[100%]">Edit Dish</Button>
    </div>
  );
};

export default ProductItem;
