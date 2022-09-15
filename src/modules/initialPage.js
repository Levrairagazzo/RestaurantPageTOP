
function createHeader(ID, text){
    const newHeader = document.createElement('header');
    newHeader.setAttribute('id', ID);
    newHeader.innerHTML = text;

    return newHeader;
}

function displayImage(){
    const lasagnaPic = document.createElement('img');
    lasagnaPic.setAttribute('src', './lasagnePesto.jpeg');
    return lasagnaPic;

}

function displayGrid(){
    const recipeWrapper = document.createElement('div');
    recipeWrapper.setAttribute('id', 'recipeWrapper');
    let newChild;
    for (let index = 0; index < 4; index++) {
        newChild = document.createElement('div');
        newChild.setAttribute('class', 'recipe');
        newChild.innerHTML = index;
        recipeWrapper.appendChild(newChild);
        
    }

    return recipeWrapper;

}

export function createButton(text){
    const myButt = document.createElement('button')
    myButt.innerHTML = text;
    return myButt;
}









export default function loadInitialPage(){
    const content = document.getElementById('content');
    const permanent = document.createElement('div');
    permanent.setAttribute('class', 'permanent');
    content.appendChild(permanent);

    const newHeader = createHeader('header', "Welcome to Syd's Restaurant");
    permanent.appendChild(newHeader);

    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('id', 'buttonContainer');
    permanent.appendChild(buttonContainer);

    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    content.appendChild(main);

}