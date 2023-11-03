import Link from "next/link";

export default function Menu() {
  return (
    <nav className=" flex gap-4">
      <Link href="/" prefetch={false}>
        Home
      </Link>
      <Link href="/dogs/henry" prefetch={false}>
        Henry
      </Link>
      <Link href="/dogs/tommi" prefetch={false}>
        Tommi
      </Link>
      <Link href="/dogs/pete" prefetch={false}>
        Pete
      </Link>
    </nav>
  );
}
