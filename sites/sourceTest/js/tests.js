$(function () {
    let resultTestLang = {
        first: '',
        second: '',
        third: '',
        four: '',
        five: '',
        six: '',
        seven: '',
        eight: '',
        nine: ''
    };
    $(".grid-item").fadeOut();
    $("#firstQuestionLang").fadeIn();
    let firstTest = document.getElementById('firstTest');
    firstTest.addEventListener('click', function () {
        var radiosOne = document.getElementsByName('firstQuestionLang');
        for (var i = 0, length = radiosOne.length; i < length; i++) {
            if (radiosOne[i].checked) {
                resultTestLang.first = radiosOne[i].value;
                $("#secondQuestionLanguage").fadeIn();
            }
        }

        var radiosTwo = document.getElementsByName('sixQuestionLang');
        for (var i = 0, length = radiosTwo.length; i < length; i++) {
            if (radiosTwo[i].checked) {
                resultTestLang.second = radiosTwo[i].value;
                $("#thirdQuestionLanguage").fadeIn();
                document.querySelector('#thirdQuestionLanguage').scrollIntoView({ 
                    behavior: 'smooth' 
                  });
            }
        }

        var radiosThree = document.getElementsByName('secondQuestionLang');
        for (var i = 0, length = radiosThree.length; i < length; i++) {
            if (radiosThree[i].checked) {
                resultTestLang.third = radiosThree[i].value;
                $("#fourQuestionLanguage").fadeIn();
            }
        }

        var radiosFour = document.getElementsByName('sevenQuestionLang');
        for (var i = 0, length = radiosFour.length; i < length; i++) {
            if (radiosFour[i].checked) {
                resultTestLang.four = radiosFour[i].value;
                $("#fiveQuestionLanguage").fadeIn();
                document.querySelector('#fiveQuestionLanguage').scrollIntoView({ 
                    behavior: 'smooth' 
                  });
            }
        }

        var radiosFive = document.getElementsByName('thirdQuestionLang');
        for (var i = 0, length = radiosFive.length; i < length; i++) {
            if (radiosFive[i].checked) {
                resultTestLang.five = radiosFive[i].value;
                $("#sixQuestionLanguage").fadeIn();
            }
        }

        var radiosSix = document.getElementsByName('eightQuestionLang');
        for (var i = 0, length = radiosSix.length; i < length; i++) {
            if (radiosSix[i].checked) {
                resultTestLang.six = radiosSix[i].value;
                $("#sevenQuestionLanguage").fadeIn();
                document.querySelector('#sevenQuestionLanguage').scrollIntoView({ 
                    behavior: 'smooth' 
                  });
            }
        }

        var radiosSeven = document.getElementsByName('fourQuestionLang');
        for (var i = 0, length = radiosSeven.length; i < length; i++) {
            if (radiosSeven[i].checked) {
                resultTestLang.seven = radiosSeven[i].value;
                $("#eightQuestionLanguage").fadeIn();
            }
        }

        var radiosEight = document.getElementsByName('nineQuestionLang');
        for (var i = 0, length = radiosEight.length; i < length; i++) {
            if (radiosEight[i].checked) {
                resultTestLang.eight = radiosEight[i].value;
                $("#nineQuestionLanguage").fadeIn();
                document.querySelector('#nineQuestionLanguage').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
            }
        }

        var radiosNine = document.getElementsByName('fiveQuestionLang');
        for (var i = 0, length = radiosNine.length; i < length; i++) {
            if (radiosNine[i].checked) {
                resultTestLang.nine = radiosNine[i].value;
                resultsLangTest(resultTestLang)
            }
        }
    })
});


function resultsLangTest(result) {
    console.log(result);
    $("#resultTestLang").fadeIn();
}
