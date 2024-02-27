function Size(decksize) {
    this.decksize = decksize;
}

const Edu = {
    name: 'Edu',
    shape: 'Element Mi Amor',
    wheels: 'Spitfire Formula Four',
    trucks: 'Truck Independent Hollow Hi',
    berings: 'Redbones',
    decksize: 80,
        trick: function() {
            console.log('*insane kickflip :o*')
        }
}


    function Deck(name, shape, wheels, trucks, berings, decksize) {
        this.name = name;
        this.shape = shape;
        this.wheels = wheels;
        this.trucks = trucks;
        this.berings = berings;
        Size.call(this, decksize);
    }

    function Deck(name, shape, wheels, trucks, berings, decksize) {
        this.name = name;
        this.shape = shape;
        this.wheels = wheels;
        this.trucks = trucks;
        this.berings = berings;
        Size.call(this, decksize);

    }

const decksize = new Size("80");
const Dudu = new Deck('Dudu','ELEMENT 92 CLASSIC 8.0', 'Radial Formula Four', 'DELFINO FLOWER CREW', 'Black Sheep Gold', 80);
const Du = new Deck('Du', 'Element Mi Amor', 'Radial Formula Four', 'Truck Independent Hollow Hi', 'Red Bones', 75);


console.log(Du)
console.log(Dudu)
console.log(Edu)
