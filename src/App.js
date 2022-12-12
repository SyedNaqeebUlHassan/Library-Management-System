
import './App.css';
import { Routes, Route } from "react-router-dom"
import SearchBook from './Components/SearchBook';
import DisplayBooks from './Components/DisplayBooks';
import {store} from './Redux/store'
import { Provider } from 'react-redux';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import BookData from './data.json'
function App() {
  return (
 <Provider store={store}>
      <Routes>
        <Route path='/' element ={<SignUp/>}/>
        <Route path='/DisplayBook' element={<DisplayBooks/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SearchBook' element={<SearchBook data={BookData}/>}/>
      </Routes>
 </Provider>

  );
}

export default App;
