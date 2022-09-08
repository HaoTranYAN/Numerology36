System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, director, sys, Prefab, instantiate, AudioManager, Constant, TypeAction, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, Home;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../common/AudioManager", _context.meta, extras);
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
      Node = _cc.Node;
      Label = _cc.Label;
      director = _cc.director;
      sys = _cc.sys;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      Constant = _unresolved_3.Constant;
      TypeAction = _unresolved_3.TypeAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1fbd2nJKztO0IO8c4Pd/eNw", "Home", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'director', 'sys', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Home", Home = (_dec = ccclass("Home"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Prefab), _dec8 = property(Prefab), _dec(_class = (_class2 = class Home extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lblFullName", _descriptor, this);

          _initializerDefineProperty(this, "lblDateOfBirth", _descriptor2, this);

          _initializerDefineProperty(this, "imgFemale", _descriptor3, this);

          _initializerDefineProperty(this, "imgMale", _descriptor4, this);

          _initializerDefineProperty(this, "content", _descriptor5, this);

          _initializerDefineProperty(this, "prefabTools", _descriptor6, this);

          _initializerDefineProperty(this, "prefabMainNumbers", _descriptor7, this);
        }

        onLoad() {
          this.resetValueWindow();
          this.initLayout();
        }

        initLayout() {
          var dataUser = JSON.parse(sys.localStorage.getItem((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PERSONAL)); // ////console.log("Profile......");

          if (dataUser == undefined || dataUser == null) {// //return;
          } else {
            this.lblFullName.string = dataUser.fullName;
            this.lblDateOfBirth.string = parseInt(dataUser.dayOfBirth) + "/" + parseInt(dataUser.monthOfBirth) + "/" + parseInt(dataUser.yearOfBirth);

            if (dataUser.sex == 0) {
              this.imgFemale.active = false;
              this.imgMale.active = true;
            } else {
              this.imgFemale.active = true;
              this.imgMale.active = false;
            }
          }

          this.addPrefab();
          setTimeout(() => {
            this.preloadScene();
          }, 50);
        }

        preloadScene() {
          director.preloadScene("PeriodCycle", function () {});
          director.preloadScene("Detail", function () {});
          director.preloadScene("Love", function () {});
          director.preloadScene("PhoneAddress", function () {});
          director.preloadScene("Settings", function () {});
        }

        addPrefab() {
          var nodeNumber = instantiate(this.prefabMainNumbers);
          nodeNumber.name = "nodeNumber";
          this.content.addChild(nodeNumber);
          var tools = instantiate(this.prefabTools);
          tools.name = "nodeTools";
          this.content.addChild(tools);
        }

        start() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).checkPlayMusic();
        }

        update(deltaTime) {}

        resetValueWindow() {
          window["typeAction"] = (_crd && TypeAction === void 0 ? (_reportPossibleCrUseOfTypeAction({
            error: Error()
          }), TypeAction) : TypeAction).NONE;
        }

        loadProfile() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
          director.loadScene("Profile");
        }

        loadSettings() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
          director.loadScene("Settings");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblFullName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblDateOfBirth", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgFemale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "imgMale", [_dec5], {
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "prefabTools", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "prefabMainNumbers", [_dec8], {
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
//# sourceMappingURL=adbd256f4320609e178091abd63318010dfffa9e.js.map