import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/Context";
import { PuffLoader } from "react-spinners";

const Otp = () => {
  const { setRegPopUpPic } = useContext(AppContext);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [validOTP, setValidOTP] = useState(false);
  const [succes, setSucces] = useState(false);
  useEffect(() => {
    setRegPopUpPic({
      intalsPic: false,
      UserNamePic: false,
      otpPic: true,
    });
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");

    if (value.length > 1) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length >= 6) {
      setValidOTP(true);

    } else {
      setValidOTP(false);
    }
  }, [otp]);


  const handelSubmit = () => {};

  return (
    <>
      <div className="bg-white w-full flex flex-col justify-between h-full rounded-l-lg p-4 ">
        <div className="">
          <div>
            <h3 className="text-xl font-semibold py-3">Confirm your email</h3>

            <p className="text-md font-semibold text-gray-500 py-0.5">
              Enter the verification code we emailed to:
            </p>

            <p className="text-md font-bold text-gray-700 py-1.5">
              email@gmail.com.
            </p>
          </div>
          <div className="flex items-center justify-center my-10">
            <div className="flex space-x-2 mb-4 ">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="w-12 h-12 text-2xl text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full  flex items-baseline justify-between">
          <p className="underline font-bold text-lg text-gray-700 cursor-pointer">
            Remind me later
          </p>

          <button
            type="button"
            disabled={!validOTP}
            onClick={handelSubmit}
            className={`border-[1px] w-20 flex items-center justify-center py-1.5 font-bold   rounded-lg text-lg ${
              !validOTP
                ? "cursor-not-allowed bg-gray-400  border-gray-400 text-gray-100 "
                : "border-gray-800 bg-gray-800 cursor-pointer text-white "
            }`}
          >
            {succes ? <PuffLoader size={20} color="#ffffff" /> : " Submit"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Otp;
