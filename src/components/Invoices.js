import { getInvoices } from 'fakeAPI';
import {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {Box} from './Box';

export const Invoices = () => {
    const[invoices, setInvoices] = useState([]);
    useEffect(()=> {
        getInvoices().then(setInvoices);
    }, []);

    return(
        <div>
            <Box as="aside"
                display="flex"
                flexDirection="column"
                p={3}
                borderRight="1px solid black">
                    {invoices.map(({id}) => 
                        <NavLink key={id} to={`${id}`}>
                            {id}
                        </NavLink>)}
            </Box>
        </div>
    )
}