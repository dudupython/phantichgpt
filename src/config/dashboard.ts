import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    // {
    //   title: "Theo dõi",
    //   href: "/watching",
    // },
    // {
    //   title: "Qr Code",
    //   href: "dashboard/qr-code/",
    //   disabled: false,
    // },
  ],
  mobileNav: [
    {
      title: "Living room",
      href: "architect",
    },
    {
      title: "Qr code",
      href: "qr-code",
    },
    {
      title: "Gen profile",
    href: "/dashboard",
    disabled: false,
    },
    
    {
      title: "test",
    href: "template",
    disabled: true,
    },
    // {
    //   title: "Gen profile",
    // href: "/dashboard",
    // disabled: false,
    // },

  ],
  
  sidebarNav: [
    {
      title: "Living room",
      href: "/dashboard/architect",
      icon: "bot",
    },
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
   
    // {
    //   title: "Billing",
    //   href: "/dashboard/billing",
    //   icon: "billing",
    // },
    // {
    //   title: "Settings",
    //   href: "/dashboard/settings",
    //   icon: "settings",
    // },
  ],
}
