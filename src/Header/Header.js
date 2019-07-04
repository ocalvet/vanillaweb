export default root => {
  const nav = window.document.createElement('nav');
  const mobileNavigation = window.document.createElement('div');
  mobileNavigation.className = 'nav-wrapper container';
  nav.appendChild(mobileNavigation);
  const logoLink = window.document.createElement('a');
  logoLink.href = '#';
  logoLink.className = `brand-logo`;
  logoLink.innerText = 'Logo';
  mobileNavigation.appendChild(logoLink);
  root.appendChild(nav);
  return true;
};
