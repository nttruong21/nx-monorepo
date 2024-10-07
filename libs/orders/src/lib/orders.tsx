import { Button } from '@react-monorepo/shared-ui';

export function Orders() {
  return (
    <div>
      <h1>Welcome to Orders!</h1>
      <Button onClick={() => alert('Add order successfully')}>Add order</Button>
    </div>
  );
}

export default Orders;
