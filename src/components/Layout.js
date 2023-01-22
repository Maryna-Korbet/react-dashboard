import {Box} from "./Box";
import { AppBar } from "./AppBar";

export const Layout = () => {
    return (
    <Box display='grid' gridTemplateColumns='250px 1fr'>
        <AppBar />
    </Box>
    );
};