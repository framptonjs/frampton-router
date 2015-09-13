var FramptonBuild = require('frampton-build');
var packages = {
  'frampton-router' : { trees: null }
}

var build = new FramptonBuild({
  name     : 'frampton-router',
  packages : packages
});

module.exports = build.getDistTree();