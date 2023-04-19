import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-around px-5">
            <div className="navbar-collapse justify-content-start">
                <ul className="navbar-nav justify-content-start">
                    <h3 className="nav-item nav-link " style={{color:"deeppink"}}>
                        MERN-DOCKER
                    </h3>
                </ul>
            </div>
        </nav>
    )
}