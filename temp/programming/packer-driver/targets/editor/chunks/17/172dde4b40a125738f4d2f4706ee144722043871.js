System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, assetManager, sys, director, i18n, Languages, _dec, _class, _crd, ccclass, property, PERSONAL, Splash;

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
          i18n.updateSceneRenderers(); // var dataUser = JSON.parse(sys.localStorage.getItem(PERSONAL));
          // if (dataUser == null || dataUser == undefined) {
          //     this.loadProfile();
          //   } else {
          //     // //this.loadHome();
          //     this.loadHome();
          //   }
          // this.schedule(function() {
          //   // Here this refers to component
          // }, 5);

          this.loadData();
          setTimeout(() => {
            this.preloadScene();
          }, 50);
        }

        preloadScene() {
          director.preloadScene("Home", function () {});
        }

        update(deltaTime) {} // /***************************************LOAD DATA****************************************** */
        // /**
        // * Load toàn bộ Data cần
        // */


        loadData() {
          var data = ["vi_karmicdebt_0", "vi_karmicdebt_13", "vi_karmicdebt_14", "vi_karmicdebt_16", "vi_karmicdebt_19", "en_karmicdebt_0", "en_karmicdebt_13", "en_karmicdebt_14", "en_karmicdebt_16", "en_karmicdebt_19", "en_soul_11", "en_soul_22", "en_soul_33", "vi_soul_11", "vi_soul_22", "vi_soul_33", "en_address_11", "en_address_22", "vi_address_11", "vi_address_22", "en_period_11", "vi_period_11", "en_period_22", "vi_period_22", "en_rullingNumber_11", "en_rullingNumber_22", "vi_rullingNumber_11", "vi_rullingNumber_22"];

          for (let i = 1; i <= 9; i++) {
            let enName = "en_love_1" + i;
            let viName = "vi_love_1" + i;
            data.push(enName);
            data.push(viName);
          }

          for (let i = 2; i <= 9; i++) {
            let enName = "en_love_2" + i;
            let viName = "vi_love_2" + i;
            data.push(enName);
            data.push(viName);
          }

          for (let i = 3; i <= 9; i++) {
            let enName = "en_love_3" + i;
            let viName = "vi_love_3" + i;
            data.push(enName);
            data.push(viName);
          }

          for (let i = 4; i <= 9; i++) {
            let enName = "en_love_4" + i;
            let viName = "vi_love_4" + i;
            data.push(enName);
            data.push(viName);
          }

          for (let i = 5; i <= 9; i++) {
            let enName = "en_love_5" + i;
            let viName = "vi_love_5" + i;
            data.push(enName);
            data.push(viName);
          }

          for (let i = 6; i <= 9; i++) {
            let enName = "en_love_6" + i;
            let viName = "vi_love_6" + i;
            data.push(enName);
            data.push(viName);
          }

          for (let i = 7; i <= 9; i++) {
            let enName = "en_love_7" + i;
            let viName = "vi_love_7" + i;
            data.push(enName);
            data.push(viName);
          }

          for (let i = 8; i <= 9; i++) {
            let enName = "en_love_8" + i;
            let viName = "vi_love_8" + i;
            data.push(enName);
            data.push(viName);
          }

          data.push("en_love_99");
          data.push("vi_love_99");

          for (let i = 1; i <= 9; i++) {
            // //Địa chỉ
            let en_address = "en_address_" + i;
            let vi_address = "vi_address_" + i;
            data.push(en_address);
            data.push(vi_address); // //Giai đoạn

            let en_period = "en_period_" + i;
            let vi_period = "vi_period_" + i;
            data.push(en_period);
            data.push(vi_period);
            let en_phone = "en_phone_" + i;
            let vi_phone = "vi_phone_" + i;
            data.push(en_phone);
            data.push(vi_phone);
            let en_rullingNumber = "en_rullingNumber_" + i;
            let vi_rullingNumber = "vi_rullingNumber_" + i;
            data.push(en_rullingNumber);
            data.push(vi_rullingNumber);
            let en_soul = "en_soul_" + i;
            let vi_soul = "vi_soul_" + i;
            data.push(en_soul);
            data.push(vi_soul);
            let en_karmicLesson = "en_karmicLesson_" + i;
            let vi_karmicLesson = "vi_karmicLesson_" + i;
            data.push(en_karmicLesson);
            data.push(vi_karmicLesson);
            let en_year = "en_year_" + i;
            let vi_year = "vi_year_" + i;
            data.push(en_year);
            data.push(vi_year);
            let en_lifePath = "en_lifepath_" + i;
            let vi_lifePath = "vi_lifepath_" + i;
            data.push(en_lifePath);
            data.push(vi_lifePath);
            let en_monthPersonal = "en_monthpersonal_" + i;
            let vi_monthPersonal = "vi_monthpersonal_" + i;
            data.push(en_monthPersonal);
            data.push(vi_monthPersonal);
            let en_daypersonal = "en_daypersonal_" + i;
            let vi_daypersonal = "vi_daypersonal_" + i;
            data.push(en_daypersonal);
            data.push(vi_daypersonal);
            let en_impresson = "en_impresson_" + i;
            let vi_impresson = "vi_impresson_" + i;
            data.push(en_impresson);
            data.push(vi_impresson);
            let en_namenumber = "en_namenumber_" + i;
            let vi_namenumber = "vi_namenumber_" + i;
            data.push(en_namenumber);
            data.push(vi_namenumber);
          }

          var bundle = assetManager.getBundle("data");
          var dataUser = JSON.parse(sys.localStorage.getItem(PERSONAL));
          var self = this;
          assetManager.loadBundle("data", (err, bundle) => {
            bundle.load(data.toString(), function (err, texture) {
              if (dataUser == null || dataUser == undefined) {
                self.loadProfile();
              } else {
                // //this.loadHome();
                self.loadHome();
              }
            });
          });
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
//# sourceMappingURL=172dde4b40a125738f4d2f4706ee144722043871.js.map