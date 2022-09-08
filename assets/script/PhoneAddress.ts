import {
  _decorator,
  Component,
  Node,
  Button,
  Sprite,
  RichText,
  EditBox,
  Label,
  director,
  Prefab,
  instantiate,
  ScrollView,
  sys,
  Input,
} from "cc";

import { AudioManager } from "../common/AudioManager";
import { Languages } from "../common/Language";
import * as i18n from "db://i18n/LanguageData";
import { Constant, TypeAction } from "../common/Constant";
import { CommonTS } from "../common/CommonTS";
import { PrefabContentPhoneAddress } from "../prefab/PrefabContentPhoneAddress";
const { ccclass, property } = _decorator;

@ccclass("PhoneAddress")
export class PhoneAddress extends Component {
  @property(Button)
  btnClose: Button = null;

  @property(Button)
  btnResult: Button = null;

  @property(Sprite)
  imgPhone: Sprite = null;

  @property(Sprite)
  imgAddress: Sprite = null;

  @property(RichText)
  richTextDescription: RichText = null;

  @property(EditBox)
  edtInput: EditBox = null;

  @property(Label)
  lblWarning: Label = null;

  @property(Label)
  lblTitle: Label = null;

  @property(Label)
  lblPlaceholder: Label = null;

  @property(Prefab)
  prefabTools: Prefab = null;

  @property(Node)
  content: Node = null;

  @property(ScrollView)
  scrollView: ScrollView = null;

  @property(Prefab)
  prefabContent: Prefab = null;

  onLoad() {
    this.initLayout();
  }

  start() {}

  update(deltaTime: number) {}

  initLayout() {
    AudioManager.checkPlayMusic();

    this.hideWarning();

    var language = Languages.getLanguage();
    i18n.init(language);

    if (window["typeAction"] == TypeAction.PHONE) {
      this.edtInput.inputMode = EditBox.InputMode.NUMERIC;
      this.edtInput.maxLength = 13;
      this.lblTitle.string = i18n.t("PHONETITLE");
      this.richTextDescription.string = `<color=#ffffff>${i18n.t(
        "INTROPHONE"
      )}</color>`;
      this.lblPlaceholder.string = i18n.t("ENTERYOURPHONE");
      this.imgAddress.node.active = false;
      this.imgPhone.node.active = true;

      var mobile = sys.localStorage.getItem(Constant.MOBILE);
      if (mobile != null) {
        this.edtInput.string = mobile;
        this.addPrefabContent(this.tinhNumber(mobile), TypeAction.PHONE);
        this.scrollView.scrollToBottom(0.5);
        //  this.scrollView.scrollToPercentVertical(0.8);
      }
    } else if (window["typeAction"] == TypeAction.ADDRESS) {
      this.edtInput.inputMode = EditBox.InputMode.SINGLE_LINE;
      this.edtInput.maxLength = 12;
      this.lblTitle.string = i18n.t("ADDRESSTITLE");
      this.richTextDescription.string = `<color=#ffffff>${i18n.t(
        "INTROADDRESS"
      )}</color>`;
      this.lblPlaceholder.string = i18n.t("ENTERYOURADDRESS");
      this.imgAddress.node.active = true;
      this.imgPhone.node.active = false;

      var address = sys.localStorage.getItem(Constant.ADDRESS);
      if (address != null) {
        this.edtInput.string = address;
        this.addPrefabContent(
          CommonTS.tinhSoDiaChi(address),
          TypeAction.ADDRESS
        );
        this.scrollView.scrollToBottom(0.5);
      }
    }

    i18n.updateSceneRenderers();

    this.addPrefabTools();
  }

  checkValidate() {
    AudioManager.playSoundClick();

    var language = Languages.getLanguage();
    i18n.init(language);
    this.lblWarning.node.active = false;
    if (window["typeAction"] == TypeAction.PHONE) {
      var mobileEB = this.edtInput.string;
      var str = mobileEB.toString().split("");
      var lenMobile = str.length;
      if (mobileEB == "") {
        this.lblWarning.node.active = true;
        this.lblWarning.string = i18n.t("ERROR6");
        this.hidePrefabContent();
        return;
      } else if (lenMobile < 10) {
        this.lblWarning.node.active = true;
        this.lblWarning.string = i18n.t("ERROR6");
        this.hidePrefabContent();
        return;
      } else if (this.checkKiTuDacBiet(str, lenMobile) != -1) {
        this.lblWarning.node.active = true;
        this.lblWarning.string = i18n.t("ERROR6");
        this.hidePrefabContent();
        return;
      } else {
        let numberMobile = this.tinhNumber(this.edtInput.string);
        if (numberMobile <= 0) {
          this.lblWarning.node.active = true;
          this.lblWarning.string = i18n.t("ERROR6");
          this.hidePrefabContent();
          return;
        }
        sys.localStorage.setItem(Constant.MOBILE, this.edtInput.string);
        this.addPrefabContent(numberMobile, TypeAction.PHONE);
      }
    } else if (window["typeAction"] == TypeAction.ADDRESS) {
      var address = this.edtInput.string;
      if (address == "") {
        this.lblWarning.node.active = true;
        this.lblWarning.string = i18n.t("ERROR7");
        this.hidePrefabContent();
        return;
      } else {
        var address = address.split(" ")[0].toLowerCase();
        var numberAddress = CommonTS.tinhSoDiaChi(address);
        if (numberAddress <= 0 || isNaN(numberAddress)) {
          this.lblWarning.node.active = true;
          this.lblWarning.string = i18n.t("ERROR7");
          this.hidePrefabContent();
          return;
        }
        sys.localStorage.setItem(Constant.ADDRESS, this.edtInput.string);
        this.addPrefabContent(numberAddress, TypeAction.ADDRESS);
      }
    }
    setTimeout(() => {
      this.scrollView.scrollToPercentVertical(0.65);
    }, 15);
  }
  checkKiTuDacBiet(str, len) {
    var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]*$/;
    var index = -1;
    for (let i = 0; i < len; i++) {
      if (format.test(str[i])) {
        index = i;
        break;
      }
    }
    return index;
  }

  tinhNumber(str) {
    //console.log("tinhNumber");
    var mobileNumber = str.toString().split("");
    var format = /[0-9]+/;
    var total = 0;
    for (let i = 0; i < mobileNumber.length; i++) {
      if (format.test(mobileNumber[i])) {
        total = total + parseInt(mobileNumber[i]);
      } else {
        //kh xu ly;
      }
    }
    while (total > 9 && total != 11 && total != 22 && total != 33) {
      total = CommonTS.tinhTong(total);
    }

    return total;
  }

  addPrefabContent(number: number, type: TypeAction) {
    var nodeText = this.content.getChildByName("nodeContent");
    if (nodeText == null) {
      var nodeText = instantiate(this.prefabContent);
      nodeText.name = "nodeContent";
      this.content.insertChild(nodeText, 1);
    }
    var cell = nodeText.getComponent(PrefabContentPhoneAddress);
    cell.updateData(number, type);
  }

  hidePrefabContent() {
    var nodeText = this.content.getChildByName("nodeContent");
    if (nodeText != null) {
      nodeText.removeFromParent();
    }
  }

  addPrefabTools() {
    var node = instantiate(this.prefabTools);
    node.name = "nodeTools";
    this.content.addChild(node);
  }

  hideWarning() {
    this.lblWarning.node.active = false;
  }

  showWarning() {
    this.lblWarning.node.active = true;
  }

  loadHome() {
    AudioManager.playSoundClick();

    director.loadScene("Home");
  }
}
