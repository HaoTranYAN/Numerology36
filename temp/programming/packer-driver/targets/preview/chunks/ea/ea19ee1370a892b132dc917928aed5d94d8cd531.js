System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _class2, _crd, ccclass, property, Constant, TypeTool;

  _export("TypeTool", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "03844m8KS5N7JEvYs1KChcS", "Constant", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Enum']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Constant", Constant = (_dec = ccclass('Constant'), _dec(_class = (_class2 = class Constant {}, _class2.PERSONAL = "DataUser", _class2)) || _class));

      (function (TypeTool) {
        TypeTool["Friday"] = "FRIDAY";
        TypeTool["Saturday"] = "SATURDAY";
        TypeTool["Sunday"] = "SUNDAY";
      })(TypeTool || _export("TypeTool", TypeTool = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ea19ee1370a892b132dc917928aed5d94d8cd531.js.map