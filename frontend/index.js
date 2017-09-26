import {registerComponent, registerReducer, registerRoute, registerMenuItem} from 'bloom';
import DashboardTilesContainer from './containers/dashboardTilesContainer';
import DashboardTilesReducer from './reducers/dashboardTilesReducer';
import EditDashboardTilesContainer from './containers/editDashboardTilesContainer';

registerComponent('dashboardTiles', 'Dashboard Tiles', DashboardTilesContainer, 'dashboard:learner');
registerReducer('dashboardTiles', DashboardTilesReducer);
registerRoute('dashboardTiles', EditDashboardTilesContainer);
registerMenuItem({text: 'Dashboard Tiles', _link: "dashboardTiles", _icon: "grid", _permission: "admin"}, 0);