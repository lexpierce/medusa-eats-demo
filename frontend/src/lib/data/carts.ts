import { CartDTO } from "@medusajs/types";

const BACKEND_URL = {`http://${process.env.BACKEND_URL}`};

export async function retrieveCart(cartId: string) {
  const { cart } = (await fetch(
    `${BACKEND_URL}/store/carts/${cartId}?fields=%2Bmetadata,%2Bitems.product.thumbnail`,
    {
      next: {
        tags: ["cart"],
      },
    }
  ).then((res) => res.json())) as { cart: CartDTO };

  return cart;
}
