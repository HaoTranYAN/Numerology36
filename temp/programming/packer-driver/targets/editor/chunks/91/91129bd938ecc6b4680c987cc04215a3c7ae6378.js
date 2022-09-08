System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, director, Label, Sprite, sys, native, AudioManager, Languages, i18n, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, Settings;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../common/AudioManager", _context.meta, extras);
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
      director = _cc.director;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      sys = _cc.sys;
      native = _cc.native;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      Languages = _unresolved_3.Languages;
    }, function (_unresolved_4) {
      i18n = _unresolved_4;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae7c25uPEBGLJUEYQduQlRx", "Settings", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'Label', 'Sprite', 'sys', 'native', 'Button', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Settings", Settings = (_dec = ccclass("Settings"), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = (_class2 = class Settings extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "imgCheckVN", _descriptor, this);

          _initializerDefineProperty(this, "imgCheckEN", _descriptor2, this);

          _initializerDefineProperty(this, "bgChooseLanguage", _descriptor3, this);

          _initializerDefineProperty(this, "lblTitleLanguage", _descriptor4, this);

          _initializerDefineProperty(this, "lblTitleVersion", _descriptor5, this);

          _initializerDefineProperty(this, "btnOnMusic", _descriptor6, this);

          _initializerDefineProperty(this, "btnOffMusic", _descriptor7, this);

          _initializerDefineProperty(this, "btnOnSound", _descriptor8, this);

          _initializerDefineProperty(this, "btnOffSound", _descriptor9, this);
        }

        onLoad() {}

        start() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).checkPlayMusic();
          this.initLayout();
        }

        update(deltaTime) {}

        initLayout() {
          this.bgChooseLanguage.node.active = false;
          this.updateLayoutMusic();
          this.updateLayoutSound();
          this.updateLayoutLanguage();
          this.loadVersionTitle();
        }

        clickChangeStateMusic() {
          if ((_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getMusic() === "true") {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).setMusic("false");
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).pauseMusic();
          } else {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).setMusic("true");
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).checkPlayMusic();
          }

          this.updateLayoutMusic();
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
        }

        clickChangeStateSound() {
          if ((_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getSound() === "true") {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).setSound("false");
          } else {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).setSound("true");
          }

          this.updateLayoutSound();
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
        }

        updateLayoutMusic() {
          if ((_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getMusic() === "true") {
            this.btnOffMusic.active = false;
            this.btnOnMusic.active = true;
          } else {
            this.btnOffMusic.active = true;
            this.btnOnMusic.active = false;
          }
        }

        updateLayoutSound() {
          if ((_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getSound() === "true") {
            this.btnOffSound.active = false;
            this.btnOnSound.active = true;
          } else {
            this.btnOffSound.active = true;
            this.btnOnSound.active = false;
          }
        }

        updateLayoutLanguage() {
          var language = (_crd && Languages === void 0 ? (_reportPossibleCrUseOfLanguages({
            error: Error()
          }), Languages) : Languages).getLanguage();

          if (language == "vi") {
            this.imgCheckEN.node.active = false;
            this.imgCheckVN.node.active = true;
            this.lblTitleLanguage.string = "Tiếng Việt";
          } else {
            this.imgCheckEN.node.active = true;
            this.imgCheckVN.node.active = false;
            this.lblTitleLanguage.string = "English";
          }
        }

        showPopupChooseLanguage() {
          this.bgChooseLanguage.node.active = !this.bgChooseLanguage.node.active;
        }

        hidePopupChooseLanguage() {
          this.bgChooseLanguage.node.active = false;
        }

        chooseLanguageVN() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
          var language = (_crd && Languages === void 0 ? (_reportPossibleCrUseOfLanguages({
            error: Error()
          }), Languages) : Languages).getLanguage();

          if (language != "vi") {
            (_crd && Languages === void 0 ? (_reportPossibleCrUseOfLanguages({
              error: Error()
            }), Languages) : Languages).updateLanguage("vi");
            i18n.init("vi");
            i18n.updateSceneRenderers();
            this.updateLayoutLanguage();
          }

          this.hidePopupChooseLanguage();
        }

        chooseLanguageEN() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
          var language = (_crd && Languages === void 0 ? (_reportPossibleCrUseOfLanguages({
            error: Error()
          }), Languages) : Languages).getLanguage();

          if (language != "en") {
            (_crd && Languages === void 0 ? (_reportPossibleCrUseOfLanguages({
              error: Error()
            }), Languages) : Languages).updateLanguage("en");
            i18n.init("en");
            i18n.updateSceneRenderers();
            this.updateLayoutLanguage();
          }

          this.hidePopupChooseLanguage();
        }

        loadHome() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
          director.loadScene("Home");
        }

        loadProfile() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
          director.loadScene("Profile");
        }

        loadIntro() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
          director.loadScene("Intro");
        }

        loadVersionTitle() {
          var versionName = "1.0.0(1)";

          if (sys.os == sys.OS.ANDROID) {
            let className = "org/cocos2dx/javascript/AppActivity";
            let methodName = "loadVersionName";
            let methodSignature = "()Ljava/lang/String;";
            versionName = native.reflection.callStaticMethod(className, methodName, methodSignature);
          } else if (sys.os == sys.OS.IOS) {
            versionName = native.reflection.callStaticMethod("AppController", "loadVersionName:", "Numberlogy");
          }

          this.lblTitleVersion.string = versionName;
        }

        showRate() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
          if (sys.os == sys.OS.IOS) sys.openURL("https://apps.apple.com/us/app/id1612404166");else if (sys.os === sys.OS.ANDROID) sys.openURL("https://play.google.com/store/apps/details?id=net.tuviphongthuy.numerology");
        }

        showFeedback() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();

          if (sys.os == sys.OS.ANDROID) {
            let className = "org/cocos2dx/javascript/AppActivity";
            let methodName = "sendMailWithSubject";
            let methodSignature = "(Ljava/lang/String;Ljava/lang/String;)V";
            native.reflection.callStaticMethod(className, methodName, methodSignature, "Numerology Android Feedback", "apps@yan.vn");
          } else if (sys.os == sys.OS.IOS) {
            var ret = native.reflection.callStaticMethod("AppController", "sendMailWithSubject:andMail:", "Numerology iOS Feedback", "apps@yan.vn");
          }
        }

        shareApp() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick(); // //We will add Facebook Instant share later
          // // if (typeof FBInstant === "undefined") {
          // //this.bottomNode.active = false;

          if (sys.os == sys.OS.ANDROID) {
            let className = "org/cocos2dx/javascript/AppActivity";
            let methodName = "shareApp";
            let methodSignature = "()V";
            native.reflection.callStaticMethod(className, methodName, methodSignature);
          } else if (sys.os == sys.OS.IOS) {
            var ret = native.reflection.callStaticMethod("AppController", "shareApp:", "");
          } // //  }
          // //  else {
          // //   this.node.getComponent("Share").shareFacebook();
          // // }

        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "imgCheckVN", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "imgCheckEN", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bgChooseLanguage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblTitleLanguage", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lblTitleVersion", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnOnMusic", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnOffMusic", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnOnSound", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnOffSound", [_dec10], {
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
//# sourceMappingURL=91129bd938ecc6b4680c987cc04215a3c7ae6378.js.map