import { createBrowserHistory } from 'history'

const routes = {
  '/': 'Home',
  '/dashboard': 'Dashboard',
  '/subject/list': 'Subject List',
  '/subject/new': 'Subject Create',
  '/user/list': 'Listing User',
  '/user/new': 'New User'
};
export default routes;
export const history = createBrowserHistory()