import psgBanner from '../images/psg2.png';

const Header = () => {
    return (<div style={{
        width: "100%",
        height: "100px",
        padding: "0.5%",
        backgroundColor: "#1a2b4c",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <img src={psgBanner} height={100} />
    </div>)
}

export default Header;