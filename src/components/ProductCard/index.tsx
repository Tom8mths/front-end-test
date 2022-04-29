import Text from '../Text';
import Button from '../Button';
import * as S from './styles';

import {Item} from '../../interfaces/item.interface';

export type ProductCarouselProps = {
  items: Item[];
};

export default function ProductCard({item}) {
  return (
    <div className={S.container}>
      <a className="cursor-pointer" href={`/product/${item.id}`}>
        <img className={S.image} src={item.image} alt="" />
      </a>
      <Text className={S.title} size="large">
        {item.title}
      </Text>

      <p className={S.description}>{item.description}</p>
      <Text className={S.price} size="large">
        ${item.price}
      </Text>
      <div className={S.wrapper}>
        <input
          type="number"
          name="quantity"
          min={0}
          max={item.stockQty}
          className="w-20 h-10 px-2"
        />
        <Button disabled={item.stockQty === 0}>Add to cart</Button>
      </div>
    </div>
  );
}
