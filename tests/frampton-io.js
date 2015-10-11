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
define('frampton-io', ['exports', 'frampton/namespace', 'frampton-io/response', 'frampton-io/complete', 'frampton-io/progress', 'frampton-io/error', 'frampton-io/start', 'frampton-io/http/send', 'frampton-io/http/get', 'frampton-io/http/get_newest', 'frampton-io/http/post', 'frampton-io/http/post_json', 'frampton-io/http/upload', 'frampton-io/http/url', 'frampton-io/http/query_pair', 'frampton-io/http/query_escape', 'frampton-io/http/query_string', 'frampton-io/http/uri_encode', 'frampton-io/http/uri_decode', 'frampton-io/file/read', 'frampton-io/file/data_url', 'frampton-io/file/binary_string', 'frampton-io/file/array_buffer', 'frampton-io/file/text'], function (exports, _framptonNamespace, _framptonIoResponse, _framptonIoComplete, _framptonIoProgress, _framptonIoError, _framptonIoStart, _framptonIoHttpSend, _framptonIoHttpGet, _framptonIoHttpGet_newest, _framptonIoHttpPost, _framptonIoHttpPost_json, _framptonIoHttpUpload, _framptonIoHttpUrl, _framptonIoHttpQuery_pair, _framptonIoHttpQuery_escape, _framptonIoHttpQuery_string, _framptonIoHttpUri_encode, _framptonIoHttpUri_decode, _framptonIoFileRead, _framptonIoFileData_url, _framptonIoFileBinary_string, _framptonIoFileArray_buffer, _framptonIoFileText) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Frampton = _interopRequireDefault(_framptonNamespace);

  var _Response = _interopRequireDefault(_framptonIoResponse);

  var _complete = _interopRequireDefault(_framptonIoComplete);

  var _progress = _interopRequireDefault(_framptonIoProgress);

  var _error = _interopRequireDefault(_framptonIoError);

  var _start = _interopRequireDefault(_framptonIoStart);

  var _send = _interopRequireDefault(_framptonIoHttpSend);

  var _get = _interopRequireDefault(_framptonIoHttpGet);

  var _getNewest = _interopRequireDefault(_framptonIoHttpGet_newest);

  var _post = _interopRequireDefault(_framptonIoHttpPost);

  var _postJson = _interopRequireDefault(_framptonIoHttpPost_json);

  var _upload = _interopRequireDefault(_framptonIoHttpUpload);

  var _url = _interopRequireDefault(_framptonIoHttpUrl);

  var _queryPair = _interopRequireDefault(_framptonIoHttpQuery_pair);

  var _queryEscape = _interopRequireDefault(_framptonIoHttpQuery_escape);

  var _queryString = _interopRequireDefault(_framptonIoHttpQuery_string);

  var _uriEncode = _interopRequireDefault(_framptonIoHttpUri_encode);

  var _uriDecode = _interopRequireDefault(_framptonIoHttpUri_decode);

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
  _Frampton['default'].IO.VERSION = '0.0.2';
  _Frampton['default'].IO.Response = _Response['default'];
  _Frampton['default'].IO.complete = _complete['default'];
  _Frampton['default'].IO.progress = _progress['default'];
  _Frampton['default'].IO.error = _error['default'];
  _Frampton['default'].IO.start = _start['default'];

  /**
   * @name Http
   * @memberof Frampton.IO
   * @namespace
   */
  _Frampton['default'].IO.Http = {};
  _Frampton['default'].IO.Http.send = _send['default'];
  _Frampton['default'].IO.Http.get = _get['default'];
  _Frampton['default'].IO.Http.post = _post['default'];
  _Frampton['default'].IO.Http.postJson = _postJson['default'];
  _Frampton['default'].IO.Http.getNewest = _getNewest['default'];
  _Frampton['default'].IO.Http.upload = _upload['default'];
  _Frampton['default'].IO.Http.url = _url['default'];
  _Frampton['default'].IO.Http.queryPair = _queryPair['default'];
  _Frampton['default'].IO.Http.queryEscape = _queryEscape['default'];
  _Frampton['default'].IO.Http.queryString = _queryString['default'];
  _Frampton['default'].IO.Http.uriEncode = _uriEncode['default'];
  _Frampton['default'].IO.Http.uriDecode = _uriDecode['default'];

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
define('frampton-io/complete', ['exports', 'module', 'frampton-utils/get', 'frampton-io/is_complete'], function (exports, module, _framptonUtilsGet, _framptonIoIs_complete) {
  'use strict';

  module.exports = complete;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _get = _interopRequireDefault(_framptonUtilsGet);

  var _isComplete = _interopRequireDefault(_framptonIoIs_complete);

  //+ complete :: EventStream Respose -> EventStream Any

  function complete(stream) {
    return stream.filter(_isComplete['default']).map(_get['default']('data'));
  }
});
define('frampton-io/error', ['exports', 'module', 'frampton-io/is_error'], function (exports, module, _framptonIoIs_error) {
  'use strict';

  module.exports = error;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isError = _interopRequireDefault(_framptonIoIs_error);

  //+ error :: EventStream Respose -> EventStream Response

  function error(stream) {
    return stream.filter(_isError['default']);
  }
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
define('frampton-io/file/read', ['exports', 'module', 'frampton-signals/event_stream', 'frampton-signals/event', 'frampton-io/response', 'frampton-io/file/read_api'], function (exports, module, _framptonSignalsEvent_stream, _framptonSignalsEvent, _framptonIoResponse, _framptonIoFileRead_api) {
  'use strict';

  module.exports = read_file;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _EventStream = _interopRequireDefault(_framptonSignalsEvent_stream);

  var _Response = _interopRequireDefault(_framptonIoResponse);

  var _ReadApi = _interopRequireDefault(_framptonIoFileRead_api);

  // read_file :: Object -> File -> EventStream Response

  function read_file(method, file) {

    return new _EventStream['default'](function seed_read_file(sink) {

      var reader = _ReadApi['default']();

      reader.addEventListener('loadstart', function (evt) {
        sink(_framptonSignalsEvent.nextEvent(_Response['default']('start', 0, null)));
      });

      reader.addEventListener('progress', function (evt) {
        sink(_framptonSignalsEvent.nextEvent(_Response['default']('progress', evt.loaded / evt.total, null)));
      });

      reader.addEventListener('load', function (evt) {
        sink(_framptonSignalsEvent.nextEvent(_Response['default']('complete', 1, evt.target.result)));
      });

      reader.addEventListener('error', function (err) {
        sink(_framptonSignalsEvent.nextEvent(_Response['default']('error', 0, err.message)));
      });

      reader.addEventListener('abort', function (evt) {
        sink(_framptonSignalsEvent.nextEvent(_Response['default']('abort', 0, null)));
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
    this.listeners = {};
    this.headers = {};
    this.requestTime = Math.random() * 1000 + 300;
    this.progress = 0;
  }

  MockAjax.prototype.timeout = 10000;

  MockAjax.prototype.open = function (method, url) {};

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
              response: 'test',
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
define('frampton-io/http/get', ['exports', 'module', 'frampton-io/http/request', 'frampton-io/http/url', 'frampton-io/http/send'], function (exports, module, _framptonIoHttpRequest, _framptonIoHttpUrl, _framptonIoHttpSend) {
  'use strict';

  module.exports = get;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Request = _interopRequireDefault(_framptonIoHttpRequest);

  var _urlBuilder = _interopRequireDefault(_framptonIoHttpUrl);

  var _send = _interopRequireDefault(_framptonIoHttpSend);

  /**
   * Perform an AJAX GET request and return an EventStream that reports the progress.
   *
   * @name get
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url    Url to send request to
   * @param {Object} [data] Data to send with request. Is encoded and appended to url.
   * @returns {Frampton.Signals.EventStream} An EventStream of Response objects
   */

  function get(url, data) {
    return _send['default'](null, _Request['default'](_urlBuilder['default'](url, data)));
  }
});
define('frampton-io/http/get_newest', ['exports', 'module', 'frampton-io/http/get'], function (exports, module, _framptonIoHttpGet) {
  'use strict';

  module.exports = get_newest;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _get = _interopRequireDefault(_framptonIoHttpGet);

  // get_newest :: EventStream Url -> EventStream Response

  function get_newest(source) {
    return source.chainLatest(function (url) {
      return _get['default'](url);
    });
  }
});
define('frampton-io/http/index', ['exports', 'frampton/namespace', 'frampton-http/send', 'frampton-http/get', 'frampton-http/get_newest', 'frampton-http/post', 'frampton-http/put', 'frampton-http/patch', 'frampton-http/upload', 'frampton-http/complete', 'frampton-http/progress', 'frampton-http/error', 'frampton-http/start', 'frampton-http/url', 'frampton-http/query_pair', 'frampton-http/query_escape', 'frampton-io/http/uri_encode', 'frampton-io/http/uri_decode'], function (exports, _framptonNamespace, _framptonHttpSend, _framptonHttpGet, _framptonHttpGet_newest, _framptonHttpPost, _framptonHttpPut, _framptonHttpPatch, _framptonHttpUpload, _framptonHttpComplete, _framptonHttpProgress, _framptonHttpError, _framptonHttpStart, _framptonHttpUrl, _framptonHttpQuery_pair, _framptonHttpQuery_escape, _framptonIoHttpUri_encode, _framptonIoHttpUri_decode) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Frampton = _interopRequireDefault(_framptonNamespace);

  var _send = _interopRequireDefault(_framptonHttpSend);

  var _get = _interopRequireDefault(_framptonHttpGet);

  var _getNewest = _interopRequireDefault(_framptonHttpGet_newest);

  var _post = _interopRequireDefault(_framptonHttpPost);

  var _put = _interopRequireDefault(_framptonHttpPut);

  var _patch = _interopRequireDefault(_framptonHttpPatch);

  var _upload = _interopRequireDefault(_framptonHttpUpload);

  var _complete = _interopRequireDefault(_framptonHttpComplete);

  var _progress = _interopRequireDefault(_framptonHttpProgress);

  var _error = _interopRequireDefault(_framptonHttpError);

  var _start = _interopRequireDefault(_framptonHttpStart);

  var _url = _interopRequireDefault(_framptonHttpUrl);

  var _queryPair = _interopRequireDefault(_framptonHttpQuery_pair);

  var _queryEscape = _interopRequireDefault(_framptonHttpQuery_escape);

  var _uriEncode = _interopRequireDefault(_framptonIoHttpUri_encode);

  var _uriDecode = _interopRequireDefault(_framptonIoHttpUri_decode);

  _Frampton['default'].Http = {};
  _Frampton['default'].Http.send = _send['default'];
  _Frampton['default'].Http.get = _get['default'];
  _Frampton['default'].Http.post = _post['default'];
  _Frampton['default'].Http.put = _put['default'];
  _Frampton['default'].Http.patch = _patch['default'];
  _Frampton['default'].Http.getNewest = _getNewest['default'];
  _Frampton['default'].Http.upload = _upload['default'];
  _Frampton['default'].Http.complete = _complete['default'];
  _Frampton['default'].Http.progress = _progress['default'];
  _Frampton['default'].Http.error = _error['default'];
  _Frampton['default'].Http.start = _start['default'];
  _Frampton['default'].Http.url = _url['default'];
  _Frampton['default'].Http.queryPair = _queryPair['default'];
  _Frampton['default'].Http.queryEscape = _queryEscape['default'];
  _Frampton['default'].Http.uriEncode = _uriEncode['default'];
  _Frampton['default'].Http.uriDecode = _uriDecode['default'];
});
define('frampton-io/http/patch', ['exports', 'module', 'frampton-io/http/request', 'frampton-io/http/send'], function (exports, module, _framptonIoHttpRequest, _framptonIoHttpSend) {
  'use strict';

  module.exports = patch;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Request = _interopRequireDefault(_framptonIoHttpRequest);

  var _send = _interopRequireDefault(_framptonIoHttpSend);

  /**
   * Perform an AJAX PATCH request and return an EventStream that reports the progress.
   *
   * @name patch
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url  Url to send request to
   * @param {Object} data Data to send with request
   * @returns {Frampton.Signals.EventStream} An EventStream of Response objects
   */

  function patch(url, data) {
    return _send['default'](null, _Request['default'](url, 'PATCH', data || null));
  }
});
define('frampton-io/http/post', ['exports', 'module', 'frampton-utils/is_object', 'frampton-io/http/request', 'frampton-io/http/send', 'frampton-io/http/query_string'], function (exports, module, _framptonUtilsIs_object, _framptonIoHttpRequest, _framptonIoHttpSend, _framptonIoHttpQuery_string) {
  'use strict';

  module.exports = post;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isObject = _interopRequireDefault(_framptonUtilsIs_object);

  var _Request = _interopRequireDefault(_framptonIoHttpRequest);

  var _send = _interopRequireDefault(_framptonIoHttpSend);

  var _queryString = _interopRequireDefault(_framptonIoHttpQuery_string);

  /**
   * Perform an AJAX POST request and return an EventStream that reports the progress.
   *
   * @name post
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url  Url to send request to
   * @param {Object} data Data to send with request
   * @returns {Frampton.Signals.EventStream} An EventStream of Response objects
   */

  function post(url, data) {

    if (_isObject['default'](data)) {
      data = _queryString['default'](data);
    }

    return _send['default'](null, _Request['default'](url, 'POST', data || null));
  }
});
define('frampton-io/http/post_json', ['exports', 'module', 'frampton-utils/is_object', 'frampton-io/http/request', 'frampton-io/http/send'], function (exports, module, _framptonUtilsIs_object, _framptonIoHttpRequest, _framptonIoHttpSend) {
  'use strict';

  module.exports = post;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isObject = _interopRequireDefault(_framptonUtilsIs_object);

  var _Request = _interopRequireDefault(_framptonIoHttpRequest);

  var _send = _interopRequireDefault(_framptonIoHttpSend);

  /**
   * Perform an AJAX POST request and return an EventStream that reports the progress.
   *
   * @name post
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url  Url to send request to
   * @param {Object} data Data to send with request
   * @returns {Frampton.Signals.EventStream} An EventStream of Response objects
   */

  function post(url, data) {

    if (_isObject['default'](data)) {
      data = JSON.stringify(data);
    }

    return _send['default'](null, _Request['default'](url, 'POST', data || null, {
      'Content-Type': 'application/json'
    }));
  }
});
define('frampton-io/http/put', ['exports', 'module', 'frampton-io/http/request', 'frampton-io/http/send'], function (exports, module, _framptonIoHttpRequest, _framptonIoHttpSend) {
  'use strict';

  module.exports = put;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Request = _interopRequireDefault(_framptonIoHttpRequest);

  var _send = _interopRequireDefault(_framptonIoHttpSend);

  /**
   * Perform an AJAX PUT request and return an EventStream that reports the progress.
   *
   * @name put
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url  Url to send request to
   * @param {Object} data Data to send with request
   * @returns {Frampton.Signals.EventStream} An EventStream of Response objects
   */

  function put(url, data) {
    return _send['default'](null, _Request['default'](url, 'PUT', data || null));
  }
});
define('frampton-io/http/query_escape', ['exports', 'module', 'frampton-utils/memoize', 'frampton-io/http/uri_encode', 'frampton-string/join', 'frampton-string/split'], function (exports, module, _framptonUtilsMemoize, _framptonIoHttpUri_encode, _framptonStringJoin, _framptonStringSplit) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memoize = _interopRequireDefault(_framptonUtilsMemoize);

  var _uriEncode = _interopRequireDefault(_framptonIoHttpUri_encode);

  var _join = _interopRequireDefault(_framptonStringJoin);

  var _split = _interopRequireDefault(_framptonStringSplit);

  module.exports = _memoize['default'](function query_escape(str) {
    return _join['default']('+', _split['default']('%20', _uriEncode['default'](str)));
  });
});
define('frampton-io/http/query_pair', ['exports', 'module', 'frampton-io/http/query_escape'], function (exports, module, _framptonIoHttpQuery_escape) {
  'use strict';

  module.exports = query_pair;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _queryEscape = _interopRequireDefault(_framptonIoHttpQuery_escape);

  // query_pair :: [String, String] -> String

  function query_pair(pair) {
    return _queryEscape['default'](pair[0]) + '=' + _queryEscape['default'](pair[1]);
  }
});
define('frampton-io/http/query_string', ['exports', 'module', 'frampton-utils/is_array', 'frampton-utils/is_object', 'frampton-utils/is_something', 'frampton-string/join', 'frampton-io/http/query_escape'], function (exports, module, _framptonUtilsIs_array, _framptonUtilsIs_object, _framptonUtilsIs_something, _framptonStringJoin, _framptonIoHttpQuery_escape) {
  'use strict';

  module.exports = query_string;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isArray = _interopRequireDefault(_framptonUtilsIs_array);

  var _isObject = _interopRequireDefault(_framptonUtilsIs_object);

  var _isSomething = _interopRequireDefault(_framptonUtilsIs_something);

  var _join = _interopRequireDefault(_framptonStringJoin);

  var _queryEscape = _interopRequireDefault(_framptonIoHttpQuery_escape);

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
define('frampton-io/http/query_unescape', ['exports', 'module', 'frampton-utils/memoize', 'frampton-io/http/uri_decode', 'frampton-string/join', 'frampton-string/split'], function (exports, module, _framptonUtilsMemoize, _framptonIoHttpUri_decode, _framptonStringJoin, _framptonStringSplit) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memoize = _interopRequireDefault(_framptonUtilsMemoize);

  var _uriDecode = _interopRequireDefault(_framptonIoHttpUri_decode);

  var _join = _interopRequireDefault(_framptonStringJoin);

  var _split = _interopRequireDefault(_framptonStringSplit);

  module.exports = _memoize['default'](function query_unescape(str) {
    return _join['default'](' ', _split['default']('+', _uriDecode['default'](str)));
  });
});
define('frampton-io/http/request', ['exports', 'module', 'frampton-utils/extend'], function (exports, module, _framptonUtilsExtend) {
  'use strict';

  module.exports = Request;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _extend = _interopRequireDefault(_framptonUtilsExtend);

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
  var defaultHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  function Request(url, method, data, headers) {
    return {
      url: url,
      method: method || 'GET',
      body: data || null,
      headers: _extend['default']({}, defaultHeaders, headers || {})
    };
  }
});
define('frampton-io/http/send', ['exports', 'module', 'frampton-utils/extend', 'frampton-signals/event_stream', 'frampton-signals/event', 'frampton-io/http/ajax_api', 'frampton-io/response'], function (exports, module, _framptonUtilsExtend, _framptonSignalsEvent_stream, _framptonSignalsEvent, _framptonIoHttpAjax_api, _framptonIoResponse) {
  'use strict';

  module.exports = send;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _extend = _interopRequireDefault(_framptonUtilsExtend);

  var _EventStream = _interopRequireDefault(_framptonSignalsEvent_stream);

  var _AjaxApi = _interopRequireDefault(_framptonIoHttpAjax_api);

  var _Response = _interopRequireDefault(_framptonIoResponse);

  var defaultSettings = {
    timeout: 30 * 1000
  };

  /**
   * Perform an AJAX request and return an EventStream that reports the progress.
   *
   * @name send
   * @method
   * @memberof Frampton.IO.Http
   * @param {Object} settings A hash of general settings for the request
   * @param {Object} request  A hash describing the request to be made
   * @returns {Frampton.Signals.EventStream} An EventStream of Response objects
   */

  function send(settings, request) {

    return new _EventStream['default'](function seed_send(sink) {

      var req = _AjaxApi['default']();
      settings = _extend['default']({}, defaultSettings, settings);

      req.open(request.method, request.url, true);

      req.addEventListener('loadstart', function (evt) {
        sink(_framptonSignalsEvent.nextEvent(_Response['default']('start', 0, null)));
      });

      req.addEventListener('progress', function (evt) {
        sink(_framptonSignalsEvent.nextEvent(_Response['default']('progress', evt.loaded / evt.total, null)));
      });

      req.addEventListener('error', function (err) {
        sink(_framptonSignalsEvent.nextEvent(_Response['default']('error', 0, err.message)));
      });

      req.addEventListener('timeout', function (err) {
        sink(_framptonSignalsEvent.nextEvent(_Response['default']('error', 0, 'timeout')));
      });

      req.addEventListener('load', function (evt) {

        var response;
        var target = evt.target;

        try {
          response = JSON.parse(target.response);
        } catch (e) {
          response = target.response;
        }

        if (target.status >= 200 && target.status < 300) {
          sink(_framptonSignalsEvent.nextEvent(_Response['default']('complete', 1, response)));
        } else {
          sink(_framptonSignalsEvent.nextEvent(_Response['default']('error', 0, response)));
        }
      });

      for (var key in request.headers) {
        req.setRequestHeader(key, request.headers[key]);
      }

      req.timeout = settings.timeout;

      req.send(request.body);
    });
  }
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
define('frampton-io/http/uri_decode', ['exports', 'module', 'frampton-utils/memoize'], function (exports, module, _framptonUtilsMemoize) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memoize = _interopRequireDefault(_framptonUtilsMemoize);

  module.exports = _memoize['default'](function uri_decode(str) {
    return decodeURIComponent(str);
  });
});
define('frampton-io/http/uri_encode', ['exports', 'module', 'frampton-utils/memoize'], function (exports, module, _framptonUtilsMemoize) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memoize = _interopRequireDefault(_framptonUtilsMemoize);

  module.exports = _memoize['default'](function uri_encode(str) {
    return encodeURIComponent(str);
  });
});
define('frampton-io/http/url', ['exports', 'module', 'frampton-utils/curry', 'frampton-io/http/query_string'], function (exports, module, _framptonUtilsCurry, _framptonIoHttpQuery_string) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _curry = _interopRequireDefault(_framptonUtilsCurry);

  var _queryString = _interopRequireDefault(_framptonIoHttpQuery_string);

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
define('frampton-io/is_complete', ['exports', 'module'], function (exports, module) {
  //+ is_complete :: Response -> Boolean
  'use strict';

  module.exports = is_complete;

  function is_complete(response) {
    return response && response.status === 'complete';
  }
});
define('frampton-io/is_error', ['exports', 'module'], function (exports, module) {
  //+ is_error :: Response -> Boolean
  'use strict';

  module.exports = is_error;

  function is_error(response) {
    return response && response.status === 'error';
  }
});
define('frampton-io/is_start', ['exports', 'module'], function (exports, module) {
  //+ is_start :: Response -> Boolean
  'use strict';

  module.exports = is_start;

  function is_start(response) {
    return response && response.status === 'start';
  }
});
define('frampton-io/progress', ['exports', 'module', 'frampton-utils/get'], function (exports, module, _framptonUtilsGet) {
  'use strict';

  module.exports = progress;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _get = _interopRequireDefault(_framptonUtilsGet);

  //+ progress :: EventStream Response -> EventStream Number

  function progress(stream) {
    return stream.map(_get['default']('progress'));
  }
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
      progress: progress || 0,
      complete: progress === 1,
      data: data || null
    };
  }
});
define('frampton-io/start', ['exports', 'module', 'frampton-io/is_start'], function (exports, module, _framptonIoIs_start) {
  'use strict';

  module.exports = start;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isStart = _interopRequireDefault(_framptonIoIs_start);

  //+ start :: EventStream Respose -> EventStream Response

  function start(stream) {
    return stream.filter(_isStart['default']);
  }
});
require("frampton-io");

})();