const handleError = (res, error) => {
    console.log(error)
    res.status(500).json({ error });
};

module.exports = {handleError };