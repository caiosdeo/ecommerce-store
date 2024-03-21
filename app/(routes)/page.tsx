import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";

import Billboard from "@/components/billboard";
import ProductList from "@/components/products-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("ca20f487-27ee-4b0c-a288-a30a09d7eb89");

  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList 
            title="Featured products" items={products}
            />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
