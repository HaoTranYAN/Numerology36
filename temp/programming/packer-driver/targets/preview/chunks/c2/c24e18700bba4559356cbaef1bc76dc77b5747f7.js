System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, RichText, Label, Prefab, ScrollView, director, sys, instantiate, AudioManager, Languages, i18n, Constant, TypeAction, CommonTS, PrefabCountNumber, PrefabDetailYourNumber, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, Detail;

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

  function _reportPossibleCrUseOfPrefabCountNumber(extras) {
    _reporterNs.report("PrefabCountNumber", "../prefab/PrefabCountNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabDetailYourNumber(extras) {
    _reporterNs.report("PrefabDetailYourNumber", "../prefab/PrefabDetailYourNumber", _context.meta, extras);
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
      RichText = _cc.RichText;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      director = _cc.director;
      sys = _cc.sys;
      instantiate = _cc.instantiate;
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
      PrefabCountNumber = _unresolved_7.PrefabCountNumber;
    }, function (_unresolved_8) {
      PrefabDetailYourNumber = _unresolved_8.PrefabDetailYourNumber;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53889ZTLzhLMIrrJ8vl65pi", "Detail", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'RichText', 'Label', 'Prefab', 'ScrollView', 'director', 'sys', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Detail", Detail = (_dec = ccclass("Detail"), _dec2 = property(RichText), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(ScrollView), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Prefab), _dec12 = property(Prefab), _dec(_class = (_class2 = class Detail extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "richTextContentInfo", _descriptor, this);

          _initializerDefineProperty(this, "lblTitle", _descriptor2, this);

          _initializerDefineProperty(this, "lblTitleInfo", _descriptor3, this);

          _initializerDefineProperty(this, "content", _descriptor4, this);

          _initializerDefineProperty(this, "prefabMainNumbers", _descriptor5, this);

          _initializerDefineProperty(this, "prefabPeriod", _descriptor6, this);

          _initializerDefineProperty(this, "scrollView", _descriptor7, this);

          _initializerDefineProperty(this, "bgInfo", _descriptor8, this);

          _initializerDefineProperty(this, "bgTop", _descriptor9, this);

          _initializerDefineProperty(this, "prefabDetailYourNumber", _descriptor10, this);

          _initializerDefineProperty(this, "prefabCountNumber", _descriptor11, this);
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
          this.hideDialogInfo();
          this.tinhNumber();
          var self = this;
          setTimeout(function () {
            self.addPrefabForDetail();
          }, 50);
          setTimeout(() => {
            this.preloadScene();
          }, 50);
        }

        preloadScene() {
          director.preloadScene("Home", function () {});
          director.preloadScene("PeriodCycle", function () {});
        }

        addPrefabForDetail() {
          switch (window["typeAction"]) {
            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERIOD1:
            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERIOD2:
            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERIOD3:
              this.addPrefabPeriod();
              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).LIFE_PATH:
            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).RULING_NUMBER:
            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).DESTINY:
            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERSONAL_YEAR:
            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).KARMIC_DEBT:
              this.addPrefabMainNumber();
              break;

            default:
              break;
          }
        }

        backScreen() {
          switch (window["typeAction"]) {
            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERIOD1:
            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERIOD2:
            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERIOD3:
              this.loadPeriodCycle();
              break;

            default:
              this.loadHome();
              break;
          }
        }

        tinhNumber() {
          var language = (_crd && Languages === void 0 ? (_reportPossibleCrUseOfLanguages({
            error: Error()
          }), Languages) : Languages).getLanguage();
          i18n.init(language);
          var dataUser = JSON.parse(sys.localStorage.getItem((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PERSONAL));
          var indexByName = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).tinhSoTheoTen(dataUser.nameText);
          var nameDestiny = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).tinhNameDestiny(dataUser.nameText);
          var soChuDao = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).tinhSoChuDao(dataUser);
          var soDuongDoi = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).tinhSoDuongDoi(dataUser);
          var date = new Date();
          var namCaNhan = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).tinhPersonalDay(dataUser, date).yearForecast;
          var period = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).tinhGiaiDoan(dataUser);
          var karmicDebt = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).karmicDebt(dataUser); // var karmicLesson = common.karmicLesson(dataUser.nameText);

          if (window["typeAction"] == (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
            error: Error()
          }), TypeAction) : TypeAction).KARMIC_DEBT) {
            this.loadDataKarmic(karmicDebt);
          } else {
            this.loadData(soChuDao, soDuongDoi, namCaNhan, period, indexByName, nameDestiny);
          }

          this.lblTitle.string = this.lblTitle.string.toUpperCase();
          i18n.updateSceneRenderers();
        }

        loadData(soChuDao, soDuongDoi, namCaNhan, period, indexByName, nameDestiny) {
          var number = 0;
          var date = new Date();

          switch (window["typeAction"]) {
            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).RULING_NUMBER:
              // code block
              number = soChuDao;
              this.lblTitle.string = i18n.t("MASTERNUMBER");
              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERSONAL_YEAR:
              // code block
              number = namCaNhan;
              this.lblTitle.string = i18n.t("PERSONALYEAR") + " " + date.getFullYear();
              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).DESTINY:
              number = nameDestiny;
              this.lblTitle.string = i18n.t("DESTINY"); // code block

              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).LIFE_PATH:
              number = soDuongDoi;
              this.lblTitle.string = i18n.t("LIFEPATH");
              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERIOD1:
              number = period.gd1;
              this.lblTitle.string = i18n.t("PERIOD1");
              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERIOD2:
              number = period.gd2;
              this.lblTitle.string = i18n.t("PERIOD2");
              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERIOD3:
              number = period.gd3;
              this.lblTitle.string = i18n.t("PERIOD3");
              break;

            default: // code block

          }

          this.addPrefab(number);
        }

        loadDataKarmic(karmicDebt) {
          this.lblTitle.string = i18n.t("KARMICDEBT");
          var len = karmicDebt.length;

          if (len == 0) {
            this.addPrefabCountNumber("0");
          } else {
            this.addPrefabCountNumber(karmicDebt.toString().replace(/,/g, ", "));

            for (var i = 0; i < len; i++) {
              this.addPrefab(karmicDebt[i]);
            }
          }
        }

        addPrefab(dataNumber) {
          var typeNumber = window["typeAction"];
          var nodeText = instantiate(this.prefabDetailYourNumber);
          nodeText.name = "nodePrefabDetailYourNumber";
          var cell = nodeText.getComponent(_crd && PrefabDetailYourNumber === void 0 ? (_reportPossibleCrUseOfPrefabDetailYourNumber({
            error: Error()
          }), PrefabDetailYourNumber) : PrefabDetailYourNumber);
          cell.updateData(dataNumber, typeNumber);
          this.content.addChild(nodeText);
        }

        addPrefabCountNumber(str) {
          var nodeText = instantiate(this.prefabCountNumber);
          nodeText.name = "nodeCountNumber";
          var cell = nodeText.getComponent(_crd && PrefabCountNumber === void 0 ? (_reportPossibleCrUseOfPrefabCountNumber({
            error: Error()
          }), PrefabCountNumber) : PrefabCountNumber);
          cell.updateData(str, (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
            error: Error()
          }), TypeAction) : TypeAction).KARMIC_DEBT);
          this.content.addChild(nodeText);
        }

        addPrefabPeriod() {
          var nodeNumber = instantiate(this.prefabPeriod);
          nodeNumber.name = "nodePeriod";
          this.content.addChild(nodeNumber);
        }

        addPrefabMainNumber() {
          var nodeNumber = instantiate(this.prefabMainNumbers);
          nodeNumber.name = "nodeMainNumbers";
          this.content.addChild(nodeNumber);
        }

        clickInfo() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
          this.bgInfo.active == true ? this.hideDialogInfo() : this.showDialogInfo();
        }

        clickCloseInfo() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
          this.hideDialogInfo();
        }

        hideDialogInfo() {
          this.bgInfo.active = false;
          this.scrollView.node.active = true;
          this.bgTop.active = true;
        }

        showDialogInfo() {
          this.bgInfo.active = true;
          this.scrollView.node.active = false;
          this.bgTop.active = false;
          this.loadDataInfo();
        }

        loadDataInfo() {
          switch (window["typeAction"]) {
            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).LIFE_PATH:
              this.lblTitleInfo.string = i18n.t("LIFEPATH");
              this.richTextContentInfo.string = "<color=#05042C>" + i18n.t("MEANINGLIFEPATH") + "</color>";
              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).RULING_NUMBER:
              this.lblTitleInfo.string = i18n.t("MASTERNUMBER");
              this.richTextContentInfo.string = "<color=#05042C>" + i18n.t("MEANINGMASTERNUMBER") + "</color>";
              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).DESTINY:
              this.lblTitleInfo.string = i18n.t("DESTINY");
              this.richTextContentInfo.string = "<color=#05042C>" + i18n.t("MEANINGDESTINY") + "</color>";
              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERSONAL_YEAR:
              this.lblTitleInfo.string = i18n.t("PERSONALYEAR");
              this.richTextContentInfo.string = "<color=#05042C>" + i18n.t("MEANINGPERSONALYEAR") + "</color>";
              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).KARMIC_DEBT:
              this.lblTitleInfo.string = i18n.t("KARMICDEBT");
              this.richTextContentInfo.string = "<color=#05042C>" + i18n.t("MEANINGKARMICDEBT") + "</color>";
              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERIOD1:
              this.lblTitleInfo.string = i18n.t("PERIOD1");
              this.richTextContentInfo.string = "<color=#05042C>" + i18n.t("MEANINGPERIOD1") + "</color>";
              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERIOD2:
              this.lblTitleInfo.string = i18n.t("PERIOD2");
              this.richTextContentInfo.string = "<color=#05042C>" + i18n.t("MEANINGPERIOD2") + "</color>";
              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERIOD3:
              this.lblTitleInfo.string = i18n.t("PERIOD3");
              this.richTextContentInfo.string = "<color=#05042C>" + i18n.t("MEANINGPERIOD3") + "</color>";
              break;
          }
        }

        loadHome() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
          director.loadScene("Home");
        }

        loadPeriodCycle() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
          director.loadScene("PeriodCycle");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "richTextContentInfo", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblTitle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblTitleInfo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "prefabMainNumbers", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "prefabPeriod", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bgInfo", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bgTop", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "prefabDetailYourNumber", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "prefabCountNumber", [_dec12], {
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
//# sourceMappingURL=c24e18700bba4559356cbaef1bc76dc77b5747f7.js.map