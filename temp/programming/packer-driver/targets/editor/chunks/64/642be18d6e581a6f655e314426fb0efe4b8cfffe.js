System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, AudioManager, TypeAction, _dec, _class, _crd, ccclass, property, PrefabTools;

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

      _cclegacy._RF.push({}, "f41f5CIIAJGq5BdS42+mU+b", "PrefabTools", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PrefabTools", PrefabTools = (_dec = ccclass('PrefabTools'), _dec(_class = class PrefabTools extends Component {
        start() {}

        update(deltaTime) {}

        clickLove() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();

          if (window["typeAction"] == (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
            error: Error()
          }), TypeAction) : TypeAction).LOVE) {
            return;
          }

          window["typeAction"] = (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
            error: Error()
          }), TypeAction) : TypeAction).LOVE;
          director.loadScene("Love");
        }

        clickPhone() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();

          if (window["typeAction"] == (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
            error: Error()
          }), TypeAction) : TypeAction).PHONE) {
            return;
          }

          window["typeAction"] = (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
            error: Error()
          }), TypeAction) : TypeAction).PHONE;
          director.loadScene("PhoneAddress");
        }

        clickAddress() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();

          if (window["typeAction"] == (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
            error: Error()
          }), TypeAction) : TypeAction).ADDRESS) {
            return;
          }

          window["typeAction"] = (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
            error: Error()
          }), TypeAction) : TypeAction).ADDRESS;
          director.loadScene("PhoneAddress");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=642be18d6e581a6f655e314426fb0efe4b8cfffe.js.map