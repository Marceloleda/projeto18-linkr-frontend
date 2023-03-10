import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Form from "../../components/Form";
import Input from "../../components/Input";
import StyledLink from "../../components/StyledLink";
import StyledDiv from "../../components/StyledDiv";
import { ThreeDots } from "react-loader-spinner";
import { white } from "../../constants/colors";

export default function Login() {
  const [formData, setformData] = useState({ email: "", password: ""});
  const [isLoading, setIsLoading] = useState(false);
  const { auth, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth && auth.token) {
      navigate("/");
    }
  }, []);

  function handleChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    const promise = api.login({ ...formData });
    promise.then((response) => {
      setIsLoading(false);

      login(response.data);
      navigate("/timeline");
    });
    promise.catch(() => {
      setIsLoading(false);

      alert("Erro, tente novamente");
    });
  }

  return (
    <Container>
      <StyledDiv>
        <h1>Linkr</h1>
        <h2>save, share and discover <br />
          the best links on the web
        </h2>
      </StyledDiv>

      <Form onSubmit={handleSubmit}>
        <Input
          data-test="email"
          type="email"
          placeholder="e-mail"
          name="email"
          onChange={handleChange}
          value={formData.email}
          disabled={isLoading}
          required
        />
        <Input
          data-test="password"
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          disabled={isLoading}
          required
        />

        <Button data-test="login-btn" type="submit" disabled={isLoading}>
          {
            isLoading
              ? <ThreeDots type="ThreeDots" color={`${white}`} height={50} width={50} />
              : "Log In"
          }
        </Button>

        <StyledLink data-test="sign-up-link" to="/sign-up">
        First time? Create an account!
        </StyledLink>

      </Form>
    </Container>
  );
}
