let horizon = window.innerHeight / 1.75;
let heightOfSky = window.innerHeight-horizon;
let heightOfGrass = horizon;

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

function tile(url, left, bottom, width, height) {
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            newImage(url, left + w * 100, bottom + h * 100)
        }
    }
}



function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function item(url, left, bottom) {
    let object = newImage(url, left, bottom)
    object.addEventListener('dblclick', () => {
        object.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url
        inventory.append(inventoryItem)
    })
}

let inventory = document.createElement('div')

function newInventory() {
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return 
}

newInventory()
newImage('assets/green-character.gif', 100, 250)
newImage('assets/tree.png', 200, 450)
newImage('assets/pillar.png', 350, 250)
newImage('assets/pine-tree.png', 450, 350)
newImage('assets/crate.png', 150, 350)
newImage('assets/well.png', 500, 575)

item('assets/sword.png', 500, 555)
item('assets/shield.png', 185, 335)
item('assets/staff.png', 600, 250)

