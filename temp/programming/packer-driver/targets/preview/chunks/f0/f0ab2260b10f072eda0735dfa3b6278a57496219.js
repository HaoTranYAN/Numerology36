System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, property, Home;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1fbd2nJKztO0IO8c4Pd/eNw", "Home", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Home", Home = (_dec = ccclass('Home'), _dec(_class = class Home extends Component {
        start() {}

        update(deltaTime) {}

        loadProfile() {
          director.loadScene("Profile");
        }

        loadSettings() {
          director.loadScene("Settings");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f0ab2260b10f072eda0735dfa3b6278a57496219.js.map