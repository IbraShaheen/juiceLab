import products from "../productsData";
import  OneJuice  from "./OneJuice";

 const JuiceList = () => {

    const dataArray = products.map(product => <OneJuice key= {product.id} product={product}/>) 
  // JuiceList brings the data from products then passed it as a prop to OneJuice

  return (dataArray); // {dataArray} Don't do that again it's not a component

}

export default JuiceList;
