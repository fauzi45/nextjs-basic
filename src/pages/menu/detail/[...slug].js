import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DetailMenuSlug() {
  const router = useRouter();
  useEffect(() => {
    if (!router.query.slug) return;
    const [slugName, idMenu] = router.query.slug;
    console.log(slugName, idMenu);
  }, [router.query]);
  return <section>ini Detail Menu ke</section>;
}
