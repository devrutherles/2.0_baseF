import { Spinner } from "baseui/spinner";
import { useEffect } from "react";
import {
  Link,
  Redirect,
  useParams,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { createTeamMembership } from "../../service/auth";
const GoogleRedirectPage = () => {
  const { account, isLoading, isLoggedIn } = useAuth();
  const history = useHistory();


  const validate = async () => {
    if (account) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userName", account.name);
      localStorage.setItem("email", account.email);
      localStorage.setItem("user_id", account.$id);
       

      history.push("/");
    }
  };

  useEffect(() => {
    validate();
  }, [ account]);

  return (
    <div justifyContent={"center"} alignItems={"center"} flex={1}>
      <div space={2} alignItems="center">
        <Spinner accessibilityLabel="Carregando Conta" />
        <h3>
          Validando...
        </h3>
      </div>
    </div>
  );
};

export default GoogleRedirectPage;
