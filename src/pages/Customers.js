import { getCustomers } from '../fakeAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import { SearchBox } from 'components/SearchBox';

export const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  return (
    <main>
    <SearchBox />
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

