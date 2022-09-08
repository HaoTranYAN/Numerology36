System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Button, Sprite, RichText, EditBox, Label, director, Prefab, instantiate, AudioManager, Languages, i18n, TypeAction, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, PhoneAddess;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../common/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLanguages(extras) {
    _reporterNs.report("Languages", "../common/Language", _context.meta, extras);
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
      Node = _cc.Node;
      Button = _cc.Button;
      Sprite = _cc.Sprite;
      RichText = _cc.RichText;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
      director = _cc.director;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      Languages = _unresolved_3.Languages;
    }, function (_unresolved_4) {
      i18n = _unresolved_4;
    }, function (_unresolved_5) {
      TypeAction = _unresolved_5.TypeAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1f16eofT1NAuYjE5gOz4Jpn", "PhoneAddess", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'Sprite', 'RichText', 'EditBox', 'Label', 'director', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PhoneAddess", PhoneAddess = (_dec = ccclass("PhoneAddess"), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(RichText), _dec7 = property(EditBox), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Prefab), _dec12 = property(Node), _dec(_class = (_class2 = class PhoneAddess extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "btnClose", _descriptor, this);

          _initializerDefineProperty(this, "btnResult", _descriptor2, this);

          _initializerDefineProperty(this, "imgPhone", _descriptor3, this);

          _initializerDefineProperty(this, "imgAddress", _descriptor4, this);

          _initializerDefineProperty(this, "richTextDescription", _descriptor5, this);

          _initializerDefineProperty(this, "edtInput", _descriptor6, this);

          _initializerDefineProperty(this, "lblWarning", _descriptor7, this);

          _initializerDefineProperty(this, "lblTitle", _descriptor8, this);

          _initializerDefineProperty(this, "lblPlaceholder", _descriptor9, this);

          _initializerDefineProperty(this, "prefabTools", _descriptor10, this);

          _initializerDefineProperty(this, "content", _descriptor11, this);
        }

        onLoad() {
          this.initLayout();
        }

        start() {}

        update(deltaTime) {}

        initLayout() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).checkPlayMusic();
          this.hideWarning();
          var language = (_crd && Languages === void 0 ? (_reportPossibleCrUseOfLanguages({
            error: Error()
          }), Languages) : Languages).getLanguage();
          i18n.init(language);

          if (window["typeAction"] == (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
            error: Error()
          }), TypeAction) : TypeAction).PHONE) {
            this.lblTitle.string = i18n.t('PHONETITLE');
            this.richTextDescription.string = i18n.t('INTROPHONE');
            this.lblPlaceholder.string = i18n.t('ENTERYOURPHONE');
            this.imgAddress.node.active = false;
            this.imgPhone.node.active = true;
          } else if (window["typeAction"] == (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
            error: Error()
          }), TypeAction) : TypeAction).ADDRESS) {
            this.lblTitle.string = i18n.t('ADDRESSTITLE');
            this.richTextDescription.string = i18n.t('INTROADDRESS');
            this.lblPlaceholder.string = i18n.t('ENTERYOURADDRESS');
            this.imgAddress.node.active = true;
            this.imgPhone.node.active = false;
          }

          i18n.updateSceneRenderers();
          this.addPrefabTools();
        }

        addPrefabTools() {
          var node = instantiate(this.prefabTools);
          node.name = "nodeTools";
          this.content.addChild(node);
        }

        hideWarning() {
          this.lblWarning.node.active = false;
        }

        showWarning() {
          this.lblWarning.node.active = true;
        }

        loadHome() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
          director.loadScene("Home");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnResult", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgPhone", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "imgAddress", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "richTextDescription", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "edtInput", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lblWarning", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lblTitle", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lblPlaceholder", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "prefabTools", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec12], {
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
//# sourceMappingURL=56d0faee9b5ff3baedc466868e9fc2814ac61118.js.map