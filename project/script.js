let profiles = [
    {
        name: "sesha",
        age: 26,
        relationshipStatus: "single",
        children: []
    },
     {
        name: "Ravi",
        age: 27,
        relationshipStatus: "married",
        children: [{
            name: "Ravi Jr",
            age: 4
        }, {
            name: "Ram",
            age: 1
        }]
    },
     {
        name: "Paul",
        age: 46,
        relationshipStatus: "divorced",
        children: [{
            name: "Erik",
            age: 14
        }, {
            name: "Manny",
            age: 11
        }]
    },
    {
        name: "Rick",
        age: 66,
        relationshipStatus: "married",
        children: [{
            name: "Shifty",
            age: 24
        }, {
            name: "Morty",
            age: 21
        }]
    }
    
    
];

window.onload = function () {
    
let inHtml = "";
$.each(profiles, function (i, e) {
    
    let childInfo = "";
    for (let i=0; i<e.children.length; i++) {
        childInfo += e.children[i].name + " " + e.children[i].age + " |";
    }
    
    let newItem = "<tr>"+
        "<td>"+i+"</td>" + 
        "<td>"+e.name +"</td>"+
        "<td>"+e.age+"</td>"+
       "<td>"+e.relationshipStatus+"</td>"+
        "<td>" + childInfo+"</td>"
        "</tr>";
    inHtml += newItem;
});

$("tbody.addTableRows").html(inHtml);

}