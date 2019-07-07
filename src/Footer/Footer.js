export default root => {
  const footer = window.document.createElement('footer');
  footer.className = 'page-footer';
  const footerWrapper = window.document.createElement('div');
  footerWrapper.className = 'container';
  footerWrapper.innerHTML =
    '<h5 class="white-text">Footer content</h5><p>Sample content</p>';
  const footerCopyrightWrapper = document.createElement('div');
  footerCopyrightWrapper.className = `footer-copyright`;
  const footerCopyright = document.createElement('div');
  footerCopyright.className = 'container';
  footerCopyright.innerText = '© 2014 Copyright Text';
  footerCopyrightWrapper.appendChild(footerCopyright);
  footer.appendChild(footerWrapper);
  footer.appendChild(footerCopyrightWrapper);
  root.appendChild(footer);
  return true;
};
