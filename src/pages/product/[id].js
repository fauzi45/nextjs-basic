import MetaHead from "@/components/MetaHead";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const [data, setData] = useState();
  const router = useRouter();

  const fetchDataProduct = async (id) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_API}/products/${id}`
    );
    const product = await response.json();

    setData(product);
  };

  useEffect(() => {
    if (router.query.id) {
      fetchDataProduct(router.query.id);
    }
  }, [router]);

  if (!data) return "Loading...";

  return (
    <section>
      <MetaHead
        title={data.title}
        description={data.description}
        image={data.image}
        url={`${process.env.NEXT_PUBLIC_HOST_API}/product/${data.id}`}
      />
      <div className="flex gap-5">
        <div>
          <img src={data.image} alt={data.title} width={200} />
        </div>
        <div className="pt-10 ml-5"> 
          <h1 className="text-xl font-bold">{data.title}</h1>
          <div className="font-bold">{data.category}</div>
          <div className="text-green-600 font-bold">{data.price}</div>
          <p className="py-3">{data.description}</p>
          <button className="font-bold bg-amber-300 rounded p-3 mt-5 hover:bg-pink-500">Add to Cart</button>
        </div>
      </div>
    </section>
  );
}
