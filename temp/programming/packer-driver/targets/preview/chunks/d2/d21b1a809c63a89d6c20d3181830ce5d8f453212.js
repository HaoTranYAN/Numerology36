System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, property, Settings;

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

      _cclegacy._RF.push({}, "ae7c25uPEBGLJUEYQduQlRx", "Settings", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Settings", Settings = (_dec = ccclass('Settings'), _dec(_class = class Settings extends Component {
        start() {}

        update(deltaTime) {}

        loadHome() {
          director.loadScene("Home");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d21b1a809c63a89d6c20d3181830ce5d8f453212.js.map