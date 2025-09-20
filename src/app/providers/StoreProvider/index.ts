import {
  ReduxStoreWithManager,
  StateSchema,
  StateSchemaKey,
  ThunkConfig,
} from "./config/StateSchema";
import { AppDispatch, createReduxStore } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";

export type {
  StateSchema,
  AppDispatch,
  ThunkConfig,
  ReduxStoreWithManager,
  StateSchemaKey,
};
export { StoreProvider, createReduxStore };
