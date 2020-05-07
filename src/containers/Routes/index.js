import Home from '../Home/Home.container';
import Resume from '../Resume/Resume.container';

const Routes = [
  {
    path: '/home',
    exact: true,
    container: Home,
  },
  {
    path: '/resume',
    exact: true,
    container: Resume,
  },
];

export default Routes;
