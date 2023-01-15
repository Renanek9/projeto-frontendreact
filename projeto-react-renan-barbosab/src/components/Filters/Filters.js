import { FiltersContainer } from "./Style";

export default function Filters(props) {
    return <FiltersContainer>
        <input
            placeholder="Pesquisar"
            value={props.query}
            onChange={(e) => { props.setQuery(e.target.value) }}
        />

        <input
            placeholder="Preço Minimo"
            type="number"
            value={props.minPrice}
            onChange={(e) => { props.setMinPrice(e.target.value) }}
        />

        <input
            placeholder="Preço Máximo"
            type="number"
            value={props.maxPrice}
            onChange={(e) => { props.setMaxPrice(e.target.value) }}
        />

        <span>
            <label for="sortingParameter">Organizar por:</label>
            <select
                name="sortingParameter"
                value={props.sortingParameter}
                onChange={(e) => { props.setSortingParameter(e.target.value) }}>
                <option value={"name"}>Item</option>
                <option value={"price"}>Preço</option>
            </select>

            <select
                value={props.order}
                onChange={(e) => { props.setOrder(e.target.value) }}
            >
                <option value={"cresc"}>Crescente</option>
                <option value={"decres"}>Decrescente</option>
            </select>
        </span>
    </FiltersContainer>
};