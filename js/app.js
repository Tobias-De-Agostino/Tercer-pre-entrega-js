import { CardContainer } from "./components/CardContainer.js";
import { SelectedPrenda } from "./components/SelectedPrenda";
import { Prenda } from "./helpers/data.js";

export const App = () => {
    let appRoot = document.querySelector( '#root' );
    const userData = JSON.parse(localStorage.getItem('userTurn'));

    if(userData){
        appRoot.append(userData ? SelectedPrenda() : '')
    } else {
    appRoot.append(book({prendas: Prenda}))
    appRoot.append(CardContainer({prendas: Prenda}));
    }
}