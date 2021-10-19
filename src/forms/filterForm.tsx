import { Field } from "react-final-form";
import { connect } from "react-redux";
import { ProductSelector } from "../js/model/storeSelector";
import productSelector from "../store/selectors/productSeletor";

type Categories = {
  categories: string[];
  handleSubmit: (values: any) => void;
};

const mapStateToProps = (state: ProductSelector) => {
  return {
    categories: productSelector.productCategoriesSelector(state),
  };
};
const FilterForm = ({ categories, handleSubmit }: Categories) => {
  let formArray: any[] = [];

  categories?.forEach((item) => {
    let formObject = {
      name: "filterField",
      component: "input",
      type: "checkbox",
      value: "",
    };
    formArray.push(Object.assign({}, formObject, { value: item }));
  });
  const FieldsArray: JSX.Element[] =
    formArray &&
    formArray?.map((item) => (
      <label key={item.value}>
        <Field
          onClick={handleSubmit}
          name={item?.name}
          component={item?.component}
          type={item?.type}
          value={item?.value}
        />
        {item?.value}
      </label>
    ));
  return <>{FieldsArray}</>;
};

export default connect(mapStateToProps)(FilterForm);
