/*
    find the biggest number from the array and remove it | Using for of loop

 */


let testArray = [345,768,67,457,456,456,134,4567];

removeBiggestElementFromArray(testArray);

function removeBiggestElementFromArray(arrayTest) {
    let biggest =  Number.NEGATIVE_INFINITY;
    let biggestIndex;
    for (let [index, element] of arrayTest.entries()) {
        if(  `${element}` >  biggest) {
            biggest = `${element}`;
            biggestIndex = `${index}`;
        }
    }
    console.log("Given Array :" + arrayTest);
    console.log("Biggest element: " + biggest);

    testArray.splice(biggestIndex, 1);

    console.log("Array after element removal: " + arrayTest );
}

/*
Method 2 : Using regular for loop
 */

(function removeBiggest(testArray) {
    let biggest =  Number.NEGATIVE_INFINITY;
    let biggestIndex;
    for (let i =0 ; i< testArray.length; i++) {
        if (testArray[i] > biggest) {
            biggest = testArray[i];
            biggestIndex = i;
        }
    }
    console.log("Given Array :" + testArray);
    console.log("Biggest element: " + biggest);

    testArray.splice(biggestIndex, 1);

    console.log("Array after element removal: " + testArray );
})(testArray);

/*
 CSS HOME WORK
 */