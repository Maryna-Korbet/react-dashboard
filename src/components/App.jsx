import {Toaster} from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path="*" element={<div>{<Layout />}</div>}/>
      </Routes>
      <Toaster position='top-right' reverseOrder={false} />
    </div>
    
  );
};
