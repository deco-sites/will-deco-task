import { effect, useSignal } from "@preact/signals";
import { alreadyLiked, likeCount } from "../sdk/useVotes.tsx";
import Icon from "../components/ui/Icon.tsx";

export default function SectionCountLike() {
  const count = useSignal(0);

  const increment = () => {
    count.value++;
  };

  effect(() => {
    likeCount.value = count.value;
  });

  return (
    <div class="p-16">
      <button
        onClick={() => {
          alreadyLiked.value = true;
          increment();
        }}
        class={`border-white transition-all
                    ${
          alreadyLiked.value
            ? "text-white hover:text-white bg-green-800 hover:bg-green-800"
            : "text-slate-400 hover:text-slate-400 bg-slate-700 hover:bg-slate-700"
        }`}
      >
        <Icon
          id={alreadyLiked.value ? "mood-check" : "mood-smile"}
          size={24}
        />
      </button>
      
    </div>
  );
}
