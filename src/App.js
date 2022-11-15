import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Routes/Routes';

function App() {
  return (
    <div className='container'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
