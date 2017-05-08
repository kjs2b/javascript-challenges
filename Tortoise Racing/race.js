//given two speeds v1 (A speed, integer > 0) and v2 (B speed, integer > 0)
// and a lead g (integer > 0) how long will it take B to catch A?

//The result will be an array [h, mn, s] where h, mn, s is the time needed 
//in hours, minutes and seconds (don't worry for fractions of second). 
//If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go.

function race(v1, v2, g) {
    if (v1 >= v2) return null;

    var timeInSeconds = Math.floor(g / (v2 - v1) * 3600);
    var seconds = timeInSeconds % 60;
    var timeInMinutes = (timeInSeconds - seconds) / 60;
    var minutes = timeInMinutes % 60;
    var hours = (timeInMinutes - minutes) / 60;
    
    return [hours, minutes, seconds];
    
}