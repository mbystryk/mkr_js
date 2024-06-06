let input = prompt("Enter a word:");

if (input === null) {
    alert("Canceled.");
}
else{
    const input_res = input.trim();
    if (input_res.length === 0) {
        alert("Invalid value");
    }
    else{
        let middleIndex = Math.floor(input.length / 2);
    
        if (input.length % 2 === 0) {
            alert(input[middleIndex - 1] + input[middleIndex]);
        } else {
            alert(input[middleIndex]);
        }
    }
}



