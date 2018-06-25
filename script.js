var targetInput = document.getElementById("country"),
    results = document.getElementById("autocomplete-results"),
    countryList = ['Albania', 'Cameroon', 'Columbia', 'Cuba', 'El Salvador', 'Jordan', 'Kenya', 'Nepal', 'Romania', 'Sri lanka', 'Wales'];
matches = [];

targetInput.value = null;

resultsCursor = 0;

//focus on the input
targetInput.focus();

// Add an event listener to prevent default behaviour on key press
// targetInput.addEventListener('keydown', function (event) {
//     if (event.keyCode == 13 || event.keyCode == 40 || event.keyCode == 38)
//         event.preventDefault();
// })

// Add the event listener for the inpu keyup
targetInput.addEventListener('keyup', function (event) {

    /* 38: key Up
        13: enter
        40: down
    */

    results.innerHTML = "";
    toggleResults("hide");

    if (this.value.length > 0) {
        matches = getMatches(this.value);
        if (matches.length > 0) {
            displayMatches(matches);
        }
    }

    if (results.classList.contains('visible')) {

        //console.log(event.keyCode);
        switch (event.keyCode) {
            case 13:
                targetInput.value = results.children[resultsCursor].innerHTML;
                toggleResults("hide");
                resultsCursor = 0;
                break;
            case 38:

                if (resultsCursor > 0) {
                    resultsCursor--;
                    moveCursor(resultsCursor);
                }
                break;

            case 40:
                if (resultsCursor < (matches.length - 1)) {
                    resultsCursor++;
                    moveCursor(resultsCursor);
                }
                break;
        }
    }
})


//Define the function for toogling the result list
function toggleResults(action) {
    if (action == 'show') {
        results.classList.add("visible");
    } else if (action == 'hide') {
        results.classList.remove("visible");
    }

}

// Define a function for checking if the input value matches any of the counry names
function getMatches(inputText) {
    var matchList = [];

    for (var i = 0; i < countryList.length; i++) {
        if (countryList[i].toLowerCase().indexOf(inputText.toLowerCase()) != -1) {
            matchList.push(countryList[i]);
        }
    }

    return matchList;

}

//Define a function for displaying the result list
function displayMatches(matchList) {
    var j = 0;

    while (j < matchList.length) {
        results.innerHTML += '<li class="result">' + matchList[j] + '</li>';
        j++;
    }

    //the first child get the class of "highlighted"
    moveCursor(resultsCursor);

    // show the results
    toggleResults('show');


}

//define a function for moving the cursor in the results list
function moveCursor(pos) {
    var x = 0;
    while (x < results.children.length) {
        results.children.item(x).classList.remove("highlighted");
        x++;

    }
    results.children.item(pos).classList.add("highlighted");
}