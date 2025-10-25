import "./SearchBar.css"
import { searchByName } from "../services/ProductService";
import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";
import ProductList from "./ProductList";
function SearchBar({setProducts}){
    const [searchTerm,setSearchTerm]=useState("");

    const handleChange=(e)=>{
        setSearchTerm(e.target.value);
    }
    const collectProducts =async()=>{
        try{
            if(searchTerm){
                const product=await searchByName(searchTerm);
                setProducts(product.data);
            }
            else{
                const response=await getProducts();
                setProducts(response.data);
            }
        }
        catch(err){
            alert("error while fetching")
        }
    }
    useEffect(()=>{
        collectProducts();
    },[searchTerm]);

    return(
        <div className="search-container">
        <input name="name" placeholder="Search your product"
        value={searchTerm}
        onChange={handleChange}
        
        ></input>

        <button onClick={()=>setSearchTerm("")}> Reset </button>
        </div>
    )
}
export default SearchBar;