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

// added objects to collection

console.log(addToCollection('Whole Lotta Red', 'Playboi Carti', '2020', 'New N3on: 1:57' ));
console.log(addToCollection('Eternal Atake', 'Lil Uzi Vert', '2020', 'Venitia: 3:10'));
console.log(addToCollection('Fancy You', 'Twice', '2019', 'Fancy: 3:39'));
console.log(addToCollection('Planet Her', 'Doja Cat', '2021', 'Need To Know: 3:30'));
console.log(addToCollection('Anti', 'Rihanna', '2016', 'Desperado: 3:06'));
console.log(addToCollection('Unapologetic', 'Rihanna', '2012', 'Diamonds: 3:45'));
console.log(collection)


function showCollection(array) {
    console.log(array.length);
    for(let i=0;i<array.length; i++){
            console.log(`${array[i].title} by ${array[i].artist} published in ${array[i].yearPublished}
      ${array[i].tracks}`);
    }
    
}
showCollection(collection);

function findByArtist(artist) {
    let results = [];
    for (title of collection) {
      if (title.artist === artist) {
          results.push(title)
      }
    }
    return results;
}
console.log(findByArtist('Twice'))
console.log(findByArtist('Justin Bieber'))
console.log(findByArtist('Doja Cat'))
console.log(findByArtist('Rihanna'))
