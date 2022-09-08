System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioManager, _dec, _class, _crd, ccclass, property, Profile;

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
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9504dPh8IZEdrXDHV5PDEAm", "Profile", undefined);

      __checkObsolete__(['_decorator', 'Component', 'assert', 'AudioSource', 'Node', 'Label', 'EditBox', 'sys', 'director', 'Button']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Profile = (_dec = ccclass('Profile'), _dec(_class = class Profile extends Component {
        // @property(ToggleComponent)
        // rdMale: ToggleComponent = null;
        // @property(ToggleComponent)
        // rdFemale: ToggleComponent = null;
        onLoad() {}

        exitScreen() {
          if ((_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).isMusicOn()) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).pauseMusic();
          } else {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).playMusic();
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).playSound("click");
          }
        }

        start() {// AudioManager.setStateMusic("1");
          //          AudioManager.checkPlayMusic();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d3739e93f37f1f5675b19d5948d01af7d2f64409.js.map