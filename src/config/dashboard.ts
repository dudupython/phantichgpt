import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    // {
    //   title: "Theo dõi",
    //   href: "/watching",
    // },
    {
      title: "Mua/bán",
      href: "/reason",
      disabled: false,
    },
  ],
  mobileNav: [
    {
      title: "Theo dõi",
      href: "/watching",
    },
    {
      title: "Đánh giá",
    href: "/risk",
    disabled: false,
    },
    
    {
      title: "Mua/bán",
    href: "/reason",
    disabled: false,
    },
    {
      title: "Gen profile",
    href: "/dashboard",
    disabled: false,
    },

  ],
  
  sidebarNav: [
    {
      title: "Linkedin profile",
      href: "/dashboard",
      icon: "bot",
    },
    // {
    //   title: "Qr Code",
    //   href: "/dashboard/qr-code",
    //   icon: "bot",
    // },
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
