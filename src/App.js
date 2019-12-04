import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import AgregarMedicamento from './componentes/medicamento/AgregarMedicamento';
import EliminarMedicamento from './componentes/medicamento/EliminarMedicamento';
import Comprar from './componentes/compra/Comprar';
import ListaCompra from './componentes/compra/ListaCompra';



function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Agregar Medicamento" />
          <Tab label="Eliminar Medicamento" />
          <Tab label="Comprar" />
          <Tab label="Historial Compras" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><AgregarMedicamento></AgregarMedicamento></TabContainer>}
      {value === 1 && <TabContainer><EliminarMedicamento></EliminarMedicamento></TabContainer>}
      {value === 2 && <TabContainer><Comprar></Comprar></TabContainer>}
      {value === 3 && <TabContainer><ListaCompra></ListaCompra></TabContainer>}
      
    </div>
  );
}

export default App;