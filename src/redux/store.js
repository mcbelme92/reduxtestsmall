import { legacy_createStore as createStore } from "redux";
// Suponiendo que tienes un archivo de combinación de reductores
import rootReducer from "./reducers";

const store = createStore(rootReducer);

export default store;
