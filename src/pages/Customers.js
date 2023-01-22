import { getCustomers } from '../fakeAPI';
import { useEffect } from 'react';
import { useState } from 'react';

export const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  return (
    <main>
      {customers.length > 0 && (
        <ul>
          {customers.map(customer => (
            <li key={customer.id}>
              {customer.name}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

