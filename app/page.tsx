/** 3p Dependency */

/** Components */
import { Photo } from "@/components/Photo";

/** utils and helpers */
import { supabaseClient } from "@/supabseClient";

/** Types */
import { PhotoInterface } from "@/types/Photo";

export const revalidate = 0;

async function getData() {
  const { data, statusText } = await supabaseClient
    .from("photo-gallery")
    .select("*");

  if (statusText !== "OK") {
    throw new Error("failed to Fetch");
  }

  return data;
}
export default async function Home() {
  const data: PhotoInterface[] | null = await getData();
  return (
    <main>
      <section className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data?.map((e) => (
            <Photo
              key={e.id}
              id={e.id}
              created_at={e.created_at}
              img_url={e.img_url}
              source={e.source}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
