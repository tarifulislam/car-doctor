
import { Outlet } from 'react-router-dom';
import NavBer from '../../Pages/Shared/NavBer/NavBer';
import Footer from '../../Pages/Shared/Footer/Footer';
const MainLayout = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;