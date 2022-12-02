import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

type Props = {};

const Loading = (props: Props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      <RingLoader color="#36d7b7" size={80} />
    </div>
  );
};

export default Loading;
