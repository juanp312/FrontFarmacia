var url = 'http://localhost:8080/compras';

const obtenerInformacionMatrizRiesgo = async () => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

export default obtenerInformacionMatrizRiesgo;