export default root => {
  const footer = window.document.createElement('footer');
  const footerWrapper = window.document.createElement('div');
  footerWrapper.innerText = 'Copyright';
  footer.appendChild(footerWrapper);
  root.appendChild(footer);
  return true;
};
