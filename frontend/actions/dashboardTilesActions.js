import axios from 'axios';
import Bluebird from 'bluebird';

export const FETCH_DASHBOARD_TILES = 'FETCH_DASHBOARD_TILES';
export const UPDATE_DASHBOARD_TILES = 'UPDATE_DASHBOARD_TILES';

export function fetchDashboardTiles(searchValue, currentPage) {
    
    return (dispatch) => {

        return axios.get('api/dashboardTiles')
        .then(function(response) {

            dispatch({
                type: FETCH_DASHBOARD_TILES,
                payload: response.data
            });

            return response;

        })
        .catch(function(response) {
            return Bluebird.reject(response);
        });

    }

}

export function updateDashboardTiles(update) {
    return (dispatch) => {

        return axios.put('api/dashboardTiles', update)
        .then(function(response) {

            dispatch({
                type: UPDATE_DASHBOARD_TILES,
                payload: response.data
            });

            return response;

        })
        .catch(function(response) {
            return Bluebird.reject(response);
        });

    }
}