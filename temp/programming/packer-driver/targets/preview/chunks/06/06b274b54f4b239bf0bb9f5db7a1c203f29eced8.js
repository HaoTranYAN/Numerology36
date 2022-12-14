System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, EditBox, ToggleComponent, AudioManager, i18n, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, Profile;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../common/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTS(extras) {
    _reporterNs.report("CommonTS", "../common/CommonTS", _context.meta, extras);
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
      EditBox = _cc.EditBox;
      ToggleComponent = _cc.ToggleComponent;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      i18n = _unresolved_3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9504dPh8IZEdrXDHV5PDEAm", "Profile", undefined);

      __checkObsolete__(['_decorator', 'Component', 'assert', 'AudioSource', 'Node', 'Label', 'EditBox', 'sys', 'director', 'Button', 'game', 'EventHandler', 'ToggleContainerComponent', 'ToggleComponent', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Profile = (_dec = ccclass("Profile"), _dec2 = property(ToggleComponent), _dec3 = property(ToggleComponent), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(EditBox), _dec7 = property(EditBox), _dec8 = property(EditBox), _dec9 = property(EditBox), _dec10 = property(Label), _dec(_class = (_class2 = class Profile extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "rdMale", _descriptor, this);

          _initializerDefineProperty(this, "rdFemale", _descriptor2, this);

          _initializerDefineProperty(this, "imgFemale", _descriptor3, this);

          _initializerDefineProperty(this, "imgMale", _descriptor4, this);

          _initializerDefineProperty(this, "edtFullName", _descriptor5, this);

          _initializerDefineProperty(this, "edtDay", _descriptor6, this);

          _initializerDefineProperty(this, "edtMonth", _descriptor7, this);

          _initializerDefineProperty(this, "edtYear", _descriptor8, this);

          _initializerDefineProperty(this, "lblError", _descriptor9, this);
        }

        onLoad() {
          this.lblError.node.active = false;
        }

        start() {// AudioManager.setStateMusic("1");
          //          AudioManager.checkPlayMusic();
        }

        update(deltaTime) {}

        callback(event, customEventData) {
          // The event here is a Touch Event object, and you can get the send node of the event by event.target
          // The customEventData parameter here is equal to the "foobar" you set before
          if (this.rdMale.isChecked === true) {
            this.imgMale.active = true;
            this.imgFemale.active = false;
          } else {
            this.imgMale.active = false;
            this.imgFemale.active = true;
          }
        }

        validateInfo() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick();
          this.lblError.node.active = false;
          var d = this.edtDay.string;
          var m = this.edtMonth.string;
          var y = this.edtYear.string;
          var name = this.edtFullName.string;

          if (d == "") {
            this.lblError.node.active = true;
            this.lblError.string = i18n.t("ERROR1");
            return;
          } else if (m == "") {
            this.lblError.node.active = true;
            this.lblError.string = i18n.t("ERROR8");
            return;
          } else if (y == "") {
            this.lblError.node.active = true;
            this.lblError.string = i18n.t("ERROR9");
            return;
          } else if (name == "") {
            this.lblError.node.active = true;
            this.lblError.string = i18n.t("ERROR10");
            return;
          } else if (this.checkIsNumber(d) != -1) {
            this.lblError.node.active = true;
            this.lblError.string = i18n.t("ERROR4");
            return;
          } else if (this.checkIsNumber(m) != -1) {
            this.lblError.node.active = true;
            this.lblError.string = i18n.t("ERROR11");
            return;
          } else if (this.checkIsNumber(y) != -1) {
            this.lblError.node.active = true;
            this.lblError.string = i18n.t("ERROR12");
            return;
          }

          var day = parseInt(d);
          var month = parseInt(m);
          var year = parseInt(y);

          if (day <= 0 || month <= 0) {
            this.lblError.node.active = true;
            this.lblError.string = i18n.t("ERROR3");
            return;
          }

          var str = name.toLowerCase();
          var text = this.removeVietnameseTones(str);
          var isHopLe = this.isValidDay(day, month, year);

          if (isHopLe == -1) {
            // ////console.log(typeof(text));
            this.saveDataInfo(text, name, day, month, year);
            this.nextScreen();
          } else {
            this.lblError.node.active = true;

            if (isHopLe == 1) {
              this.lblError.string = i18n.t("ERROR4");
            } else if (isHopLe == 2) {
              this.lblError.string = i18n.t("ERROR11");
            } else if (isHopLe == 3) {
              this.lblError.string = i18n.t("ERROR12");
            }
          }
        }

        isValidDay(day, month, year) {
          var common = this.node.getComponent("CommonTS");
          return common.isHopLe(day, month, year);
        }

        saveDataInfo(nameText, fullname, dayOfBirth, monthOfBirth, yearOfBirth) {// // //console.log("name: " + nameText);
          //         if(this.sex == undefined) {
          //         this.sex = JSON.parse(cc.sys.localStorage.getItem(PERSONAL)).sex;
          //         }
          //         var dataUser = {
          //         sex: this.sex,
          //         nameText: nameText,
          //         fullName: fullname,
          //         dayOfBirth: dayOfBirth,
          //         monthOfBirth: monthOfBirth,
          //         yearOfBirth: yearOfBirth,
          //         };
          // // ////console.log("Data..........." + dataUser.dayOfBirth + "/" + dataUser.monthOfBirth + "/" + dataUser.yearOfBirth);
          //         cc.sys.localStorage.setItem(PERSONAL, JSON.stringify(dataUser));
        }

        nextScreen() {// this.playSound();
          // var language = Languages.getLanguage();
          // i18n.init(language);
          // var dataUser = JSON.parse(cc.sys.localStorage.getItem(PERSONAL));
          // if (dataUser == undefined || dataUser == null) {
          // this.noticeLabel.node.active = true;
          // this.noticeLabel.string = i18n.t("ERROR1");
          // return;
          // } else {
          // this.loadHome();
          // }
        }

        exitScreen() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSoundClick(); //   if(AudioManager.isMusicOn()){
          //     AudioManager.pauseMusic()
          // }else{
          //   AudioManager.playMusic();
          //   AudioManager.playSound("click");
          // }
        }

        checkIsNumber(str) {
          var format = /[0-9]+/;
          var result = str.split("");
          var len = result.length;
          var index = -1;

          for (var i = 0; i < len; i++) {
            if (format.test(result[i]) == false) {
              index = i;
            }
          }

          return index;
        }

        removeVietnameseTones(str) {
          str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "a");
          str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "e");
          str = str.replace(/??|??|???|???|??/g, "i");
          str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "o");
          str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "u");
          str = str.replace(/???|??|???|???|???/g, "y");
          str = str.replace(/??/g, "d");
          str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "A");
          str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "E");
          str = str.replace(/??|??|???|???|??/g, "I");
          str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "O");
          str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "U");
          str = str.replace(/???|??|???|???|???/g, "Y");
          str = str.replace(/??/g, "D"); // // Some system encode vietnamese combining accent as individual utf-8 characters
          // // M???t v??i b??? encode coi c??c d???u m??, d???u ch??? nh?? m???t k?? t??? ri??ng bi???t n??n th??m hai d??ng n??y

          str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ?? ?? ?? ?? ??  huy???n, s???c, ng??, h???i, n???ng

          str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ?? ?? ??  ??, ??, ??, ??, ??
          // // Remove extra spaces
          // // B??? c??c kho???ng tr???ng li???n nhau

          str = str.replace(/ + /g, " ");
          str = str.trim(); // // Remove punctuations
          // // B??? d???u c??u, k?? t??? ?????c bi???t

          str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
          return str;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rdMale", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rdFemale", [_dec3], {
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "edtFullName", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "edtDay", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "edtMonth", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "edtYear", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lblError", [_dec10], {
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
//# sourceMappingURL=06b274b54f4b239bf0bb9f5db7a1c203f29eced8.js.map