
function ShowForm() {
    var forms = document.getElementById("forms");
    forms.style.right = 0 + 'px';
    var blackOverlay = document.getElementById("black-overlay");
    blackOverlay.style.display = 'flex';
}

function HideForm(){
    var forms = document.getElementById("forms");
    forms.style.right = -500 + 'px';
    var blackOverlay = document.getElementById("black-overlay");
    blackOverlay.style.display = 'none';
}