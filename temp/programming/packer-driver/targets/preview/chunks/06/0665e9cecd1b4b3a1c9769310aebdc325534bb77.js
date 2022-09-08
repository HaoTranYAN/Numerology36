System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, Sprite, RichText, SpriteFrame, Prefab, instantiate, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, PrefabForecast;

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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9839exukbRA+aUD2GkjzGcx", "PrefabForecast", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Sprite', 'RichText', 'SpriteFrame', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PrefabForecast", PrefabForecast = (_dec = ccclass('PrefabForecast'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(RichText), _dec6 = property(Sprite), _dec7 = property(SpriteFrame), _dec8 = property(Node), _dec9 = property(Prefab), _dec(_class = (_class2 = class PrefabForecast extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lblToday", _descriptor, this);

          _initializerDefineProperty(this, "lblTomorrow", _descriptor2, this);

          _initializerDefineProperty(this, "imgWeatherDay", _descriptor3, this);

          _initializerDefineProperty(this, "richTextDay", _descriptor4, this);

          _initializerDefineProperty(this, "imgArrowUpDown", _descriptor5, this);

          _initializerDefineProperty(this, "icWeather", _descriptor6, this);

          this.isShowPrefabMonth = false;

          _initializerDefineProperty(this, "nodeParentForecast", _descriptor7, this);

          _initializerDefineProperty(this, "prefabForecastMonth", _descriptor8, this);
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
          this.isShowPrefabMonth ? this.hideNodeMonth() : this.showNodeMonth();
        }

        hideNodeMonth() {
          this.isShowPrefabMonth = false;
          this.imgArrowUpDown.node.angle = 0;
          var node = this.nodeParentForecast.getChildByName("monthForecast");

          if (node != null) {
            node.removeFromParent();
          } // this.imgArrowUpDown.getComponent(Sprite).spriteFrame= AudioManager.getMusic()==="true"? this.icON : this.icOFF

        }

        showNodeMonth() {
          this.isShowPrefabMonth = true;
          this.imgArrowUpDown.node.angle = 180;
          var nodeMonth = instantiate(this.prefabForecastMonth);
          nodeMonth.name = "monthForecast";
          this.nodeParentForecast.addChild(nodeMonth);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblToday", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblTomorrow", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgWeatherDay", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "richTextDay", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "imgArrowUpDown", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "icWeather", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nodeParentForecast", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "prefabForecastMonth", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0665e9cecd1b4b3a1c9769310aebdc325534bb77.js.map