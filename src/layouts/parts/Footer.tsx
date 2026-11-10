import { Link } from "react-router";
import { Twitter, Facebook, Instagram, Mail } from 'lucide-react';
const footerLinks = [{
  heading: 'Organisation',
  links: [{
    label: 'About Us',
    to: '/about'
  }, {
    label: 'Constitution',
    to: '/about/constitution'
  }, {
    label: 'History',
    to: '/about/history'
  }]
}, {
  heading: 'Government',
  links: [{
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
  }]
}, {
  heading: 'Connect',
  links: [{
    label: 'News & Events',
    to: '/news-events'
  }, {
    label: 'Contact Us',
    to: '/contact'
  }]
}];
const socialLinks = [{
  icon: Twitter,
  label: 'Twitter / X',
  href: 'https://twitter.com/nansdiaspora'
}, {
  icon: Facebook,
  label: 'Facebook',
  href: 'https://facebook.com/nansdiaspora'
}, {
  icon: Instagram,
  label: 'Instagram',
  href: 'https://instagram.com/nansdiaspora'
}, {
  icon: Mail,
  label: 'Email',
  href: 'mailto:info@nansdiaspora.org'
}];
export default function Footer() {
  return <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-5">
              <img src="/assets/nansd-logo.png" alt="NANS Diaspora" className="block h-auto max-h-12 w-auto max-w-full object-contain" />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs mb-6">
              The official body representing Nigerian students studying abroad. Advocating, connecting, and empowering a generation of global leaders.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({
              icon: Icon,
              label,
              href
            }) => <a key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-background/60 hover:text-background transition-colors">
                  <Icon size={18} />
                </a>)}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map(col => <div key={col.heading} className="md:col-span-2">
              <h3 className="text-xs font-semibold text-secondary uppercase tracking-widest mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map(link => <li key={link.to}>
                    <Link to={link.to} className="text-sm text-background/60 hover:text-background transition-colors">
                      {link.label}
                    </Link>
                  </li>)}
              </ul>
            </div>)}

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold text-secondary uppercase tracking-widest mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-background/60">
              <li>info@nansdiaspora.org</li>
              <li>membership@nansdiaspora.org</li>
              <li>media@nansdiaspora.org</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10 px-6 md:px-10 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-background/50">
          <span>© {new Date().getFullYear()} NANS Diaspora. All rights reserved.</span>
          <div className="flex gap-5">
            <Link to="/about/constitution" className="hover:text-background transition-colors">Constitution</Link>
            <Link to="/contact" className="hover:text-background transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>;
}
