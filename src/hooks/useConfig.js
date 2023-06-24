import { useState, useEffect, useContext } from "react";
import { useServer } from "../server/server";

export default function useHandleConfig() {
  const { getConfig } = useServer();
  const [config, setConfig] = useState([]);
  const fetchData = () => {
    getConfig((error, response) => {
      if (error) {
        console.error("Error:", error);
      } else {
        setConfig(response.documents);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    config,
  };
}
