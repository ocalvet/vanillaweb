import App from './App/App';
import './styles.css';

const init = () => {
  console.log(`Initializing ${process.env.APP_NAME}`);
  App().init('#app');
};

init();
