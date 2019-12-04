var url = 'http://localhost:8080/medicamento';

var crearMedicamentoService = async (data) => {
const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
        'Content-Type': 'application/json'
        }
    });

    return response;
}

export default crearMedicamentoService;