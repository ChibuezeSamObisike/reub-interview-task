import { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";
import Alert from "../components/Alert";

export const NotificationContext = createContext({});

interface IProps {
  children: React.ReactNode;
}

const NotificationContextProvider = ({ children }: IProps) => {
  const [openData, setOpenData] = useState<Array<{ type: string; id: string }>>(
    []
  );
  const [timeouts, setTimeouts] = useState<NodeJS.Timeout[]>([]);

  const openNotifications = ({ type }: { type: string }) => {
    const constructNotifaction: { type: string; id: string } = {
      type,
      id: v4(),
    };
    setOpenData([...openData, constructNotifaction]);

    const timeoutId: NodeJS.Timeout = setTimeout(
      () => closeNotification(constructNotifaction.id),
      3000
    );
    setTimeouts([...timeouts, timeoutId]);
  };

  useEffect(() => {
    return () => {
      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, [timeouts]);

  const closeNotification = (id: string) => {
    const dataToSet = openData.filter((x) => x?.id !== id);
    setOpenData(dataToSet);
  };

  return (
    <NotificationContext.Provider
      value={{ openNotifications, closeNotification }}
    >
      <div
        className='flex items-center flex-col'
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
        }}
      >
        {openData.map((item) => (
          <div className='my-3'>
            <Alert
              variant={item?.type}
              key={item?.id}
              onClose={() => closeNotification(item?.id)}
            />
          </div>
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
