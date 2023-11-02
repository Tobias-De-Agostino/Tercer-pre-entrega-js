import { Card } from "./Card.js";

export const CardContainer = (props) => {

    let { ropa } = props;

    console.log(prendas)
    let section = document.createElement('section');

    section.setAttribute('class', 'card-container');
    ropa.forEach(ropa => {
        const card = Card(ropa);
        section.append(card);
    });

    return section;
}