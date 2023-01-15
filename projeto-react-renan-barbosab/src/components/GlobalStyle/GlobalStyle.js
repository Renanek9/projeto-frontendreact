import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI'
}

body {
  font-family: Helvetica;
}
h1, h2, h3 {
  margin: 0.7rem 0;
}
h1{
font-size: 1.5rem;
}
h2{
font-size: 1.2rem;
}
h3{
font-size: 0.9rem;
}
a {
  text-decoration: none
}
.row{
  display: flex;
  justify-content: space-between;
}
.col-1{
  flex: 1;
}
.col-2{
  flex: 2;
}
.block {
  background-color: lightgray;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 0.5rem;

}
.row.center{
  align-items: center;
}
img.small {
  max-height: 8rem;
}
.text-right {
  text-align: right;
}
button.add{
    background-color: lightgreen;
    border-radius: 35%;
    width: 1.5rem;
    cursor: pointer;
}
button.remove {
    background-color: lightcoral;
    width: 1.5rem;
    border-radius: 35%;
    cursor: pointer;
}
button.badge {
    background-color: #f04040;
    border: none;
    color: #ffffff;
    width: 1.5rem;
}



`