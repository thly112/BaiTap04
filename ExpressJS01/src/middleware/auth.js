const jwt = require('jsonwebtoken');


function auth(req, res, next) {
const header = req.headers['authorization'];
const token = header && header.startsWith('Bearer ') ? header.slice(7) : null;
if (!token) return res.status(401).json({ error: 'Thiếu token' });
try {
req.user = jwt.verify(token, process.env.JWT_SECRET);
next();
} catch (e) {
return res.status(401).json({ error: 'Token không hợp lệ' });
}
}


module.exports = { auth };