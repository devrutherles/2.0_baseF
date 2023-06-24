import { useState, useEffect, useContext } from "react";
import { useServer } from "../server/server";
import { AuthContext } from "../context/auth";

export default function useHandleNotification() {
  const { getNotification } = useServer();
  const { user } = useContext(AuthContext);
  const [notification, setNotification] = useState(null);
  const fetchData = (id) => {
    getNotification(id, (error, response) => {
      if (error) {
        console.error("Error:", error);
      } else {
        setNotification(response);
      }
    });
  };

  useEffect(() => {
    const id = user?.$id;

    fetchData(id);
  }, [user]);
  return { notification };
}
