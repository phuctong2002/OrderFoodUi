import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-around items-center">
      <div className="w-[275px] h-[600px] bg-[#1F1D2B] rounded-[10px]">
        <div className="flex items-center h-[100px] py-[10px] hover:bg-[#5c8a8a] rounded-[10px] hover:cursor-pointer" onClick={ ()=> navigate("/admin/order")}>
            <FontAwesomeIcon className="h-[20px] px-[20px] text-[white]" icon={faLock}/>
            <div className="text-[white] ">
                <h1 className="text-[white] text-left">Order</h1>
                <p1>All orders from customers</p1>
            </div>
        </div>
        <div className="flex items-center h-[100px] py-[10px] hover:bg-[#5c8a8a] rounded-[10px] hover:cursor-pointer " onClick={ ()=> navigate("/admin/product-management")}>
            <FontAwesomeIcon className="h-[20px] px-[20px] text-[white]" icon={faEdit}/>
            <div className="text-[white]">
                <h1 className="text-[white] text-left">Product Management</h1>
                <p1 className="text-left">Edit Product</p1>
            </div>
        </div>
      </div>
      <div className="w-[743px] h-[600px] bg-[white] ">{children}</div>
    </div>
  );
};

export default AdminLayout;
