


const OneJuice = (props) => {

    return(
        <div>
        <img className="juiceItem" src={props.product.pic} alt="menu"/>
        <h4 className="centered-item">{props.product.name}</h4>
        <p className="centered-item">{props.product.price} KD</p> 
</div>)
}

export default OneJuice;
