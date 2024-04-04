export type Image = {
  src: string
  alt?: string
  caption?: string
}

export type Link = {
  text: string
  href: string
}

export type Hero = {
  title?: string
  text?: string
  image?: Image
  actions?: Link[]
}

export type Subscribe = {
  title?: string
  text?: string
  formUrl: string
}

export type SiteConfig = {
  logo?: Image
  title: string
  subtitle?: string
  description: string
  image?: Image
  headerNavLinks?: Link[]
  footerNavLinks?: Link[]
  socialLinks?: Link[]
  hero?: Hero
  subscribe?: Subscribe
  postsPerPage?: number
  projectsPerPage?: number
}

const siteConfig: SiteConfig = {
  title: "Caleb Diehl",
  subtitle: "Data visualization developer",
  description: "The portfolio and blog of Caleb Diehl",
  image: {
    src: "/profile_transparent.jpg",
    alt: "Caleb Diehl portfolio and blog",
  },
  headerNavLinks: [
    {
      text: "Projects",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Blog",
      href: "/blog",
    },
  ],
  footerNavLinks: [
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ],
  socialLinks: [
    {
      text: "Linkedin",
      href: "https://dribbble.com/",
    },
    {
      text: "Github",
      href: "https://instagram.com/",
    },
  ],
  hero: {
    title: "Beautiful and informative data visualization and development",
    text: 'Data visualization combines my two passions: design and statistics. I currently work at <a href="https://apnews.com" target="_blank" rel="noreferrer"> The Associated Press</a> as a JavaScript and TypeScript and Python developer building visualizations about climate change. My work has won two honorable mentions for APs best story of the week, and has been longlisted for an <a href="https://www.informationisbeautifulawards.com/showcase?award=2023&type=awards" target="_blank" rel="noreferrer">Information is Beautiful</a> Award.',
    image: {
      src: "/talk1.jpeg",
      alt: "A person giving a talk",
    },
    actions: [
      {
        text: "Get in Touch",
        href: "/contact",
      },
    ],
  },
  postsPerPage: 8,
  projectsPerPage: 8,
}

export default siteConfig
