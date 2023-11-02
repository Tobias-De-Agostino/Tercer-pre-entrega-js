export const Book = () => {
    const form = document.querySelector('#form');
    const formContainer = document.querySelector('.form-container-inputs');

    const saveData = () => {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const day = document.querySelector('#day').value;

        const selectedPrenda = JSON.parse(localStorage.getItem('selectedPrenda'));

        if (name && email && day && selectedPrenda && selectedPrenda.id) {
            const data = {
                name,
                email,
                day,
                prenda:selectedPrenda
            }
            localStorage.setItem('userTurn', JSON.stringify(data));
            console.log(data)
        }
    }
    formContainer.innerHTML = `
    <div>
        <label for="name">Nombre:</label>
        <input id="name" placeholder="Nomrbe" type"text">
    </div>
    <div>
        <label for="email">Email:</label>
        <input id="email" placeholder="Ingrese su email" type"email">
    </div>
    <div>
        <label for="day">Día de retiro:</label>
        <input id="day" type="date">
    </div>
    <p id="selected-prenda"></p>
    <button id="save-button">Reservar prenda</button>
    `;

    const saveButton = document.querySelector('#save-button');
    saveButton.addEventListener('click', saveData)

    form.appendChild(formContainer);

    return form;
}