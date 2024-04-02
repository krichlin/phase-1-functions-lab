// Code your solution in this file!

function distanceFromHqInBlocks(num){
    let num2 = 0;
    if (num < 42){
        num2 = 42-num;

    }
    else if (num > 42) {
        num2 = num-42;
    }
    return (num2);
}

function distanceFromHqInFeet(num) {
    let num2 = 0;
    if (num < 42) { num2=42-num; }
    else if (num > 42) { num2 = num-42;}
    num2 = num2 * 264;
    return num2;
}

function distanceTravelledInFeet(num1, num2) {
    let num3 = 0;
    if (num2 >= num1) {num3 = (num2 - num1) * 264;}
    else if (num1 > num2) {num3 = (num1 - num2) * 264;}
    return num3;
}

function calculatesFarePrice(start, destination) {
    const dist = distanceTravelledInFeet(start, destination);

    if (dist <=400) { return 0; }
    else if (dist > 400 && dist <= 2000) {return .02 * (dist - 400);}
    else if (dist > 2000 && dist < 2500) {return 25;}
    else { return 'cannot travel that far';}
}