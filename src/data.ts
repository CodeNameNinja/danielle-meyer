// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Experience',
    url: '#experience-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/sicklywhale.jpeg/',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sicklywhale/',
  },
];

const resourceLinks = [
  {
    label: 'Behance',
    url: 'https://www.behance.net/daniellmeyer',
  },
];

const heroText =
  'A freelance graphic and visual artist, blending creativity and storytelling to craft bold, expressive designs across digital and print media.';

const locationPlace = `15°22'22.0"N 44°10'39.5"E`;
const locationCountry = 'Yemen, Sanaa';

// cal.com
const dataCalNamespace = '30min';
const dataCalLink = 'sicklywhale/30min';
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};
