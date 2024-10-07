import { Button } from '@react-monorepo/shared-ui';

export function Products() {
  return (
    <div>
      <h1>Welcome to Products!</h1>
      <p>This is a change</p>
      <Button onClick={() => alert('Add product successfully')}>
        Add product
      </Button>
    </div>
  );
}

export default Products;
