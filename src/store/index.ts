import { combineReducers } from "redux";
import { dataReducer } from "./data/reducers";
import { selectedReducer } from "./selected/reducers";

export const rootReducer = combineReducers({
  data: dataReducer,
  selected: selectedReducer
});

export type AppState = ReturnType<typeof rootReducer>;
