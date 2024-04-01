const { getRandomNumbersForAllPages } = require('../helper/middleware')
// Function to register a new user
exports.createRandomNumber = async (req, res) => {
    try {
        // Extract user details from request body
        let { pages, number } = req.body;
        let numberLength = number.toString().length;
        let newNumber = 10 - numberLength
        const totalPages = pages ? pages : 1;
        const pageSize = 10;
        const randomNumbersForAllPages = await getRandomNumbersForAllPages(totalPages, pageSize, newNumber);
        const concatenatedNumbers = randomNumbersForAllPages.map(i => number + i);
        return res.status(200).send({
            status: true,
            msg: 'your number list',
            data: concatenatedNumbers
        });
    } catch (error) {
        // If an error occurs during registration process, return a server error response
        return res.status(500).send({
            status: false,
            msg: 'something went wrong'
        });
    }
}




