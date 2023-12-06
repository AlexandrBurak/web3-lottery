"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import {
  useContract,
  useAddress,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";

import { BigNumber, ethers } from "ethers";
import {} from "@ethersproject/abstract-provider";
import {ABI} from "@/contracts/abi/lottery";

type UseMain = {
  address: string | undefined;

  userTickets: number;
  setUserTickets: (numberOfUserTickets: number) => void;

  quantity: number;
  setQuantity: (quantity: number) => void;

  remainingTickets: BigNumber;
  ticketPrice: BigNumber;
  ticketCommission: BigNumber;
  expiration: BigNumber;
  winnings: number;
  lastWinnerAmount: BigNumber;
  tickets: string[];
  lastWinner: string;
  lotteryOperator: string;
  currentWinningReward: string;
  isLoadingExpiration: boolean;
  handleClick: () => void;
  onWithdrawWinnings: () => void;
};

export const useMain = (): UseMain => {
  const address = useAddress();

  const { contract, isLoading, error } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS, ABI
  );
  const [userTickets, setUserTickets] = useState<number>(0);

  const [quantity, setQuantity] = useState<number>(1);

  const { data: remainingTickets } = useContractRead(
    contract,
    "RemainingTickets"
  );
  const { data: currentWinningReward } = useContractRead(
    contract,
    "CurrentWinningReward"
  );
  const { data: ticketPrice } = useContractRead(contract, "ticketPrice");

  const { data: ticketCommission } = useContractRead(
    contract,
    "ticketCommission"
  );
  const { data: expiration, isLoading: isLoadingExpiration } = useContractRead(
    contract,
    "expiration"
  );

  const { data: tickets } = useContractRead(contract, "getTickets");

  const { data: winnings } = useContractRead(
    contract,
    "getWinningsForAddress",
    [address]
  );

  const { data: lastWinner } = useContractRead(contract, "lastWinner");

  const { data: lastWinnerAmount } = useContractRead(
    contract,
    "lastWinnerAmount"
  );

  const { data: lotteryOperator } = useContractRead(
    contract,
    "lotteryOperator"
  );

  const { mutateAsync: BuyTickets } = useContractWrite(contract, "BuyTickets");

  const { mutateAsync: WithdrawWinnings } = useContractWrite(
    contract,
    "WithdrawWinnings"
  );

  const handleClick = async () => {
    if (!ticketPrice) return;

    const notification = toast.loading("Buying your tickets...");
    try {
      const data = await BuyTickets({
        overrides: {
          value: ethers.utils.parseEther(
            (
              Number(ethers.utils.formatEther(ticketPrice)) * quantity
            ).toString()
          ),
        },
      });

      toast.success("Ticket purchased successfully!", {
        id: notification,
      });
      console.info("contract call success", data);
    } catch (error) {
      toast.error("Whoops something went wrong!", {
        id: notification,
      });

      console.error("contract call failure", error);
    }
  };

  const onWithdrawWinnings = async () => {
    const notification = toast.loading("Withdrawing winnings...");

    try {
      const data = await WithdrawWinnings({});

      toast.success("Winnings withdrawn successfully!", {
        id: notification,
      });
      console.info("contract call success", data);
    } catch (error) {
      toast.error("Whoops something went wrong!", {
        id: notification,
      });

      console.error("contract call failure", error);
    }
  };

  return {
    address,
    userTickets,
    quantity,
    remainingTickets,
    ticketPrice,
    ticketCommission,
    expiration,
    winnings,
    lastWinnerAmount,
    tickets,
    lastWinner,
    lotteryOperator,
    currentWinningReward,
    isLoadingExpiration,
    setQuantity,
    setUserTickets,
    handleClick,
    onWithdrawWinnings,
  };
};
