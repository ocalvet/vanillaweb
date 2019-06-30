import App from './App/App';

const init = () => {
  console.log(`Initializing ${process.env.APP_NAME}`);
  App().init('#app');
};

init();
