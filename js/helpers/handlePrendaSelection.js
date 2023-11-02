export const handlePrendaSelection = (prendas) => {
    const selectedprenda = prendas;

    localStorage.setItem('selectedPrenda', JSON.stringify(selectedPrenda));

    const selectedPrendaDisplay = document.querySelector('#selected-prenda');
    selectedPrendaDisplay.textContent= `Queres llevarte la prenda ${prendas.name}`
}