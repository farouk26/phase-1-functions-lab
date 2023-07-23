// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if (blocks >= 42) {
        return (blocks - 42)
    }
    else {
        return (42 - blocks)
    }
}
function distanceFromHqInFeet(blocks){
    if (blocks >= 42) {
        return ((blocks - 42)*264)
    }
    else {
        return ((42 - blocks)*264)
    }
}
function distanceTravelledInFeet(a,b){
    if (a >= 43 && b >= 48) {
        return ((b - a)*264)
    }
    else {
        return ((a - b)*264)
    }
}
function calculatesFarePrice(a,b){
    let baseFare = 0
    let distance = Math.abs(b - a) * 264
    if (distance >= 0 && distance <= 400) {
        return baseFare
    }
    else if (distance >= 400 && distance <= 2000) {
        return 0.02 * (distance - 400)
    }
    else if (distance > 2000 && distance <= 2500) {
        baseFare = 25 
        return baseFare
    } else {
        return "cannot travel that far"
    }
}

console.log(distanceFromHqInBlocks(43))
console.log(distanceFromHqInBlocks(50))
console.log(distanceFromHqInBlocks(34))

console.log(distanceFromHqInFeet(43))
console.log(distanceFromHqInFeet(50))
console.log(distanceFromHqInFeet(34))

console.log(distanceTravelledInFeet(43, 48))
console.log(distanceTravelledInFeet(50, 60))
console.log(distanceTravelledInFeet(34, 28))

console.log(calculatesFarePrice(43,44))
console.log(calculatesFarePrice(34,32))
console.log(calculatesFarePrice(50,58))
console.log(calculatesFarePrice(34,24))


