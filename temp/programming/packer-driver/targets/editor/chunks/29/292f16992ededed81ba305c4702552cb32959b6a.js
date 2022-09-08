System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Button, Sprite, RichText, EditBox, Label, director, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, PhoneAddess;

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
      Button = _cc.Button;
      Sprite = _cc.Sprite;
      RichText = _cc.RichText;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1f16eofT1NAuYjE5gOz4Jpn", "PhoneAddess", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'Sprite', 'RichText', 'EditBox', 'Label', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PhoneAddess", PhoneAddess = (_dec = ccclass("PhoneAddess"), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(RichText), _dec7 = property(EditBox), _dec8 = property(Label), _dec(_class = (_class2 = class PhoneAddess extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "btnClose", _descriptor, this);

          _initializerDefineProperty(this, "btnResult", _descriptor2, this);

          _initializerDefineProperty(this, "imgPhone", _descriptor3, this);

          _initializerDefineProperty(this, "imgAddress", _descriptor4, this);

          _initializerDefineProperty(this, "richTextDescription", _descriptor5, this);

          _initializerDefineProperty(this, "edtInput", _descriptor6, this);

          _initializerDefineProperty(this, "lblWarning", _descriptor7, this);
        }

        onLoad() {
          this.initLayout();
        }

        start() {}

        update(deltaTime) {}

        initLayout() {}

        hideWarning() {
          this.lblWarning.node.active = false;
        }

        showWarning() {
          this.lblWarning.node.active = true;
        }

        loadHome() {
          director.loadScene("Home");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnResult", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgPhone", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "imgAddress", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "richTextDescription", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "edtInput", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lblWarning", [_dec8], {
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
//# sourceMappingURL=292f16992ededed81ba305c4702552cb32959b6a.js.map