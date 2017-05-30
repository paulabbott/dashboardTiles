var mongoose = require('mongoose');
var Schema = require('../schemas/dashboardTile');

var DashboardTileSchema = mongoose.Schema(Schema);

DashboardTileSchema.index({
    "displayTitle":"text",
    "title":"text",
    "description": "text"
}, {background: true});

var DashboardTile = mongoose.model("DashboardTile", DashboardTileSchema);
module.exports = DashboardTile;