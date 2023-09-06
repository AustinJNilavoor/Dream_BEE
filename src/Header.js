import logo from "../src/Assets/Logo.png"
// import Hamburger from 'hamburger-react'
const Header = ({ navbarOpen, setNavbarOpen }) => {
    return(
        <div className="navbar">
        <img className="logo" src={logo} alt="null"/>
        <nav>
            <div className="hidden">
            <ul className="nav_links">
                <a href="Home.js">Home</a>
                <a href="products.js">Products</a>
                <a href="footer.js">Contact</a>
            </ul>
            </div>
            {/* <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} /> */}
        </nav></div>
    );
}
export default Header;