import { connect } from "react-redux";
import ComponentA from "../components/ComponentA";
import { increment } from "../redux/actions";

const mapStateToProps = (state) => ({
  count: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()), // Dispatch la acción `increment`
});

// Define el contenedor
const ComponentAContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentA);

export default ComponentAContainer; // Exporta el contenedor en lugar del componente ComponentA
