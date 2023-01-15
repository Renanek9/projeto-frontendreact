import React from "react";
import Ship from "../Ships/Ship";

export default function Main(props) {
    const { ships, add, query, minPrice, maxPrice, sortingParameter, order } = props;

    return <main className="block col-2">
        <h2>Naves</h2>
        <div className="row">
            {ships
                .filter((ship) => { return ship.name.includes(query) })
                .filter((ship) => { return ship.price >= minPrice || minPrice === "" })
                .filter((ship) => { return ship.price <= maxPrice || maxPrice === "" })
                .sort((item, nextItem) => {
                    switch (sortingParameter) {
                        case "price":
                            return item.price - nextItem.price
                        default:
                            return item.name.localeCompare(nextItem.name)
                    }
                })
                .sort(() => {
                    if (order === "cresc") {
                        return 0
                    } else {
                        return -1
                    }
                })
                .map((ship) => (
                    <Ship key={ship.id} ship={ship} add={add}></Ship>
                ))}
        </div>
    </main>
}

