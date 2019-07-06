import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';

export default (document = window.document) => {
  return {
    init(selector = '#root') {
      const container = document.querySelector(selector);
      if (container) {
        Header(container);
        Content(container);
        Footer(container);
      } else {
        throw Error(`Cannot find element with selector ${selector}`);
      }
    }
  };
};
