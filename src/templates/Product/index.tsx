import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Base from '../Base';

export type ProductTemplateProps = {
  product: object;
};

export default function Product({product}) {
  return (
    <>
      <Base hasSidebar={false} paddingTop={false}>
        <div className="block lg:flex items-start justify-between h-screen-menu w-full mt-20 mb-10 py-2">
          <div>
            <img
              className="bg-white/30 rounded m-auto rounded-[25px] mb-20 w-80 "
              src={product.image}
              alt=""
            />
          </div>
          <main className="flex md:w-[27rem] flex-col">
            <Heading size="medium" weight="normal">
              {product.title}
            </Heading>
            <Text className="mt-10 text-white/60">{product.description}</Text>
            <Text className="text-[#fd927d] mb-2" size="large">
              ${product.price}
            </Text>
            <span className="mt-10 inline-flex justify-start">
              <input
                type="number"
                name="quantity"
                min={0}
                max={product.stockQty}
                className="w-20 h-10 px-2"
              />

              <Button color="secondary" className="ml-10">
                Add to cart
              </Button>
            </span>
          </main>
        </div>
      </Base>
    </>
  );
}
