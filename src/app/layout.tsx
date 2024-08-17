import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Sidebar, { SidebarItem } from "@/components/custom/SideBar";
import ProfileHeading from "@/components/custom/ProfileHeading";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

const workSans = Work_Sans({ subsets: ["latin"] });
const siteUrl = "http://dipon.netlify.app";
export const metadata: Metadata = {
  title: "Dipon Talukder Dhruvo",
  description: "Explore the academic portfolio of Dipon Talukder, a graduate student specializing in ML,AI. Discover research projects, publications, and professional achievements in ML AI, showcasing a commitment to advancing knowledge and contributing to the field.",
  keywords: "DiponTalukder,Dipon,Dipon,Dipon,Dip",
  robots: "index, follow",
  openGraph: {
    title: "Dipon Talukder Dhruvo",
    description: "Explore the academic portfolio of Dipon Talukder, a graduate student specializing in ML,AI. Discover research projects, publications, and professional achievements in ML AI, showcasing a commitment to advancing knowledge and contributing to the field.",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/profilePic.jpg}`,
        width: 800,
        height: 600,
        alt: "Profile  picture",
      },
    ],
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Your Site Title",
  //   description: "Your site description here",
  //   // image: 'https://yourwebsite.com/image.jpg',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const items: SidebarItem[] = [
    {
      title: "Home",
      href: "/",
      links: [
        {
          label: "Introduction",
          href: "/#introduction",
        },
        {
          label: "About Me",
          href: "/#about-me",
        },
      ],
    },
    {
      title: "Education",
      href: "education",
      links: [
        { label: "Education", href: "education/#education" },
        {
          label: "International Certification",
          href: "education/#international-certification",
        },
        { label: "Online Coureses", href: "education/#Online-Coureses" },
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
    { title: "Contact", href: "/contact" },
  ];
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: siteUrl,
              name: "Your Site Name",
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>{" "}
      <body className={workSans.className}>
        <div className="flex ">
          <Sidebar items={items} />
          <div className="flex-1 px-4 md:px-8 lg:px-16  mt-16 md:mt-8 w-full">
            <ProfileHeading />
            <div className="mt-8 md:mt-4">{children}</div>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
