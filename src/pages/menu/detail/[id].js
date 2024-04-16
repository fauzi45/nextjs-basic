import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DetailMenu() {
  const router = useRouter();
  const { id } = router.query;
  console.log(router);
  useEffect(() => {
    if (!id) return;
    console.log(id);
  }, [router.query]);
  return <section>ini Detail Menu ke - {id}</section>;
}
