// render trang index.ejs (nếu gọi từ trình duyệt web)
function index(req, res) {
  res.render('index', { title: 'Trang chủ Express + MySQL' });
}

// trả về JSON (nếu gọi API)
function apiHome(req, res) {
  res.json({ message: 'Welcome to API Home' });
}

module.exports = { index, apiHome };
