import "../css/NavBar.css"
import { Link } from "react-router-dom";


const NavBar = () =>{
    return(
        <ol>
            <li><Link to={"About/"}>About</Link></li>
            <li><Link to={"Experience/"}>Experience</Link></li>
            <li><Link to={"Login/"}>Login In</Link></li>
        </ol>
        

    )
}
export default NavBar;