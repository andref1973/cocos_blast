System.register("chunks:///_virtual/blast.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,o,e,r,a;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,e=t._decorator,r=t.Animation,a=t.Component}],execute:function(){var i;o._RF.push({},"19515nuWlRNOKenYppeh3JM","blast",void 0);var s=e.ccclass;e.property,t("blast",s("blast")(i=function(t){function o(){return t.apply(this,arguments)||this}n(o,t);var e=o.prototype;return e.start=function(){},e.update=function(t){},e.onload=function(){for(var t=0;t<=10;t++)var n=this.node.getComponent(r);n.play("animation")},o}(a))||i);o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./blast.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});