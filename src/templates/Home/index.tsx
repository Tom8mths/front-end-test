import Button from '../../components/Button';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import ProductCarousel from '../../components/ProductCarousel';
import Text from '../../components/Text';
import Base from '../Base';

export default function Home({products}) {
  const cheapestItem = products.products.reduce(function (prev, curr) {
    return prev.price < curr.price ? prev : curr;
  });

  return (
    <>
      <Base hasSidebar={false} paddingTop={false}>
        <div className="flex items-start justify-between h-screen-menu w-full mt-20 mb-10 py-2">
          <main className="flex md:w-[27rem] flex-col">
            <Heading size="large" weight="normal">
              For the home of Tomorrow
            </Heading>
            <Text className="mt-10 text-white/60">
              Shop was created for the new ways we live and work. We make
              beatifully designed, sustainable furniture around the world
            </Text>
            <span className="mt-10 inline-flex">
              <Button color="secondary">Learn More</Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 ml-5 mr-2 border border-white rounded-full drop-shadow-xl"
                viewBox="0 0 20 20"
                fill="#f8fafc"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white flex items-center">Our Story</span>
            </span>
          </main>
          <div className="hidden md:block">
            <a className="cursor-pointer" href={`/product/${cheapestItem.id}`}>
              <img
                className="bg-white/30 rounded rounded-t-[25px] w-64 "
                src={cheapestItem.image}
                alt={cheapestItem.title}
              />
            </a>
            <div className="w-65 h-20 mt-10 bg-white/30 rounded-b-[25px] flex justify-center items-center font-bold text-gray-600">
              Cheapest item in our catalogue!
            </div>
          </div>
        </div>
      </Base>

      <section className="bg-white px-20 py-10">
        <Container>
          <div>
            <Text className="text-[#367c98]" size="xlarge">
              120+
            </Text>
            <span className="text-black/30">Branded Product</span>
          </div>
        </Container>
      </section>
      <section className="bg-[#eff4f6] pb-20">
        <Container>
          <div className="block md:flex items-center justify-between py-20 ">
            <Text className="text-[#367c98] font-bold" size="xlarge">
              Our <br />
              Products
            </Text>
            <p className="md:w-[30rem] text-black/30">
              Each product of our shop speaks volume about us, makes our tastes
              visible and conveys our style through the choices we make with
              regards to furnishing
            </p>
          </div>
          <ProductCarousel items={products} />
        </Container>
      </section>
    </>
  );
}
