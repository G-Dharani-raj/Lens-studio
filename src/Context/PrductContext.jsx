
import { createContext ,useState,useEffect ,useRef } from "react";
import axios from "axios";

export const productContext = createContext();

const getData = (category="eyeglasses-mix",id="")=>{
    let tempParam = "&id="
    if(id!==""){
        tempParam = tempParam+id
    }
return axios.get(`https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses?category=${category}`)
}

const initialProductData = {
    isLoading:true,
    data:[],
    isError:false,
    selectedCategory:null,

} 

export default function PrductContext({children}) {

const [productData , setProductData]   = useState(initialProductData) 

const getCategoryProducts = (category  ) =>{
    let selected_cat = category
    if(category==="Full Rim"){
        category='full_rim'
    }
    else if(category==="Half Rim"){
        category='half_reem'

    }
   
 setProductData({...productData,selectedCategory:category ,isLoading:true})
  
 
 getData(category.toLowerCase()).then((res)=>setProductData({...productData,data:res.data ,selectedCategory:selected_cat ,isLoading:false}))
}

useEffect(()=>{
 getData().then((res)=>{setProductData({...productData,data:res.data,isLoading:false}) ;console.log(res)})
},[])
console.log("context run",productData)

  return (
     <productContext.Provider value={{...productData,getCategoryProducts}}>
        {
            children
        }
     </productContext.Provider>
  )
}
