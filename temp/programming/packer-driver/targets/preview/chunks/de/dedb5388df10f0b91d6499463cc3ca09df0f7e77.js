System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EventHandler, ToggleContainerComponent, AudioManager, _dec, _class, _crd, ccclass, property, Profile;

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
      EventHandler = _cc.EventHandler;
      ToggleContainerComponent = _cc.ToggleContainerComponent;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9504dPh8IZEdrXDHV5PDEAm", "Profile", undefined);

      __checkObsolete__(['_decorator', 'Component', 'assert', 'AudioSource', 'Node', 'Label', 'EditBox', 'sys', 'director', 'Button', 'game', 'EventHandler', 'ToggleContainerComponent']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Profile = (_dec = ccclass('Profile'), _dec(_class = class Profile extends Component {
        // @property(ToggleComponent)
        // rdMale: ToggleComponent = null;
        // @property(ToggleComponent)
        // rdFemale: ToggleComponent = null;
        onLoad() {
          var containerEventHandler = new EventHandler(); // This Node is the node to which your event processing code component belongs

          containerEventHandler.target = this.node; // This is the script class name

          containerEventHandler.component = 'example';
          containerEventHandler.handler = 'callback';
          containerEventHandler.customEventData = 'foobar';
          var container = this.node.getComponent(ToggleContainerComponent);
          container.checkEvents.push(containerEventHandler);
        }

        callback(event, customEventData) {// The event here is a Touch Event object, and you can get the send node of the event by event.target
          // The customEventData parameter here is equal to the "foobar" you set before
        }

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
//# sourceMappingURL=dedb5388df10f0b91d6499463cc3ca09df0f7e77.js.map