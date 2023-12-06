import React, { FC } from "react";
import Image from "next/image";

import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useDisconnect } from "@thirdweb-dev/react";
import { shortenAddress } from "@/utils/shortenAddress";

import { NavButton } from "./NavButton";
import Coin from "../../public/assets/coin.png";

type Props = {
  address: string | undefined;
};

const Header: FC<Props> = ({ address }) => {
  const disconnectUser = useDisconnect();

  return (
    <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
      <div className="flex items-center">
        <Image className="rounded-full h-20 w-20" src={Coin} alt={"Coin"} />
        <div>
          <h1 className="text-lg text-white font-bold">Web3 Lottery</h1>
          <p className="text-xs text-emerald-600 truncate font-mono font-bold">
            User:{address && shortenAddress(address)}
          </p>
        </div>
      </div>
      <div className="hidden md:flex md:col-span-3 items-center justify-center rounded-md">
        <div className="bg-[#0A1F1C] p-4 space-x-2">
          <NavButton title="Buy Tickets" isActive />
          <NavButton onClick={disconnectUser} title="Logout" />
        </div>
      </div>
      <div className="flex flex-col ml-auto text-right">
        <Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer" />
        <span className="md:hidden">
          <NavButton onClick={disconnectUser} title="Logout" />
        </span>
      </div>
    </header>
  );
};

export default Header;
