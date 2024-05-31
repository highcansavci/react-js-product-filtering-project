import Nav from "./navigation/Nav"
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
import {useState} from "react";
import "./index.css"
// Database
import products from "./data/data";
import Card from "./components/Card";

function App() {

    const [selectedCategory, setSelectedCategory] = useState(null);

    // Input Filter
    const [query, setQuery] = useState("")
    const handleInputChange = event => {
        setQuery(event.target.value)
    }
    const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);

    // Radio Filter
    const handleChange = event => {
        setSelectedCategory(event.target.value);
    }

    // Buttons Filter
    const handleClick = event => {
        setSelectedCategory(event.target.value);
    }

    function filteredData(products, selected, query) {
        let filteredProducts = products;
        console.log(selected)
        if (query) {
            filteredProducts = filteredItems
        }

        if (selected) {
            filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => category === selected || color === selected || company === selected || newPrice === selected || title === selected);
        }

        return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => (
            <Card
            key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}/>
        ))
    }

    const result = filteredData(products, selectedCategory, query)
  return (
    <>
        <Sidebar handleChange={handleChange}/>
        <Nav query={query} handleInputChange={handleInputChange}/>
        <Recommended handleClick={handleClick}/>
        <Products result={result}/>
    </>
  );
}

export default App;
