import Head from "next/head";

export default function MetaHead(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta
        property="og:title"
        content="How to become an SEO expert (8 Steps)"
      />
      <meta
        property="og:description"
        content="Get from SEO newbie to SEO pro in 8 simple steps"
      />
      <meta property="og:image" content={props.image} />
      <meta
        property="og:url"
        content={props.url}
      />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="id_ID" />
      <meta
        property="twitter:card"
        content="Get from SEO newbie to SEO pro in 8 simple steps"
      />
      <meta property="twitter:site" content="@nytimesbits" />
      <meta property="twitter:creator" content="@nickbilton" />
    </Head>
  );
}
