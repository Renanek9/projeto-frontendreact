import React from "react";

export default function Header (props) {
    const {countCartItems}=props
    return(
        <header className="row block center">
            <div>
                <a href="#/">
                <h1>Space Shop - A Loja da sua Nave Espacial!</h1>
                </a>
            </div>
            <div>
            <a href="#/cart">


            Cart {''}
            {countCartItems? (
                <button className="badge">{countCartItems}</button>
            ):(
                ''
            )}
            
            </a> <a href="#/signin">SignIn</a>
            </div>
        </header>
    )
}