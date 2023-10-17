import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    // {
    //   title: "Documentation",
    //   href: "/docs",
    // },
    {
      title: "Support xyz",
      href: "/support",
      disabled: true,
    },
  ],
  mobileNav: [
    {
      title: "Qr Code",
    href: "/qr-code",
    disabled: false,
    },
    {
      title: "Support",
    href: "/support",
    disabled: true,
    },

  ],
  sidebarNav: [
    {
      title: "Qr Code",
      href: "/dashboard/qr-code",
      icon: "bot",
    },
    {
      title: "Architech",
      href: "/dashboard/template",
      icon: "bot",
    },
    {
      title: "Posts",
      href: "/dashboard",
      icon: "post",
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}
