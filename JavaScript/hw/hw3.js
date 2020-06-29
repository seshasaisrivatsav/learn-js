/*
Problem statement:
//Copy to a new jsfiddle and send me the url of finished work.
//write a function to add new child
//wirte a funciton to change a child's name


 */


//Note: Do not make changes to this fidd
const profiles = [{
    name: 'john',
    age: 20,
    single: true,
    changeChildsName(name, newName){
        for(let [i, v] of this['list of children'].entries()){
            if(v.name === name){
                this['list of children'][i].name = newName;
            }
           
        }
    },
    'list of children': [{
        name: 'peter',
        age: 10
    }, {
        name: 'jon',
        age: 20
    }]
}];


// function to add a child

const addChild = function(profile, name, age){
    profile[0]['list of children'].push({name: name, age: age});
};



// change name of john's child peter to petah

profiles[0].changeChildsName('peter', 'petah');
console.log('profiles');