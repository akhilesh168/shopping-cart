import { Form } from "react-final-form";

type Props = {
  initialValues: any;
  render: () => JSX.Element;
  onSubmit: () => void;
};
const useForm = ({ initialValues, onSubmit, render }: Props) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>{render()}</form>
      )}
    ></Form>
  );
};

export default useForm;
