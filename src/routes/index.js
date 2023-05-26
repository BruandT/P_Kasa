import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Error404 from '../pages/Error404/Error404';
import LayoutDefault from '../layouts/Default/Default';
import LayoutBlank from '../layouts/Blank/Blank';
import About from '../pages/About/About';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutDefault />} >
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>

                <Route element={<LayoutBlank />} >
                    <Route path="*" element={<Error404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;