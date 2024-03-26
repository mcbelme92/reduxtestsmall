import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PropTypes from "prop-types";
import ComponentAContainer from "./container/ComponentAContainer";

function App(props) {
  const { count, increment } = props;
  console.log(count);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => increment(1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
App.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

/* App.displayName = "App"; */

const ConnectedApp = ComponentAContainer(App);
export default ConnectedApp;
