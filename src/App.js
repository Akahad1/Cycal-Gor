import logo from './logo.svg';
import './App.css';
import Home from './component/Home.js/Home';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}>

      </RouterProvider>

      

      
    </div>
  );
}

export default App;
