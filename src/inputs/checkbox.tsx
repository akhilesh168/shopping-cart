type Props = {
  checkboxProperties: any;
};

export const Checkbox = ({ checkboxProperties }: Props) => {
  return <input type="checkbox" {...checkboxProperties} />;
};
