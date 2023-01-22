import { getCustomers } from '../fakeAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import { SearchBox } from 'components/SearchBox';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter') ?? "";
  const location = useLocation();

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  const changeFilter = value => {
    setSearchParams(value !=="" ? {filter: value} : {});
  };

  const visibleCustomers = useMemo(() => {
    return customers.filter(customer => customer.name.toLowerCase().includes(filterParam.toLowerCase()));
  }, [customers, filterParam]);
  
  return (
    <main>
    <SearchBox value={filterParam} onChange={changeFilter} />
      {visibleCustomers.length > 0 && (
        <ul>
          {visibleCustomers.map(customer => (
            <li key={customer.id}>
              <Link to={`${customer.id}`} state={{from: location}}>{customer.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

