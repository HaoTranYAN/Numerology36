import {
  _decorator,
  Component,
  Node,
  Label,
  assetManager,
  sys,
  TextAsset,
  AssetManager,
  director,
} from "cc";
const { ccclass, property } = _decorator;
const PERSONAL = "DataUser";
import * as i18n from "db://i18n/LanguageData";
import { AudioManager } from "../common/AudioManager";
import { Languages } from "../common/Language";

@ccclass("Splash")
export class Splash extends Component {
  start() {
    var language = Languages.getLanguage();
    i18n.init(language);
    i18n.updateSceneRenderers();

    // var dataUser = JSON.parse(sys.localStorage.getItem(PERSONAL));
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
  }

  update(deltaTime: number) {}

  // /***************************************LOAD DATA****************************************** */
  // /**
  // * Load toàn bộ Data cần
  // */
  loadData() {
    var data: Array<string> = [
      "vi_karmicdebt_0",
      "vi_karmicdebt_13",
      "vi_karmicdebt_14",
      "vi_karmicdebt_16",
      "vi_karmicdebt_19",
      "en_karmicdebt_0",
      "en_karmicdebt_13",
      "en_karmicdebt_14",
      "en_karmicdebt_16",
      "en_karmicdebt_19",
      "en_soul_11",
      "en_soul_22",
      "en_soul_33",
      "vi_soul_11",
      "vi_soul_22",
      "vi_soul_33",
      "en_address_11",
      "en_address_22",
      "vi_address_11",
      "vi_address_22",
      "en_period_11",
      "vi_period_11",
      "en_period_22",
      "vi_period_22",
      "en_rullingNumber_11",
      "en_rullingNumber_22",
      "vi_rullingNumber_11",
      "vi_rullingNumber_22",
    ];
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
      data.push(vi_address);
      // //Giai đoạn
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

    if (bundle == null) {
      assetManager.loadBundle("data", (err, bundle) => {
        bundle.loadDir(data.toString(), TextAsset, function (err, texture) {
          if (dataUser == null || dataUser == undefined) {
            self.loadProfile();
          } else {
            // //this.loadHome();
            self.loadHome();
          }        });
      });
    } else {
        bundle.loadDir(data.toString(), TextAsset, function (err, texture) {
          ////console.log(texture)
          if (dataUser == null || dataUser == undefined) {
            self.loadProfile();
          } else {
            // //this.loadHome();
            self.loadHome();
          }        });
    }
    
    
  }

  loadProfile() {
    director.loadScene("Profile");
  }

  loadHome() {
    director.loadScene("Home");
  }
}
