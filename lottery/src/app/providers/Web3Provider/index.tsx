"use client";
import React, { FC, PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import { Goerli } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const clientId = process.env.CLIENT_ID;

const Web3Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ThirdwebProvider activeChain={Goerli} clientId={clientId}>
        {children}
      </ThirdwebProvider>
      <Toaster />
    </>
  );
};

export default Web3Provider;
