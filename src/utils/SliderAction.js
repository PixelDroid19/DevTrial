/**

Ejecuta las acciones del Slider dependiendo del botón presionado.

@param {number} page - La página actual del Slider.
@param {function} setPageState - Función para actualizar el estado de la página actual del Slider.
@param {number} maxPage - El número máximo de páginas que tiene el Slider.
@param {object} options - Opciones adicionales para el Slider.
@param {HTMLElement} options.target - Elemento HTML que disparó el evento.
*/

const SliderAction = (page, setPageState, maxPage, { target }) => {
    const { testid } = target.dataset;

    switch (testid) {
        case "button-next":
            if (page < maxPage) {
                setPageState(prevPage => prevPage + 1);
            }
            break;

        case "button-prev":
            if (page > 0) {
                setPageState(prevPage => prevPage - 1);
            }
            break;

        case "button-restart":
            setPageState(0);
            break;

        default:
            console.warn(`Testid desconocido: ${testid}`);
            break;
    }
};

export default SliderAction