import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default (document = window.document) => {
  return {
    init(selector = '#root') {
      const container = document.querySelector(selector);
      if (container) {
        const app = document.createElement('div');
        container.appendChild(app);
        Header(app);
        Footer(app);
      } else {
        throw Error(`Cannot find element with selector ${selector}`);
      }
    }
  };
};
