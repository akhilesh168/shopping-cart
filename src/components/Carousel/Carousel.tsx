import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
type Props = {
  items: string[];
};

const CarouselBasedOnCategory = ({ items }: Props) => {
  return (
    <Carousel autoPlay>
      {items.map((item) => (
        <div>
          <img alt="" src={item} width={100} height={100} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselBasedOnCategory;
