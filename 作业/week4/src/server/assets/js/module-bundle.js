"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var Create;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [],
    execute: function () {
      alert("可以使用module");

      Create =
      /*#__PURE__*/
      function () {
        function Create() {
          _classCallCheck(this, Create);

          this.btn = document.querySelector('#test_btn');
        }

        _createClass(Create, [{
          key: "fn",
          value: function fn() {
            this.btn.addEventListener('click', function () {
              alert('按钮被点击');
            });
          }
        }]);

        return Create;
      }(); // const create = new Create()
      // create.fn()


      _export("default", Create);
    }
  };
});
