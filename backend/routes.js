var Auth = require(global.app + '/middleware/authorization.js');
var Permissions = require(global.app + '/middleware/permissions.js');
var DefaultRouteResponse = require(global.app + '/helpers/query/defaultRouteResponse');
var DashboardTiles = require('./controller');

module.exports = function(app, passport, io) {
    app.get('/api/dashboardTiles', Auth.isAuthenticated, Permissions.isAdmin, function(req, res) {
        DashboardTiles.fetchDashboardTiles(req, function(errObject, resObject) {
            DefaultRouteResponse(res, errObject, resObject);
        })
    });

    app.put('/api/dashboardTiles', Auth.isAuthenticated, Permissions.isAdmin, function(req, res) {
        DashboardTiles.updateDashboardTiles(req, function(errObject, resObject) {
            DefaultRouteResponse(res, errObject, resObject);
        })
    });
}