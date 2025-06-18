// // code your solution here

function saturdayFun(toDo="roller-skate"){
    return `This Saturday, I want to ${toDo}!`
}console.log(saturdayFun('go swimming'))


const mondayWork=function(what="go to the office"){
    return `This Monday, I will ${what}.`
};
console.log(mondayWork())
console.log(mondayWork('go to the USA'))


function wrapAdjective(ast="*"){
    return function (adj="test"){
        return `You are ${ast}${adj}${ast}!`;
    };
}
const encourangingPromptFunction=wrapAdjective()
console.log(encourangingPromptFunction("a smart person"))

