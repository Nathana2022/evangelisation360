import React from "react";
import PaperIcon from "../../assets/images/icones/Paper.svg";

export default function TimeLine() {
  return (
    <div className="w-[50%]">
      <h1 className="text-slate-500 ">RAPPORT STATISTIQUE DE 3 DERNIERS MOIS</h1>
      <p>Ce rapport est en réel selon que les données sont disponibles</p>
      <div className="flex flex-col gap-y-[25px] ">
        <div className="flex justify-around rounded bg-white py-[30px] pl-[28px] mt-[35px]">
          <div className="flex  ">
            <img
              className="w-[50px] p-[14px] rounded bg-[#FFF2E9] mr-[8px] "
              src={PaperIcon}
              alt=""
            />
            <div>
              <h3>Total</h3>
              <p>5658</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="w-[50px] p-[14px] rounded bg-[#FFF2E9] mr-[8px] "
              src={PaperIcon}
              alt=""
            />
            <div>
              <h3>Total</h3>
              <p>5658</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="w-[50px] p-[14px] rounded bg-[#FFF2E9] mr-[8px] "
              src={PaperIcon}
              alt=""
            />
            <div>
              <h3>Total</h3>
              <p>5658</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="w-[50px] p-[14px] rounded bg-[#FFF2E9] mr-[8px] "
              src={PaperIcon}
              alt=""
            />
            <div>
              <h3>Total</h3>
              <p>5658</p>
            </div>
          </div>
        </div>

        <div className="w-[100%] h-[316px] rounded bg-white pt-[100%] "></div>
        <div className="flex gap-x-[10px] ">
          <div className="w-[50%] h-[100px] bg-white rounded">hello</div>
          <div className="w-[50%] h-[100px] bg-white rounded">hello</div>
        </div>
      </div>
    </div>
  );
}
