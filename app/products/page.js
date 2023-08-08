import Link from "next/link";
import Layout from "../components/Layout";

export default function Products() {
  return (
    <Link
      className={"bg-gray-900 text-white rounded-md py-1 px-2"}
      href={"products/new"}
    >
      Add new product
    </Link>
  );
}
