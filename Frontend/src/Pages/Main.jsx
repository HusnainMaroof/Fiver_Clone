import React, { useEffect } from "react";
import toast from "react-hot-toast";

const Main = () => {
  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("users"));

    toast.success(`Welcome ${users?.userName}`);
  }, []);

  return (
    <>
      <div className="w-full ">
        <h3 className="text-center text-5xl">Welcome </h3>
      </div>
    </>
  );
};

export default Main;
