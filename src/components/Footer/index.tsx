import Container from '../Container';
import Text from '../Text';
import * as S from './styles';
import {AtSymbolIcon, PhoneIcon, GlobeIcon} from '@heroicons/react/outline';

export default function Footer() {
  return (
    <div className={S.footer}>
      <Container>
        <div className={S.wrapper}>
          <div>
            <Text color="primary" className="font-bold" size="xlarge">
              Shop
            </Text>
            <div className="mt-5 text-xl text-black/30">Find Us</div>
            <span className="text-black/30 mt-2 flex">
              <AtSymbolIcon className="w-5" />
              <PhoneIcon className="w-5" />
              <GlobeIcon className="w-5" />
            </span>
          </div>
          <div className={S.quickMenu}>
            <ul>
              <li className={S.title}>Home</li>
              <li>Home</li>
              <li>Our Advantage</li>
              <li>Product</li>
              <li>Newsletter</li>
            </ul>
            <ul>
              <li className={S.title}>Store</li>
              <li>Online store</li>
              <li>Offline store</li>
              <li>Distributors</li>
              <li>Service center</li>
            </ul>
            <ul>
              <li className={S.title}>Shipping</li>
              <li>International</li>
              <li>Brazil</li>
              <li>Buy in bulk</li>
              <li>Customs</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
