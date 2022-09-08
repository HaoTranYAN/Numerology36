System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _class2, _crd, ccclass, property, Constant, CardinalDirections;

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

      (function (CardinalDirections) {
        CardinalDirections[CardinalDirections["North"] = 0] = "North";
        CardinalDirections[CardinalDirections["East"] = 1] = "East";
        CardinalDirections[CardinalDirections["South"] = 2] = "South";
        CardinalDirections[CardinalDirections["West"] = 3] = "West";
      })(CardinalDirections || (CardinalDirections = {}));

      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1a5bd3744db869230bf95612bf337ff9cb0d676e.js.map