type Props = {
  id: string;
  labelName: string;
  inputType: string;
};

export default function Input({ id, labelName, inputType }: Props) {
  return (
    <>
      <label htmlFor={id}>{labelName}</label>
      <input type={inputType} name={id} id={id} />
    </>
  );
}
