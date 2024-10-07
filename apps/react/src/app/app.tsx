import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Orders } from '@react-monorepo/orders';
import { Products } from '@react-monorepo/products';
import { Button } from '@react-monorepo/shared-ui';

export function App() {
  return (
    <BrowserRouter>
      <div className="flex gap-4 p-6 border-b border-gray-300">
        <Link className="text-xl font-medium hover:underline" to="/">
          Home
        </Link>
        <Link className="text-xl font-medium hover:underline" to="/orders">
          Orders
        </Link>
        <Link className="text-xl font-medium hover:underline" to="/products">
          Products
        </Link>
      </div>

      <div className="p-6">
        <Routes>
          <Route
            path="/"
            element={<Button onClick={() => alert('Clicked')}>Button</Button>}
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
