import { legacy_createStore as createStore } from "redux";

import MainReducer from "./allreducer";

const MyStore = createStore( MainReducer );

export default MyStore;

