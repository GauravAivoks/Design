
import React from 'react';
import { Provider } from 'react-redux';
// import store from './App/redux/store/index'
import store from './src/redux/store/index'
import Nav from './src/Nav';
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Nav/>
      </Provider>
    );
  }
}
export default App;
