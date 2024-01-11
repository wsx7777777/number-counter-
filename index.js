let count = 0;

document.getElementById("buttondecrease").onclick = function() {
    count -=1
    document.getElementById('Mylabel').innerHTML = count;
}

document.getElementById("buttonreset").onclick = function() {
    count = 0
    document.getElementById('Mylabel').innerHTML = count;
}

document.getElementById("buttonincrease").onclick = function() {
    count +=1
    document.getElementById('Mylabel').innerHTML = count;
}
