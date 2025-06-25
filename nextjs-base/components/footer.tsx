import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3"> 
          <p className="text-center">
            Build by{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/Nexabro"
            >
              nexabro
            </Link>
            .
            © 2025 Nexabro. All rights reserved.
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://discord.gg/9CXVBCHTUX"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >   
        Discord
      </Link>
    </>
  );
}
