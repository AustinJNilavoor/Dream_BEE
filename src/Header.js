import logo from "../src/Assets/Logo.png"
const Header = () => {
    return(
        <div className="navbar">
        <img className="logo" src={logo} alt="null"/>
        <nav>
            <div>
            <ul className="nav_links">
                <a href="Home.js">Home</a>
                <a href="products.js">Products</a>
                <a href="cart.js">Cart</a>
                <a href="footer.js">Contact</a>
            </ul>
            </div>
        </nav></div>
    );
}
export default Header;