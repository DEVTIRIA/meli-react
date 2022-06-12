import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import ProductList from './components/product-list/ProductList';
import ProductDetail from './components/product-detail/ProductDetail';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='*' element={<Home />}></Route>
                <Route path='items' element={<ProductList />}></Route>
                <Route path='items/:id' element={<ProductDetail />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
