import { useState } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import { Button, Snackbar, Alert } from "@mui/material";
import './Dashboard.css';

const Dashboard = () => {

    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleClick = async () => {
        console.log("HANDLING CLICK")
        try {
            const res = await fetch("https://analytics-backend-nine.vercel.app/", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' }
            })
            console.log("RES", res)
            if (res.ok) {
                console.log("RES", res)
                setSuccess(true);
            }
            setOpen(true);
        } catch (error) {
            console.log("ERROR", error)
        }
    }

    return (<>
        <div style={{
            display: "flex"
        }}>
            <div style={{
                width: '30%',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#d23342",
                        padding: "20px 40px",
                        margin: "50px",
                        fontSize: "18px",
                        height: "75px"
                    }}
                    fullWidth={false}
                    onClick={() => handleClick()}
                >Obtener reporte</Button>
            </div>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <PowerBIEmbed
                    embedConfig={{
                        type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                        id: '462658f7-8abe-47e2-9255-ae4637acca1a',
                        embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=462658f7-8abe-47e2-9255-ae4637acca1a&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed',
                        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMzQ0OTc5ZDAtZDMxZC00YzU3LThiYTAtNDkxYWZmNGFjYWVkLyIsImlhdCI6MTY4NzI4MzEzNywibmJmIjoxNjg3MjgzMTM3LCJleHAiOjE2ODcyODg4MTEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUEzaUY4Z3doeFpNYVhKbzVKYnF3M0xjVlkxdDFpR2hKaktwSVV3SlYxdkM5NDgycmJhd0Z6M1lMdUEvYmRuNjFWIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiS0FMSVNURU5DTyIsImdpdmVuX25hbWUiOiJNQVJUSU4gQUxFSk8iLCJpcGFkZHIiOiIxOTAuMTkxLjc4LjE5MyIsIm5hbWUiOiJLQUxJU1RFTkNPIE1BUlRJTiBBTEVKTyIsIm9pZCI6IjNkZTZjOWU1LWVhODctNDdiNC04ZWI1LWIwYmMwNzU2ZjY5OSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS02OTg5Mjk1My0xNjcwMTIyNDEtMTc3NzA5MDkwNS00NTgxNjciLCJwdWlkIjoiMTAwMzIwMDBBMTQzN0U0NyIsInJoIjoiMC5BUThBMEhsSk5CM1RWMHlMb0VrYV8wcks3UWtBQUFBQUFBQUF3QUFBQUFBQUFBQVBBQnMuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiTUM2dzhDVnJ5TVNTWWhCVXQtanpDSE95SndqRG4xeUVvS3NSTWpWVlM4RSIsInRpZCI6IjM0NDk3OWQwLWQzMWQtNGM1Ny04YmEwLTQ5MWFmZjRhY2FlZCIsInVuaXF1ZV9uYW1lIjoibWthbGlzdGVuY29AdWFkZS5lZHUuYXIiLCJ1cG4iOiJta2FsaXN0ZW5jb0B1YWRlLmVkdS5hciIsInV0aSI6Il9XUXlxOHNlS0UtT3hmc05oVi1yQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.FD7dgNNtqxgdstk-XppK989kazX-w31fVwJz5ZOEGgi9mvX2MJohuS3lLnjzFJP_J-d4SsEhSSCvCmVXDMYnDK4CrjLL4143etKjw0iNNGOnmNbDnmf8yGyjLBvuKr3OSMXj4pmunsZ3s1YtG_09eNyQeHdC6ybBQ8gPwtwjRQcVRD0JC4YNDL4mqQYfDSK4jBRdMn_FByf7H4ahbLhiO3DfFVbu9nkiaojZqNbDEtQB18Wq1QhBp4mvDa_KRScJfJgUkjB1_JbfxYw6viwhH2rQERYGKGZG91HgTUl5Jaj3ra0--FMl6D1MjJCHvq_9eKoIdFOLBECGS40CewuNzw',
                        tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
                        settings: {
                            panes: {
                                filters: {
                                    expanded: false,
                                    visible: false
                                }
                            },
                            background: models.BackgroundType.Transparent,
                        }
                    }}

                    eventHandlers={
                        new Map([
                            ['loaded', function () { console.log('Report loaded'); }],
                            ['rendered', function () { console.log('Report rendered'); }],
                            ['error', function (event) { console.log(event.detail); }],
                            ['visualClicked', () => console.log('visual clicked')],
                            ['pageChanged', (event) => console.log(event)],
                        ])
                    }

                    cssClassName={"reportClass"}

                    getEmbeddedComponent={(embeddedReport) => {
                        window.report = embeddedReport;
                    }}
                />
            </div>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(!open)}>
            <Alert onClose={() => setOpen(!open)} severity={success ? "success" : "error"} sx={{ width: '100%' }}>
                {success ? "Reporte generado!" : "Error el generar reporte"}
            </Alert>
        </Snackbar>
    </>)
}

export default Dashboard;