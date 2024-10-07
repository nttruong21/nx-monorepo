import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Orders } from '@react-monorepo/orders';
import { Products } from '@react-monorepo/products';
import { Button } from '@react-monorepo/shared-ui';

export function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20, display: 'flex', gap: '16px' }}>
        <Link to="/">Home</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/products">Products</Link>
      </div>

      <div style={{ padding: 20 }}>
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
