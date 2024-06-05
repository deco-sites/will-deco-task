export { default } from "../../components/ui/PartialImageGallery.tsx";
import Image from "apps/website/components/Image.tsx";

export function LoadingFallback() {
  return (
    <div
      style={{ height: "716px" }}
      class="bg-gray-500 flex flex-col gap-2 justify-center items-center"
    >
      <span class="font-medium">Por favor, aguarde...</span>
      <span class="loading loading-spinner" />
    </div>
  );
}

export function ErrorFallback({ error }: { error?: Error }) {
  return (
    <div class="container bg-300/65 flex flex-col justify-center items-center my-9 p-2 ">
      <div class="mb-3">
        <h3 class="text-2xl text-center">São Paulo - SP</h3>
        <p class="text-base text-center">Mercado Municipal de São Paulo</p>
      </div>
      <Image
        src="https://s2-g1.glbimg.com/ofIlOJdbs7oEdpBWCPoXuBYOdYY=/0x0:1700x1065/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2017/02/15/rafael-martins_govba_ok.jpg"
        width={513}
        height={337}
        class="mx-auto hover:scale-110 mb-2"
      />
      <div class={"flex flex-col justify-center m-auto"}>
        <h3
          class={"font-bold text-red-700 text-lg uppercase text-center "}
        >
          Erro
        </h3>
        <p class="text-xs mb-3">{error}</p>
        <a
          class="btn bg-stone-700 hover:bg-stone-700 text-white"
          href="/culturas"
        >
          Saiba Mais
        </a>
      </div>
    </div>
  );
}
