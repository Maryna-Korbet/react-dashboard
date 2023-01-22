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
        <Route path="*" element={<div>{<Layout />}</div>}>
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<div>Sales</div>} />
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<div>Customers</div>} />
        </Route>
      </Routes>
      <Toaster position='top-right' reverseOrder={false} />
    </div>
    
  );
};
