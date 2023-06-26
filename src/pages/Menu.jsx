import { Button, Snackbar, Alert } from "@mui/material";
import Polls from "./Polls";
import Reports from "./Reports";
import { useState } from 'react';

export const Menu = ({ permissions }) => {
    const [showReports, setShowReports] = useState(false);
    const [showPolls, setShowPolls] = useState(false);
    const [open, setOpen] = useState(false);

    const handleReports = () => {
        if (permissions === "report:read") {
            setShowReports(true);
        } else {
            setOpen(true);
        }
    }

    if (showPolls) {
        return <Polls />
    } else if (showReports) {
        return <Reports />
    } else {
        return <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
                marginTop: '50px',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#d23342",
                        padding: "20px 40px",
                        fontSize: "18px",
                    }}
                    onClick={() => handleReports()}>
                    Dashboard Reportes</Button>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#d23342",
                        padding: "20px 40px",
                        fontSize: "18px",
                    }}
                    onClick={() => setShowPolls(true)}>
                    Dashboard Encuestas
                </Button>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(!open)}>
                <Alert onClose={() => setOpen(!open)} severity={"error"} sx={{ width: '100%' }}>
                    No tenés permisos para ver el reporte
                </Alert>
            </Snackbar>
        </>
    }
}