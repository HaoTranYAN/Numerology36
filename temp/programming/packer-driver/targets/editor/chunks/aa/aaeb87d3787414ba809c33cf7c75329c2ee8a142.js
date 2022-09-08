System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Label, sys, AudioManager, CommonTS, Constant, TypeAction, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, PrefabMainNumbers;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../common/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTS(extras) {
    _reporterNs.report("CommonTS", "../common/CommonTS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../common/Constant", _context.meta, extras);
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
      director = _cc.director;
      Label = _cc.Label;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      CommonTS = _unresolved_3.CommonTS;
    }, function (_unresolved_4) {
      Constant = _unresolved_4.Constant;
      TypeAction = _unresolved_4.TypeAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4237EjOUdM45FlKlPv6raH", "PrefabMainNumbers", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'Label', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PrefabMainNumbers", PrefabMainNumbers = (_dec = ccclass('PrefabMainNumbers'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec(_class = (_class2 = class PrefabMainNumbers extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lblLifePath", _descriptor, this);

          _initializerDefineProperty(this, "lblRuling", _descriptor2, this);

          _initializerDefineProperty(this, "lblDestiny", _descriptor3, this);

          _initializerDefineProperty(this, "lblPersonalYear", _descriptor4, this);

          _initializerDefineProperty(this, "lblPeriodCycle", _descriptor5, this);

          _initializerDefineProperty(this, "lblKarmicDebt", _descriptor6, this);
        }

        onLoad() {
          this.initLayout();
        }

        start() {}

        update(deltaTime) {}

        initLayout() {
          var date = new Date();
          var dataUser = JSON.parse(sys.localStorage.getItem((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PERSONAL));
          this.lblRuling.string = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).tinhSoChuDao(dataUser).toString();
          this.lblLifePath.string = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).tinhSoDuongDoi(dataUser);
          this.lblPersonalYear.string = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).tinhPersonalDay(dataUser, date).yearForecast; //  

          var noNghiep = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).karmicDebt(dataUser);

          if (noNghiep.length == 0) {
            this.lblKarmicDebt.string = "0";
          } else {
            this.lblKarmicDebt.string = noNghiep.toString().replace(/,/g, ", ");
          }

          var chuKi = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).tinhGiaiDoan(dataUser);
          this.lblPeriodCycle.string = "" + chuKi.gd1 + ", " + chuKi.gd2 + ", " + chuKi.gd3;
          this.lblDestiny.string = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).tinhNameDestiny(dataUser.nameText).toString();
        }

        nextScreen(event, customEventData) {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
          var number = parseInt(customEventData);
          if (window["typeAction"] == number) return;
          window["typeAction"] = number;

          if (window["typeAction"] == (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
            error: Error()
          }), TypeAction) : TypeAction).PERIOD_CYCLE) {
            this.loadPeriodCycle();
          } else {
            this.loadDetailNumber();
          }
        }

        loadDetailNumber() {
          director.loadScene("Detail");
        }

        loadPeriodCycle() {
          director.loadScene("PeriodCycle");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblLifePath", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblRuling", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblDestiny", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblPersonalYear", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lblPeriodCycle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lblKarmicDebt", [_dec7], {
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
//# sourceMappingURL=aaeb87d3787414ba809c33cf7c75329c2ee8a142.js.map