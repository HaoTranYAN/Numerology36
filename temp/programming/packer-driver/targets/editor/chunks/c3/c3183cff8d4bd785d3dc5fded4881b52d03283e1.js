System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, Sprite, RichText, SpriteFrame, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, PrefabForecast;

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
      Node = _cc.Node;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      RichText = _cc.RichText;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05113fBpXJFpqLuKFXHbk1P", "PrefabForecast-001", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Sprite', 'RichText', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PrefabForecast", PrefabForecast = (_dec = ccclass('PrefabForecast'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property(RichText), _dec9 = property(RichText), _dec10 = property(Sprite), _dec11 = property(Node), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec(_class = (_class2 = class PrefabForecast extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lblToday", _descriptor, this);

          _initializerDefineProperty(this, "lblTomorrow", _descriptor2, this);

          _initializerDefineProperty(this, "lblMonth", _descriptor3, this);

          _initializerDefineProperty(this, "lblNextMonth", _descriptor4, this);

          _initializerDefineProperty(this, "imgWeatherDay", _descriptor5, this);

          _initializerDefineProperty(this, "imgWeatherMonth", _descriptor6, this);

          _initializerDefineProperty(this, "richTextDay", _descriptor7, this);

          _initializerDefineProperty(this, "richTextMonth", _descriptor8, this);

          _initializerDefineProperty(this, "imgArrowUpDown", _descriptor9, this);

          _initializerDefineProperty(this, "nodeMonth", _descriptor10, this);

          _initializerDefineProperty(this, "icSun", _descriptor11, this);

          _initializerDefineProperty(this, "icMoon", _descriptor12, this);
        }

        onLoad() {
          this.initLayout();
        }

        start() {}

        update(deltaTime) {}

        initLayout() {
          this.hideNodeMonth();
        }

        showHideNodeMonth() {
          this.nodeMonth.active ? this.hideNodeMonth() : this.showNodeMonth();
        }

        hideNodeMonth() {
          this.nodeMonth.removeFromParent();
          this.imgArrowUpDown.node.angle = 0; // this.imgArrowUpDown.getComponent(Sprite).spriteFrame= AudioManager.getMusic()==="true"? this.icON : this.icOFF
        }

        showNodeMonth() {
          this.imgArrowUpDown.node.angle = 180;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblToday", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblTomorrow", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblMonth", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblNextMonth", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "imgWeatherDay", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "imgWeatherMonth", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "richTextDay", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "richTextMonth", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "imgArrowUpDown", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodeMonth", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "icSun", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "icMoon", [_dec13], {
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
//# sourceMappingURL=c3183cff8d4bd785d3dc5fded4881b52d03283e1.js.map