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
      title: "Linkedin profile",
    href: "/",
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
      title: "Linkedin profile",
      href: "/dashboard",
      icon: "bot",
    },
    {
      title: "Qr Code",
      href: "/dashboard/qr-code",
      icon: "bot",
    },
    {
      title: "test",
      href: "/dashboard/template",
      icon: "bot",
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
