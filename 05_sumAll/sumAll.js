function sumAll(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        return 'ERROR';
    }

    if (start < 0 || end < 0) {
        return 'ERROR';
    }

    let sum = 0;
    const min = Math.min(start, end);
    const max = Math.max(start, end);

    for (let i = min; i <= max; i++) {
        sum+= i;
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;
