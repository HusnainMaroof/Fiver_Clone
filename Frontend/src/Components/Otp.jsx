import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/Context";

const Otp = () => {
  const { setRegPopUpPic } = useContext(AppContext);

  useEffect(() => {
    setRegPopUpPic({
      intalsPic: false,
      UserNamePic: false,
      otpPic: true,
    });
  }, []);
  return (
    <>
      <div className="bg-white w-full flex flex-col justify-between h-full">
        <div>
          <div>
            <h3 className="text-xl font-semibold py-3">Confirm your email</h3>

            <p className="text-md font-semibold text-gray-500 py-0.5">
              Enter the verification code we emailed to:
            </p>

            <p className="text-sm font-bold text-gray-700 py-2.5">
              You can't change your username, so choose wisely.
            </p>
          </div>
        </div>

        <div className="w-full items-baseline"></div>
      </div>
    </>
  );
};

export default Otp;
