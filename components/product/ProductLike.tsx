// import Icon from "../../components/ui/Icon.tsx";
// import { alreadyLiked } from '../../sdk/useVotes.tsx'
// import { ProductVotesApiResponse } from "../../loaders/productLikes.ts";
// import { invoke } from "../../runtime.ts";

// interface ProductLikeProps {
//   votesCount?: ProductVotesApiResponse | undefined
//   productId?: string
// }

// export function ErrorFallback({ error }: { error?: Error }) {
//   console.log({
//     ErrorFallback: error
//   })

//   return <ProductLike productId={''} votesCount={{ product: 0 }} />
// }

// const actionLikeProduct = invoke["deco-sites/will-deco-task"].actions.likeProduct

// function ProductLike({ votesCount, productId }: ProductLikeProps) {
//   async function handleLike() {
//     const actionResponse = await actionLikeProduct({
//       productId
//     })

//     if (actionResponse) {
//       console.log({
//         actionResponse: "Success"
//       })
//       return
//     }

//     console.log({
//       actionResponse: "Action error"
//     })
//   }

//   return (
//     <div class="flex gap-3 items-center">
//       <button
//         class={
//           `border-0
//                     ${alreadyLiked.value
//             ? "text-emerald-500 hover:text-emerald-600"
//             : "text-slate-400 hover:text-slate-500"
//           }
//                     transition-all`}
//         onClick={() => handleLike()}
//       >
//         <Icon id={alreadyLiked.value ? "IconMoodCheck" : "IconMoodSmile"} size={24} />
//       </button> 

//       <div class="flex gap-1 text-slate-400">
//         <Icon id="IconFriends" size={24} />
//         <span>{votesCount}</span>
//       </div>
//     </div>
//   )
// }

// export default ProductLike