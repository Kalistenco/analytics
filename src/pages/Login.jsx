import { useState } from 'react';
import { Button, Snackbar, Alert, TextField } from "@mui/material";
import { Menu } from './Menu';

const Login = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [permissions, setPermissions] = useState();
    const [open, setOpen] = useState(false);

    const handleLogin = async () => {
        try {
            const res = await fetch("https://analytics-backend-nine.vercel.app/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            })
            if (res.ok) {
                const data = await res.json();
                setIsLoggedIn(true);
                setPermissions(data.permissions);
            } else {
                setOpen(true);
            }
        } catch (error) {
            console.log("ERROR", error)
            setOpen(true);
        }
    }

    return !isLoggedIn ? (<>
        <div style={{
            width: "430px",
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            justifyContent: "center",
        }}>
            <>
                <h1 style={{
                    width: "100%",
                    fontFamily: "'Alternate-Gothic-No3',Helvetica,Arial,sans-serif",
                    fontSize: "35px",
                    textTransform: "uppercase",
                    color: "#151e2d",
                    textAlign: "center",
                    marginTop: "45px",
                    fontWeight: 400,
                }} >iniciar sesión</h1>
                <div style={{
                    position: "relative",
                    content: "",
                    width: "100px",
                    margin: "0 auto",
                    border: "2px solid #151e2d",
                    display: "block",
                    marginBottom: "50px"
                }} ></div>
            </>
            <TextField
                id="outlined-basic"
                label="Usuario"
                variant="standard"
                InputProps={{
                    style: {
                        marginBottom: "40px",
                        fontSize: "24px",
                        padding: "4px"
                    }
                }}
                InputLabelProps={{
                    style: {
                        fontSize: 24,
                        fontWeight: 500,
                    }
                }}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                id="outlined-basic"
                label="Contraseña"
                variant="standard"
                type="password"
                InputProps={{
                    style: {
                        marginBottom: "60px",
                        fontSize: "24px",
                        padding: "4px"
                    }
                }}
                InputLabelProps={{
                    style: {
                        fontSize: 24,
                        fontWeight: 500,
                    }
                }}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                variant="contained"
                style={{
                    backgroundColor: "#d23342",
                    padding: "20px 40px",
                    fontSize: "18px",

                }}
                onClick={() => handleLogin(true)}
            >Iniciar sesión</Button>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(!open)}>
            <Alert onClose={() => setOpen(!open)} severity={"error"} sx={{ width: '100%' }}>
                Credenciales incorrectas
            </Alert>
        </Snackbar>
    </>) : (<Menu permissions={permissions} />)
};

export default Login;