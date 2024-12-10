const BACKEND_URL = {`http://${process.env.BACKEND_URL}`};

export async function listCategories() {
  const { product_categories } = await fetch(
    `${BACKEND_URL}/store/product-categories`,
    {
      next: {
        tags: ["restaurants"],
      },
    }
  ).then((res) => res.json());

  return product_categories;
}
