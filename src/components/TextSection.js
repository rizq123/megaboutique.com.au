const sections = [
  {
    title: 'Mega Boutique Australia: Your Ultimate Home Housewares &amp; Kitchen Supply Shop',
    content: `
      <p>Mega Boutique stands as a beacon for those seeking premium house kitchen ware and home housewares, offering an extensive range of products that blend functionality with style. As a leading kitchen supply store, we pride ourselves on providing everything from essential cookware to decorative kitchen accessories, making us the ultimate <a href="https://www.megaboutique.com.au/quality-cookware" class="text-orange-600 underline">kitchen boutique</a> for home chefs and decor enthusiasts alike.</p>
    `,
  },
  {
    title: 'Your One-Stop Kitchen Supply Shop',
    content: `
      <p>Our kitchen supply shop caters to all culinary needs, featuring a vast selection of <a href="https://www.megaboutique.com.au/kitchenware" class="text-orange-600 underline">kitchenware</a> from top brands. Whether you're renovating your kitchen or simply looking to update your cooking tools, Mega Boutique offers quality and variety in one convenient location. Our online kitchen outlet store allows you to shop for kitchenware, accessories, and decor from the comfort of your home, with a collection that's continuously updated to reflect the latest trends and innovations.</p>
    `,
  },
  {
    title: 'Elevate Your Cooking Experience with Home Kitchen Accessories',
    content: `
      <p>At Mega Boutique, we understand that the right kitchen accessories can transform cooking from a daily chore into a delightful experience. From innovative <a href="https://www.megaboutique.com.au/knife" class="text-orange-600 underline">gadgets to stylish utensils</a>, our range of home kitchen accessories is designed to enhance your culinary skills and kitchen aesthetics.</p>
      <p>Shop the Latest Kitchen Collection Online</p>
      <p>Our kitchen collection shop online features an array of products carefully selected for their quality and performance. With everything from cookware to kitchen decor stores included in our catalogue, you'll find the perfect items to complement your kitchen's theme and functionality.</p>
      <p>Why Choose Mega Boutique for Your Kitchen Needs?</p>
      <p>Choosing Mega Boutique means opting for a retailer that values quality, variety, and customer satisfaction. Our kitchen boutique is dedicated to offering the best in kitchenware and <a href="https://www.megaboutique.com.au/tablewares" class="text-orange-600 underline">home accessories</a>, ensuring you have access to the <a href="https://www.megaboutique.com.au/decoration" class="text-orange-600 underline">tools and decor</a> that align with your cooking and styling preferences.</p>
      <p>Explore the world of kitchen and home essentials at Mega Boutique, where you'll discover a curated selection of house kitchen ware that combines quality, functionality, and aesthetic appeal. Whether you're a culinary enthusiast or simply looking to enhance your home's charm, Mega Boutique is your premier destination for kitchen and housewares that inspire and delight.</p>
    `,
  },
];

export default function TextSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center">
        <hr className="border-t-1 mb-6 w-[70%]" />
      </div>
      {sections.map((section, index) => (
        <div key={index} className="mb-6 w-7/10 text-gray-700">
          <h2 className="text-lg md:text-xl font-bold text-orange-600 mb-2 uppercase">{section.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: section.content }} />
        </div>
      ))}
    </div>
  );
}
