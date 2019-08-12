function urutkanAbjad(str) {
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var strArray = str.split('');
    var resultNumber = [];
    var resultString = [];
    for (var i = 0; i < alphabet.length; i++) {
        for (var j = 0; j < strArray.length; j++) {
            if (strArray[j] === alphabet[i]) {
                resultNumber.push(i);
            }
        }
    }
    resultNumber.sort(function(a,b){
        a < b;
    });
    for (var k = 0; k < resultNumber.length; k++) {
        resultString += alphabet[resultNumber[k]];
    }
    return resultString;
}
  
// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'