import { SidebarItem } from "@/components/custom/SideBar";

const sideBaritems: SidebarItem[] = [
    {
      title: "Home",
      href: "/",
      links: [
        {
          label: "Research Agenda",
          href: "/#introduction",
        },
        {
          label: "Short Biography",
          href: "/#about-me",
        },
      ],
    },
    {
      title: "Education",
      href: "/education",
      links: [
        { label: "Education", href: "education/#education" },
        {
          label: "International Certification",
          href: "education/#international-certification",
        },
        { label: "Online Courses", href: "education/#Online-Courses" },
        { label: "Training & WorkShop", href: "education/#training" },
      ],
    },
    {
      title: "Experience",
      href: "/work-experience",
      links: [
        {
          label: "Professional-Experience",
          href: "/work-experience#professional-experience",
        },
        {
          label: "Research Experience",
          href: "/work-experience#research-experience",
        },
        {
          label: "Teaching Experience",
          href: "/work-experience#teaching-experience",
        },
      ],
    },
    {
      title: "Research",
      href: "/publications",
      links: [
        {
          href: "/publications#peer-reviewed-conference",
          label: "Peer Reviewed Conference",
        },
        { href: "/publications#book-chapter", label: "Book Chapter" },
        { href: "/publications#in-progress", label: "In Progress" },
      ],
    },
    { title: "Projects", href: "/projects" },
    { title: "Outreach", href: "/outreach", 
      links: [
        {
          href: "/outreach#Awards",
          label: "Awards",
        },
        { href: "/outreach#Volunteering", label: "Volunteering" },
        { href: "/outreach#invited-talk", label: "Invited" },
      ],
    },
    { title: "Contact", href: "/contact" },
  ];


  const sideBarData = {
    sideBaritems
  }

  export default sideBarData;