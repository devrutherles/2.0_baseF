import { useServer } from '@/server/server';
import { useRef, useState } from 'react';
import styles from './cad.module.sass';
import { useRouter } from 'next/router';
import ErrorIcon from '@mui/icons-material/Error';
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import cn from "classnames";
import { Id, account } from "../../../service/serve";





const Cad = ({ onConfirm, signInWithGoogle }) => {
    const { createAccount } = useServer();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [name, setName] = useState("");
    const history = useRouter();
    const [load, setLoad] = useState(false);
    const captchaRef = useRef(null);
    const [cadastroError, setCadastroError] = useState("");
    const [captcha, setCaptcha] = useState(true);
    const [error, setError] = useState({
        email: null,
        password: null,

    });


    const isValidEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const isValidName = (name) => {
        return name.length >= 2;
    };

    async function handller() {
        setError({ name: null, email: null, password: null, Rpassword: null }); // reset error state at the start



        if (!name || !isValidName(name)) {
            setError((prevError) => ({ ...prevError, name: name ? "Insira um nome valido" : "O nome é obrigatório" }));
            return;
        }

        if (!email || !isValidEmail(email)) {
            setError((prevError) => ({ ...prevError, email: email ? "Email inválido" : " O email é obrigatório" }));
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

        if (confirm !== password) {
            setError((prevError) => ({ ...prevError, confirm: "As senhas não coincidem" }));
            return;
        }

        createAccount(email, password, name, (error, response) => {
            if (error) {
                console.error(error);
            } else {
                console.log(response);
                alert("Cadastro realizado com sucesso");
                history.push("/");
            }

        });
    }


    const sendVerificationEmail = async (nome, email, codigo) => {
        const API_EMAIL_URL = `https://freteme.com/email?email=${email}&nome=${nome}&codigo=${codigo}`;
        const options = {
            method: "GET",
            url: API_EMAIL_URL,
        };

        try {
            const response = await axios.request(options);
            if (response.status === 200 || response.data.status === 200) {
                localStorage.setItem("codigo", codigo);
                onConfirm();
            }
        } catch (error) {
            console.error(error);
            setCadastroError("Não foi possível enviar o email de verificação");
            return false;
        }
    };


    return (
        <div className={styles.container}>
            <div className={styles.signin}>
                <div className={styles.image}>
                </div>
                <div className={styles.form_container}>
                    <div className={styles.form}>
                        <div className={styles.form_logo}>
                            <img src="../logo.png" alt="logo" />
                        </div>

                        <div className={styles.login}>
                            <label>Nome</label>
                            <input
                                placeholder="Digite seu nome"
                                name="name"
                                type="text"
                                required
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />


                            <label>Email</label>
                            <input type="email"
                                placeholder="Seu Email"
                                onChange={(event) => setEmail(event.target.value)}
                                required
                                value={email} />

                            <label>Senha</label>
                            <input
                                placeholder="Sua Senha"
                                name="password"
                                type="password"
                                onChange={(event) => setPassword(event.target.value)}
                                required
                                value={password}
                            />
                            <label>Senha</label>
                            <input className={styles.input}
                                onChange={(event) => setConfirm(event.target.value)}
                                required
                                value={confirm}
                                type="password"
                                placeholder="Confirme sua senha"
                            />

                            <div className={styles.signup}>
                                <button
                                    onClick={handller}
                                    className={styles.button}>Entrar</button>

                                <h1> {error.name && <p> <ErrorIcon />   {error.name}</p>}</h1>
                                <h1>  {error.email && <p> <ErrorIcon />  {error.email}</p>}</h1>
                                <h1>  {error.password && <p> <ErrorIcon />  {error.password}</p>}</h1>
                                <h1>  {error.confirm && <p> <ErrorIcon />  {error.confirm}</p>}</h1>
                            </div>
                            <div className={styles.divider}></div>
                            <button className={styles.google}>
                                <img src="../images/content/google.svg" alt="google" />
                                Cadastro com conta Google
                            </button>
                            <div className={styles.dont_cont}>
                                <h1>
                                    Ja possui conta? <a href="./historico">Entrar</a>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cad;
