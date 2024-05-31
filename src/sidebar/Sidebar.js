import "./Sidebar.css"
import Category from "./category/Category";
import Price from "./price/Price";
import Colors from "./colors/Colors";

function Sidebar({handleChange}) {
    return (
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1>🛒</h1>
                </div>
                <Category handleChange={handleChange}/>
                <Price handleChange={handleChange}/>
                <Colors handleChange={handleChange}/>
            </section>
        </>
    );
}

export default Sidebar;