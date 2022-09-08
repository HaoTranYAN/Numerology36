System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, assetManager, sys, TextAsset, director, i18n, Languages, _dec, _class, _crd, ccclass, property, PERSONAL, Splash;

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
      assetManager = _cc.assetManager;
      sys = _cc.sys;
      TextAsset = _cc.TextAsset;
      director = _cc.director;
    }, function (_unresolved_2) {
      i18n = _unresolved_2;
    }, function (_unresolved_3) {
      Languages = _unresolved_3.Languages;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1fad3KoUJMx7c53vpQQkaw", "Splash", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'assetManager', 'sys', 'TextAsset', 'AssetManager', 'director']);

      ({
        ccclass,
        property
      } = _decorator);
      PERSONAL = "DataUser";

      _export("Splash", Splash = (_dec = ccclass("Splash"), _dec(_class = class Splash extends Component {
        start() {
          var language = (_crd && Languages === void 0 ? (_reportPossibleCrUseOfLanguages({
            error: Error()
          }), Languages) : Languages).getLanguage();
          i18n.init(language);
          i18n.updateSceneRenderers();
          var dataUser = JSON.parse(sys.localStorage.getItem(PERSONAL)); // if (dataUser == null || dataUser == undefined) {
          //     this.loadProfile();
          //   } else {
          //     // //this.loadHome();
          //     this.loadHome();
          //   }

          this.loadProfile(); // this.schedule(function() {
          //   // Here this refers to component
          // }, 5);
          // this.loadData();
        }

        update(deltaTime) {} // /***************************************LOAD DATA****************************************** */
        // /**
        // * Load toàn bộ Data cần
        // */


        loadData() {
          var data = ["vi_karmicdebt_0", "vi_karmicdebt_13", "vi_karmicdebt_14", "vi_karmicdebt_16", "vi_karmicdebt_19", "en_karmicdebt_0", "en_karmicdebt_13", "en_karmicdebt_14", "en_karmicdebt_16", "en_karmicdebt_19", "en_soul_11", "en_soul_22", "en_soul_33", "vi_soul_11", "vi_soul_22", "vi_soul_33", "en_address_11", "en_address_22", "vi_address_11", "vi_address_22", "en_period_11", "vi_period_11", "en_period_22", "vi_period_22", "en_rullingNumber_11", "en_rullingNumber_22", "vi_rullingNumber_11", "vi_rullingNumber_22"];

          for (var i = 1; i <= 9; i++) {
            var enName = "en_love_1" + i;
            var viName = "vi_love_1" + i;
            data.push(enName);
            data.push(viName);
          }

          for (var _i = 2; _i <= 9; _i++) {
            var _enName = "en_love_2" + _i;

            var _viName = "vi_love_2" + _i;

            data.push(_enName);
            data.push(_viName);
          }

          for (var _i2 = 3; _i2 <= 9; _i2++) {
            var _enName2 = "en_love_3" + _i2;

            var _viName2 = "vi_love_3" + _i2;

            data.push(_enName2);
            data.push(_viName2);
          }

          for (var _i3 = 4; _i3 <= 9; _i3++) {
            var _enName3 = "en_love_4" + _i3;

            var _viName3 = "vi_love_4" + _i3;

            data.push(_enName3);
            data.push(_viName3);
          }

          for (var _i4 = 5; _i4 <= 9; _i4++) {
            var _enName4 = "en_love_5" + _i4;

            var _viName4 = "vi_love_5" + _i4;

            data.push(_enName4);
            data.push(_viName4);
          }

          for (var _i5 = 6; _i5 <= 9; _i5++) {
            var _enName5 = "en_love_6" + _i5;

            var _viName5 = "vi_love_6" + _i5;

            data.push(_enName5);
            data.push(_viName5);
          }

          for (var _i6 = 7; _i6 <= 9; _i6++) {
            var _enName6 = "en_love_7" + _i6;

            var _viName6 = "vi_love_7" + _i6;

            data.push(_enName6);
            data.push(_viName6);
          }

          for (var _i7 = 8; _i7 <= 9; _i7++) {
            var _enName7 = "en_love_8" + _i7;

            var _viName7 = "vi_love_8" + _i7;

            data.push(_enName7);
            data.push(_viName7);
          }

          data.push("en_love_99");
          data.push("vi_love_99");

          for (var _i8 = 1; _i8 <= 9; _i8++) {
            // //Địa chỉ
            var en_address = "en_address_" + _i8;
            var vi_address = "vi_address_" + _i8;
            data.push(en_address);
            data.push(vi_address); // //Giai đoạn

            var en_period = "en_period_" + _i8;
            var vi_period = "vi_period_" + _i8;
            data.push(en_period);
            data.push(vi_period);
            var en_phone = "en_phone_" + _i8;
            var vi_phone = "vi_phone_" + _i8;
            data.push(en_phone);
            data.push(vi_phone);
            var en_rullingNumber = "en_rullingNumber_" + _i8;
            var vi_rullingNumber = "vi_rullingNumber_" + _i8;
            data.push(en_rullingNumber);
            data.push(vi_rullingNumber);
            var en_soul = "en_soul_" + _i8;
            var vi_soul = "vi_soul_" + _i8;
            data.push(en_soul);
            data.push(vi_soul);
            var en_karmicLesson = "en_karmicLesson_" + _i8;
            var vi_karmicLesson = "vi_karmicLesson_" + _i8;
            data.push(en_karmicLesson);
            data.push(vi_karmicLesson);
            var en_year = "en_year_" + _i8;
            var vi_year = "vi_year_" + _i8;
            data.push(en_year);
            data.push(vi_year);
            var en_lifePath = "en_lifepath_" + _i8;
            var vi_lifePath = "vi_lifepath_" + _i8;
            data.push(en_lifePath);
            data.push(vi_lifePath);
            var en_monthPersonal = "en_monthpersonal_" + _i8;
            var vi_monthPersonal = "vi_monthpersonal_" + _i8;
            data.push(en_monthPersonal);
            data.push(vi_monthPersonal);
            var en_daypersonal = "en_daypersonal_" + _i8;
            var vi_daypersonal = "vi_daypersonal_" + _i8;
            data.push(en_daypersonal);
            data.push(vi_daypersonal);
            var en_impresson = "en_impresson_" + _i8;
            var vi_impresson = "vi_impresson_" + _i8;
            data.push(en_impresson);
            data.push(vi_impresson);
            var en_namenumber = "en_namenumber_" + _i8;
            var vi_namenumber = "vi_namenumber_" + _i8;
            data.push(en_namenumber);
            data.push(vi_namenumber);
          }

          var bundle = assetManager.getBundle("data");
          var dataUser = JSON.parse(sys.localStorage.getItem(PERSONAL));

          if (bundle == null) {
            assetManager.loadBundle("data", (err, bundle) => {
              bundle.load(data, TextAsset, (finish, total, item) => {
                if (finish == total) {
                  if (dataUser == null || dataUser == undefined) {
                    this.loadProfile();
                  } else {
                    // //this.loadHome();
                    this.loadHome();
                  } // //console.log("done.........");

                }
              }, (err, asset) => {
                // //console.log("Load Data Finished:"+ (new Date()).toString() + "....."+asset.length);
                if (err) {// //console.log('Error url [' + err + ']');
                }
              });
            });
          } else {
            bundle.load(data, TextAsset, (finish, total, item) => {
              // //cc.log('........In-progress.....'+ finish + "/"+total );
              // //var texture: cc.Texture2D = item.content;
              // //cc.log( item.file);
              if (finish == total) {
                if (dataUser == null || dataUser == undefined) {
                  this.loadProfile();
                } else {
                  // //this.loadHome();
                  this.loadHome();
                } // //console.log("done.........");

              }
            }, (err, asset) => {
              // //console.log("Load Data Finished:"+ (new Date()).toString() + "....."+asset.length);
              if (err) {// //console.log('Error url [' + err + ']');
              }
            });
          }
        }

        loadProfile() {
          director.loadScene("Profile");
        }

        loadHome() {
          director.loadScene("Home");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b58a2d35b77a24d389ed2f17655123df565ef674.js.map