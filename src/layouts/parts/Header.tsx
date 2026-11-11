import { useState } from 'react';
import { Link, NavLink } from "react-router";
import { Menu, X, ChevronDown } from 'lucide-react';
const navItems = [{
  label: 'Home',
  to: '/'
}, {
  label: 'About Us',
  to: '/about',
  children: [{
    label: 'Constitution',
    to: '/about/constitution'
  }, {
    label: 'History',
    to: '/about/history'
  }]
}, {
  label: 'Government',
  to: '/government',
  children: [{
    label: 'Chapter Presidents',
    to: '/government/chapter-presidents'
  }, {
    label: 'Executives',
    to: '/government/executives'
  }, {
    label: 'Pioneers',
    to: '/government/pioneers'
  }, {
    label: 'Senate',
    to: '/government/senate'
  }, {
    label: 'Hall of Fame',
    to: '/government/hall-of-fame'
  }]
}, {
  label: 'News & Events',
  to: '/news-events'
}, {
  label: 'Contact Us',
  to: '/contact'
}];
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs py-1.5 px-6 md:px-10 hidden md:flex items-center justify-between">
        <span className="font-medium">National Association of Nigerian Students – Diaspora</span>
        <span>president@nansdiasporia.org</span>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0 min-w-0">
          <img src="/assets/nansd-logo.png" alt="NANS Diaspora" className="block h-auto max-h-10 md:max-h-12 w-auto max-w-full object-contain self-center" />
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
          {navItems.map(item => item.children ? <div key={item.to} className="relative" onMouseEnter={() => setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)}>
                <NavLink to={item.to} className={({
            isActive
          }) => `flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}>
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                </NavLink>
                {openDropdown === item.label && <div className="absolute top-full left-0 mt-0 w-52 bg-background border border-border shadow-lg rounded-b-md py-1 z-50">
                    {item.children.map(child => <NavLink key={child.to} to={child.to} className={({
              isActive
            }) => `block px-4 py-2.5 text-sm transition-colors ${isActive ? 'text-primary bg-muted' : 'text-foreground/80 hover:text-primary hover:bg-muted'}`}>
                        {child.label}
                      </NavLink>)}
                  </div>}
              </div> : <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({
          isActive
        }) => `px-3 py-2 text-sm font-medium rounded transition-colors ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}>
                {item.label}
              </NavLink>)}
          <Link to="/government" className="ml-3 px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
            Meet Our Leaders
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-foreground p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && <nav aria-label="Mobile navigation" className="lg:hidden bg-background border-t border-border px-6 pb-6 pt-2 flex flex-col">
          {navItems.map(item => item.children ? <div key={item.to}>
                <button className="w-full flex items-center justify-between py-3 text-sm font-medium text-foreground/80 border-b border-border/30" onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}>
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpanded === item.label && <div className="pl-4 flex flex-col">
                    {item.children.map(child => <NavLink key={child.to} to={child.to} onClick={() => setMobileOpen(false)} className={({
            isActive
          }) => `py-2.5 text-sm border-b border-border/20 ${isActive ? 'text-primary' : 'text-foreground/70'}`}>
                        {child.label}
                      </NavLink>)}
                  </div>}
              </div> : <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setMobileOpen(false)} className={({
        isActive
      }) => `py-3 text-sm font-medium border-b border-border/30 ${isActive ? 'text-primary' : 'text-foreground/80'}`}>
                {item.label}
              </NavLink>)}
          <Link to="/government" onClick={() => setMobileOpen(false)} className="mt-4 px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold text-center">
            Meet Our Leaders
          </Link>
        </nav>}
    </header>;
}
