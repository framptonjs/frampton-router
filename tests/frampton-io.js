(function() {
/*globals Frampton:true */
var define, require;
var global = this;

(function() {

  if (typeof Frampton === 'undefined') {
    throw new Error('Frampton is undefined');
  };

  define = Frampton.__loader.define;
  require = Frampton.__loader.require;

}());
define('frampton-io', ['exports', 'frampton/namespace', 'frampton-io/response', 'frampton-io/http/request', 'frampton-io/http/send', 'frampton-io/http/get', 'frampton-io/http/post', 'frampton-io/http/post_json', 'frampton-io/http/post_string', 'frampton-io/http/upload', 'frampton-io/http/utils/url', 'frampton-io/http/utils/query_pair', 'frampton-io/http/utils/query_escape', 'frampton-io/http/utils/query_string', 'frampton-io/http/utils/uri_encode', 'frampton-io/http/utils/uri_decode', 'frampton-io/file/read', 'frampton-io/file/data_url', 'frampton-io/file/binary_string', 'frampton-io/file/array_buffer', 'frampton-io/file/text'], function (exports, _framptonNamespace, _framptonIoResponse, _framptonIoHttpRequest, _framptonIoHttpSend, _framptonIoHttpGet, _framptonIoHttpPost, _framptonIoHttpPost_json, _framptonIoHttpPost_string, _framptonIoHttpUpload, _framptonIoHttpUtilsUrl, _framptonIoHttpUtilsQuery_pair, _framptonIoHttpUtilsQuery_escape, _framptonIoHttpUtilsQuery_string, _framptonIoHttpUtilsUri_encode, _framptonIoHttpUtilsUri_decode, _framptonIoFileRead, _framptonIoFileData_url, _framptonIoFileBinary_string, _framptonIoFileArray_buffer, _framptonIoFileText) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Frampton = _interopRequireDefault(_framptonNamespace);

  var _Response = _interopRequireDefault(_framptonIoResponse);

  var _Request = _interopRequireDefault(_framptonIoHttpRequest);

  var _send = _interopRequireDefault(_framptonIoHttpSend);

  var _get = _interopRequireDefault(_framptonIoHttpGet);

  var _post = _interopRequireDefault(_framptonIoHttpPost);

  var _postJson = _interopRequireDefault(_framptonIoHttpPost_json);

  var _postString = _interopRequireDefault(_framptonIoHttpPost_string);

  var _upload = _interopRequireDefault(_framptonIoHttpUpload);

  var _url = _interopRequireDefault(_framptonIoHttpUtilsUrl);

  var _queryPair = _interopRequireDefault(_framptonIoHttpUtilsQuery_pair);

  var _queryEscape = _interopRequireDefault(_framptonIoHttpUtilsQuery_escape);

  var _queryString = _interopRequireDefault(_framptonIoHttpUtilsQuery_string);

  var _uriEncode = _interopRequireDefault(_framptonIoHttpUtilsUri_encode);

  var _uriDecode = _interopRequireDefault(_framptonIoHttpUtilsUri_decode);

  var _read = _interopRequireDefault(_framptonIoFileRead);

  var _dataUrl = _interopRequireDefault(_framptonIoFileData_url);

  var _binaryString = _interopRequireDefault(_framptonIoFileBinary_string);

  var _arrayBuffer = _interopRequireDefault(_framptonIoFileArray_buffer);

  var _text = _interopRequireDefault(_framptonIoFileText);

  /**
   * @name IO
   * @namespace
   * @memberof Frampton
   */
  _Frampton['default'].IO = {};
  _Frampton['default'].IO.VERSION = '0.1.0';
  _Frampton['default'].IO.Response = _Response['default'];

  /**
   * @name Http
   * @memberof Frampton.IO
   * @namespace
   */
  _Frampton['default'].IO.Http = {};
  _Frampton['default'].IO.Http.Request = _Request['default'];
  _Frampton['default'].IO.Http.send = _send['default'];
  _Frampton['default'].IO.Http.get = _get['default'];
  _Frampton['default'].IO.Http.post = _post['default'];
  _Frampton['default'].IO.Http.postJson = _postJson['default'];
  _Frampton['default'].IO.Http.postString = _postString['default'];
  _Frampton['default'].IO.Http.upload = _upload['default'];

  /**
   * @name Utils
   * @memberof Frampton.IO.Http
   * @namespace
   */
  _Frampton['default'].IO.Http.Utils = {};
  _Frampton['default'].IO.Http.Utils.url = _url['default'];
  _Frampton['default'].IO.Http.Utils.queryPair = _queryPair['default'];
  _Frampton['default'].IO.Http.Utils.queryEscape = _queryEscape['default'];
  _Frampton['default'].IO.Http.Utils.queryString = _queryString['default'];
  _Frampton['default'].IO.Http.Utils.uriEncode = _uriEncode['default'];
  _Frampton['default'].IO.Http.Utils.uriDecode = _uriDecode['default'];

  /**
   * @name File
   * @memberof Frampton.IO
   * @namespace
   */
  _Frampton['default'].IO.File = {};
  _Frampton['default'].IO.File.read = _read['default'];
  _Frampton['default'].IO.File.dataUrl = _dataUrl['default'];
  _Frampton['default'].IO.File.binaryString = _binaryString['default'];
  _Frampton['default'].IO.File.arrayBuffer = _arrayBuffer['default'];
  _Frampton['default'].IO.File.text = _text['default'];
});
define('frampton-io/file/array_buffer', ['exports', 'module', 'frampton-io/file/read'], function (exports, module, _framptonIoFileRead) {
  'use strict';

  module.exports = array_buffer;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _read = _interopRequireDefault(_framptonIoFileRead);

  function array_buffer(file) {
    return _read['default']('ARRAY_BUFFER', file);
  }
});
define('frampton-io/file/binary_string', ['exports', 'module', 'frampton-io/file/read'], function (exports, module, _framptonIoFileRead) {
  'use strict';

  module.exports = binary_string;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _read = _interopRequireDefault(_framptonIoFileRead);

  function binary_string(file) {
    return _read['default']('BINARY_STRING', file);
  }
});
define('frampton-io/file/data_url', ['exports', 'module', 'frampton-io/file/read'], function (exports, module, _framptonIoFileRead) {
  'use strict';

  module.exports = data_url;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _read = _interopRequireDefault(_framptonIoFileRead);

  function data_url(file) {
    return _read['default']('DATA_URL', file);
  }
});
define('frampton-io/file/read_api', ['exports', 'module', 'frampton/namespace', 'frampton-utils/apply'], function (exports, module, _framptonNamespace, _framptonUtilsApply) {
  'use strict';

  module.exports = ajax;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Frampton = _interopRequireDefault(_framptonNamespace);

  var _apply = _interopRequireDefault(_framptonUtilsApply);

  function MockReader() {
    this.listeners = {};
    this.readTime = Math.random() * 3000 + 300;
    this.progress = 0;
  }

  MockReader.prototype.timeout = 10000;

  MockReader.prototype.read = function () {
    var _this = this;

    this.progressInterval = setInterval(function () {
      if (_this.listeners['progress']) {
        _this.listeners['progress'].forEach(function (next) {
          _this.progress += 15;
          next({
            loaded: _this.progress / _this.readTime * 500,
            total: 500
          });
        });
      }
    }, 20);

    setTimeout(function () {

      if (_this.progressInterval) {
        clearInterval(_this.progressInterval);
        _this.progressInterval = null;
      }

      if (_this.listeners['load']) {
        _this.listeners['load'].forEach(function (next) {
          next({
            target: {
              result: 'test'
            }
          });
        });
      }
    }, this.readTime);

    if (this.listeners['start']) {
      this.listeners['start'].forEach(_apply['default']);
    }
  };

  MockReader.prototype.addEventListener = function (name, callback) {

    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }

    if (this.listeners[name].indexOf(callback) === -1) {
      this.listeners[name].push(callback);
    }
  };

  MockReader.prototype.readAsDataURL = function (file) {
    this.read(file);
  };

  MockReader.prototype.readAsArrayBuffer = function (file) {
    this.read(file);
  };

  MockReader.prototype.readAsText = function (file) {
    this.read(file);
  };

  MockReader.prototype.readAsBinaryString = function (file) {
    this.read(file);
  };

  function ajax() {
    if (_Frampton['default'].isTest()) {
      return new MockReader();
    } else {
      return new FileReader();
    }
  }
});
define('frampton-io/file/read', ['exports', 'module', 'frampton-data/task/create', 'frampton-io/response', 'frampton-io/file/read_api'], function (exports, module, _framptonDataTaskCreate, _framptonIoResponse, _framptonIoFileRead_api) {
  'use strict';

  module.exports = read_file;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _createTask = _interopRequireDefault(_framptonDataTaskCreate);

  var _Response = _interopRequireDefault(_framptonIoResponse);

  var _ReadApi = _interopRequireDefault(_framptonIoFileRead_api);

  // read_file :: String -> File -> Task Response

  function read_file(method, file) {

    return _createTask['default'](function (sinks) {

      var reader = _ReadApi['default']();

      if (sinks.start) {
        reader.addEventListener('loadstart', function (evt) {
          sinks.start(_Response['default']('start', 0, null));
        });
      }

      if (sinks.progress) {
        reader.addEventListener('progress', function (evt) {
          sinks.progress(_Response['default']('progress', evt.loaded / evt.total, null));
        });
      }

      reader.addEventListener('load', function (evt) {
        sinks.resolve(_Response['default']('success', 1, evt.target.result));
      });

      reader.addEventListener('error', function (err) {
        sinks.reject(_Response['default']('error', 0, err.message));
      });

      reader.addEventListener('abort', function (evt) {
        sinks.reject(_Response['default']('error', 0, 'abort'));
      });

      switch (method) {
        case 'DATA_URL':
          reader.readAsDataURL(file);
          break;

        case 'ARRAY_BUFFER':
          reader.readAsArrayBuffer(file);
          break;

        case 'TEXT':
          reader.readAsText(file);
          break;

        case 'BINARY_STRING':
          reader.readAsBinaryString(file);
          break;
      }
    });
  }
});
define('frampton-io/file/text', ['exports', 'module', 'frampton-io/file/read'], function (exports, module, _framptonIoFileRead) {
  'use strict';

  module.exports = text;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _read = _interopRequireDefault(_framptonIoFileRead);

  function text(file) {
    return _read['default']('TEXT', file);
  }
});
define('frampton-io/http/ajax_api', ['exports', 'module', 'frampton/namespace', 'frampton-utils/apply'], function (exports, module, _framptonNamespace, _framptonUtilsApply) {
  'use strict';

  module.exports = ajax_api;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Frampton = _interopRequireDefault(_framptonNamespace);

  var _apply = _interopRequireDefault(_framptonUtilsApply);

  function MockAjax() {
    this.method = 'GET';
    this.url = '';
    this.listeners = {};
    this.headers = {};
    this.requestTime = Math.random() * 1000 + 300;
    this.progress = 0;
  }

  MockAjax.prototype.timeout = 10000;

  MockAjax.prototype.open = function (method, url) {
    this.method = method;
    this.url = url;
  };

  MockAjax.prototype.send = function () {
    var _this = this;

    this.progressInterval = setInterval(function () {
      if (_this.listeners['progress']) {
        _this.listeners['progress'].forEach(function (next) {
          _this.progress += 15;
          next({
            loaded: _this.progress / _this.requestTime * 500,
            total: 500
          });
        });
      }
    }, 20);

    setTimeout(function () {

      if (_this.progressInterval) {
        clearInterval(_this.progressInterval);
        _this.progressInterval = null;
      }

      if (_this.listeners['load']) {
        _this.listeners['load'].forEach(function (next) {
          next({
            target: {
              response: _Frampton['default'].mock(_this.url) || 'test',
              status: 200
            },
            total: 500,
            loaded: 500
          });
        });
      }
    }, this.requestTime);

    if (this.listeners['start']) {
      this.listeners['start'].forEach(_apply['default']);
    }
  };

  MockAjax.prototype.addEventListener = function (name, callback) {

    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }

    if (this.listeners[name].indexOf(callback) === -1) {
      this.listeners[name].push(callback);
    }
  };

  MockAjax.prototype.setRequestHeader = function (key, value) {
    this.headers[key] = value;
  };

  /**
   * Returns either an instance of XMLHttpRequest or a mock instance if in testing mode.
   *
   * @name ajaxApi
   * @method
   * @memberof Frampton.IO.Http
   * @returns {Object} Instance of XMLHttpRequest for current environment
   */

  function ajax_api() {
    if (_Frampton['default'].isTest()) {
      return new MockAjax();
    } else {
      return new XMLHttpRequest();
    }
  }
});
define("frampton-io/http/default_settings", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = Object.freeze({
    timeout: 30 * 1000
  });
});
define('frampton-io/http/delete', ['exports', 'module', 'frampton-io/http/request', 'frampton-io/http/send', 'frampton-io/http/default_settings'], function (exports, module, _framptonIoHttpRequest, _framptonIoHttpSend, _framptonIoHttpDefault_settings) {
  'use strict';

  module.exports = delete_request;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Request = _interopRequireDefault(_framptonIoHttpRequest);

  var _send = _interopRequireDefault(_framptonIoHttpSend);

  var _defaultSettings = _interopRequireDefault(_framptonIoHttpDefault_settings);

  /**
   * Returns a task that will perform an HTTP DELETE
   *
   * @name delete
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url  Url to send request to
   * @param {Object} data Data to send with request
   * @returns {Frampton.Data.Task}
   */

  function delete_request(url, data) {
    return _send['default'](_defaultSettings['default'], _Request['default'](url, 'DELETE', data || null));
  }
});
define('frampton-io/http/get', ['exports', 'module', 'frampton-io/http/request', 'frampton-io/http/utils/url', 'frampton-io/http/send', 'frampton-io/http/default_settings'], function (exports, module, _framptonIoHttpRequest, _framptonIoHttpUtilsUrl, _framptonIoHttpSend, _framptonIoHttpDefault_settings) {
  'use strict';

  module.exports = get_request;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Request = _interopRequireDefault(_framptonIoHttpRequest);

  var _urlBuilder = _interopRequireDefault(_framptonIoHttpUtilsUrl);

  var _send = _interopRequireDefault(_framptonIoHttpSend);

  var _defaultSettings = _interopRequireDefault(_framptonIoHttpDefault_settings);

  /**
   * Returns a task that will perform an HTTP GET
   *
   * @name get
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url    Url to send request to
   * @param {Object} [data] Data to send with request. Is encoded and appended to url.
   * @returns {Frampton.Data.Task} A Task of a Response
   */

  function get_request(url, data) {
    return _send['default'](_defaultSettings['default'], _Request['default'](_urlBuilder['default'](url, data)));
  }
});
define('frampton-io/http/patch', ['exports', 'module', 'frampton-io/http/request', 'frampton-io/http/send', 'frampton-io/http/default_settings'], function (exports, module, _framptonIoHttpRequest, _framptonIoHttpSend, _framptonIoHttpDefault_settings) {
  'use strict';

  module.exports = patch_request;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Request = _interopRequireDefault(_framptonIoHttpRequest);

  var _send = _interopRequireDefault(_framptonIoHttpSend);

  var _defaultSettings = _interopRequireDefault(_framptonIoHttpDefault_settings);

  /**
   * Returns a task that will perform an HTTP PATCH
   *
   * @name patch
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url  Url to send request to
   * @param {Object} data Data to send with request
   * @returns {Frampton.Data.Task}
   */

  function patch_request(url, data) {
    return _send['default'](_defaultSettings['default'], _Request['default'](url, 'PATCH', data || null));
  }
});
define('frampton-io/http/post_json', ['exports', 'module', 'frampton-utils/curry', 'frampton-utils/is_object', 'frampton-io/http/post'], function (exports, module, _framptonUtilsCurry, _framptonUtilsIs_object, _framptonIoHttpPost) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _curry = _interopRequireDefault(_framptonUtilsCurry);

  var _isObject = _interopRequireDefault(_framptonUtilsIs_object);

  var _post = _interopRequireDefault(_framptonIoHttpPost);

  /**
   * Perform an AJAX POST request and return an EventStream that reports the progress.
   *
   * @name postJson
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url  Url to send request to
   * @param {Object} data Data to send with request
   * @returns {Frampton.Data.Task}
   */
  module.exports = _curry['default'](function post_json(url, data) {

    if (_isObject['default'](data)) {
      data = JSON.stringify(data);
    }

    return _post['default'](url, data || null, {
      'Content-Type': 'application/json'
    });
  });
});
define('frampton-io/http/post_string', ['exports', 'module', 'frampton-utils/curry', 'frampton-utils/is_object', 'frampton-io/http/post', 'frampton-io/http/utils/query_string'], function (exports, module, _framptonUtilsCurry, _framptonUtilsIs_object, _framptonIoHttpPost, _framptonIoHttpUtilsQuery_string) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _curry = _interopRequireDefault(_framptonUtilsCurry);

  var _isObject = _interopRequireDefault(_framptonUtilsIs_object);

  var _post = _interopRequireDefault(_framptonIoHttpPost);

  var _queryString = _interopRequireDefault(_framptonIoHttpUtilsQuery_string);

  /**
   * Perform an AJAX POST request and return an EventStream that reports the progress.
   *
   * @name postString
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url  Url to send request to
   * @param {Object} data Data to send with request
   * @returns {Frampton.Data.Task}
   */
  module.exports = _curry['default'](function post_string(url, data) {

    if (_isObject['default'](data)) {
      data = _queryString['default'](data);
    }

    return _post['default'](url, data || null, {
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  });
});
define('frampton-io/http/post', ['exports', 'module', 'frampton-io/http/request', 'frampton-io/http/send', 'frampton-io/http/default_settings'], function (exports, module, _framptonIoHttpRequest, _framptonIoHttpSend, _framptonIoHttpDefault_settings) {
  'use strict';

  module.exports = post_request;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Request = _interopRequireDefault(_framptonIoHttpRequest);

  var _send = _interopRequireDefault(_framptonIoHttpSend);

  var _defaultSettings = _interopRequireDefault(_framptonIoHttpDefault_settings);

  /**
   * Returns a task that will perform an HTTP POST
   *
   * @name post
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url  Url to send request to
   * @param {Object} data Data to send with request
   * @returns {Frampton.Data.Task}
   */

  function post_request(url, data, headers) {
    return _send['default'](_defaultSettings['default'], _Request['default'](url, 'POST', data || null, headers || null));
  }
});
define('frampton-io/http/put', ['exports', 'module', 'frampton-io/http/request', 'frampton-io/http/send', 'frampton-io/http/default_settings'], function (exports, module, _framptonIoHttpRequest, _framptonIoHttpSend, _framptonIoHttpDefault_settings) {
  'use strict';

  module.exports = put_request;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Request = _interopRequireDefault(_framptonIoHttpRequest);

  var _send = _interopRequireDefault(_framptonIoHttpSend);

  var _defaultSettings = _interopRequireDefault(_framptonIoHttpDefault_settings);

  /**
   * Returns a task that will perform an HTTP PUT
   *
   * @name put
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url  Url to send request to
   * @param {Object} data Data to send with request
   * @returns {Frampton.Data.Task}
   */

  function put_request(url, data) {
    return _send['default'](_defaultSettings['default'], _Request['default'](url, 'PUT', data || null));
  }
});
define('frampton-io/http/request', ['exports', 'module'], function (exports, module) {
  /**
   * @name Request
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url            Url to send request to.
   * @param {String} [method='GET'] Http request method to use
   * @param {Object} [data=null]    Data to send with request
   * @param {Object} [headers={}]   Headers to add to request
   * @returns {Object}
   */
  'use strict';

  module.exports = Request;

  function Request(url, method, data, headers) {
    return {
      url: url,
      timestamp: Date.now(),
      method: method || 'GET',
      body: data || null,
      headers: headers || {}
    };
  }
});
define('frampton-io/http/send', ['exports', 'module', 'frampton-utils/error', 'frampton-data/task/create', 'frampton-io/http/ajax_api', 'frampton-io/response'], function (exports, module, _framptonUtilsError, _framptonDataTaskCreate, _framptonIoHttpAjax_api, _framptonIoResponse) {
  'use strict';

  module.exports = send;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _error = _interopRequireDefault(_framptonUtilsError);

  var _createTask = _interopRequireDefault(_framptonDataTaskCreate);

  var _AjaxApi = _interopRequireDefault(_framptonIoHttpAjax_api);

  var _Response = _interopRequireDefault(_framptonIoResponse);

  /**
   * Perform an AJAX request and return an EventStream that reports the progress.
   *
   * @name send
   * @method
   * @memberof Frampton.IO.Http
   * @param {Object} settings A hash of general settings for the request
   * @param {Object} request  A hash describing the request to be made
   * @returns {Frampton.Task} An EventStream of Response objects
   */

  function send(settings, request) {

    var xhr = _AjaxApi['default']();

    return _createTask['default'](function (sinks) {

      xhr.open(request.method, request.url, true);

      if (sinks.start) {
        xhr.addEventListener('loadstart', function (evt) {
          sinks.start(_Response['default']('start', 0, null));
        });
      }

      if (sinks.progress) {
        xhr.addEventListener('progress', function (evt) {
          var progress = (evt.loaded || evt.position) / (evt.total || evt.totalSize);
          progress = progress === Infinity ? 100 : progress;
          sinks.progress(_Response['default']('progress', progress, null));
        });
      }

      xhr.addEventListener('error', function (err) {
        _error['default']('Processing ' + request.method + ' for: ' + request.url);
        sinks.reject(_Response['default']('error', 0, err.message));
      });

      xhr.addEventListener('timeout', function (err) {
        _error['default']('Timeout ' + request.method + ' for: ' + request.url);
        sinks.reject(_Response['default']('error', 0, 'timeout'));
      });

      xhr.addEventListener('load', function (evt) {

        var target = evt.target;
        var response;

        try {
          response = JSON.parse(target.response);
        } catch (e) {
          response = target.response;
        }

        if (target.status >= 200 && target.status < 300) {
          sinks.resolve(_Response['default']('success', 1, response));
        } else {
          _error['default']('Non-200 response ' + request.method + ' for: ' + request.url);
          sinks.reject(_Response['default']('error', 0, response));
        }
      });

      for (var key in request.headers) {
        xhr.setRequestHeader(key, request.headers[key]);
      }

      xhr.timeout = settings.timeout;

      xhr.send(request.body);
    });
  }
});
define('frampton-io/http/upload_many', ['exports', 'module', 'frampton-utils/curry', 'frampton-io/http/post'], function (exports, module, _framptonUtilsCurry, _framptonIoHttpPost) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _curry = _interopRequireDefault(_framptonUtilsCurry);

  var _post = _interopRequireDefault(_framptonIoHttpPost);

  module.exports = _curry['default'](function upload(url, files) {
    var formData = new FormData();
    for (var i = 0; i < files.length; i++) {
      formData.append('file-' + i, files[i]);
    }
    return _post['default'](url, formData);
  });
});
define('frampton-io/http/upload', ['exports', 'module', 'frampton-utils/curry', 'frampton-io/http/post'], function (exports, module, _framptonUtilsCurry, _framptonIoHttpPost) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _curry = _interopRequireDefault(_framptonUtilsCurry);

  var _post = _interopRequireDefault(_framptonIoHttpPost);

  module.exports = _curry['default'](function upload(url, file) {
    var formData = new FormData();
    formData.append('file-0', file);
    return _post['default'](url, formData);
  });
});
define('frampton-io/http/utils/query_escape', ['exports', 'module', 'frampton-utils/memoize', 'frampton-io/http/utils/uri_encode', 'frampton-string/join', 'frampton-string/split'], function (exports, module, _framptonUtilsMemoize, _framptonIoHttpUtilsUri_encode, _framptonStringJoin, _framptonStringSplit) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memoize = _interopRequireDefault(_framptonUtilsMemoize);

  var _uriEncode = _interopRequireDefault(_framptonIoHttpUtilsUri_encode);

  var _join = _interopRequireDefault(_framptonStringJoin);

  var _split = _interopRequireDefault(_framptonStringSplit);

  module.exports = _memoize['default'](function query_escape(str) {
    return _join['default']('+', _split['default']('%20', _uriEncode['default'](str)));
  });
});
define('frampton-io/http/utils/query_pair', ['exports', 'module', 'frampton-io/http/utils/query_escape'], function (exports, module, _framptonIoHttpUtilsQuery_escape) {
  'use strict';

  module.exports = query_pair;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _queryEscape = _interopRequireDefault(_framptonIoHttpUtilsQuery_escape);

  // query_pair :: [String, String] -> String

  function query_pair(pair) {
    return _queryEscape['default'](pair[0]) + '=' + _queryEscape['default'](pair[1]);
  }
});
define('frampton-io/http/utils/query_string', ['exports', 'module', 'frampton-utils/is_array', 'frampton-utils/is_object', 'frampton-utils/is_something', 'frampton-string/join', 'frampton-io/http/utils/query_escape'], function (exports, module, _framptonUtilsIs_array, _framptonUtilsIs_object, _framptonUtilsIs_something, _framptonStringJoin, _framptonIoHttpUtilsQuery_escape) {
  'use strict';

  module.exports = query_string;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isArray = _interopRequireDefault(_framptonUtilsIs_array);

  var _isObject = _interopRequireDefault(_framptonUtilsIs_object);

  var _isSomething = _interopRequireDefault(_framptonUtilsIs_something);

  var _join = _interopRequireDefault(_framptonStringJoin);

  var _queryEscape = _interopRequireDefault(_framptonIoHttpUtilsQuery_escape);

  function encode(prefix, obj, add) {

    if (_isArray['default'](obj)) {

      for (var i = 0; i < obj.length; i++) {

        encode(prefix + '[]', obj[i], add);
      }
    } else if (_isObject['default'](obj)) {

      for (var key in obj) {

        encode(prefix + '[' + key + ']', obj[key], add);
      }
    } else {
      add(prefix, obj);
    }
  }

  function query_string(args) {

    var params = [];

    function add(key, value) {
      if (_isSomething['default'](value)) {
        params[params.length] = _queryEscape['default'](key) + '=' + _queryEscape['default'](value);
      }
    }

    for (var key in args) {
      encode(key, args[key], add);
    }

    return _join['default']('&', params);
  }
});
define('frampton-io/http/utils/query_unescape', ['exports', 'module', 'frampton-utils/memoize', 'frampton-io/http/utils/uri_decode', 'frampton-string/join', 'frampton-string/split'], function (exports, module, _framptonUtilsMemoize, _framptonIoHttpUtilsUri_decode, _framptonStringJoin, _framptonStringSplit) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memoize = _interopRequireDefault(_framptonUtilsMemoize);

  var _uriDecode = _interopRequireDefault(_framptonIoHttpUtilsUri_decode);

  var _join = _interopRequireDefault(_framptonStringJoin);

  var _split = _interopRequireDefault(_framptonStringSplit);

  module.exports = _memoize['default'](function query_unescape(str) {
    return _join['default'](' ', _split['default']('+', _uriDecode['default'](str)));
  });
});
define('frampton-io/http/utils/uri_decode', ['exports', 'module', 'frampton-utils/memoize'], function (exports, module, _framptonUtilsMemoize) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memoize = _interopRequireDefault(_framptonUtilsMemoize);

  module.exports = _memoize['default'](function uri_decode(str) {
    return decodeURIComponent(str);
  });
});
define('frampton-io/http/utils/uri_encode', ['exports', 'module', 'frampton-utils/memoize'], function (exports, module, _framptonUtilsMemoize) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memoize = _interopRequireDefault(_framptonUtilsMemoize);

  module.exports = _memoize['default'](function uri_encode(str) {
    return encodeURIComponent(str);
  });
});
define('frampton-io/http/utils/url', ['exports', 'module', 'frampton-utils/curry', 'frampton-io/http/utils/query_string'], function (exports, module, _framptonUtilsCurry, _framptonIoHttpUtilsQuery_string) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _curry = _interopRequireDefault(_framptonUtilsCurry);

  var _queryString = _interopRequireDefault(_framptonIoHttpUtilsQuery_string);

  /**
   * url_builder :: String -> Object -> String
   *
   * @name url
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} domain
   * @param {Object} args
   * @returns {String}
   */
  module.exports = _curry['default'](function url_builder(domain, args) {
    if (!args) return domain;
    return domain + '?' + _queryString['default'](args);
  });
});
define("frampton-io/response", ["exports", "module"], function (exports, module) {
  /**
   * @name Response
   * @method
   * @memberof Frampton.IO
   * @param {String} status       Current status of request
   * @param {Number} [progress=0] Current progress (0-1) of request
   * @param {Object} [data=null]  Data returned by request
   * @returns {Object}
   */
  "use strict";

  module.exports = Response;

  function Response(status, progress, data) {
    return {
      status: status,
      timestamp: Date.now(),
      progress: progress || 0,
      complete: progress === 1,
      data: data || null
    };
  }
});
require("frampton-io");

})();