import { connect } from "react-redux";

import { increment } from "../redux/actions";

const mapStateToProps = (state) => ({
  count: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()), // Dispatch la acción `increment`
});

// Define el contenedor
const ComponentAContainer = connect(mapStateToProps, mapDispatchToProps);

export default ComponentAContainer; // Exporta el contenedor en lugar del componente ComponentA
