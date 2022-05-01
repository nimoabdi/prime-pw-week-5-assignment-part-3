console.log('***** Music Collection *****')

let collection = []

function addToCollection(title, artist, yearPublished, tracks){
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks,
    }
    collection.push(album);
    return album;
}


console.log(addToCollection('Whole Lotta Red', 'Playboi Carti', '2020', 'New N3on: 1:57' ));
console.log(addToCollection('Eternal Atake', 'Lil Uzi Vert', '2020', 'Venitia: 3:10'));
console.log(addToCollection('Fancy You', 'Twice', '2019', 'Fancy: 3:39'));
console.log(addToCollection('Planet Her', 'Doja Cat', '2021', 'Need To Know: 3:30'));
console.log(addToCollection('Anti', 'Rihanna', '2016', 'Desperado: 3:06'));
console.log(addToCollection('Unapologetic', 'Rihanna', '2012', 'Diamonds: 3:45'));
console.log(collection)