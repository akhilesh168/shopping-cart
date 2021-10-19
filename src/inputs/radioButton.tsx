type Props = {
  radioButtonProperties: any;
};

export const RadioButton = ({ radioButtonProperties }: Props) => {
  return <input type="checkbox" {...radioButtonProperties} />;
};
