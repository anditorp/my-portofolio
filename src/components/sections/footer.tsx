import Link from "next/link";

export function FooterSection() {
  return (
    <footer className="pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-12 text-muted-foreground px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <p className="text-xs text-center">
          &copy; 2026 Muhammad Andito. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
