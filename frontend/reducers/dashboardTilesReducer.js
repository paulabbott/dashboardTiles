import {
    FETCH_DASHBOARD_DATA
} from 'modules/dashboard/actions/dashboardActions';

import {
    FETCH_DASHBOARD_TILES,
    UPDATE_DASHBOARD_TILES
} from '../actions/dashboardTilesActions';

export default function(state = {}, action) {
    
    switch(action.type) {

        case FETCH_DASHBOARD_DATA:
            return action.payload._dashboardData._dashboardTiles || {};
        case UPDATE_DASHBOARD_TILES:
            console.log(action.payload);
            return action.payload._dashboardTiles;
        case FETCH_DASHBOARD_TILES:
            return action.payload._dashboardTiles;
    }

    return state;

}