export { default } from "../../components/product/ProductShelfHorizontal.tsx";

export function LoadingFallback() {
  return (
    <div style={{ height: "716px" }} class="bg-gray-300/65 flex flex-col gap-2 justify-center items-center">
      <span class="font-medium">Por favor, aguarde...</span>
      <span class="loading loading-spinner" />
    </div>
  );
}