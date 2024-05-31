import "./Nav.css"
import {FiHeart} from "react-icons/fi";
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai";

function Nav({handleInputChange, query}) {
    return (
        <nav>
            <div className="nav-container">
                <input type="text" onChange={handleInputChange} className="search-input" value={query} placeholder="Search your shoe type."/>
            </div>
            <div className="profile-container">
                <a href=""><FiHeart className={"nav-icons"}></FiHeart></a>
                <a href=""><AiOutlineShoppingCart className={"nav-icons"}></AiOutlineShoppingCart></a>
                <a href=""><AiOutlineUserAdd className={"nav-icons"}></AiOutlineUserAdd></a>
            </div>
        </nav>
    );
}

export default Nav;