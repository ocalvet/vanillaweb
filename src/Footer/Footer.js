export default root => {
  const footer = window.document.createElement('footer');
  footer.className = 'page-footer';
  const footerWrapper = window.document.createElement('div');
  footerWrapper.className = 'container';
  footerWrapper.innerText = 'Footer content';
  const footerCopyright = document.createElement('div');
  footerCopyright.className = 'footer-copyright';
  footerCopyright.innerText = '© 2014 Copyright Text';
  footer.appendChild(footerWrapper);
  footer.appendChild(footerCopyright);
  root.appendChild(footer);
  return true;
};
