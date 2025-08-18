import {
  ReduxStoreWithManager,
  StateSchema,
  ThunkConfig,
} from "./config/StateSchema";
import { AppDispatch, createReduxStore } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";

export type { StateSchema, AppDispatch, ThunkConfig, ReduxStoreWithManager };
export { StoreProvider, createReduxStore };
