System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioSource, director, AudioManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SoundPersistRootNode;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
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
      AudioSource = _cc.AudioSource;
      director = _cc.director;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd8485+uwhNcYjvUpps7a8N", "SoundPersistRootNode", undefined);

      __checkObsolete__(['_decorator', 'Component', 'AudioSource', 'assert', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SoundPersistRootNode", SoundPersistRootNode = (_dec = ccclass("SoundPersistRootNode"), _dec2 = property(AudioSource), _dec(_class = (_class2 = class SoundPersistRootNode extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_audioSource", _descriptor, this);
        }

        start() {
          // const audioSource = this.node.getComponent(AudioSource)!;
          // assert(audioSource);
          // this._audioSource = audioSource;
          // Declare the resident root node, which will not be destroyed in a scene switch. The target node must be the root node, otherwise it is invalid.
          //game.addPersistRootNode(this.node);
          director.addPersistRootNode(this.node); // init AudioManager

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).initSound(this._audioSource);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_audioSource", [_dec2], {
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
//# sourceMappingURL=bc1774b63217ffe7292d6b2a72616c4ccd066f8e.js.map