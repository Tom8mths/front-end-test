import ProductTemplate from '../../../templates/Product';

import {httpGetProductDetails} from '../../../services/productDetail';
import {GetServerSidePropsContext} from 'next';

export default function Product({product}) {
  return <ProductTemplate product={product} />;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const id = String(ctx.params?.id);

  const product = await httpGetProductDetails(id);
  return {
    props: {
      product,
    },
  };
}
