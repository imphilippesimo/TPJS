var targetInput = document.getElementById("country"),
    results = document.getElementById("autocomplete-results"),
    countryList = ['Albania', 'Cameroon', 'Columbia', 'Cuba', 'El Salvador', 'Jordan', 'Kenya', 'Nepal', 'Romania', 'Sri lanka', 'Wales'];
matches = [];

targetInput.value = null;

resultsCursor = 0;

//focus on the input
targetInput.focus();

//Add an event listener to prevent default behaviour on key press
targetInput.addEventListener('keydown', function (event) {
    if (event.keyCode == 13)
        event.preventDefault();
})

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

        
        switch (event.keyCode) {
            case 13:
                //récuperer le contenu du résultat sur le quel est le curseur et modifier la valeur de targetInput

                //puis cacher la liste de résultats
                
                //remettre le curseur à zéro
               
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
    //si l'action est show, ajouter l'attribut "visible" à la liste de résultats sinon retirer
    //astuce:
    //ajouter un attribut : elem.classList.add('attribut');
    //retirer un attribut : elem.classList.remove('attribut');
   

}

// Define a function for checking if the input value matches any of the counry names
function getMatches(inputText) {
    var matchList = [];

    //parcourir la liste de pays, vérifier pour chaque chaîne de pays si la chaîne entrée y fait partie 
    //pour ce faire, utiliser la fonction String.indexOf()
    //si c'est le cas , alors ajouter le pays à la liste des résultats 
    //enfin de parcours, retourner la iste des pays correspondants.
   

}

//Define a function for displaying the result list
function displayMatches(matchList) {
    var j = 0;

    while (j < matchList.length) {
        results.innerHTML += '<li class="result">' + matchList[j] + '</li>';
        j++;
    }

    //the first child get the class of "highlighted"
    moveCursor(resultsCursor); //ici resultsCursor = 0

    // show the results
    toggleResults('show');


}

//define a function for moving the cursor in the results list
function moveCursor(pos) {
    //algorithme:
    //se balader dans la liste de résultats et mettre en surbrillance ("highlighted") l'élément se trouvant à la position pos
    //enlever l'attribut de surbrillance sur tous les autres
}