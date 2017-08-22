//Connect
import * as Sequelize from 'sequelize';

var sequelize = new Sequelize('postgres://david@localhost:5432/tunr_relationships');

var Artist = sequelize.import("./artist");
var Manager = sequelize.import("./manager");
var Song = sequelize.import("./song");

Song.belongsTo(Artist);
Artist.hasMany(Song);
Manager.hasMany(Artist);
Artist.belongsTo(Manager);

const db = <any>{};
db.models = {
	Artist,
	Manager,
	Song
};

//Export models and Sequelize for seed and dbSetup
db.Sequelize = Sequelize;
db.sequelize = sequelize;

export {db};