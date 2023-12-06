"use client";

import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";

import toast from "react-hot-toast";
import { BigNumber } from "ethers";
import {ABI} from "@/contracts/abi/lottery";

type UseAdminControls = {
  totalCommission: BigNumber;
  drawWinner: () => void;
  onWithdrawCommission: () => void;
  onRestartDraw: () => void;
  onRefundAll: () => void;
};

export const useAdminControls = (): UseAdminControls => {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS, ABI
  );
  const { data: totalCommission } = useContractRead(
    contract,
    "operatorTotalCommission"
  );

  const { mutateAsync: DrawWinnerTicket } = useContractWrite(
    contract,
    "DrawWinnerTicket"
  );

  const { mutateAsync: RefundAll } = useContractWrite(contract, "RefundAll");

  const { mutateAsync: restartDraw } = useContractWrite(
    contract,
    "restartDraw"
  );

  const { mutateAsync: WithdrawCommission } = useContractWrite(
    contract,
    "WithdrawCommission"
  );

  const drawWinner = async () => {
    const notification = toast.loading("Picking a Lucky Winner...");
    try {
      const data = await DrawWinnerTicket({});

      toast.success("A Winner has been selected!", {
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

  const onWithdrawCommission = async () => {
    const notification = toast.loading("Withdrawing commission...");
    try {
      const data = await WithdrawCommission({});

      toast.success("Your Commission has been withdraw successfully!", {
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

  const onRestartDraw = async () => {
    const notification = toast.loading("Restarting draw...");
    try {
      const data = await restartDraw({});

      toast.success("Draw restarted successfully!", {
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

  const onRefundAll = async () => {
    const notification = toast.loading("Refunding all...");
    try {
      const data = await RefundAll({});

      toast.success("All refunded successfully!", {
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
    drawWinner,
    onWithdrawCommission,
    onRestartDraw,
    onRefundAll,
    totalCommission,
  };
};
