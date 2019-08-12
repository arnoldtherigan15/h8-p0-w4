function tukarBesarKecil(kalimat) {
    var kalimatUppercase = kalimat.toUpperCase();
    var kalimatLowercase = kalimat.toLowerCase();
    var kalimatArr = kalimat.split('');
    for (var i = 0; i < kalimat.length; i++) {
        if (kalimat[i] != kalimatUppercase[i]) {
            kalimatArr.splice(i,1,kalimatUppercase[i]);
        } else if (kalimat[i] != kalimatLowercase) {
            kalimatArr.splice(i,1,kalimatLowercase[i]);
        }
    }
    return kalimatArr.join('');
}

// TEST CASES

console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"

console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"

console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"

console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"

console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"