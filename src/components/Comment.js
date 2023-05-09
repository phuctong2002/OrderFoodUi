const Comment = (props) => {
  return (
    <div className="w-[100%] text-left text-[18px] mt-[20px] flex  ">
      <div className="image mr-[10px]">
        <img
          className="w-[40px] h-[40px] rounded-[20px]"
          src="https://i.pinimg.com/736x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg"
        />
      </div>
      <div className="w-[calc(100%_-_40px)] bg-[white] pl-[10px] rounded-[8px]" >
        <h1 className="text-[18px] m-[0]">{props.user}</h1>
        <p className="text-[16px] m-[0] text-[#b2b4b0]">
          {props.content}
        </p>
      </div>
    </div>
  );
};
export default Comment;
