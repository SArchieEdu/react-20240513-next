import { HeadphonesRating } from "@/components/headphones-rating/component";
import { getHeadphone, getHeadphones } from "@/services/api";
import { Suspense } from "react";

// export async function generateStaticParams() {
//   return (await getHeadphones()).map(({ id }) => ({ headphoneId: id }));
// }

const Headphone = async ({ params }) => {
  const headphone = await getHeadphone(params.headphoneId);

  return (
    <div>
      <div>Headphone: {headphone.name}</div>
      <Suspense fallback={<div>Loader...</div>}>
        <HeadphonesRating />
      </Suspense>
    </div>
  );
};

export default Headphone;
