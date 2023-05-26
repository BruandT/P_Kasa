import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

function Default() {
    return (
        <>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}

export default Default;