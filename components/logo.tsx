import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand ${light ? "brand-light" : "brand-dark"}`} aria-label="Allen & Cooper home">
      <span className="brand-image-shell">
        <Image
          src="/brand/allen-cooper-wordmark.jpg"
          alt="Allen & Cooper"
          width={2048}
          height={682}
          priority={!light}
          className="brand-image"
        />
      </span>
      <span className="brand-caption">Independent market intelligence</span>
    </Link>
  );
}

