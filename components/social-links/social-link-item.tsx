import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type SocialLink = {
  /** Icon image URL (absolute or path under /public) shown beside the title. */
  icon: string;
  title: string;
  /** Optional handle/username or subtitle displayed under the title. */
  description?: string;
  /** External profile URL opened when the item is clicked. */
  href: string;
};


export function SocialLinkItem({ icon, title, description, href }: SocialLink) {
  return (
    <a
      className={cn(
        "group/link flex items-center gap-3 p-2 pr-1 transition-colors select-none hover:bg-accent2",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={title}
    >
      <div className="relative size-10 shrink-0">
        <Image
          className="rounded-xl corner-squircle supports-corner-shape:rounded-[50%]"
          src={icon}
          alt={title}
          width={40}
          height={40}
          quality={100}
          unoptimized
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 corner-squircle ring-inset dark:ring-white/10 supports-corner-shape:rounded-[50%]" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="truncate font-medium group-hover/link:underline">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground truncate">{description}</p>
        )}
      </div>

      <ArrowUpRightIcon className="size-4 text-muted-foreground ml-2" />
    </a>
  );
}
