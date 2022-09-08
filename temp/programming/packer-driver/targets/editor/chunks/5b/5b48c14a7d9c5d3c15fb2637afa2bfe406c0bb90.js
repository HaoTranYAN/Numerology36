System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EventHandler, ToggleContainerComponent, AudioManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Profile;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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

      _export("default", Profile = (_dec = ccclass('Profile'), _dec2 = property(ToggleComponent), _dec3 = property(ToggleComponent), _dec(_class = (_class2 = class Profile extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "rdMale", _descriptor, this);

          _initializerDefineProperty(this, "rdFemale", _descriptor2, this);
        }

        onLoad() {
          const containerEventHandler = new EventHandler(); // This Node is the node to which your event processing code component belongs

          containerEventHandler.target = this.node; // This is the script class name

          containerEventHandler.component = 'example';
          containerEventHandler.handler = 'callback';
          containerEventHandler.customEventData = 'foobar';
          const container = this.node.getComponent(ToggleContainerComponent);
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rdMale", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rdFemale", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b48c14a7d9c5d3c15fb2637afa2bfe406c0bb90.js.map