function resultsLangTest() {
    var results = [];
    var radiosOne = document.getElementsByName('firstQuestionLang');

    for (var i = 0, length = radiosOne.length; i < length; i++) {
        if (radiosOne[i].checked) {
            results.push(radiosOne[i].value);
            console.log(results);
            break;
        }
    }

    var radiosTwo = document.getElementsByName('secondQuestionLang');

    for (var i = 0, length = radiosTwo.length; i < length; i++) {
        if (radiosTwo[i].checked) {
            results.push(radiosTwo[i].value);
            console.log(results);
            break;
        }
    }
}
