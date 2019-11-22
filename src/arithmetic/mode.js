function mode(array) {
    var modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < array.length; i += 1) {
        number = array[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
    
    return withDescription(modes);
}

function withDescription(modes) {
    var lnth = modes.length;
    if (lnth === 1) return { modes };
    if (lnth === 2) return { 'description': 'bimodal', modes };
    if (lnth === 3) return { 'description': 'trimodal', modes };
    if (lnth > 3) return { 'description': 'multimodal', modes };
}

module.exports = mode;