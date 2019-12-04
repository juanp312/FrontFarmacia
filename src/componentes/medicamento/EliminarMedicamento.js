import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import eliminarMedicamentoServicio from '../../servicios/medicamento/eliminarMedicamentoServicio';


class EliminarMedicamento extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id: "",
      }
      this.crearMedicamento = this.eliminarMedicamento.bind(this);
      this.actualizarIdMedicamento = this.actualizarIdMedicamento.bind(this);
      
    }

    eliminarMedicamento() {
        eliminarMedicamentoServicio(this.state.id);
    }

    actualizarIdMedicamento(event) {
      var { value } = event.currentTarget;
      this.setState({
        id: value,
      });
    }


    render() {
        return (
          <div align="center">
            <p>Eliminar Medicamento</p>
            <div>
              <TextField 
                placeholder="Codigo Medicamento"
                value = {this.state.id}
                onChange={this.actualizarIdMedicamento}> </TextField>
            </div>
            <div>
            <p></p>
            <Button variant="outlined"
                    onClick={() => this.eliminarMedicamento()}> Eliminar</Button>
            </div>
          </div>
        )
      }
  }

  export default EliminarMedicamento;