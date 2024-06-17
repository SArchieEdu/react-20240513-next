import { getHeadphones } from "@/services/api";
import Link from "next/link";

export default async function Headphones() {
  const headphones = await getHeadphones();

  return (
    <main>
      {headphones.map(({ id, name }) => (
        <Link key={id} href={`/headphones/${id}`}>
          {name}
        </Link>
      ))}
    </main>
  );
}
