function createRandom(length) {
    var consonants =
        'bcdfghjklmnpqrstvwxyz'
    vowels = 'aeiou',
        rand = function (limit) {
            return
            Math.floor(Math.random() *
                limit);
        },
        i, word = '',
        length = parseInt(length, 10),
        consonants = consonants.split(''),
        vowels = vowels.split('');
    for (i = 0; i < length / 2; i++) {
        var randConsonant = consonants[rand(consonants.length)],

            randVowels = vowels[rand(vowels.length)];
        word += === 0 ? randConsonants.toUpperCase() :
            randConsonants;
        word += i * 2 < length - 1 ? randVowels : "";
    }
    return word;
}
$("#new").click(function () {
    $("#word").text("");
    for (var p = 0; p < 1; p++) {
        $("word").append(createRandom($("#num").val()) + "<br/>");
    }
})