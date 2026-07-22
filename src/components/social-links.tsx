import Link from "next/link";

import { IconButton } from "@/components/ui";
import { loadStudioConfig } from "@/studio/config";

export const SocialLinks = () => {
  const { site } = loadStudioConfig();
  const social = site.social ?? [];

  if (social.length === 0) return null;

  return (
    <div className="flex gap-4">
      {social.map((item) => (
        <IconButton key={item.label} asChild variant="ghost">
          <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
          >
            <i className={item.icon} />
          </Link>
        </IconButton>
      ))}
    </div>
  );
};
