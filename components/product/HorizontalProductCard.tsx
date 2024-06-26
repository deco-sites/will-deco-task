import type { Platform } from "../../apps/site.ts";
import { SendEventOnClick } from "../Analytics.tsx";
import { formatPrice } from "../../sdk/format.ts";
import { useOffer } from "../../sdk/useOffer.ts";
import type { Product } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import AddToCartButtonVTEX from "../../islands/AddToCartButton/vtex.tsx";
// import IslandCountLikes from "deco-sites/will-deco-task/islands/IslandCountLikes.tsx";
import Image from "apps/website/components/Image.tsx";
import { relative } from "../../sdk/url.ts";
import ProductVote from "deco-sites/will-deco-task/islands/ProductVote.tsx";


interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;

  /** @description used for analytics event */
  itemListName?: string;

  /** @description index of the product card in the list */
  index?: number;

  platform?: Platform;

  /** @description Animação da imagem */
  animateImage?: boolean;

  /** @description LARGURA MAXIMA */
  maxWidth:
    | "max-w-xl"
    | "max-w-2xl"
    | "max-w-3xl"
    | "max-w-4xl"
    | "max-w-5xl"
    | "max-w-6xl"
    | "max-w-7xl"
    | "max-w-full";
}

const WIDTH = 200;
const HEIGHT = 279;

function HorizontalProductCard({
  product,
  preload,
  itemListName,
  index,
  maxWidth,
  animateImage = true,
}: Props) {
  const { url, productID, name, image: images, offers, isVariantOf } = product;
  const id = `product-card-${productID}`;
  const description = product.description || isVariantOf?.description;
  const [front] = images ?? [];
  const { listPrice, price, installments } = useOffer(offers);

  return (
    <div
      id={id}
      class={`flex flex-col lg:flex-row items-center justify-center gap-3 my-9  w-full xl:${
        maxWidth ?? "max-w-xl"
      }`}
      data-deco="view-product"
    >
      <SendEventOnClick
        id={id}
        event={{
          name: "select_item" as const,
          params: {
            item_list_name: itemListName,
            items: [
              mapProductToAnalyticsItem({
                product,
                price,
                listPrice,
                index,
              }),
            ],
          },
        }}
      />
      <figure class="relative overflow-hidden min-w-44 max-w-80">
        <a
          href={url && relative(url)}
          aria-label="view product"
          class=""
        >
          <Image
            src={front.url!}
            alt={front.alternateName}
            width={WIDTH}
            height={HEIGHT}
            class={`bg-base-100 rounded w-full ${
              animateImage ? "hover:scale-110" : ""
            }}`}
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            decoding="async"
          />
        </a>
      </figure>
      <div class="flex flex-col p-2 gap-2 lg:gap-2 md:max-w-56 lg:max-w-72 rounded border border-stone-400 bg-stone-400">
        <div class="flex flex-col gap-0">
          <h2
            class="truncate text-base lg:text-lg text-base-content capitalize font-semibold"
            dangerouslySetInnerHTML={{ __html: name ?? "" }}
          />
          <div
            class="truncate text-sm lg:text-sm text-slate-300"
            dangerouslySetInnerHTML={{ __html: description ?? "" }}
          />
        </div>

        <div class="flex flex-col gap-2">
          <div class="line-through text-xs font-normal ">
            {formatPrice(listPrice, offers?.priceCurrency)}
          </div>
          <div class="text-base font-semibold">
            {formatPrice(price, offers?.priceCurrency)}
          </div>
          <ul class="flex items-center gap-2 w-full">
            <li>
              <span class="text-slate-300 font-light text-sm truncate">
                ou {installments}
              </span>
            </li>
          </ul>
          <div>
            {/* <IslandCountLikes /> */}
            <ProductVote productId={product.productID} />
            <AddToCartButtonVTEX
              eventParams={{
                items: [{
                  item_url: url,
                  quantity: 1,
                  item_name: name!,
                }],
              }}
              productID={productID}
              seller={"1"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalProductCard;
