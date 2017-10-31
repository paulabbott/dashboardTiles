var mongoose = require('mongoose');
var Schema = require('../schemas/dashboardTile');

var DashboardTileSchema = mongoose.Schema(Schema);

var DashboardTile = mongoose.model("DashboardTile", DashboardTileSchema);
module.exports = DashboardTile;