export interface ListItem {
  text: string;
  bold?: boolean;
  color?: "text-red 800" | "text-green-800";
}

export interface Props {
  title: string;
  description?: string;
  items: ListItem[];
}

export default function BannerList(props: Props) {
  return (
    <div class="bg-primary-200 p-4">
      <h1 class="text-2xl font-bold">{props.title}</h1>
      {props.description && <p class="text-gray-600">{props.description}</p>}
      <ul class="mt-4">
        {props.items.map((item, index) => (
          <li key={index} class={`${item.color ?? "text-gray-800"}`}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
