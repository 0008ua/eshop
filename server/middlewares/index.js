const { setCSRFCookie, setFrontendAuthCookie } = require('./cookie');
const { authentication, authorization, sendFeedbackMessage, recaptcha } = require('./shared');

module.exports = {
    setCSRFCookie,
    setFrontendAuthCookie,
    recaptcha,
    authentication,
    authorization,
    sendFeedbackMessage,
};
