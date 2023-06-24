import Image from "../../../components/Image";
import React, { useEffect, useState } from "react";
import TextInput from "../../../components/TextInput";
import axios from "axios";
import cn from "classnames";
import styles from "./SignIn.module.sass";
import { use100vh } from "react-div-100vh";
import GoogleAuth from "./googleAuth";
import { useServer } from "../../../server/server"
import { useRouter } from "next/router";
import ErrorIcon from '@mui/icons-material/Error';
import Loader from "@/load/load";
import Link from "next/link";
import { Button } from "@mui/material";


export default function Login() {
  const { loginUsingCredentials } = useServer();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [error, setError] = useState({
    email: null,
    password: null,
  });

  const isValidEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const [load, setLoad] = useState(false)
  useEffect(() => { setLoad(true) }, [])

  async function handller() {
    setError({ email: null, password: null }); // reset error state at the start

    if (!email || !isValidEmail(email)) {
      setError((prevError) => ({ ...prevError, email: email ? "Email inválido" : "Email não pode estar vazio" }));
      return;
    }

    if (!password) {
      setError((prevError) => ({ ...prevError, password: "A senha é obrigatória" }));
      return;
    }

    if (password.length < 8) {
      setError((prevError) => ({ ...prevError, password: "A senha deve ter 8 ou mais caracteres" }));
      return;
    }

    try {
      await loginUsingCredentials(email, password);
      router.push("../");
    } catch (error) {
      setError({ password: "Email ou senha incorretos" });
      console.error(error);
    }
  }


  const items = [
    "Movendo seus negócios para o próximo nível",
    "Logística fácil e eficiente",
    "Transformando a logística para o mundo digital:",
    "Acompanhe tudo em tempo real",
  ];
  if (load) {


    return (

      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.wrap}>
              <div className={styles.preview}>
                <img src="/images/content/login-pic.png" alt="Login" />
              </div>
              <div className={cn("h4", styles.subtitle1)}>Freteme</div>
              <ul className={styles.list}>
                {items.map((x, index) => (
                  <li key={index}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.head}>
              <Link className={styles.logo} href="/">
                <Image
                  className={styles.pic}
                  src="/images/logo-dark.png"
                  srcDark="/images/logo-light.png"
                  alt="Core"
                />
              </Link>
              <div className={cn("h5", styles.title)}>
                <h1>Bem vindo a FreteMe!</h1>
              </div>
              <div className={styles.body}>
                <label className={styles.label}>Email</label>
                <TextInput
                  className={styles.field}
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  icon="mail"
                  value={email}
                  setValue={(text) => setEmail(text)}
                  autocomplete="email.com"
                />
                <label className={styles.label}>Senha</label>
                <TextInput
                  className={styles.field}
                  name="password"
                  type="password"
                  placeholder="Senha"
                  required
                  icon="lock"
                  value={password}
                  setValue={(text) => setPassword(text)}
                />
                <button onClick={handller} className={cn("button", styles.button)}>
                  Entrar
                </button>
                <div className={styles.lista}>
                  <div className={styles.error}>

                    {error.email && <p> <ErrorIcon /> {error.email}</p>}
                    {error.password && <p><ErrorIcon /> {error.password}</p>}
                  </div>
                  <div className={styles.subtitle}>
                    <div className={styles.separator}></div>
                    <h1>Ou</h1>
                    <div className={styles.separator2}></div>
                    <GoogleAuth />

                  </div>
                </div>
                <div className={styles.info}>
                  Não tem uma conta?{"  "}
                  <Link
                    className={styles.link}
                    href="/cadastro">
                    Cadastre-se
                  </Link>
                  <div className={styles.separator3}></div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (<Loader />)
  }
}



