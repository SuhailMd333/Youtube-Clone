import { useState,useEffect,createContext } from "react";
import {fetchDataFromApi} from "../utils/Api";


export const Context = createContext()
export const AppContext = (props) => {

    const [loading , setloading] = useState(false)
    const [searchResult , setsearchResult] = useState([])
    const [selectCategories ,setselectCategories] = useState("New")
const [mobileMenu ,setMobileMenu] = useState(false)



useEffect(() =>{
    fetchSelectedCategoryData(selectCategories)
},[selectCategories])

const fetchSelectedCategoryData =  (query) => {
setloading(true)
    fetchDataFromApi(`search/?q=${query}`).then(({contents}) =>{
        console.log(contents)
        setsearchResult(contents)
        setloading(false)
    })
}
return (
<Context.Provider 
 value={{
    loading , 
    setloading,
    searchResult,
    setsearchResult,
    selectCategories,
    setselectCategories,
    mobileMenu,
    setMobileMenu

 }}
>
    {props.children}
</Context.Provider>



)



}