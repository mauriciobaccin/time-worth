import { Store as StoreType } from 'redux';
import { Persistor } from 'redux-persist';

import RootState from './RootState';

type CreateStore = {
  store: StoreType<RootState>;
  persistor: Persistor;
};

export default CreateStore;
