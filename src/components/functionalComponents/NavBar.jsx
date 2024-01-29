import "../css/NavBar.css"
import { Link } from "react-router-dom";


const NavBar = () =>{
    return(
        <ol>
            <li><Link to={"Home/"}>Home</Link></li>
            <li><Link to={"About/"}>About</Link></li>
            <li><Link to={"Experience/"}>Experience</Link></li>
            <li><Link to={"Login/"}>Login</Link></li>
            <li><Link to={"Signup/"}>SignUp</Link></li>
            <li><Link to={"Ref/"}>useRef</Link></li>
            <li><Link to={"Memo/"}>useMemo</Link></li>
            <li><Link to={"Call/"}>useCallback</Link></li>
        </ol>
        

    )
}
export default NavBar;