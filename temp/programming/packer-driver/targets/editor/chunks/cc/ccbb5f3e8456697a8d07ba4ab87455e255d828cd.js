System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Button, Sprite, RichText, EditBox, Label, director, Prefab, instantiate, ScrollView, sys, AudioManager, Languages, i18n, Constant, TypeAction, CommonTS, PrefabContentPhoneAddress, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, PhoneAddress;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../common/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLanguages(extras) {
    _reporterNs.report("Languages", "../common/Language", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../common/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTypeAction(extras) {
    _reporterNs.report("TypeAction", "../common/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTS(extras) {
    _reporterNs.report("CommonTS", "../common/CommonTS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabContentPhoneAddress(extras) {
    _reporterNs.report("PrefabContentPhoneAddress", "../prefab/PrefabContentPhoneAddress", _context.meta, extras);
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
      ScrollView = _cc.ScrollView;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      Languages = _unresolved_3.Languages;
    }, function (_unresolved_4) {
      i18n = _unresolved_4;
    }, function (_unresolved_5) {
      Constant = _unresolved_5.Constant;
      TypeAction = _unresolved_5.TypeAction;
    }, function (_unresolved_6) {
      CommonTS = _unresolved_6.CommonTS;
    }, function (_unresolved_7) {
      PrefabContentPhoneAddress = _unresolved_7.PrefabContentPhoneAddress;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3c1ddkEiZJOw42kdMRuGQHg", "PhoneAddress", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'Sprite', 'RichText', 'EditBox', 'Label', 'director', 'Prefab', 'instantiate', 'ScrollView', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PhoneAddress", PhoneAddress = (_dec = ccclass("PhoneAddress"), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(RichText), _dec7 = property(EditBox), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Prefab), _dec12 = property(Node), _dec13 = property(ScrollView), _dec14 = property(Prefab), _dec(_class = (_class2 = class PhoneAddress extends Component {
        constructor(...args) {
          super(...args);

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

          _initializerDefineProperty(this, "scrollView", _descriptor12, this);

          _initializerDefineProperty(this, "prefabContent", _descriptor13, this);
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
            var mobile = sys.localStorage.getItem((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).MOBILE);

            if (mobile != null) {
              this.edtInput.string = mobile;
              this.addPrefabContent(this.tinhNumber(mobile), (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
                error: Error()
              }), TypeAction) : TypeAction).PHONE);
              this.scrollView.scrollToBottom(0.5); //  this.scrollView.scrollToPercentVertical(0.8);
            }
          } else if (window["typeAction"] == (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
            error: Error()
          }), TypeAction) : TypeAction).ADDRESS) {
            this.lblTitle.string = i18n.t('ADDRESSTITLE');
            this.richTextDescription.string = i18n.t('INTROADDRESS');
            this.lblPlaceholder.string = i18n.t('ENTERYOURADDRESS');
            this.imgAddress.node.active = true;
            this.imgPhone.node.active = false;
            var address = sys.localStorage.getItem((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).ADDRESS);

            if (address != null) {
              this.edtInput.string = address;
              this.addPrefabContent((_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
                error: Error()
              }), CommonTS) : CommonTS).tinhSoDiaChi(address), (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
                error: Error()
              }), TypeAction) : TypeAction).ADDRESS);
              this.scrollView.scrollToBottom(0.5);
            }
          }

          i18n.updateSceneRenderers();
          this.addPrefabTools();
        }

        checkValidate() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).checkPlayMusic();
          var language = (_crd && Languages === void 0 ? (_reportPossibleCrUseOfLanguages({
            error: Error()
          }), Languages) : Languages).getLanguage();
          i18n.init(language);
          this.lblWarning.node.active = false;

          if (window["typeAction"] == (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
            error: Error()
          }), TypeAction) : TypeAction).PHONE) {
            var mobileEB = this.edtInput.string;
            var str = mobileEB.toString().split("");
            var lenMobile = str.length;

            if (mobileEB == "") {
              this.lblWarning.node.active = true;
              this.lblWarning.string = i18n.t("ERROR6");
              this.hidePrefabContent();
              return;
            } else if (lenMobile < 10) {
              this.lblWarning.node.active = true;
              this.lblWarning.string = i18n.t("ERROR6");
              this.hidePrefabContent();
              return;
            } else if (this.checkKiTuDacBiet(str, lenMobile) != -1) {
              this.lblWarning.node.active = true;
              this.lblWarning.string = i18n.t("ERROR6");
              this.hidePrefabContent();
              return;
            } else {
              let numberMobile = this.tinhNumber(this.edtInput.string);

              if (numberMobile <= 0) {
                this.lblWarning.node.active = true;
                this.lblWarning.string = i18n.t("ERROR6");
                this.hidePrefabContent();
                return;
              }

              sys.localStorage.setItem((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).MOBILE, this.edtInput.string);
              this.addPrefabContent(numberMobile, (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
                error: Error()
              }), TypeAction) : TypeAction).PHONE);
            }
          } else if (window["typeAction"] == (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
            error: Error()
          }), TypeAction) : TypeAction).ADDRESS) {
            var address = this.edtInput.string;

            if (address == "") {
              this.lblWarning.node.active = true;
              this.lblWarning.string = i18n.t("ERROR7");
              this.hidePrefabContent();
              return;
            } else {
              var address = address.split(" ")[0].toLowerCase();
              var numberAddress = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
                error: Error()
              }), CommonTS) : CommonTS).tinhSoDiaChi(address);

              if (numberAddress <= 0 || isNaN(numberAddress)) {
                this.lblWarning.node.active = true;
                this.lblWarning.string = i18n.t("ERROR7");
                this.hidePrefabContent();
                return;
              }

              sys.localStorage.setItem((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).ADDRESS, this.edtInput.string);
              this.addPrefabContent(numberAddress, (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
                error: Error()
              }), TypeAction) : TypeAction).ADDRESS);
            }
          }

          setTimeout(() => {
            this.scrollView.scrollToPercentVertical(0.65);
          }, 15);
        }

        checkKiTuDacBiet(str, len) {
          var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]*$/;
          var index = -1;

          for (let i = 0; i < len; i++) {
            if (format.test(str[i])) {
              index = i;
              break;
            }
          }

          return index;
        }

        tinhNumber(str) {
          //console.log("tinhNumber");
          var mobileNumber = str.toString().split("");
          var format = /[0-9]+/;
          var total = 0;

          for (let i = 0; i < mobileNumber.length; i++) {
            if (format.test(mobileNumber[i])) {
              total = total + parseInt(mobileNumber[i]);
            } else {//kh xu ly;
            }
          }

          while (total > 9 && total != 11 && total != 22 && total != 33) {
            total = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
              error: Error()
            }), CommonTS) : CommonTS).tinhTong(total);
          }

          return total;
        }

        addPrefabContent(number, type) {
          var nodeText = this.content.getChildByName("nodeContent");

          if (nodeText == null) {
            var nodeText = instantiate(this.prefabContent);
            nodeText.name = "nodeContent";
            this.content.insertChild(nodeText, 1);
          } else {
            nodeText.active = true;
          }

          var cell = nodeText.getComponent(_crd && PrefabContentPhoneAddress === void 0 ? (_reportPossibleCrUseOfPrefabContentPhoneAddress({
            error: Error()
          }), PrefabContentPhoneAddress) : PrefabContentPhoneAddress);
          cell.updateData(number, type);
        }

        hidePrefabContent() {
          var nodeText = this.content.getChildByName("nodeContent");

          if (nodeText != null) {
            nodeText.removeFromParent();
          }
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
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lblTitle", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lblPlaceholder", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "prefabTools", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "prefabContent", [_dec14], {
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
//# sourceMappingURL=ccbb5f3e8456697a8d07ba4ab87455e255d828cd.js.map