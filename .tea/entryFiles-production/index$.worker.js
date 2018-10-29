require('./config$');
require('./importScripts$');
function success() {
require('../..//app');
require('../..//pages/login/login');
require('../..//pages/sign/sign');
require('../..//pages/vaccine/vaccine');
require('../..//pages/test/test');
require('../..//pages/vaccineinfo/vaccineinfo');
require('../..//pages/info/info');
require('../..//pages/check/check');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
