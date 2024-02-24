const JWT_COOKIES_NAME = "jwt";
const TOKEN_EXPIR_TIME = {
  ONE_MINUTS: 1000*60,
  ONE_DAYS: 1000 * 60 * 60 * 24,
  SEVEN_DAYS: 1000 * 60 * 60 * 24 * 7,
  YEAR_DAYS: 1000 * 60 * 60 * 24 * 365,
}
const setCookies = (name, value, options = {}) => {
  const expireData = options.Expire ? options.Expire : "";
  const domain = options.domain ? options.domain : "";
  var expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + expireData);
  document.cookie = name + "=" + value + "; expires=" + expirationDate + "; path=/; domain=" + domain + ";";
}
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
export { setCookies, getCookie, JWT_COOKIES_NAME, TOKEN_EXPIR_TIME }