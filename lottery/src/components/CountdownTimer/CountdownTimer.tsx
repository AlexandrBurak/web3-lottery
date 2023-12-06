import React, { FC } from "react";
import Countdown from "react-countdown";

import CountdownBlock from "./CountdownBlock";
import ClosedMessage from "./ClosedMessage";

type Props = {
  expiration: string;
};
type renderProps = {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

const CountdownTimer: FC<Props> = ({ expiration }) => {
  const renderer = ({ hours, minutes, seconds, completed }: renderProps) => {
    if (completed) {
      return (
        <div>
          <ClosedMessage />
          <div>
            <h3 className="text-white text-sm mb-2 italic">Time Remaining</h3>
            <div className="flex space-x-6">
              <CountdownBlock value={hours} label="hours" />
              <CountdownBlock value={minutes} label="minutes" />
              <CountdownBlock value={seconds} label="seconds" />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h3 className="text-white text-sm mb-2 italic">Time Remaining</h3>
          <div className="flex space-x-6">
            <CountdownBlock value={hours} label="hours" />
            <CountdownBlock value={minutes} label="minutes" />
            <CountdownBlock value={seconds} label="seconds" />
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Countdown
        date={new Date(Number(expiration) * 1000)}
        renderer={renderer}
      />
    </div>
  );
};

export default CountdownTimer;
