
function generate(n) {
    var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   

    if (n > max) {
        return generate(max) + generate(n - max);
    }

    max = Math.pow(10, n + add);
    var min = max / 10; // Math.pow(10, n) basically
    var number = Math.floor(Math.random() * (max - min + 1)) + min;

    return ("" + number).substring(add);
}

// Define a function to get random numbers for a specific page
async function getRandomNumbersForPage(pageNumber, pageSize, number) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const randomNumbers = [];
    for (let i = startIndex; i < endIndex; i++) {
        randomNumbers.push(await generate(number));
    }
    return randomNumbers;
}

// Define a function to get random numbers for all pages
exports.getRandomNumbersForAllPages = async (totalPages, pageSize, newNumber) => {
    let number = newNumber
    const allRandomNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        const randomNumbersForPage = await getRandomNumbersForPage(i, pageSize, number);
        allRandomNumbers.push(...randomNumbersForPage); // Flatten the array
    }
    return allRandomNumbers;
}