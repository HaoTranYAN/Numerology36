System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioSource, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AudioPersistRootNode;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b2d76vfL3pLoq607Uo5KH6R", "AudioPersistRootNode", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'game', 'AudioSource', 'assert', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioPersistRootNode", AudioPersistRootNode = (_dec = ccclass('AudioPersistRootNode'), _dec2 = property(AudioSource), _dec(_class = (_class2 = class AudioPersistRootNode extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_audioSource", _descriptor, this);
        }

        start() {// const audioSource = this.node.getComponent(AudioSource)! ;
          // assert(audioSource);
          // this._audioSource = audioSource;
          // // Declare the resident root node, which will not be destroyed in a scene switch. The target node must be the root node, otherwise it is invalid.
          // //game.addPersistRootNode(this.node);
          // director.addPersistRootNode(this.node);
          //         // init AudioManager
          //         AudioManager.init(audioSource);
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
//# sourceMappingURL=01271a85fa82c459907f59ed941d0f01c3b0ca71.js.map