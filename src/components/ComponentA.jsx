import PropTypes from "prop-types";

const ComponentA = ({ count, increment }) => {
  console.log("count", count);
  return (
    <div>
      <p>ComponentA contador: {count}</p>
      <button onClick={increment}>Incrementar contador</button>
    </div>
  );
};

ComponentA.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

export default ComponentA;
