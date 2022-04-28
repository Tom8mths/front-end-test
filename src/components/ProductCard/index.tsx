import Text from '../Text';
import Button from '../Button';

export default function ProductCard() {
  return (
    <div className="bg-[#f7f9fb] w-[18rem] h-auto rounded-lg px-5 flex flex-col">
      <img
        className="h-[15rem] my-5 mx-auto bg-white/50 rounded-lg"
        src="/img/icon-512.png"
        alt=""
      />
      <Text className="text-[#367c98]" size="xlarge">
        Leon
      </Text>
      <p className="text-[#367c98]/50 my-3">
        Differentiated density polyutherane foam filing with acrylic fibre
        cover.
      </p>
      <Text className="text-[#fd927d]" size="large">
        $4.150,00
      </Text>
      <div className="mt-auto mb-5 flex items-center justify-between">
        <select name="cars" className="w-20 h-10 px-2" id="cars">
          <option value="volvo">1</option>
          <option value="saab">2</option>
          <option value="mercedes">3</option>
          <option value="audi">4</option>
        </select>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
}
