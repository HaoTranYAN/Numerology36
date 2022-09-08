System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Button, Label, director, RichText, instantiate, Prefab, ScrollView, EditBox, sys, AudioManager, Languages, i18n, Constant, CommonTS, PrefabLove, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, Love;

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

  function _reportPossibleCrUseOfCommonTS(extras) {
    _reporterNs.report("CommonTS", "../common/CommonTS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabLove(extras) {
    _reporterNs.report("PrefabLove", "../prefab/PrefabLove", _context.meta, extras);
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
      Label = _cc.Label;
      director = _cc.director;
      RichText = _cc.RichText;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      EditBox = _cc.EditBox;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      Languages = _unresolved_3.Languages;
    }, function (_unresolved_4) {
      i18n = _unresolved_4;
    }, function (_unresolved_5) {
      Constant = _unresolved_5.Constant;
    }, function (_unresolved_6) {
      CommonTS = _unresolved_6.CommonTS;
    }, function (_unresolved_7) {
      PrefabLove = _unresolved_7.PrefabLove;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "edf61jz8PdGpZCNcHjsJDru", "Love", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'Label', 'director', 'RichText', 'instantiate', 'Prefab', 'ScrollView', 'EditBox', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Love", Love = (_dec = ccclass('Love'), _dec2 = property(Button), _dec3 = property(Label), _dec4 = property(RichText), _dec5 = property(Prefab), _dec6 = property(Node), _dec7 = property(ScrollView), _dec8 = property(Prefab), _dec9 = property(EditBox), _dec10 = property(EditBox), _dec11 = property(EditBox), _dec12 = property(EditBox), _dec13 = property(EditBox), _dec14 = property(EditBox), _dec(_class = (_class2 = class Love extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "btnClose", _descriptor, this);

          _initializerDefineProperty(this, "lblWarning", _descriptor2, this);

          _initializerDefineProperty(this, "richTextDescription", _descriptor3, this);

          _initializerDefineProperty(this, "prefabTools", _descriptor4, this);

          _initializerDefineProperty(this, "content", _descriptor5, this);

          _initializerDefineProperty(this, "scrollView", _descriptor6, this);

          _initializerDefineProperty(this, "prefabContent", _descriptor7, this);

          _initializerDefineProperty(this, "edtYouDay", _descriptor8, this);

          _initializerDefineProperty(this, "edtYouMonth", _descriptor9, this);

          _initializerDefineProperty(this, "edtYouYear", _descriptor10, this);

          _initializerDefineProperty(this, "edtPartnerDay", _descriptor11, this);

          _initializerDefineProperty(this, "edtPartnerMonth", _descriptor12, this);

          _initializerDefineProperty(this, "edtPartnerYear", _descriptor13, this);
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
          this.richTextDescription.string = "<color=#ffffff>" + i18n.t("INTROLOVE") + "</color>";
          i18n.updateSceneRenderers();
          this.addPrefabTools();
          this.loadData();
        }

        loadData() {
          var dataUser = JSON.parse(sys.localStorage.getItem((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PERSONAL));
          this.edtYouDay.string = parseInt(dataUser.dayOfBirth) + "";
          this.edtYouMonth.string = parseInt(dataUser.monthOfBirth) + "";
          this.edtYouYear.string = parseInt(dataUser.yearOfBirth) + "";
          var dataUser2 = JSON.parse(sys.localStorage.getItem((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PERSONAL2));

          if (dataUser2 != null) {
            this.edtPartnerDay.string = parseInt(dataUser2.dayOfBirth) + "";
            this.edtPartnerMonth.string = parseInt(dataUser2.monthOfBirth) + "";
            this.edtPartnerYear.string = parseInt(dataUser2.yearOfBirth) + "";
            this.addPrefabContent(this.tinhDestinyNumber(dataUser, dataUser2)); // setTimeout( () => {

            this.scrollView.scrollToBottom(0.5); // }, 15);
          }
        }

        addPrefabContent(loveData) {
          var nodeText = this.content.getChildByName("nodeContent");

          if (nodeText == null) {
            var nodeText = instantiate(this.prefabContent);
            nodeText.name = "nodeContent";
            this.content.insertChild(nodeText, 1);
          }

          var cell = nodeText.getComponent(_crd && PrefabLove === void 0 ? (_reportPossibleCrUseOfPrefabLove({
            error: Error()
          }), PrefabLove) : PrefabLove);
          cell.updateData(loveData);
        }

        hidePrefabContent() {
          var nodeText = this.content.getChildByName("nodeContent");

          if (nodeText != null) {
            nodeText.removeFromParent();
          }
        }

        checkValidate() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
          var language = (_crd && Languages === void 0 ? (_reportPossibleCrUseOfLanguages({
            error: Error()
          }), Languages) : Languages).getLanguage();
          i18n.init(language);
          this.lblWarning.node.active = false;
          var yDay = this.edtYouDay.string;
          var yMonth = this.edtYouMonth.string;
          var yYear = this.edtYouYear.string;
          var tDay = this.edtPartnerDay.string;
          var tMonth = this.edtPartnerMonth.string;
          var tYear = this.edtPartnerYear.string;

          if (yDay == "" || tDay == "") {
            this.lblWarning.node.active = true;
            this.lblWarning.string = i18n.t("ERROR1");
            this.hidePrefabContent();
            return;
          } else if (yMonth == "" || tMonth == "") {
            this.lblWarning.node.active = true;
            this.lblWarning.string = i18n.t("ERROR8");
            this.hidePrefabContent();
            return;
          } else if (yYear == "" || tYear == "") {
            this.lblWarning.node.active = true;
            this.lblWarning.string = i18n.t("ERROR9");
            this.hidePrefabContent();
            return;
          } else if (this.checkFormat(yDay) != -1 || this.checkFormat(tDay) != -1) {
            this.lblWarning.node.active = true;
            this.lblWarning.string = i18n.t("ERROR4");
            return;
          } else if (this.checkFormat(yMonth) != -1 || this.checkFormat(tMonth) != -1) {
            this.lblWarning.node.active = true;
            this.lblWarning.string = i18n.t("ERROR11");
            return;
          } else if (this.checkFormat(yYear) != -1 || this.checkFormat(tYear) != -1) {
            this.lblWarning.node.active = true;
            this.lblWarning.string = i18n.t("ERROR12");
            return;
          }

          var p1Day = parseInt(yDay);
          var p1Month = parseInt(yMonth);
          var p1Year = parseInt(yYear);
          var p2Day = parseInt(tDay);
          var p2Month = parseInt(tMonth);
          var p2Year = parseInt(tYear);
          var person1 = {
            dayOfBirth: p1Day,
            monthOfBirth: p1Month,
            yearOfBirth: p1Year
          };
          var person2 = {
            dayOfBirth: p2Day,
            monthOfBirth: p2Month,
            yearOfBirth: p2Year
          };
          var p1HopLe = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).isHopLe(p1Day, p1Month, p1Year);
          var p2HopLe = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).isHopLe(p2Day, p2Month, p2Year);

          if (p1HopLe == -1 && p2HopLe == -1) {
            sys.localStorage.setItem((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PERSONAL2, JSON.stringify(person2));
            var loveData = this.tinhDestinyNumber(person1, person2);
            this.addPrefabContent(loveData);
          } else {
            if (p1HopLe == 1 || p2HopLe == 1) {
              this.lblWarning.string = i18n.t("ERROR4");
            } else if (p1HopLe == 2 || p2HopLe == 2) {
              this.lblWarning.string = i18n.t("ERROR11");
            } else {
              this.lblWarning.string = i18n.t("ERROR12");
            }

            this.lblWarning.node.active = true;
            this.hidePrefabContent();
          }

          this.scrollView.scrollToPercentVertical(0.8);
        }

        checkFormat(str) {
          var format = /[0-9]+/;
          var result = str.toString().split("");
          var len = result.length;
          var index = -1;

          for (var i = 0; i < len; i++) {
            if (format.test(result[i]) == false) {
              index = i;
            }
          }

          return index;
        }

        tinhDestinyNumber(person1, person2) {
          var number1 = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).rutGonSo((_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).tinhSoChuDao(person1), 9);
          var number2 = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).rutGonSo((_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).tinhSoChuDao(person2), 9);
          var loveData = {
            number1: number1,
            number2: number2
          };
          return loveData;
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

        addPrefabTools() {
          var node = instantiate(this.prefabTools);
          node.name = "nodeTools";
          this.content.addChild(node);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblWarning", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "richTextDescription", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "prefabTools", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "prefabContent", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "edtYouDay", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "edtYouMonth", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "edtYouYear", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "edtPartnerDay", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "edtPartnerMonth", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "edtPartnerYear", [_dec14], {
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
//# sourceMappingURL=1b441357044f20006e76daa461edf01853eeb6f9.js.map