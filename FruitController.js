const fruits = require('./data');

const index = ( mess ) => {

    if( mess != undefined ){
        console.log( mess )
    }

    for (const fruit of fruits) {
        console.log(fruit);
    }
}

const store = ( name, mess ) => {
    console.log( mess );
    fruits.push( name );
    index();
};

const update = ( key, value, mess ) => {
    console.log(mess);
    fruits.splice(key, 1, value)
    index();
};

const destroy = ( key, mess ) => {
    console.log(mess);
    fruits.splice(key, 1);
    index();
};

module.exports = { index, store, update, destroy };