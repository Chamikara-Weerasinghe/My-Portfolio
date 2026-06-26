import { siteConfig } from "@/lib/data";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8" role="contentinfo">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>
            &copy; 2026 {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with{" "}
            <Heart size={14} className="text-red-500 fill-red-500" /> using
            Next.js + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
