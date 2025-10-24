import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          href="/"
          aria-label="go home"
          className="mx-auto size-fit flex items-center gap-2"
        >
          <Image src="/felon.png" alt="logo" width={60} height={60}  className="rounded-br-full rounded-tl-full rounded-bl-full border-2 dark:border-red-600 border-green-500" />

          <span className="text-2xl font-bold gradient">Briefly</span>
        </Link>

        <span className="text-muted-foreground block text-center text-sm gradient">
          {" "}
          ©    <span className="font-Mono-space">{new Date().getFullYear()}  Briefly, All rights reserved</span>
        </span>
      </div>
    </footer>
  );
}
//  footer