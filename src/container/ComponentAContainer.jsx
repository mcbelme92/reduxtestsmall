import { connect } from "react-redux";

import { increment } from "../redux/actions";

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: (amount) => dispatch(increment(amount)),
});
// Define el contenedor
const ComponentAContainer = connect(mapStateToProps, mapDispatchToProps);

export default ComponentAContainer; // Exporta el contenedor en lugar del componente ComponentA
