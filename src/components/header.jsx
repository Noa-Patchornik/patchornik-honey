import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const MENU_ITEMS = [
  {
    title: "עלינו",
    children: [
      { label: "אודות המכוורת", path: "/about" },
      { label: "כתבו עלינו", path: "/press" },
    ],
  },
  {
    title: "דבש",
    children: [
      { label: "הדבשים שלנו", path: "/products" },
      { label: "תעודת כשרות", path: "/kosher" },
    ],
  },
  {
    title: "גלריות",
    children: [
      { label: "גלריית הדבש", path: "/honey-gallery" },
      { label: "תמונות שטח ", path: "/field-gallery" },
    ],
  },
  {
    title: "צרו קשר",
    path: "/contact",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const toggleMobileSubmenu = (title) => {
    setMobileSubmenu(mobileSubmenu === title ? null : title);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" onClick={closeMenus} className="flex items-baseline gap-3 group">
            <span className="font-display text-2xl tracking-tight text-primary leading-none">
              פצ׳ורניק
            </span>
            <span className="hidden sm:inline-block text-[11px] font-medium tracking-[0.25em] text-muted-foreground uppercase border-r border-border pr-3">
              1890
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {MENU_ITEMS.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1.5 text-sm font-medium text-foreground/85 hover:text-primary transition-colors py-2"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.title ? null : item.title)
                      }
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.title ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`absolute right-0 top-full pt-2 w-52 transition-all duration-200 ${
                        activeDropdown === item.title
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-xl py-2 px-1">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.path}
                            onClick={closeMenus}
                            className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.title}
                  to={item.path}
                  onClick={closeMenus}
                  className="text-sm font-medium text-foreground/85 hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              );
            })}

            <Link
              to="/products"
              onClick={closeMenus}
              className="text-sm font-semibold text-primary-foreground bg-primary px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all shadow-sm hover:shadow"
            >
              לרכישת דבש
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-foreground"
            aria-label="תפריט"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border shadow-2xl">
          <nav className="flex flex-col px-6 py-6 gap-2">
            {MENU_ITEMS.map((item) => {
              if (item.children) {
                const isOpen = mobileSubmenu === item.title;
                return (
                  <div key={item.title} className="border-b border-border/50 pb-2">
                    <button
                      onClick={() => toggleMobileSubmenu(item.title)}
                      className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-foreground"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="flex flex-col pr-4 pt-1 pb-2 space-y-2">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.path}
                            onClick={closeMenus}
                            className="text-sm text-foreground/75 hover:text-primary py-1.5 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.title}
                  to={item.path}
                  onClick={closeMenus}
                  className="py-2.5 text-base font-semibold text-foreground hover:text-primary transition-colors border-b border-border/50"
                >
                  {item.title}
                </Link>
              );
            })}

            <div className="pt-4">
              <Link
                to="/products"
                onClick={closeMenus}
                className="block text-center text-sm font-semibold text-primary-foreground bg-primary px-5 py-3 rounded-full shadow-md"
              >
                לרכישת דבש
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}