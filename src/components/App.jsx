import {Toaster} from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import {Sales} from '../pages/Sales';
import { Invoices } from './Invoices';
import {InvoiceDetails} from './InvoiceDetails';
import {Customers} from '../pages/Customers';
import { CustomerDetails } from 'pages/CustomerDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<div>{<Layout />}</div>}>
          <Route index element={<div>Homepage index route</div>}/>
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<div>{<Sales />}</div>}>
          <Route index element={<div>Seles index route</div>}/>
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="invoices" element={<div><Invoices /></div>}>
              <Route index element={<div>Invoices index route</div>}/>
              <Route path=":invoiceId" element={<div><InvoiceDetails /></div>} />
            </Route>
            <Route path="deposits" element={<div>Deposits</div>} />
          </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<div><Customers /></div>} />
          <Route path="customers/:customerId" element={<div><CustomerDetails /></div>} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position='top-right' reverseOrder={false} />
    </>
  );
};
