import HomeTemplate from '../templates/Home';
import {httpGetProducts} from '../services/products';
import {setupAPIClient} from '../services/api';

export default function Index(products) {
  return <HomeTemplate products={products} />;
}

export const getServerSideProps = async () => {
  const api = setupAPIClient();
  const products = await httpGetProducts(api);

  return {
    props: {
      products,
    },
  };
};
