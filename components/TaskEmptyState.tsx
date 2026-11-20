import logo2 from "@/images/Vector.png";
import MyImage from "next/image";

export const TaskEmthyState = () => {
  return (
    <footer className="w-[672px] h-[240px] top-[408px] flex justify-center flex-col items-center absolute">
      <div className="w-[56px] h-[56px] rounded-[50%] bg-[#F0F6F2] flex justify-center items-center">
        <MyImage src={logo2} alt="logo" width={16} height={11} />{" "}
      </div>
      <div className="text-[#304C3E] font-['Inter'] font-semibold text-[16px] leading-[24px] mt-[8px] tracking-[0%]">
        Your list starts here
      </div>
      <div className="text-[#7A8881] font-['Inter'] font-normal text-[14px] leading-[21px] mt-[8px] tracking-[0%]">
        Add your first task above.
      </div>
    </footer>
  );
};
