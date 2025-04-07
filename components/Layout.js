import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children, locale, locales, defaultLocale }) => (
  <div>
    <Navigation locales={locales} locale={locale} defaultLocale={defaultLocale}
    />
    {children}
   
  </div>
);

export default Layout;