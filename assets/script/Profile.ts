import {
  _decorator,
  Component,
  assert,
  AudioSource,
  Node,
  Label,
  EditBox,
  sys,
  director,
  Button,
  game,
  EventHandler,
  ToggleContainerComponent,
  ToggleComponent,
  Sprite,
} from "cc";
const { ccclass, property } = _decorator;

import { AudioManager } from "../common/AudioManager";
import * as i18n from "db://i18n/LanguageData";
import { CommonTS } from "../common/CommonTS";
import { Constant } from "../common/Constant";

@ccclass("Profile")
export default class Profile extends Component {
  @property(ToggleComponent)
  rdMale: ToggleComponent = null;

  @property(ToggleComponent)
  rdFemale: ToggleComponent = null;

  @property(Node)
  imgFemale: Node = null;

  @property(Node)
  imgMale: Node = null;

  @property(EditBox)
  edtFullName: EditBox = null;

  @property(EditBox)
  edtDay: EditBox = null;

  @property(EditBox)
  edtMonth: EditBox = null;

  @property(EditBox)
  edtYear: EditBox = null;

  @property(Label)
  lblError: Label = null;

  @property(Button)
  btnClose: Button = null;

  @property(Button)
  btnSignOut: Button = null;

  sex: number = 0;

  onLoad() {
    this.initLayout();
  }

  start() {
    AudioManager.checkPlayMusic();
  }

  update(deltaTime: number) {}

  initLayout() {
    this.lblError.node.active = false;

    var dataUser = JSON.parse(sys.localStorage.getItem(Constant.PERSONAL));

    // ////console.log("Profile......");
    if (dataUser == undefined || dataUser == null) {
      this.btnClose.node.active = false;
      this.btnSignOut.node.active = false;
      this.imgFemale.active = false;
      this.imgMale.active = true;
      this.rdMale.isChecked = true;
      this.sex = 0;

      this.edtFullName.string = "";
      this.edtDay.string = "";
      this.edtMonth.string = "";
      this.edtYear.string = "";
      // //return;
    } else {
      this.btnClose.node.active = true;
      this.btnSignOut.node.active = true;

      this.edtFullName.string = dataUser.fullName;
      this.edtDay.string = parseInt(dataUser.dayOfBirth)+"";
      this.edtMonth.string = parseInt(dataUser.monthOfBirth)+"";
      this.edtYear.string = parseInt(dataUser.yearOfBirth)+"";

      if (dataUser.sex == 0) {
        this.rdMale.isChecked = true;
        this.imgFemale.active = false;
        this.imgMale.active = true;
      } else {
        this.rdFemale.isChecked = true;
        this.imgFemale.active = true;
        this.imgMale.active = false;
      }
    }


    setTimeout(() => {
      this.preloadScene();
    }, 50);
  
  
  
    }
  
    preloadScene(){
      director.preloadScene("Home",function(){})
  
  
    }

  callback(event: Event, customEventData: string) {
    AudioManager.playSoundClick();

    // The event here is a Touch Event object, and you can get the send node of the event by event.target
    // The customEventData parameter here is equal to the "foobar" you set before
    if (this.rdMale.isChecked === true) {
      this.imgMale.active = true;
      this.imgFemale.active = false;
      this.sex = 0;
    } else {
      this.imgMale.active = false;
      this.imgFemale.active = true;
      this.sex = 1;
    }
  }

  validateInfo() {
    AudioManager.playSoundClick();

    this.lblError.node.active = false;

    var d = this.edtDay.string;
    var m = this.edtMonth.string;
    var y = this.edtYear.string;
    var name = this.edtFullName.string;

    if (name == "") {
      this.lblError.node.active = true;
      this.lblError.string = i18n.t("ERROR10");
      return;
    } else if (d == "") {
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
    return CommonTS.isHopLe(day, month, year);
  }

  saveDataInfo(nameText, fullname, dayOfBirth, monthOfBirth, yearOfBirth) {
    var dataUser = {
      sex: this.sex,
      nameText: nameText,
      fullName: fullname,
      dayOfBirth: dayOfBirth,
      monthOfBirth: monthOfBirth,
      yearOfBirth: yearOfBirth,
    };
    // ////console.log("Data..........." + dataUser.dayOfBirth + "/" + dataUser.monthOfBirth + "/" + dataUser.yearOfBirth);
    sys.localStorage.setItem(Constant.PERSONAL, JSON.stringify(dataUser));
  }

  nextScreen() {
    var dataUser = JSON.parse(sys.localStorage.getItem(Constant.PERSONAL));
    if (dataUser == undefined || dataUser == null) {
      this.lblError.node.active = true;
      this.lblError.string = i18n.t("ERROR1");
      return;
    } else {
      this.loadHome();
    }
  }

  loadHome() {
    director.loadScene("Home");
  }

  exitScreen() {
    AudioManager.playSoundClick();

    this.loadHome();
  }

  clickSignOut() {
    AudioManager.playSoundClick();
    sys.localStorage.setItem(Constant.PERSONAL, JSON.stringify(null));
    this.edtFullName.string = "";
    this.edtDay.string = "";
    this.edtMonth.string = "";
    this.edtYear.string = "";
    this.btnClose.node.active = false;
    this.lblError.node.active = false;
    this.btnSignOut.node.active = false;
  }
  checkIsNumber(str: string) {
    var format = /[0-9]+/;
    var result = str.toString().split("");
    var len = result.length;
    var index = -1;
    for (let i = 0; i < len; i++) {
      if (format.test(result[i]) == false) {
        index = i;
      }
    }
    return index;
  }

  removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // // Some system encode vietnamese combining accent as individual utf-8 characters
    // // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // // Remove extra spaces
    // // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // // Remove punctuations
    // // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      " "
    );
    return str;
  }
}
