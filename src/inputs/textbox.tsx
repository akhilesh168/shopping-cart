type Props = {
  textboxProperties: any;
};

export const TextBox = ({ textboxProperties }: Props) => {
  return <input type="text" {...textboxProperties} />;
};
