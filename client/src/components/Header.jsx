import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const style = {
        height: "6opx",
        width: "60px",
        borderRadius: '100%',
        backgroundColor: "rgba(41,41,41, 0.5)",
        alignItems: "center",
        justifyContent: "center"
    }

    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link 
                    className="navbar-brand" 
                    to="/"  
                >
                    <div className="d-flex align-items-center justify-content-center">
                    Pete Blog <div className="dot mx-2"></div>
                    </div>
                </Link>
                {
                    !isLoggedIn && (
                        <div>
                        <Link className="btn btn-sm btn-outline-secondary me-2" to="/">Sign Up</Link>
                        <Link className="btn btn-sm btn-outline-secondary" to="/">Log in</Link>
                    </div>
                    )
                }
                {isLoggedIn && <div style={isLoggedIn? style : ""} className="profile text-center">
                    PK
                </div>}
            </div>
            </nav>
        </>
    )
};

export default Header;