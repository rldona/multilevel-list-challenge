import { Provider } from 'react-redux';
import { store } from './redux/store';

import MultiLevelIniniteList from './components/MultiLevelIniniteList';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MultiLevelIniniteList />
      </div>
    </Provider>
  );
}

export default App;
