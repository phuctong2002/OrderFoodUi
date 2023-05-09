import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import alert from "./../../assets/images/alert.png";
import logo from "./../../assets/images/logo.png";

const Confirm = () => {
  return (
    <div className="flex">
      <div></div>
      <div className="alert-infor h-screen w-2/5 bg-[white] flex flex-col items-left">
        <img src={logo} className="h-[120px] w-[200px]" />
        {/* <FontAwesomeIcon
          className="text-[50px] text-[#eb6b12] mt-[60px]"
          icon={faCheckDouble}
        /> */}
        <h1 className="text-[50px] text-[#07153a] mt-[100px]">
          Reset password
        </h1>
        <p className="text-[#959794] text-[16px]">
          Enter your email address and we'll send you an email <br />
          with instructions to reset your password
        </p>
        <div className="h-[80px] mr-[auto] ml-[auto]">
          <h2 className="text-left text-[#9c9e99] mt-[20px]">Email</h2>
          <input
            type="text"
            className="text-left block h-[36px] w-[350px] rounded-[18px] pl-[18px] border-2 border-solid border-[#ea6e11]"
          />
        </div>
        <div className="flex justify-center mt-[20px]">
          <button className="bg-[#ea6e11] h-[36px] w-[150px] rounded-[18px] mb-[20px] mt-[20px] text-[white]">
            Reset
          </button>
        </div>
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

export default Confirm;
