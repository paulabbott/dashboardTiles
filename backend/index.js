var Bloom = require(global.app + '/bloom');
var DashboardTile = require('./models/dashboardTile');

Bloom.registerPlugin('dashboardTiles', function(app, passport, io) {

    DashboardTile.findOne({}, function(err, dashboardTile) {
        if (!dashboardTile) {
            DashboardTile.create({}, function(err, dashboardTile) {
                console.log(dashboardTile);
            });
        }
    })

    require('./routes')(app, passport, io);

});