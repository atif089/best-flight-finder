const logger = require('./logger'),
      mock_ip = require('./lib/mock-ip');

// scanner
var _exports = {
  pollInterval : 4000,
  apiEndpoint  : 'http://partners.api.skyscanner.net/apiservices/pricing/v1.0',
  market       : 'IN', // GB, US, IN
  currency     : 'EUR',
  locale       : 'en-GB',
  apiKey       : 'am687813570625605629435511938539'
};

// mailer export
_exports.mailer = { authTransport: 'smtps://atif089%40gmail.com:dtwaawgtcxncjsrw@smtp.gmail.com' };

_exports.XForwardIPAddress = mock_ip();

// dateCombos
_exports.dateCombos = [

  {
    startDate    : { value: '2017-11-05', lookAheadRange: 6 },
    returnDate   : { value: '2018-01-15', lookAheadRange: 7 }, // or null
    routeOptions : {
      originPlace      : 'HYD',
      destinationPlace : 'AMS',
      duration         : 1000,  // minutes
      stops            : 1,
      maxPrice         : 800
      /* includecarriers: "EY;9W;EK;KL;LH" */
    }
  },



];

// export
module.exports = _exports;
