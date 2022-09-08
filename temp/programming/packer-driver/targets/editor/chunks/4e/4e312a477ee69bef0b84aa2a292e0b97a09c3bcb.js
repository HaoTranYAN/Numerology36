System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Sprite, RichText, SpriteFrame, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, PrefabForecast;

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
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      RichText = _cc.RichText;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9839exukbRA+aUD2GkjzGcx", "PrefabForecast", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Sprite', 'RichText', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PrefabForecast", PrefabForecast = (_dec = ccclass('PrefabForecast'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(RichText), _dec6 = property(Sprite), _dec7 = property(SpriteFrame), _dec(_class = (_class2 = class PrefabForecast extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lblToday", _descriptor, this);

          _initializerDefineProperty(this, "lblTomorrow", _descriptor2, this);

          _initializerDefineProperty(this, "imgWeatherDay", _descriptor3, this);

          _initializerDefineProperty(this, "richTextDay", _descriptor4, this);

          _initializerDefineProperty(this, "imgArrowUpDown", _descriptor5, this);

          _initializerDefineProperty(this, "icWeather", _descriptor6, this);
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
          this.nodeMonth.active = false;
          this.imgArrowUpDown.node.angle = 0; // this.imgArrowUpDown.getComponent(Sprite).spriteFrame= AudioManager.getMusic()==="true"? this.icON : this.icOFF
        }

        showNodeMonth() {
          this.nodeMonth.active = true;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgWeatherDay", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "richTextDay", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "imgArrowUpDown", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "icWeather", [_dec7], {
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
//# sourceMappingURL=4e312a477ee69bef0b84aa2a292e0b97a09c3bcb.js.map