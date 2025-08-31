function delay(ms = 300) {
return (req, res, next) => setTimeout(next, ms);
}
module.exports = { delay };