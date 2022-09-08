System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, ToggleComponent, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, Profile;

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
      Node = _cc.Node;
      ToggleComponent = _cc.ToggleComponent;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9504dPh8IZEdrXDHV5PDEAm", "Profile", undefined);

      __checkObsolete__(['_decorator', 'Component', 'assert', 'AudioSource', 'Node', 'Label', 'EditBox', 'sys', 'director', 'Button', 'game', 'EventHandler', 'ToggleContainerComponent', 'ToggleComponent', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Profile = (_dec = ccclass('Profile'), _dec2 = property(ToggleComponent), _dec3 = property(ToggleComponent), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = class Profile extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "rdMale", _descriptor, this);

          _initializerDefineProperty(this, "rdFemale", _descriptor2, this);

          _initializerDefineProperty(this, "imgFemale", _descriptor3, this);

          _initializerDefineProperty(this, "imgMale", _descriptor4, this);
        }

        onLoad() {}

        callback(event, customEventData) {
          // The event here is a Touch Event object, and you can get the send node of the event by event.target
          // The customEventData parameter here is equal to the "foobar" you set before
          if (this.rdMale.isChecked === true) {
            this.imgMale.active = true;
            this.imgFemale.active = false;
          } else {
            this.imgMale.active = false;
            this.imgFemale.active = true;
          }
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgFemale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "imgMale", [_dec5], {
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
//# sourceMappingURL=4aa08c1b8e439389238d05da05f1cfa0b26d529d.js.map