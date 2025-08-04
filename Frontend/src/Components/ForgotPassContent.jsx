import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const ForgotPassContent = ({ setShowForgotpss }) => {
  return (
    <>
      <div className="bg-white flex flex-col h-full  w-full">
        <div
          onClick={() => setShowForgotpss(false)}
          className="flex gap-2 cursor-pointer items-center active:scale-95"
        >
          <IoMdArrowBack />
          <h2 className="text-sm font-semibold">Back</h2>
        </div>
      </div>
    </>
  );
};

export default ForgotPassContent;
