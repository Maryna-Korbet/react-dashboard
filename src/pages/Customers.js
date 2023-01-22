import { getCustomers } from '../fakeAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import { SearchBox } from 'components/SearchBox';
import { useParams, useSearchParams } from 'react-router-dom';

export const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchParams, setsearchParams] = useSearchParams();

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  const changeFilter = value => {
    setsearchParam({filter: value})
  };

  return (
    <main>
    <SearchBox onChange={changeFilter} />
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

