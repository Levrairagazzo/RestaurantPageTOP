const itemArray = []

let generateItem = (name, description) =>{
    let  newItem = document.createElement('div');
    let itemName = document.createElement('h3');
    itemName.textContent = name;
    
    let itemDescrition = document.createElement('p');
    itemDescrition.textContent = description;

    newItem.appendChild(itemName);
    newItem.appendChild(itemDescrition);

    return newItem;
}

let menuWrapper = document.createElement('div');
menuWrapper.setAttribute('id', 'itemWrapper');

function generateMenuItem(wrapper){
    let item;
    for (let index = 0; index < 6; index++) {
        item = generateItem('Title', 'Description');
        wrapper.appendChild(item);        
    }
    
}

generateMenuItem(menuWrapper);

export default function displayMenu(root){

    const myItem = generateItem('Name', 'Description');

    root.appendChild(myItem);
    


}