var url = 'http://localhost:8080/medicamento/';

var eliminarMedicamentoServicio = async (data) => {
const response = await fetch(url + data, {
        method: 'DELETE'
    });

    return response;
}

export default eliminarMedicamentoServicio;