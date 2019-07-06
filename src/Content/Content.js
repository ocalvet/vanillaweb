export default root => {
  const content = window.document.createElement('main');
  const contentWrapper = window.document.createElement('div');
  contentWrapper.className = 'container';
  contentWrapper.innerText = 'Content';
  content.appendChild(contentWrapper);
  root.appendChild(content);
  return true;
};
