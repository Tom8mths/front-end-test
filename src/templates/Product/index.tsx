import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Base from '../Base';

export default function Product() {
  return (
    <>
      <Base hasSidebar={false} paddingTop={false}>
        <div className="flex items-start justify-between h-screen-menu w-full mt-20 mb-10 py-2">
          <div className="hidden md:block">
            <img
              className="bg-white/30 rounded rounded-[25px] w-80 "
              src="/img/icon-512.png"
              alt=""
            />
          </div>
          <main className="flex md:w-[27rem] flex-col">
            <Heading size="medium" weight="normal">
              Chair
            </Heading>
            <Text className="mt-10 text-white/60">
              Shop was created for the new ways we live and work. We make
              beatifully designed, sustainable furniture around the world
            </Text>
            <Text className="text-[#fd927d] mb-2" size="large">
              $4.150,00
            </Text>
            <span className="mt-10 inline-flex justify-start">
              <select name="cars" className="w-20 h-10 px-2" id="cars">
                <option value="volvo">1</option>
                <option value="saab">2</option>
                <option value="mercedes">3</option>
                <option value="audi">4</option>
              </select>
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
