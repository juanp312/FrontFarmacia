import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import historialCompras from '../../servicios/compra/historialCompras';




class ListaCompra extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        listaCompras: []
      }
      this.createData = this.createData.bind(this);
    }

    componentDidMount(){
        historialCompras().then(response => this.setState({listaCompras: response}));
    }

    
        createData(name, calories, fat, carbs, protein) {
            return { name, calories, fat, carbs, protein };
        }
      

      render() {
        const rows = [
            this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            this.createData('Eclair', 262, 16.0, 24, 6.0),
            this.createData('Cupcake', 305, 3.7, 67, 4.3),
            this.createData('Gingerbread', 356, 16.0, 49, 3.9),
          ];
        
          console.log(this.state.listaCompras);

        return (
            <div >
            <Paper >
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Codigo Medicamento</TableCell>
                    <TableCell align="center">Numero Identidad</TableCell>
                    <TableCell align="center">Edad</TableCell>
                    <TableCell align="center">Medio Pago</TableCell>
                    <TableCell align="center">Receta Medica</TableCell>
                    <TableCell align="center">Cantidad</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.listaCompras.map(compra => (
                    <TableRow >
                      <TableCell align="center" component="th" scope="row">
                        {compra.codigoMedicamento}
                      </TableCell>
                      <TableCell align="center">{compra.numeroIdentidad}</TableCell>
                      <TableCell align="center">{compra.edad}</TableCell>
                      <TableCell align="center">{compra.medioPago}</TableCell>
                      <TableCell align="center">{compra.recetaMedica == false?"No":"Si"}</TableCell>
                      <TableCell align="center">{compra.cantidad}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </div>
        )
      }
  }

  export default ListaCompra;


