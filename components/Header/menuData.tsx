import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    // path: "/about",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Secure Software Development",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "IT and Cybersecurity resources",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "virtual CISO",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "24/7/365 Managed Services",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Cybersecurity Automation",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Third-Party Risk Management",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Cyber Insurance Compliance",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Generative AI",
        path: "/error",
        newTab: false,
      },
      {
        id: 49,
        title: "Penetration Testing",
        path: "/error",
        newTab: false,
      },
      {
        id: 50,
        title: "Why Relate Central",
        path: "/",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "Company",
    // path: "/about",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Contact Us",
        path: "/contact",
        newTab: false,
      },
      {
        id: 52,
        title: "Careers",
        path: "/contact",
        newTab: false,
      },
      {
        id: 53,
        title: "Blog",
        path: "/blog",
        newTab: false,
      },
     
    ],
  },
  // {
  //   id: 33,
  //   title: "Assessment",
  //   path: "/blog",
  //   newTab: false,
  // },
  // {
  //   id: 3,
  //   title: "Software Development",
  //   path: "/contact",
  //   newTab: false,
  // },
  // {
  //   id: 4,
  //   title: "24/7 Managed Services (MCS)",
  //   path:"/24-7-365-managed-cybersecurity-service",
  //   newTab: false,
    // submenu: [
    //   {
    //     id: 41,
    //     title: "About Page",
    //     path: "/about",
    //     newTab: false,
    //   },
    //   {
    //     id: 42,
    //     title: "Contact Page",
    //     path: "/contact",
    //     newTab: false,
    //   },
    //   {
    //     id: 43,
    //     title: "Blog Grid Page",
    //     path: "/blog",
    //     newTab: false,
    //   },
    //   {
    //     id: 44,
    //     title: "Blog Sidebar Page",
    //     path: "/blog-sidebar",
    //     newTab: false,
    //   },
    //   {
    //     id: 45,
    //     title: "Blog Details Page",
    //     path: "/blog-details",
    //     newTab: false,
    //   },
    //   {
    //     id: 46,
    //     title: "Sign In Page",
    //     path: "/signin",
    //     newTab: false,
    //   },
    //   {
    //     id: 47,
    //     title: "Sign Up Page",
    //     path: "/signup",
    //     newTab: false,
    //   },
    //   {
    //     id: 48,
    //     title: "Error Page",
    //     path: "/error",
    //     newTab: false,
    //   },
    // ],
  // },
  // {
  //   id: 4,
  //   title: "CISO As A Service (CISOaaS)",
  //   path: "/ciso-as-a-service-virtual_ciso",
  //   newTab: false,
  // },
  // {
  //   id: 5,
  //   title: "Resource Solutions",
  //   path: "/it-cybersecurity-resources",
  //   newTab: false,
  // },
  
];
export default menuData;
