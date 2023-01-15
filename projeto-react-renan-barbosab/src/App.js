import React, { useState } from "react";
import Header from "../src/components/Header/Header"
import Basket from "./components/Basket/Basket";
import Main from "./components/Main/Main";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import shipList from "../src/components/Assets/Data.json"
import Filters from "./components/Filters/Filters";

export function App() {
  const [ ships ] = useState(shipList);
  const [cartItems, setCartItems] = useState([]);
  const [query, setQuery] = useState("")
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [sortingParameter, setSortingParameter] = useState("name")
  const [order, setOrder] = useState("cresc")


  const add = (ship) => {
    const exist = cartItems.find(x => x.id === ship.id);
    if (exist) {
      setCartItems(cartItems.map(x =>
        x.id === ship.id ? { ...exist, qty: exist.qty + 1 } : x
      )
      )
    } else {
      setCartItems([...cartItems, { ...ship, qty: 1 }])
    }
  }

  const remove = (ship) => {
    const exist = cartItems.find((x) => x.id === ship.id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== ship.id))
    } else {
      setCartItems(cartItems.map(x =>
        x.id === ship.id ? { ...exist, qty: exist.qty - 1 } : x
      )
      )
    }
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header countCartItems={cartItems.length}></Header>

      <Filters
        query={query}
        setQuery={setQuery}

        minPrice={minPrice}
        setMinPrice={setMinPrice}
        
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}

        sortingParameter={sortingParameter}
        setSortingParameter={setSortingParameter}

        order={order}
        setOrder={setOrder}

        />

      <div className="row">

        <Main 
        add={add} 
        ships={ships} 
        query={query} 
        minPrice={minPrice} 
        maxPrice={maxPrice}
        sortingParameter={sortingParameter}
        order={order}
        
        ></Main>

        <Basket add={add} remove={remove} cartItems={cartItems}></Basket>
      </div>
    </div>
  )
}