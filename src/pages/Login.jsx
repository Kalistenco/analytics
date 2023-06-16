import { useState } from 'react';
import { Button, TextField } from "@mui/material";
import Dashboard from "./Dashboard";

const Login = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return isLoggedIn ? (
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
        />
        <Button
            variant="contained"
            style={{
                backgroundColor: "#d23342",
                padding: "20px 40px",
                fontSize: "18px",

            }}
            onClick={() => setIsLoggedIn(true)}
        >Iniciar sesión</Button>
    </div>) : (<Dashboard />)
};

export default Login;