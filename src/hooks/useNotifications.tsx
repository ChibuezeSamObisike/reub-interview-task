import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

const useNotifications = () => {
  const { openNotifications } = useContext<any>(NotificationContext);
  return { openNotifications };
};

export default useNotifications;
