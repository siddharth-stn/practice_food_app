import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const setTrue = (e) => {
      setStatus(true);
    };

    const setFalse = () => {
      setStatus(false);
    };

    window.addEventListener("offline", setFalse);

    window.addEventListener("online", setTrue);

    return () => {
      window.removeEventListener("offline", setFalse);
      window.removeEventListener("online", setTrue);
    };
  }, []);

  return status;
};

export default useOnlineStatus;
