import logo from "../src/Assets/Logo.png"
const Header = () => {
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="null" />
            <nav>
                <div className="hidden">
                    <ul className="nav_links">
                        <a href="Home.js">Home</a>
                        <a href="products.js">Products</a>
                        <a href="cart.js">Cart</a>
                        <a href="footer.js">Contact</a>
                    </ul>
                </div>
                <div className="hidden-desk"><div className="sym">
       <a href="https://www.linkedin.com/company/dream-bee/about/"><svg className="socials" xmlns="http://www.w3.org/2000/svg" height="22.857" viewBox="0 0 20 22.857" width="20"><path d="M18.571 1.429H1.424C.638 1.429 0 2.076 0 2.871v17.116c0 .794.638 1.442 1.424 1.442h17.147c.786 0 1.429-.647 1.429-1.442V2.871c0-.795-.643-1.442-1.429-1.442zM6.045 18.571H3.08V9.027h2.969v9.544zM4.563 7.723a1.72 1.72 0 0 1 0-3.437c.946 0 1.719.772 1.719 1.719 0 .951-.768 1.719-1.719 1.719zm12.594 10.848h-2.964v-4.642c0-1.107-.022-2.531-1.54-2.531-1.545 0-1.781 1.205-1.781 2.451v4.722H7.908V9.027h2.844v1.304h.04c.397-.75 1.366-1.54 2.808-1.54 3 0 3.558 1.978 3.558 4.549v5.231z"/></svg></a> 

    </div></div>
            </nav></div>
    );
}
export default Header;