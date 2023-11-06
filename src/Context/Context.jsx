import { createContext } from "react";

export const siteContext = createContext({});

export const SiteContextProvider = ({ children }) => {
  const websiteInfo = {
    title: "",
    custom: true,
    modified: true,
    logo: null,
    largeLogo: null,
    tagline: "",
    menuList: [
      { name: "Home", link: "/" },
      { name: "Portfolio", link: "/portfolio" },
      { name: "About", link: "/about" },
      { name: "Contact", link: "/contact" },
    ],
    menuButtons: [{ name: "contact", link: "contact" }],
    menuExpanded: [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "Blog", link: "/blog" },
      { name: "Sign", link: "/login" },
    ],
    about: "",
    aboutExpanded: "",
    footer: "",
  };

  const menuList = [
    {
      name: "Saskatoon Adult Soccer",
      link: "https://www.freecodecamp.org/news",
    },
    {
      name: "Saskatoon Youth Soccer",
      link: "https://www.codecademy.com/",
    },
    {
      name: "Saskatchewan Soccer Association",
      link: "https://www.lighthouselabs.ca/",
    },
  ];

  return (
    <siteContext.Provider
      value={{
        menuList,
        websiteInfo,
      }}
    >
      {children}
    </siteContext.Provider>
  );
};
