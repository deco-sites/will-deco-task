import { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "../../components/ui/Icon.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import Image from "apps/website/components/Image.tsx";

interface Image {
  src: ImageWidget;
  alt?: string;
}

export interface Props {
  title?: string;
  images: Image[];
  page: number;
  showMore: {
    text?: string;
  };
}

export default function PartialImageGallery({
  title,
  images,
  showMore,
  page = 1,
}: Props) {
  const shownImages = images.slice(0, page * 3);

  if (images.length < 3) {
    throw new Error("Not enough elements");
  }

  return (
    <section class="container flex flex-col gap-4 justify-center items-center my-9">
      {title && (
        <h2 class="text-3xl font-semibold text-black mb-4 block">
          {title}
        </h2>
      )}

      <ul class="flex flex-wrap justify-center gap-2 mb-2">
        {shownImages.map((val: Image) => (
          <li class="w-full h-full max-w-[320px] min-h-[200px]">
            <Image
              class="w-full h-auto cursor-pointer hover:scale-110"
              width={300}
              height={300}
              src={val.src}
              alt={val.alt}
            />
          </li>
        ))}
      </ul>

      {Math.ceil(images.length / 3) > page && (
        <button
          class="flex gap-1 py-2 justify-center w-full md:w-96 bg-slate-100 rounded-md text-gray-500"
          {...usePartialSection({ props: { page: page + 1 } })}
        >
          {showMore.text && <span>{showMore.text}</span>}
          <span>
            <Icon id="Plus" size={20} />
          </span>
        </button>
      )}
    </section>
  );
}
