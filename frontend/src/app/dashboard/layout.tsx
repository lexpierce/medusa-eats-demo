import { FlyingBox } from "@medusajs/icons";
import { Avatar, Text } from "@medusajs/ui";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medusa Eats",
  description: "Order food from your favorite restaurants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex px-12 py-4 h-16 bg-ui-fg-base text-ui-fg-on-inverted justify-between items-center sticky top-0 z-40">
        <Link
          href="/"
          className="flex gap-2 items-center text-xl font-semibold hover:text-ui-bg-base-hover"
        >
          <FlyingBox /> Medusa Eats
        </Link>
        <div className="flex gap-2 items-center">
          <Text className="text-sm">Victor</Text>

          <Avatar
            src="https://robohash.org/medusa-eats"
            fallback="V"
            className="bg-ui-bg-base cursor-pointer"
          />
        </div>
      </nav>
      <main className="min-h-screen flex flex-col gap-20 p-10">{children}</main>
    </>
  );
}