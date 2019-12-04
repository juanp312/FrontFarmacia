import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import comprarServicio from '../../servicios/compra/comprarServicio';

class Comprar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        codigoMedicamento: "",
        numeroIdentidad: "",
        edad: "",
        medioPago: "",
        recetaMedica: "",
        cantidad: ""
      }
      this.comprar = this.comprar.bind(this);
      this.actualizarCodigoMedicamento = this.actualizarCodigoMedicamento.bind(this);
      this.actualizarNumeroIdentidad = this.actualizarNumeroIdentidad.bind(this);
      this.actualizarEdad = this.actualizarEdad.bind(this);
      this.actualizarMedioPago = this.actualizarMedioPago.bind(this);
      this.actualizarRecetaMedica = this.actualizarRecetaMedica.bind(this);
      this.actualizarCantidad = this.actualizarCantidad.bind(this);
      
    }
    comprar() {
      var receta = this.state.recetaMedica == "no" ? false : true;  
      console.log(receta)
      comprarServicio({
        codigoMedicamento: this.state.codigoMedicamento,
        numeroIdentidad: this.state.numeroIdentidad,
        edad: this.state.edad,
        medioPago: this.state.medioPago,
        recetaMedica: receta,
        cantidad: this.state.cantidad
      });
    
    }

    actualizarCodigoMedicamento(event) {
        var { value } = event.currentTarget;
        this.setState({
          codigoMedicamento: value,
        });
      }

      actualizarNumeroIdentidad(event) {
        var { value } = event.currentTarget;
        this.setState({
          numeroIdentidad: value,
        });
      }

      actualizarEdad(event) {
        var { value } = event.currentTarget;
        this.setState({
          edad: value,
        });
      }

      actualizarMedioPago(event) {
        var { value } = event.currentTarget;
        this.setState({
          medioPago: value,
        });
      }

      actualizarRecetaMedica(event) {
        var { value } = event.currentTarget;
        this.setState({
          recetaMedica: value,
        });
      }

      actualizarCantidad(event) {
        var { value } = event.currentTarget;
        this.setState({
          cantidad: value,
        });
      }

      render() {
        return (
          <div align="center">
            <p>Comprar</p>
            <div align="center">
              <TextField 
                align="center"
                placeholder="Codigo Medicamento"
                value = {this.state.codigoMedicamento}
                onChange={this.actualizarCodigoMedicamento}> </TextField>
            </div>
            <div align="center">
              <TextField 
                placeholder="Numero Identidad"
                value = {this.state.numeroIdentidad}
                onChange={this.actualizarNumeroIdentidad}> </TextField>
            </div>
            <div align="center">
            <TextField 
                placeholder="Edad"
                value = {this.state.edad}
                onChange={this.actualizarEdad}> </TextField>
            </div>
            <div align="center">
            <TextField 
                placeholder="Medio Pago"
                value = {this.state.medioPago}
                onChange={this.actualizarMedioPago}> </TextField>
            </div>
            <div align="center">
            <TextField 
                placeholder="Receta Medica"
                value = {this.state.recetaMedica}
                onChange={this.actualizarRecetaMedica}> </TextField>
            </div>
            <div align="center">
            <TextField 
                placeholder="Cantidad"
                value = {this.state.cantidad}
                onChange={this.actualizarCantidad}> </TextField>
            </div>
            <div align="center">
            <p></p>
            <Button variant="outlined"
                    onClick={() => this.comprar()}> Push</Button>
            </div>
          </div>
        )
      }
  }

  export default Comprar;


