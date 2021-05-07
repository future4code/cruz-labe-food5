import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useUnprotectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      history.push("/home");
    }
  }, [history]);
};
