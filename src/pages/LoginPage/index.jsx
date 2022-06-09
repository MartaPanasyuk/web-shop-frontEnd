import { LoginForm } from "../../components/LoginForm";
import "./style.css";

const LoginPage = (props) => {
  return (
    <div>
      <h2>Kekeke</h2>
      <LoginForm tokenSetter={props.tokenSetter} />
    </div>
  );
};
export { LoginPage };
