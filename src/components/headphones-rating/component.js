import { getHeadphones } from "@/services/api";

export const HeadphonesRating = async () => {
  const headphones = await getHeadphones();

  return (
    <div>
      Rating:
      <div>
        {headphones.map(({ id, name }) => (
          <div key={id}>{name}</div>
        ))}
      </div>
    </div>
  );
};
