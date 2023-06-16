import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import './Dashboard.css';
import { useEffect } from 'react';

const Dashboard = () => {

    const ws = new WebSocket('ws://15.229.178.29:8080/analytics')

    useEffect(() => {
        ws.onopen = () => {
            console.log("React client");
            ws.send("Hi from react")
        }

        ws.onmessage = (data) => {
            console.log("Message is ", data)
        }

    }, [])

    return (<>
        <PowerBIEmbed
            embedConfig={{
                type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                id: '462658f7-8abe-47e2-9255-ae4637acca1a',
                embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=462658f7-8abe-47e2-9255-ae4637acca1a&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed',
                accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMzQ0OTc5ZDAtZDMxZC00YzU3LThiYTAtNDkxYWZmNGFjYWVkLyIsImlhdCI6MTY4NjkyNDcyNSwibmJmIjoxNjg2OTI0NzI1LCJleHAiOjE2ODY5Mjg3NjcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFqUUVoeHA2Yys1SDRLREt1dTBNSURCUUEzMFdiV0VVU3h5Y0VIays3UW94ZmU1OTVWVFp5dGE1cGUrL014ejh4IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiS0FMSVNURU5DTyIsImdpdmVuX25hbWUiOiJNQVJUSU4gQUxFSk8iLCJpcGFkZHIiOiIxOTAuMTkxLjc4LjE5MyIsIm5hbWUiOiJLQUxJU1RFTkNPIE1BUlRJTiBBTEVKTyIsIm9pZCI6IjNkZTZjOWU1LWVhODctNDdiNC04ZWI1LWIwYmMwNzU2ZjY5OSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS02OTg5Mjk1My0xNjcwMTIyNDEtMTc3NzA5MDkwNS00NTgxNjciLCJwdWlkIjoiMTAwMzIwMDBBMTQzN0U0NyIsInJoIjoiMC5BUThBMEhsSk5CM1RWMHlMb0VrYV8wcks3UWtBQUFBQUFBQUF3QUFBQUFBQUFBQVBBQnMuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiTUM2dzhDVnJ5TVNTWWhCVXQtanpDSE95SndqRG4xeUVvS3NSTWpWVlM4RSIsInRpZCI6IjM0NDk3OWQwLWQzMWQtNGM1Ny04YmEwLTQ5MWFmZjRhY2FlZCIsInVuaXF1ZV9uYW1lIjoibWthbGlzdGVuY29AdWFkZS5lZHUuYXIiLCJ1cG4iOiJta2FsaXN0ZW5jb0B1YWRlLmVkdS5hciIsInV0aSI6Im1TVVY3bTIxWjBtVGJDaDE4MEljQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.BB-fzsudxv8mrfJsh-QkctSUjp7mqVq5ZNO2-MB0nnFDfxR2YpFJScxI6cndSeHgx1VeoagFtr6efxc2qgHAP37lX4TW1ftVywdv43D4WboPDkfGj5ruWa-1kTCRwvJeIlx8ql2oASyYvzBUNWkYilDBC-8TcAUuDAjy-u51d5l4ZtZVPbgw4FfSEbQRifcLKm2Ff99iF6BYyEnaRmEzpsMVkTx-lBef1my4qEQDZbAhUHnq1T6-CdIDXL3XL0IYfWFx2Qik0Sqw8XQ-Pht_D6Ht_1wZuCLFuG1NXcgGIQFZlnu3Q2reKcoT3E5ynxwUJgTSP0GHA8SkV_cLvU2_tA',
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
    </>)
}

export default Dashboard;