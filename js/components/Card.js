export const Card = (props) => {
    let {name, paragraph,  thumbnail, price, id} = props;
    let div = document.createElement('div');
    div.setAttribute('class', 'card-content');
    div.innerHTML = 
        `
        <img src=${thumbnail} alt="Imagen de ${name}">
        <div class="card-body">
            <h2> ${name}</h2>
            <p>$ ${price}</p>
            <a data-id=${id} class="card-link">Comprar prenda</a>
        </div>
    `;
    const selectedPrendaLink = div.querySelector('.card-link');
    selectedPrendaLink.addEventListener('click', () => handlePrendaSelection(props));
    
    return div;
}