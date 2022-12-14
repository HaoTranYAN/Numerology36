System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, RichText, Label, assetManager, Languages, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, PrefabLove;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      RichText = _cc.RichText;
      Label = _cc.Label;
      assetManager = _cc.assetManager;
    }, function (_unresolved_2) {
      Languages = _unresolved_2.Languages;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "94b5a/xfgFAu7TyIthRSpaU", "PrefabLove", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'RichText', 'Label', 'assetManager', 'TextAsset']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PrefabLove", PrefabLove = (_dec = ccclass('PrefabLove'), _dec2 = property(RichText), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = class PrefabLove extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "richTextContent", _descriptor, this);

          _initializerDefineProperty(this, "lblNumberPartner", _descriptor2, this);

          _initializerDefineProperty(this, "lblNumberYou", _descriptor3, this);
        }

        onLoad() {
          this.initLayout();
        }

        start() {}

        update(deltaTime) {}

        initLayout() {} // update (dt) {}


        updateData(loveData) {
          var p1 = loveData.number1;
          var p2 = loveData.number2;
          this.lblNumberYou.string = p1;
          this.lblNumberPartner.string = p2;
          var language = (_crd && Languages === void 0 ? (_reportPossibleCrUseOfLanguages({
            error: Error()
          }), Languages) : Languages).getLanguage();
          var url = "";

          if (p1 > p2) {
            // url = language + "/LoveData/" + p2 +"" +p1;
            // url = language + "/LoveData/" + p2 +"" +p1;
            url = language + "_love_" + p2 + "" + p1;
          } else {
            //url = language + "/LoveData/" + p1 +"" +p2;
            url = language + "_love_" + p1 + "" + p2;
          }

          this.loadData(url);
        }
        /**
        * H??m load Data t??? bundle
        * @param numberDay: T??n con s??? c???n l???y (????nh s??? theo th??? t??? t??? 1-9)
        * @param "Data" : T??n bundle ch???a
        * @result : N???i dung v??? con s??? t????ng ???ng 
        */


        loadData(url) {
          var self = this;
          var bundle = assetManager.getBundle("data");
          bundle.load(url, function (err, texture) {
            self.richTextContent.string = texture.toString();
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "richTextContent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblNumberPartner", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblNumberYou", [_dec4], {
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
//# sourceMappingURL=7fd6b8e9d86913e240ca2d649eb264025bbab60c.js.map