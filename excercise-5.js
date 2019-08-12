function ubahHuruf(kata) {
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var kataBaru = [];
    var arrKata = [];
    arrKata = kata.split('');
    for (var i = 0; i < alphabet.length; i++) {
        for (var j = 0; j < arrKata.length; j++) {
            if (alphabet[i] === arrKata[j]){
                arrKata.splice(j,1,i+1);
            }
        }
    }
    for (var k = 0; k < arrKata.length; k++) {
        kataBaru += alphabet[arrKata[k]];
    }
    return kataBaru;
}
  
// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu