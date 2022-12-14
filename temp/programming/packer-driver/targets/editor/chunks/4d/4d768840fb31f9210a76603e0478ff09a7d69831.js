System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Sprite, RichText, SpriteFrame, color, sys, assetManager, TextAsset, CommonTS, Constant, TypeActionForecast, Languages, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, PrefabForecastMonth;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCommonTS(extras) {
    _reporterNs.report("CommonTS", "../common/CommonTS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../common/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTypeActionForecast(extras) {
    _reporterNs.report("TypeActionForecast", "../common/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLanguages(extras) {
    _reporterNs.report("Languages", "../common/Language", _context.meta, extras);
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
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      RichText = _cc.RichText;
      SpriteFrame = _cc.SpriteFrame;
      color = _cc.color;
      sys = _cc.sys;
      assetManager = _cc.assetManager;
      TextAsset = _cc.TextAsset;
    }, function (_unresolved_2) {
      CommonTS = _unresolved_2.CommonTS;
    }, function (_unresolved_3) {
      Constant = _unresolved_3.Constant;
      TypeActionForecast = _unresolved_3.TypeActionForecast;
    }, function (_unresolved_4) {
      Languages = _unresolved_4.Languages;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05113fBpXJFpqLuKFXHbk1P", "PrefabForecastMonth", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Sprite', 'RichText', 'SpriteFrame', 'color', 'sys', 'assetManager', 'TextAsset']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PrefabForecastMonth", PrefabForecastMonth = (_dec = ccclass('PrefabForecastMonth'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(RichText), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec(_class = (_class2 = class PrefabForecastMonth extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lblMonth", _descriptor, this);

          _initializerDefineProperty(this, "lblNextMonth", _descriptor2, this);

          _initializerDefineProperty(this, "imgWeatherMonth", _descriptor3, this);

          _initializerDefineProperty(this, "richTextMonth", _descriptor4, this);

          _initializerDefineProperty(this, "icSun", _descriptor5, this);

          _initializerDefineProperty(this, "icMoon", _descriptor6, this);

          this.monthForecast = void 0;
        }

        onLoad() {
          this.initLayout();
        }

        start() {}

        update(deltaTime) {}

        clickPreOrNext(event, customEventData) {
          if (customEventData == (_crd && TypeActionForecast === void 0 ? (_reportPossibleCrUseOfTypeActionForecast({
            error: Error()
          }), TypeActionForecast) : TypeActionForecast).PRE) {
            this.lblMonth.color = color(255, 255, 255);
            this.lblNextMonth.color = color(5, 4, 44);
            this.updateRichTextData(customEventData);
          } else if (customEventData == (_crd && TypeActionForecast === void 0 ? (_reportPossibleCrUseOfTypeActionForecast({
            error: Error()
          }), TypeActionForecast) : TypeActionForecast).NEXT) {
            this.lblNextMonth.color = color(255, 255, 255);
            this.lblMonth.color = color(5, 4, 44);
            this.updateRichTextData(customEventData);
          }
        }

        updateRichTextData(type) {
          var url = "";
          var language = (_crd && Languages === void 0 ? (_reportPossibleCrUseOfLanguages({
            error: Error()
          }), Languages) : Languages).getLanguage();
          var number = 0;

          if (type == (_crd && TypeActionForecast === void 0 ? (_reportPossibleCrUseOfTypeActionForecast({
            error: Error()
          }), TypeActionForecast) : TypeActionForecast).PRE) {
            number = this.monthForecast;
          } else if (type == (_crd && TypeActionForecast === void 0 ? (_reportPossibleCrUseOfTypeActionForecast({
            error: Error()
          }), TypeActionForecast) : TypeActionForecast).NEXT) {
            number = this.checkNextNumber(this.monthForecast + 1);
          }

          url = language + "_monthpersonal_" + number;
          console.log("number: " + number);
        }

        checkNextNumber(number) {
          if (number > 9) {
            number = 1;
          }

          return number;
        }

        initLayout() {
          var d = new Date();
          var dateNext = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
          var dataUser = JSON.parse(sys.localStorage.getItem((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PERSONAL)); ////console.log(dataUser);

          var personal = (_crd && CommonTS === void 0 ? (_reportPossibleCrUseOfCommonTS({
            error: Error()
          }), CommonTS) : CommonTS).tinhPersonalDay(dataUser, d);
          var language = (_crd && Languages === void 0 ? (_reportPossibleCrUseOfLanguages({
            error: Error()
          }), Languages) : Languages).getLanguage();
          this.lblMonth.string = d.getMonth() + 1 + "/" + d.getFullYear();
          var nextMonth = d.getMonth() + 2;
          var year = d.getFullYear();

          if (nextMonth > 12) {
            nextMonth = 1;
            year = year + 1;
          }

          this.lblNextMonth.string = nextMonth + "/" + year; //url = language + "/ThangCaNhan/" + personal.monthForecast;

          this.monthForecast = personal.monthForecast;
          var url = language + "_monthpersonal_" + this.monthForecast;
          this.loadData(url);
        }
        /**
        * H??m load Data t??? bundle
        * @param numberDay: T??n con s??? c???n l???y (????nh s??? theo th??? t??? t??? 1-9)
        * @param nameBundle : T??n bundle ch???a
        * @result : N???i dung v??? con s??? t????ng ???ng 
        */


        loadData(url) {
          var self = this;
          var bundle = assetManager.getBundle("Data");

          if (bundle == null) {
            assetManager.loadBundle("Data", (err, bundle) => {
              bundle.load(url, TextAsset, function (err, texture) {
                this.richTextMonth.string = texture.toString();
              });
            });
          } else {
            bundle.load(url, TextAsset, function (err, texture) {
              ////console.log(texture)
              this.richTextMonth.string = texture.toString();
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblMonth", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblNextMonth", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgWeatherMonth", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "richTextMonth", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "icSun", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "icMoon", [_dec7], {
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
//# sourceMappingURL=4d768840fb31f9210a76603e0478ff09a7d69831.js.map