System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, AudioManager, _dec, _class, _crd, ccclass, property, PrefabPeriod;

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../common/AudioManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ab1adzDTTZPiLbsk0GZXjnD", "PrefabPeriod", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PrefabPeriod", PrefabPeriod = (_dec = ccclass('PrefabPeriod'), _dec(_class = class PrefabPeriod extends Component {
        onLoad() {}

        start() {}

        update(deltaTime) {}

        nextScreen(event, customEventData) {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
          var number = parseInt(customEventData);
          if (window["typeAction"] == number) return;
          window["typeAction"] = number;
          this.loadDetailNumber();
        }

        loadDetailNumber() {
          director.loadScene("DetailNumber");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e36eea98210393157682a227e9740de5bda71119.js.map