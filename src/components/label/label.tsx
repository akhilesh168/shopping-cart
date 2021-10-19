type Props = {
  labelProps: any;
};

export const Label = ({ labelProps }: Props) => {
  return (
    <label
      className={labelProps.className}
      {...labelProps}
      htmlFor={labelProps.name}
    >
      {labelProps.name}{" "}
    </label>
  );
};
