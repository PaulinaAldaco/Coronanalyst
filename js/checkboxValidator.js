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