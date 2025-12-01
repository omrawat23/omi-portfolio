export type SocialLink = {
  /** Icon image URL (absolute or path under /public) shown beside the title. */
  icon: string;
  title: string;
  /** Optional handle/username or subtitle displayed under the title. */
  description?: string;
  /** External profile URL opened when the item is clicked. */
  href: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: "https://assets.chanhdai.com/images/link-icons/x.webp?t=1759581475",
    title: "X",
    description: "@omraw29",
    href: "https://x.com/omraw29",
  },
  {
    icon: "https://assets.chanhdai.com/images/link-icons/github.webp?t=1759581475",
    title: "GitHub",
    description: "omraw29",
    href: "https://github.com/omrawat23",
  },
  {
    icon: "https://assets.chanhdai.com/images/link-icons/linkedin.webp?t=1759581475",
    title: "LinkedIn",
    description: "omraw29",
    href: "https://linkedin.com/in/omrawat23",
  },
  {
    icon: "https://i.pinimg.com/736x/88/e1/4c/88e14cc7e7fcbb0e0e09de26cec86c61.jpg",
    title: "Gmail",
    description: "omraw29",
    href: "mailto:omraw29@gmail.com",
  },
];
