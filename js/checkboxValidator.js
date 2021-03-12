function deRequireCb(Name) {
    elements=document.getElementsByName(Name);

    var atLeastOneChecked=false;//at least one checkbox is checked
    for (i=0; i<elements.length; i++) {
        if (elements[i].checked === true) {
            atLeastOneChecked=true;
        }
    }

    if (atLeastOneChecked === true) {
        for (i=0; i<elements.length; i++) {
            elements[i].required = false;
        }
    } else {
        for (i=0; i<elements.length; i++) {
            elements[i].required = true;
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll("input[type=checkbox]");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Por favor, selecciona al menos una opción");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
})