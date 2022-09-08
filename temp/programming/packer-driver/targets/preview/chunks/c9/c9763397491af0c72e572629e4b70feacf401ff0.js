System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _class2, _crd, ccclass, property, Constant, TypeAction, TypeActionForecast;

  _export({
    TypeAction: void 0,
    TypeActionForecast: void 0
  });

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

      _export("Constant", Constant = (_dec = ccclass('Constant'), _dec(_class = (_class2 = class Constant {}, _class2.PERSONAL = "DataUser", _class2.MOBILE = "Mobile", _class2.ADDRESS = "Address", _class2)) || _class));

      (function (TypeAction) {
        TypeAction[TypeAction["NONE"] = 0] = "NONE";
        TypeAction[TypeAction["LOVE"] = 1] = "LOVE";
        TypeAction[TypeAction["PHONE"] = 2] = "PHONE";
        TypeAction[TypeAction["ADDRESS"] = 3] = "ADDRESS";
        TypeAction[TypeAction["LIFE_PATH"] = 4] = "LIFE_PATH";
        TypeAction[TypeAction["RULING_NUMBER"] = 5] = "RULING_NUMBER";
        TypeAction[TypeAction["DESTINY"] = 6] = "DESTINY";
        TypeAction[TypeAction["PERSONAL_YEAR"] = 7] = "PERSONAL_YEAR";
        TypeAction[TypeAction["PERIOD_CYCLE"] = 8] = "PERIOD_CYCLE";
        TypeAction[TypeAction["KARMIC_DEBT"] = 9] = "KARMIC_DEBT";
      })(TypeAction || _export("TypeAction", TypeAction = {}));

      (function (TypeActionForecast) {
        TypeActionForecast[TypeActionForecast["PRE"] = 1] = "PRE";
        TypeActionForecast[TypeActionForecast["NEXT"] = 2] = "NEXT";
      })(TypeActionForecast || _export("TypeActionForecast", TypeActionForecast = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c9763397491af0c72e572629e4b70feacf401ff0.js.map