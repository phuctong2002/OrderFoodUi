import MapContainer from "./MapContainer";

const Location = () => {
  return (
    <div className="">
      <h1 className="text-[20px]">Các cơ sở trên địa bàn Hà Nội</h1>
      <p className="text-[16px]">Cở sở 1: VPGD: 60/850 Đường Láng, Láng Thượng, Đống Đa, Hà Nội</p>
      <p className="text-[16px]">Cở sở 2: VPGD: 180 Giải Phóng, Hai Ba Trung, Hà Nội</p>
      <div className="" style={{ position: 'relative', width: '100%', height: '400px' }}>
        <MapContainer  />
      </div>
    </div>
  );
};
export default Location;
