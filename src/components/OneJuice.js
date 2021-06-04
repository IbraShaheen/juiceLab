import { ProductsParent, CenteredItem, JuiceItem} from "../styles";
import "../App.css" ;

const OneJuice = (props) => {

    return(
        <div>
        <ProductsParent>
        
          <JuiceItem  src={props.product.pic} alt="menu"/>
          </ProductsParent>
         <h5 >{props.product.name}</h5> 
         <p>{props.product.price} KD</p> 
         </div>
        )
}

export default OneJuice;

// line 9 >>> h4, line 10 >>> p 