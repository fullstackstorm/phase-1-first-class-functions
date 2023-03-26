const decimalTime = 5.5;

function turnToMinutes(remainderHours) {
    return remainderHours * 60;
}

function receivesAFunction(turnToMinutes){
    const decimalMinutes = decimalTime % 1;
    const hours = decimalTime - decimalMinutes;
    const minutes = turnToMinutes(decimalMinutes);

    return `${hours} hour(s) and ${minutes} minute(s).`
}

function returnsANamedFunction(){
    const namedFunction = () => "This is a named function!"

    return namedFunction;
}

const returnsAnAnonymousFunction = () => () => "This is a little like inception."