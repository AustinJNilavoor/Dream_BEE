import logo from "../src/Assets/Logo.png"
const Header = () => {
    return(
        <>
        <img className="logo" src={logo} alt="null"/>
        <nav>
            <div>
            <ul className="nav_links">
                <li><a href="Home.js">Home</a></li>
                <li><a href="products.js">Products</a></li>
                <li><a href="cart.js">Cart</a></li>
                <li><a href="footer.js">Contact</a></li>
            </ul></div>
        </nav></>
    );
}
export default Header;