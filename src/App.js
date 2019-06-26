export default (document = window.document) => {
  return {
    init(selector = '#root') {
      const queryResult = document.querySelector(selector);
      console.log(queryResult);
      if (queryResult) {
        const element = queryResult;
        const app = document.createElement('div');
        app.innerText = 'Application Loaded';
        app.appendChild(element);
      } else {
        throw Error(`Cannot find element with selector ${selector}`);
      }
    }
  };
};
