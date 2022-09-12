
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

    const newHeader = createHeader('header', ' This is a new header');
    content.appendChild(newHeader);

    const lasagnaPic = displayImage();
    content.appendChild(lasagnaPic);

    const recipeWrapper = displayGrid();
    content.appendChild(recipeWrapper);

    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    content.appendChild(main);

    
    
   

}