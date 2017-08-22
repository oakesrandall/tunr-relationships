import { db } from '../models';
let DB = db.models;

let lucySongs = [
	{
		title: "O sole mio",
		duration: "3:21",
		date_of_release: "1990",
		album_title: "Three Tenors in Concert",
		artistId: ""
	},
	{
		title: "Nessun dorma",
		duration: "3:21",
		date_of_release: "1990",
		album_title: "Three Tenors in Concert",
		artistId: ""
	}
];

var managerCreate = function() {
    console.log("ran manager create");
	return DB.Manager.create({
    name: 'Ricky Bobby',
    email: 'rbobby@gmail.com',
    office_number: '516-877-0304',
    cell_phone_number: '718-989-1231',
    })
    .then(artistCreate())
    .then(function(manager) {
        console.log(manager);
        // artist.managerId = manager.id;
    })

};

var artistCreate = function() {
    console.log("running artist create");
	return DB.Artist.create({
    name: 'Luciano Pavarotti',
    photoUrl: 'http://img.informador.com.mx/biblioteca/imagen/677x508/811/810055.jpg',
    nationality: 'Italiano',
    instrument: 'Voice',
    home_address: '1 Strada Roma'
  })
  .then(function(artist) {
    lucySongs.forEach(function(song) {
        song.artistId = artist.id;
    });
    // console.log(artist);
    DB.Song.bulkCreate(lucySongs);
});
};

var songCreate = function() {
    console.log("running songCreate");
	return DB.Song.create({
	    title: 'The Best Song Ever',
	    duration: '3:31',
	    date_of_release: '7/13/2015',
	    album_title: 'Best Album Ever'
    });
};

// artistCreate()
managerCreate()
.then(songCreate)
.then(function() {
	process.exit();
});