import { getCustomerById } from 'fakeAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const CustomerDetails = () => {
    const { customerId } = useParams();
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        getCustomerById(Number(customerId)).then(setCustomer)
    }, [customerId]);

    if(!customer) {
        return null;
    }
    
    return(
        <main>
            <p>id: {customer.id}</p>
            <p>Username: {customer.name}</p>
        </main>
    )
};