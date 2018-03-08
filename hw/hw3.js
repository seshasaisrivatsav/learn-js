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
            console.log(v);
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
console.log(profiles[0]['list of children']);
profiles[0].changeChildsName("peter" , "petera")
console.log(profiles[0]['list of children']);


const addChild = function(profile, name, age){
//write your code here and

};

