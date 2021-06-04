import "./App.css" ;
import products from "./products";

const dataArray = products.map(product =>
        
<div>
        <img className="juiceItem" src={product.pic} alt="menu"/>
        <h4>{product.name}</h4>
        <p>{product.price} KD</p>  
</div>
  )

function App() {

  return (
   <div className="centered-item">
      
    <h1>🥤 JUICE LAB</h1>

    <h4>Be healthy and enjoy your juice</h4>

    <img
    src="1st.jpg" alt="juiceShop" 
    className="head-image"/>

      <div className="productsParent">
      {dataArray}
      </div>

   </div>
  );
}

export default App;
