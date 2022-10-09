
const getUser = (req, res) => {
    res.json({ statusCode: 200, message: "Success", data: { "name": "Aditya", "age": 30 } })
}

module.exports = {
    getUser
}