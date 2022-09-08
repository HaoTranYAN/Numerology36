System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, Sprite, RichText, Prefab, instantiate, color, sys, assetManager, TextAsset, AudioManager, CommonTS, Constant, TypeActionForecast, Languages, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, PrefabForecast;

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
      Node = _cc.Node;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      RichText = _cc.RichText;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      color = _cc.color;
      sys = _cc.sys;
      assetManager = _cc.assetManager;
      TextAsset = _cc.TextAsset;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      CommonTS = _unresolved_3.CommonTS;
    }, function (_unresolved_4) {
      Constant = _unresolved_4.Constant;
      TypeActionForecast = _unresolved_4.TypeActionForecast;
    }, function (_unresolved_5) {
      Languages = _unresolved_5.Languages;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9839exukbRA+aUD2GkjzGcx", "PrefabForecast", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Sprite', 'RichText', 'SpriteFrame', 'Prefab', 'instantiate', 'color', 'sys', 'native', 'resources', 'assetManager', 'TextAsset']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PrefabForecast", PrefabForecast = (_dec = ccclass('PrefabForecast'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(RichText), _dec5 = property(Sprite), _dec6 = property(Node), _dec7 = property(Prefab), _dec(_class = (_class2 = class PrefabForecast extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lblToday", _descriptor, this);

          _initializerDefineProperty(this, "lblTomorrow", _descriptor2, this);

          _initializerDefineProperty(this, "richTextDay", _descriptor3, this);

          _initializerDefineProperty(this, "imgArrowUpDown", _descriptor4, this);

          this.isShowPrefabMonth = false;

          _initializerDefineProperty(this, "nodeParentForecast", _descriptor5, this);

          _initializerDefineProperty(this, "prefabForecastMonth", _descriptor6, this);

          this.dayForecast = void 0;
        }

        onLoad() {
          this.initLayout();
        }

        start() {}

        update(deltaTime) {}

        initLayout() {
          this.hideNodeMonth();
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
          this.lblToday.string = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
          this.lblTomorrow.string = dateNext.getDate() + "/" + (dateNext.getMonth() + 1) + "/" + dateNext.getFullYear();
          this.dayForecast = personal.dayForecast;
          var url = language + "_daypersonal_" + this.dayForecast;
          this.loadData(url);
        }

        showHideNodeMonth() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
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
          this.nodeParentForecast.insertChild(nodeMonth, 1);
        }

        clickPreOrNext(event, customEventData) {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();

          if (customEventData == (_crd && TypeActionForecast === void 0 ? (_reportPossibleCrUseOfTypeActionForecast({
            error: Error()
          }), TypeActionForecast) : TypeActionForecast).PRE) {
            this.lblToday.color = color(255, 255, 255);
            this.lblTomorrow.color = color(5, 4, 44);
            this.updateRichTextData(customEventData);
          } else if (customEventData == (_crd && TypeActionForecast === void 0 ? (_reportPossibleCrUseOfTypeActionForecast({
            error: Error()
          }), TypeActionForecast) : TypeActionForecast).NEXT) {
            this.lblTomorrow.color = color(255, 255, 255);
            this.lblToday.color = color(5, 4, 44);
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
            number = this.dayForecast;
          } else if (type == (_crd && TypeActionForecast === void 0 ? (_reportPossibleCrUseOfTypeActionForecast({
            error: Error()
          }), TypeActionForecast) : TypeActionForecast).NEXT) {
            number = this.checkNextNumber(this.dayForecast + 1);
          }

          url = language + "_daypersonal_" + number;
          console.log("number: " + number);
          this.loadData(url);
        }

        checkNextNumber(number) {
          if (number > 9) {
            number = 1;
          }

          return number;
        }
        /**
        * Hàm load Data từ bundle
        * @param numberDay: Tên con số cần lấy (Đánh số theo thứ tự từ 1-9)
        * @param nameBundle : Tên bundle chứa
        * @result : Nội dung về con số tương ứng 
        */


        loadData(url) {
          var self = this;
          var bundle = assetManager.getBundle("data");

          if (bundle == null) {
            assetManager.loadBundle("data", (err, bundle) => {
              console.log("HAOHAO: " + err);
              bundle.loadDir(url, TextAsset, function (err, texture) {
                console.log("HAOHAO1: " + texture);
                self.richTextDay.string = "<color=#000000>" + texture.toString() + "</color>";
                self.richTextDay.maxWidth = 280;
              });
            });
          } else {
            bundle.load(url, TextAsset, function (err, texture) {
              console.log("HAOHAO2: " + texture); ////console.log(texture)

              self.richTextDay.string = "<color=#000000>" + texture.toString() + "</color>";
              self.richTextDay.maxWidth = 280;
            });
          }
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "richTextDay", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "imgArrowUpDown", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeParentForecast", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "prefabForecastMonth", [_dec7], {
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
//# sourceMappingURL=cd1c3bfc4533bcb7ce30a71f8854e82d096406b1.js.map