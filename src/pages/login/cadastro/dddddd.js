import React from "react";
import styles from "./login.module.sass";
import cn from "classnames";
import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from '@mui/icons-material/Lock';
import Link from "next/link";
import { useServer } from "@/server/server";
import { Password } from "@mui/icons-material";



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const {loginUsingCredentials} = useServer ();
    
    const handleLogin = () => {
        if (!email || !password ) {
            alert("Preencha as informações");
            return;
        }
        const response = loginUsingCredentials(email, password, (response, error));
        if (error) {
            console.error(error);
        } else {
            console.warn(response);
        }
    };

    return (
        <div className={styles.container}>
        <form className={styles.form}>
            <div className={styles.logo}>
        <img src="../images/logo-dark.png" width={50} className={styles.logo} />
        </div>
        <div className={styles.inputs}>
        <div className={styles.email}>
        <div className={styles.iconM}>
                <EmailIcon />
            </div>    
        <label>
            
            <input
                required
                id="email"
                type="email"
                className={styles.input}
                placeholder="Email"
                value={email}
                // Note que "text" é um evento
                onChange={(text) => setEmail(text.target.value)}/>
            
        </label>

                </div>
                <div className={styles.senha}>
            <div className={styles.iconP} onClick={() => setShow(!show)}>
                {show ? (<LockOpenIcon />) : (<LockIcon />)}
            </div>
            <label>
            <input
                required
                id="password"
                type={show ? "text" : "password"}
                className={styles.input}
                placeholder="Senha"
                value={password}
                // Note que "text" é um evento
                onChange={(text) => setPassword(text.target.value)}
            />
        </label>
        </div>
                </div>
                <div className={styles.loginsub}>
                <button
                onClick={()=> handleLogin()}>Entrar</button>
                </div>
                <div className={styles.separar}>
                <div className={styles.separato}>
                </div>
              
                <h1> Ou </h1>

                 <div className={styles.separator}>
                </div>
                </div>
                <div className={styles.socialBtn}>
                    <div className={styles.google}>
                        <button>
                            <img src="../images/content/google.svg" width={100} />
                        </button>
                    </div>
                    <div className={styles.apple}>
                        <button>
                            <img src="../images/content/apple-dark.svg" width={100} />
                        </button>
                    </div>
                </div>
               
                <div className={styles.signin}>
                    <p className={styles.text}>Não tem conta?</p>
                    <Link href="./login/cadastro" className={styles.registerLink}>Cadastre-se</Link>  
                </div>
            </form>
        </div>
    );
}
