software_updates=[version_spotify={
    name:2.1,
    release_date:2022,
    bugs:"ewr4",
    feature:"karaoke mode",
    author:"spotify"

},
version_truecaller={
       name:3.1,
       release_date:2022,
       bugs:"dghdg",
       feature:"introducing to action calls",
       author:"truecaller"

},
version_netflix={
name:4.1,
release_date:2022,
bugs:"wert",
feature:"icons get new look",
author:"netflix"   
}]
function findbyyear(year){
count_updates=software_updates.filter(n=>n.release_date.includes(year))
console.log(`${count_updates.length},"this is the countable release date ,+${year}`)
console.table(count_updates)
}
findbyyear(2022)