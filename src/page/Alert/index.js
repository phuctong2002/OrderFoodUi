import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import alert from "./../../assets/images/alert.png";
import logo from "./../../assets/images/logo.png";
const Alert = () => {
  return (
    <div className="flex">
      <div className="alert-infor h-screen w-2/5 bg-[white]">
        <img src={logo} className="h-[120px] w-[200px]" />
        <FontAwesomeIcon
          className="text-[50px] text-[#eb6b12] mt-[60px]"
          icon={faCheckDouble}
        />
        <h1 className="text-[50px] text-[#07153a]">Success !</h1>
        <p className="text-[#959794] text-[16px]">
          An email has been send to your email@domain.com. Please <br/>check for an
          email from company and click on the included link <br/> to reset your
          password
        </p>
        <button className="bg-[#ea6e11] h-[36px] w-[150px] rounded-[18px] mb-[20px] mt-[20px] text-[white]">
          Back to home
        </button>
      </div>
      <div
        className="alert-image h-screen w-3/5 bg-cover"
        style={{
          backgroundImage: `url(${alert})`,
        }}
      ></div>
    </div>
  );
};

export default Alert;
