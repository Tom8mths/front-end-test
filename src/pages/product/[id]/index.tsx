import ProductTemplate, {
  ProductTemplateProps,
} from '../../../templates/Product';
import {useRouter} from 'next/router';

export default function Product() {
  const router = useRouter();

  console.log('router', router);
  return <ProductTemplate />;
}
