import React from "react";
import { Button } from "../Ships/Style";

export default function Basket(props) {
    const { cartItems, add, remove } = props;
    const itensPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itensPrice * 0.14;
    const shippingPrice = itensPrice > 22000 ? 0 : 650
    const totalprice = itensPrice + taxPrice + shippingPrice


    return <aside className="block col-1">
        <h2>Itens do Carrinho</h2>
        <div>
            {cartItems.length === 0 && <div>O carrinho está vazio</div>}



        </div>
        {cartItems.map((item) => (
            <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                    <button onClick={() => add(item)} className="add">+</button>
                    <button onClick={() => remove(item)} className="remove">-</button>
                </div>
                <div className="col-2 text-right">
                    {item.qty} X R${item.price.toFixed(2).replace(".", ",")}
                </div>
            </div>
        ))}
        {cartItems.length !== 0 && (
            <>
                <hr></hr>
                <div className="row">
                    <div className="col-2">Valor dos itens no Carrinho</div>
                    <div className="col-1 text-right">R${itensPrice.toFixed(2).replace(".", ",")}</div>
                </div>
                <div className="row">
                    <div className="col-2">Imposto</div>
                    <div className="col-1 text-right">R${taxPrice.toFixed(2).replace(".", ",")}</div>
                </div>
                <div className="row">
                    <div className="col-2">Frete</div>
                    <div className="col-1 text-right">R${shippingPrice.toFixed(2).replace(".", ",")}</div>
                </div>
                <div className="row">
                    <div className="col-2"><strong>Valor Total</strong></div>
                    <div className="col-1 text-right"><strong>R${totalprice.toFixed(2).replace(".", ",")}</strong></div>
                </div>
                <hr />
                {shippingPrice === 0 && <div><strong>Parabéns! Você ganhou Frete Grátis!</strong></div>}
                <div className="row">
                <Button onClick={()=>alert("Checkout")}>Checkout</Button>
                </div>
            </>
        )}
    </aside>
}