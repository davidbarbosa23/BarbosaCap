const baseStrings = {
  /** Routes */
  'routes.home': '/',
  'routes.projects': '/projects',
  'routes.projects.fgc': '/projects/fixed-gear-calculator',

  /** Page content */
  'home.title': 'Home',
  'home.content': 'Home content',

  'projects.title': 'Summary',
  'projects.content': 'Read more about the article on {medium} or {devto}.',

  'error.title': 'Error',
  'error.content': 'This page decided to take a vacation. Try again later.',

  /** Links */
  'links.medium': 'https://medium.com/prototyped/multi-language-routing-in-react-d7eb7a0688e9',
  'links.dev.to': 'https://dev.to/prototyp/multi-language-routing-in-react-k9l',
};

export type LanguageStrings = typeof baseStrings;
export const en = baseStrings;
