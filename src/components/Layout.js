import {Box} from "./Box";
import { AppBar } from "./AppBar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
    <Box display='grid' gridTemplateColumns='250px 1fr'>
        <AppBar />
        <Outlet />
    </Box>
    );
};