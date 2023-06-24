import { useState } from 'react';
import styles from './historico.module.sass';
import { useServer } from '@/server/server';
import { useRouter } from 'next/router';
import ErrorIcon from '@mui/icons-material/Error';
import GoogleAuth from "./googleAuth";
import Image from '@/components/Imagem';



const Loader = () => (
    <div className={styles.loader}>
        <svg className={styles.circular} viewBox="25 25 50 50">
            <circle className={styles.path} cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
        </svg>
    </div>
);


const AppComponent = () => {
    const { loginUsingCredentials } = useServer();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const history = useRouter();
    const [loginError, setLoginError] = useState("");
    const [isLogged, setIsLogged] = useState(false);
    const [error, setError] = useState({
        email: null,
        password: null,
        login: null,
        loading: null
    });

    const isValidEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    async function loginHandler() {
        setError({ email: null, password: null }); // reset error state at the start
        if (!email || !isValidEmail(email)) {
            setError((prevError) => ({ ...prevError, email: email ? "Email inválido" : " O email é obrigatório" }));
            return;
        }

        if (!password) {
            setError((prevError) => ({ ...prevError, password: "A senha é obrigatória" }));
            return;
        }
        setIsLoading(true);
        setError({ loading: "Carregando..." });

        try {
            const response = await loginUsingCredentials(email, password);
            console.warn(response);
            if (response) {
                setTimeout(() => {
                    setIsLogged(true);
                    setIsLoading(false);
                    history.push("/settings");
                    console.log(isLogged);
                }, 1000);
            }
        } catch (error) {
            setIsLoading(false); // stop loading in case of error
            setError((prevError) => ({ ...prevError, login: "Email ou senha incorretos" }));
        }
    }




















    return (
        <div className={styles.container}>
            <div className={styles.signin}>
                <div className={styles.image}></div>
                <div className={styles.form_container}>
                    <div className={styles.form}>
                        <div className={styles.form_logo}>
                            <Image src={require('../../../public/images/logo.svg')} alt="logo" />
                        </div>

                        <div
                            className={styles.login}>
                            <label>Usuário</label>
                            <input type="email"
                                placeholder="Seu Email"
                                required
                                onChange={(event) => setEmail(event.target.value)}
                                value={email} />


                            <label>Senha</label>
                            <input
                                placeholder="Sua Senha"
                                name="password"
                                type="password"
                                onChange={(event) => setPassword(event.target.value)}
                                required
                                value={password}
                                onKeyPress={(event) => { if (event.key === "Enter") loginHandler(); }}
                            />

                            <div className={styles.row_remember}>
                                <div className={styles.check}>
                                    <input type="checkbox" />
                                    <label>Lembrar-me</label>
                                </div>
                                <div className={styles.remember}>
                                    <a href="#">Esqueci minha senha</a>
                                </div>
                            </div>
                            <div
                                className={styles.signup}>
                                <button

                                    onClick={loginHandler}
                                    className={styles.button}>
                                    {isLoading ? <Loader /> : "Entrar"}
                                </button>
                                <h1>  {error.email && <p> <ErrorIcon />  {error.email}</p>}
                                    {error.password && <p> <ErrorIcon />  {error.password}</p>}
                                    {error.login && <p> <ErrorIcon />  {error.login}</p>}

                                </h1>
                            </div>
                            <div className={styles.divider}></div>
                           
                           <GoogleAuth/>
                            <div className={styles.dont_cont}>
                                <h1>
                                    Nao tem uma conta? <a href="/historico/cadastro">Cadastre-se</a>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppComponent;
