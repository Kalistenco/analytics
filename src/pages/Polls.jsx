import { useEffect } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import './Dashboard.css';

const Polls = () => {

    useEffect(() => {
        const interval = setInterval(async () => {
            await window.report.refresh();            
        }, 20000);
        return () => clearInterval(interval);
    }, [])

    return (<>
        <div style={{
            display: "flex"
        }}>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <PowerBIEmbed
                    embedConfig={{
                        type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                        id: 'cc884a0b-06c6-4ba3-9897-dfe9f6046786',
                        embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=cc884a0b-06c6-4ba3-9897-dfe9f6046786&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed',
                        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMzQ0OTc5ZDAtZDMxZC00YzU3LThiYTAtNDkxYWZmNGFjYWVkLyIsImlhdCI6MTY4NzY0MTI5MywibmJmIjoxNjg3NjQxMjkzLCJleHAiOjE2ODc2NDUyMDcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUF6WFJOdG93S1VuMjlSL3Q2YjhyaTlBS3l5YUpVVi9YK1RwaXpaSTIxNHM4LzQ2d2F6TTV4RFA3SGtxSnNrTG94IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiS0FMSVNURU5DTyIsImdpdmVuX25hbWUiOiJNQVJUSU4gQUxFSk8iLCJpcGFkZHIiOiIxOTAuMTkxLjc4LjE5MyIsIm5hbWUiOiJLQUxJU1RFTkNPIE1BUlRJTiBBTEVKTyIsIm9pZCI6IjNkZTZjOWU1LWVhODctNDdiNC04ZWI1LWIwYmMwNzU2ZjY5OSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS02OTg5Mjk1My0xNjcwMTIyNDEtMTc3NzA5MDkwNS00NTgxNjciLCJwdWlkIjoiMTAwMzIwMDBBMTQzN0U0NyIsInJoIjoiMC5BUThBMEhsSk5CM1RWMHlMb0VrYV8wcks3UWtBQUFBQUFBQUF3QUFBQUFBQUFBQVBBQnMuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiTUM2dzhDVnJ5TVNTWWhCVXQtanpDSE95SndqRG4xeUVvS3NSTWpWVlM4RSIsInRpZCI6IjM0NDk3OWQwLWQzMWQtNGM1Ny04YmEwLTQ5MWFmZjRhY2FlZCIsInVuaXF1ZV9uYW1lIjoibWthbGlzdGVuY29AdWFkZS5lZHUuYXIiLCJ1cG4iOiJta2FsaXN0ZW5jb0B1YWRlLmVkdS5hciIsInV0aSI6IldJNnp4N1JVc1VhWlBlM2ZmQ3NQQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.luhyy54hBKRSg_hfvN1MaAZ7YtB48ZQkac2xre2WKGF25Ln1sXSV5LZAf3-Fw9FCIsR2p9C96ZquUZ-USLipCKZNpRax5pIUmcaWGIwT_GP7OgGtfm4UxX1MpL6Hd28YjcIf4Gao2Mvz4BShCVkHtEsS41JJpeGihObl3k-2YiwkIx3O6YHtcVwr_Ej_T130LonVu56sMSwzkwkqJR9IAL6NYr4Zt7D5nMyLs6fhJyRYeGS0hARob_ukyy96LJh-NAO8dSOa02_AS-VbZcH7uO-gqcmRdppW-_6NFyjvPtQqGTq27-_WZ4THW-r9Gg_hk-BT9ROIRU03un1Th_ACeQ',
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
    </>)
}

export default Polls;