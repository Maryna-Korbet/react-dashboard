import {Toaster} from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import {Sales} from '../pages/Sales';
import { Invoices } from './Invoices';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<div>{<Layout />}</div>}>
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<div>{<Sales />}</div>}>
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="invoices" element={<div><Invoices /></div>} />
            <Route path="deposits" element={<div>Deposits</div>} />
          </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<div>Customers</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position='top-right' reverseOrder={false} />
    </>
  );
};
