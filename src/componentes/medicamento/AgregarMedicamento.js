import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import crearMedicamentoServicio from '../../servicios/medicamento/crearMedicamentoServicio';
import '../../App.css';

class AgregarMedicamento extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nombreMedicamento: "",
        codigoMedicamento: "",
        disponibilidad: true
      }
      this.crearMedicamento = this.crearMedicamento.bind(this);
      this.actualizarCodigoMedicamento = this.actualizarCodigoMedicamento.bind(this);
      this.actualizarNombreMedicamento = this.actualizarNombreMedicamento.bind(this);
      
    }

    crearMedicamento() {
      crearMedicamentoServicio({
        nombreMedicamento: this.state.nombreMedicamento,
        codigoMedicamento: this.state.codigoMedicamento,
        disponibilidad: this.state.disponibilidad
      });
    }

    actualizarCodigoMedicamento(event) {
      var { value } = event.currentTarget;
      this.setState({
        codigoMedicamento: value,
      });
    }

    actualizarNombreMedicamento(event) {
      var { value } = event.currentTarget;
      this.setState({
        nombreMedicamento: value,
      });
    }

    render() {
        return (
          <div align="center">
            <p>Agregar Medicamento</p>
            <div >
              <TextField 
                placeholder="Codigo Medicamento"
                value = {this.state.codigoMedicamento}
                onChange={this.actualizarCodigoMedicamento}> </TextField>
            </div>
            <div>
              <TextField 
                placeholder="Nombre Medicamento"
                value = {this.state.nombreMedicamento}
                onChange={this.actualizarNombreMedicamento}> </TextField>
            </div>
            <div>
            <p></p>
            <Button variant="outlined"
                    onClick={() => this.crearMedicamento()}> Push</Button>
            </div>
          </div>
        )
      }
  }

  export default AgregarMedicamento;