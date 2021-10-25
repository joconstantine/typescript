import { Provider } from 'react-redux';
import { store } from '../state';
import RepositioriesList from './RepositioriesList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <RepositioriesList />
      </div>
    </Provider>
  );
};

export default App;
