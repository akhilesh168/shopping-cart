import { useSelector } from "react-redux";
import { Product } from "../../js/model/product.model";
import productSelector from "../../store/selectors/productSeletor";
import CarouselBasedOnCategory from "../Carousel/Carousel";

export const HomeCarousel = () => {
  const productItems = useSelector(productSelector.productItemSelector);
  const productCategories = useSelector(
    productSelector.productCategoriesSelector
  );

  let productToDisplay = (productCategory: string) => {
    let dummyArray: string[] = [];
    productItems.forEach((productItem: Product) => {
      if (productCategory === productItem.category) {
        dummyArray.push(productItem.image);
      }
    });
    return <CarouselBasedOnCategory items={dummyArray} />;
  };

  return (
    <>
      {productCategories.map((category: string) => (
        <>
          <div>{category}</div>
          {productToDisplay(category)}
        </>
      ))}
    </>
  );
};
