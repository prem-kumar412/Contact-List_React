/** ------------ IMPORTING CSS ------------ **/
import Style from "./navbar.module.css";
/** ------------ IMPORTING ROUTER DEPENDENCIES------------ **/
import { Link, Outlet } from "react-router-dom";



function Navbar() {

    return (
        <>
        <div className={Style.navbar}>
            <div className={Style.left}>
                <Link className={Style.title} to="/">Contact List</Link>
            </div>
            <div className={Style.right}>
                <Link to="/">Contacts</Link>
                <Link to="/add">+ Add Contact</Link>
            </div>
        </div>
        <Outlet />
        </>
    )
}



/** ------------ EXPORTING MODULES ------------ **/
export default Navbar;