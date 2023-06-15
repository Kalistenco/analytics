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
                accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMzQ0OTc5ZDAtZDMxZC00YzU3LThiYTAtNDkxYWZmNGFjYWVkLyIsImlhdCI6MTY4NjY5NjQzOSwibmJmIjoxNjg2Njk2NDM5LCJleHAiOjE2ODY3MDEzMzMsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFOWERPS21DOVJNWGpCTkFwQ3R4WGxmZWVHd1pvSUNrUG9zK3BCWXg2M2M3amRzeXcwOFhyYmpCNjI3ZUl4RWdMIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiS0FMSVNURU5DTyIsImdpdmVuX25hbWUiOiJNQVJUSU4gQUxFSk8iLCJpcGFkZHIiOiIxOTAuMTkxLjc4LjE5MyIsIm5hbWUiOiJLQUxJU1RFTkNPIE1BUlRJTiBBTEVKTyIsIm9pZCI6IjNkZTZjOWU1LWVhODctNDdiNC04ZWI1LWIwYmMwNzU2ZjY5OSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS02OTg5Mjk1My0xNjcwMTIyNDEtMTc3NzA5MDkwNS00NTgxNjciLCJwdWlkIjoiMTAwMzIwMDBBMTQzN0U0NyIsInJoIjoiMC5BUThBMEhsSk5CM1RWMHlMb0VrYV8wcks3UWtBQUFBQUFBQUF3QUFBQUFBQUFBQVBBQnMuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiTUM2dzhDVnJ5TVNTWWhCVXQtanpDSE95SndqRG4xeUVvS3NSTWpWVlM4RSIsInRpZCI6IjM0NDk3OWQwLWQzMWQtNGM1Ny04YmEwLTQ5MWFmZjRhY2FlZCIsInVuaXF1ZV9uYW1lIjoibWthbGlzdGVuY29AdWFkZS5lZHUuYXIiLCJ1cG4iOiJta2FsaXN0ZW5jb0B1YWRlLmVkdS5hciIsInV0aSI6InBkZk5vQzQ2Q0VTTEo2ZXR1UVFMQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.IhEaDuBGJGxw8iI6TjwPUqSZru6EzZuAoNODxKg-Nf_7qM0aO43UjOyutvgZH-Ic5qMGITTV2Ow5ESI5wxdw-A_0DVdlHBiCpTKPZanZkMErAUz4mdH7-QuWqlNmJO0_KlZjR0283FP_rAtliH5y9cW7zQASNWhg1LksHqU2b_IgRBpgR7ctURnoAO1vrhChAomrx7HJWHJA2GsKJqcXXYQr-qEkuudaTcDzSUj1MQe5hgL1aeIcYWAtK4JJ6qqz4Ty06ztP7iOvDWNeM3KGcHY3SDHkrnzhf7WvJy926Fhtq1jEdZHc7OV-lfDkCKNXknHt_He_hlbJewlsw6AKAg',
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