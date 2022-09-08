System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, RichText, Label, assetManager, TextAsset, Languages, i18n, TypeAction, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, PrefabDetailYourNumber;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      RichText = _cc.RichText;
      Label = _cc.Label;
      assetManager = _cc.assetManager;
      TextAsset = _cc.TextAsset;
    }, function (_unresolved_2) {
      Languages = _unresolved_2.Languages;
    }, function (_unresolved_3) {
      i18n = _unresolved_3;
    }, function (_unresolved_4) {
      TypeAction = _unresolved_4.TypeAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "59f05PWT59DXLo4JGT2pdQg", "PrefabDetailYourNumber", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'RichText', 'Label', 'assetManager', 'TextAsset']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PrefabDetailYourNumber", PrefabDetailYourNumber = (_dec = ccclass('PrefabDetailYourNumber'), _dec2 = property(RichText), _dec3 = property(Label), _dec(_class = (_class2 = class PrefabDetailYourNumber extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "richTextContent", _descriptor, this);

          _initializerDefineProperty(this, "lblNumber", _descriptor2, this);
        }

        onLoad() {}

        start() {}

        update(deltaTime) {}

        updateData(number, typeNumber) {
          var language = (_crd && Languages === void 0 ? (_reportPossibleCrUseOfLanguages({
            error: Error()
          }), Languages) : Languages).getLanguage();
          var url = "";
          i18n.init(language);

          switch (window["typeAction"]) {
            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).RULING_NUMBER:
              // code block
              //number = soChuDao;
              url = language + "_rullingNumber_" + number;
              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERSONAL_YEAR:
              // code block
              //number = indexByName.soulNumber;
              url = language + "_year_" + number;
              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).DESTINY:
              //number = indexByName.totalNameNumber;
              url = language + "_namenumber_" + number; // code block

              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).LIFE_PATH:
              //number = soDuongDoi;
              url = language + "_lifepath_" + number; // code block

              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).KARMIC_DEBT:
              url = language + "_karmicdebt_" + number;
              console.log("url: " + url);
              break;

            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERIOD1:
            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERIOD2:
            case (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).PERIOD3:
              url = language + "_period_" + number;
              break;

            default: // code block

          }

          this.lblNumber.string = number;
          this.loadData(url);
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
              bundle.loadDir(url, TextAsset, function (err, texture) {
                self.richTextContent.string = `<color=#ffffff>${texture.toString()}</color>`;
              });
            });
          } else {
            bundle.loadDir(url, TextAsset, function (err, texture) {
              ////console.log(texture)
              self.richTextContent.string = `<color=#ffffff>${texture.toString()}</color>`;
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "richTextContent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblNumber", [_dec3], {
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
//# sourceMappingURL=0339639095bface54db70017a1fb33fb7b3008f7.js.map