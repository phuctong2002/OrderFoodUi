import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";
const ItemCart = (props) => {
  return (
    <div className="item-cart h-[80px] flex items-center justify-between">
      <div className="h-[80px] flex items-center">
        <div className="w-[60px] h-[60px] bg-[url('https://i.pinimg.com/564x/62/b8/a0/62b8a0824f347ba51fbbd817f8d19049.jpg')] bg-cover rounded-[30px]"></div>
        <div className="m-[0px] pl-[20px]">
          <h1 className="m-[0px]">{props.item.name}</h1>
          {/* <p className="m-[0px]">x1</p> */}
        </div>
      </div>
      <div className="m-[0px] pr-[20px]">
        <FontAwesomeIcon icon={faTrash}/>
        {/* <h1 className="m-[0px]">Trash</h1> */}
        <p className="m-[0px]"><FontAwesomeIcon icon={faDollarSign} /> {props.item.price}</p>
      </div>
    </div>
  );
};

export default ItemCart;
