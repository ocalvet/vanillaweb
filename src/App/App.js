import styles from './App.css';

export default (document = window.document) => {
  console.log(styles);
  return {
    init(selector = '#root') {
      const container = document.querySelector(selector);
      if (container) {
        const app = document.createElement('div');
        app.classList.add('loading-text');
        app.innerText = 'Application Loaded';
        container.appendChild(app);
      } else {
        throw Error(`Cannot find element with selector ${selector}`);
      }
    }
  };
};
