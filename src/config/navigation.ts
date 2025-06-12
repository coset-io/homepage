export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
  target?: string;
  rel?: string;
  isEmail?: boolean;
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Hackerhouse",
    href: "/hackerhouse",
  },
  {
    label: "Blog",
    href: "https://mirror.xyz/co-set.eth/",
    isExternal: true,
    target: "_blank",
    rel: "noreferrer",
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "Contact",
    href: "mailto:emily@coset.io",
    isEmail: true,
  },
];

export const coursesNavigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/courses",
  },
  {
    label: "Twitter",
    href: "https://x.com/coset_io",
    isExternal: true,
    target: "_blank",
    rel: "noreferrer",
  },
  {
    label: "Github",
    href: "https://github.com/coset-io/zkp-academy",
    isExternal: true,
    target: "_blank",
    rel: "noreferrer",
  },
  {
    label: "Telegram",
    href: "https://t.me/coset_io",
    isExternal: true,
    target: "_blank",
    rel: "noreferrer",
  },
];

// 如果需要添加新的导航项，只需要在这个数组中添加即可
// 例如：
// {
//   label: "Showcases",
//   href: "https://coset.notion.site/Coset-Wiki-adba3ae862eb49cea66f10d929ec1067",
//   isExternal: true,
//   target: "_blank",
//   rel: "noreferrer",
// }, 