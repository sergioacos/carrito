import { useState } from "react";
type FormProps = {
     addList: (p:Product)=>void;
};



function Form(props:FormProps) {
    const[name, setName]= useState(" ");
    const[price, setPrice]= useState(0);
    const[detail, setDetail]= useState(" ");
    
    function handleForm(event){
        event.preventDefault();
        
}
    return(
        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="name">Nombre  del Producto</label>
                <input type="text"id="name" placeholder="Ingrese el producto" value={name} onChange={(event)=>setName(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="detail">Descripción del Producto</label>
                <input type="text"id="detail" placeholder="Ingrese la descripción" value={detail} onChange={(event)=>setDetail(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="price">Precio  del Producto</label>
                <input type="text"id="price" placeholder="Ingrese el precio" value={price} onChange={(event)=>setPrice(event.target.value)}/>
            </div>
            <button type="submit" disabled={!(name!="" && price >0)} >Agregar Producto</button>
        </form>
    );
}
export default Form;