import React from "react";
import Image from "next/image";

import { useMetamask } from "@thirdweb-dev/react";

import { connect } from "http2";
import Coin from "../../public/assets/coin.png";

const Login = () => {
  const connectWithMetamask = useMetamask();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center mb-10">
        <Image
          className="rounded-full h-56 w-56 mb-10"
          src={Coin}
          alt={"Coin"}
        />
      </div>
      <h1 className="text-6xl text-white font-bold">Lottery</h1>
      <h2 className="text-white mt-5">Get Started By login in your MetaMask</h2>
      <button
        onClick={() => connectWithMetamask()}
        className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold"
      >
        Login with MetaMask
      </button>
    </div>
  );
};
export default Login;