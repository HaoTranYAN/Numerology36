System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, RichText, Label, assetManager, TextAsset, Languages, i18n, TypeAction, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, PrefabCountNumber;

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

      _cclegacy._RF.push({}, "b37cfkii89OWYEn+fyLKBG1", "PrefabCountNumber", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'RichText', 'Label', 'assetManager', 'TextAsset']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PrefabCountNumber", PrefabCountNumber = (_dec = ccclass('PrefabCountNumber'), _dec2 = property(RichText), _dec3 = property(Label), _dec(_class = (_class2 = class PrefabCountNumber extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "richTextContent", _descriptor, this);

          _initializerDefineProperty(this, "lblNumbers", _descriptor2, this);
        }

        start() {}

        update(deltaTime) {}

        updateData(result, typeNumber) {
          var language = (_crd && Languages === void 0 ? (_reportPossibleCrUseOfLanguages({
            error: Error()
          }), Languages) : Languages).getLanguage();
          i18n.init(language);

          if (result == "0") {
            this.lblNumbers.string = i18n.t("NONUMBER");
            this.richTextContent.node.active = true;
            var url = "";

            if (typeNumber == (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
              error: Error()
            }), TypeAction) : TypeAction).KARMIC_DEBT) {
              url = language + "_karmicdebt_" + 0;
            }

            this.loadData(url);
          } else {
            this.richTextContent.node.active = false;
            this.lblNumbers.string = i18n.t("YOURNUMBERS") + ": " + result;
          }

          i18n.updateSceneRenderers();
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
                self.richTextContent.string = texture.toString();
              });
            });
          } else {
            bundle.loadDir(url, TextAsset, function (err, texture) {
              ////console.log(texture)
              self.richTextContent.string = texture.toString();
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblNumbers", [_dec3], {
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
//# sourceMappingURL=16858413ee61d29e044a71bbab05c41a757642de.js.map