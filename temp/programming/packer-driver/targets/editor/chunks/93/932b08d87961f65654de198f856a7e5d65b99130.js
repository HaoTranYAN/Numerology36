System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, AudioManager, TypeAction, _dec, _class, _crd, ccclass, property, PrefabMainNumbers;

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../common/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTypeAction(extras) {
    _reporterNs.report("TypeAction", "../common/Constant", _context.meta, extras);
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
    }, function (_unresolved_3) {
      TypeAction = _unresolved_3.TypeAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4237EjOUdM45FlKlPv6raH", "PrefabMainNumbers", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PrefabMainNumbers", PrefabMainNumbers = (_dec = ccclass('PrefabMainNumbers'), _dec(_class = class PrefabMainNumbers extends Component {
        onLoad() {}

        start() {}

        update(deltaTime) {}

        clickNextScreen(event, customEventData) {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
          var number = parseInt(customEventData);
          if (window["typeAction"] == number) return;
          window["typeAction"] = number;

          if (window["typeAction"] == (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
            error: Error()
          }), TypeAction) : TypeAction).PERIOD_CYCLE) {
            this.loadPeriodCycle();
          } else {
            this.loadDetailNumber();
          }
        }

        loadDetailNumber() {
          director.loadScene("DetailNumber");
        }

        loadPeriodCycle() {
          director.loadScene("PeriodCycle");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=932b08d87961f65654de198f856a7e5d65b99130.js.map