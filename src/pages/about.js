import MetaHead from "@/components/MetaHead";

export default function About() {
  return (
    <section>
      <MetaHead
        title="About Us"
        description="Ini adalah halaman about us"
        image={`${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo/nike.svg`}
        url={`${process.env.NEXT_PUBLIC_HOST_NAME}/about`}
      />
      <h1 className="text-2xl font-bold">About Us</h1>
      <p className="py-2">Marshmallow tart soufflé marzipan candy canes apple pie gingerbread tiramisu. Toffee sugar plum pudding oat cake gingerbread caramels pie tootsie roll gummi bears. Bonbon cheesecake croissant toffee sesame snaps wafer sweet roll sweet jujubes. Pudding sweet roll apple pie gummies cupcake toffee chocolate bar danish. Icing carrot cake marshmallow dessert croissant. Cake cookie bonbon tiramisu brownie apple pie toffee gingerbread topping. Soufflé tootsie roll gummi bears macaroon chupa chups. Fruitcake soufflé cheesecake tootsie roll gingerbread tiramisu. Pie tart apple pie lemon drops lollipop marshmallow bear claw icing. Lemon drops tiramisu chocolate bonbon brownie chocolate bar jelly beans. Toffee marshmallow lollipop lemon drops jelly brownie bonbon tart. Bonbon chocolate caramels chocolate cake marzipan cupcake jelly chupa chups chocolate. Muffin bonbon marshmallow gummies jelly-o. Croissant apple pie sugar plum macaroon sweet roll chocolate fruitcake chocolate cake.</p>
      <p className="py-2">Gummies icing carrot cake gummies gummies tart gummi bears cookie. Danish dessert ice cream pudding macaroon brownie. Chocolate topping cake toffee brownie muffin apple pie jelly beans shortbread. Gummi bears cake carrot cake chocolate bar wafer cupcake. Dragée cheesecake danish halvah cotton candy icing chocolate bar gingerbread. Wafer sugar plum cupcake lemon drops jelly beans muffin dessert marzipan. Candy canes croissant cheesecake powder gummi bears gummi bears. Jelly beans pudding chocolate chupa chups oat cake. Jelly beans halvah cotton candy carrot cake pudding chupa chups cake croissant chupa chups. Macaroon donut marzipan soufflé icing cotton candy sweet roll icing pie. Cotton candy ice cream danish croissant cotton candy sugar plum lemon drops bonbon. Jelly-o sweet sesame snaps fruitcake sugar plum sweet topping lemon drops.</p>
    </section>
  );
}
