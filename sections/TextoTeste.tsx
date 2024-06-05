export interface Props {
  text: string;
}

export default function TextoTeste({ text }: Props) {
  return (
    <div class="flex justify-center">
      <h1 class="font-bold text-black text-4xl my-8">{text}</h1>
    </div>
  );
}
