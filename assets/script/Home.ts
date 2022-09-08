import {
  _decorator,
  Component,
  Node,
  Label,
  director,
  sys,
  Prefab,
  instantiate,
} from "cc";
const { ccclass, property } = _decorator;

import { AudioManager } from "../common/AudioManager";

import { Constant, TypeAction } from "../common/Constant";

@ccclass("Home")
export class Home extends Component {
  @property(Label)
  lblFullName: Label = null;

  @property(Label)
  lblDateOfBirth: Label = null;

  @property(Node)
  imgFemale: Node = null;

  @property(Node)
  imgMale: Node = null;

  @property(Node)
  content: Node = null;

  @property(Prefab)
  prefabTools: Prefab = null;

  @property(Prefab)
  prefabMainNumbers: Prefab = null;

  onLoad() {
    this.resetValueWindow();
    this.initLayout();
  }

  initLayout() {
    var dataUser = JSON.parse(sys.localStorage.getItem(Constant.PERSONAL));
    // ////console.log("Profile......");
    if (dataUser == undefined || dataUser == null) {
      // //return;
    } else {
      this.lblFullName.string = dataUser.fullName;
      this.lblDateOfBirth.string = `${parseInt(dataUser.dayOfBirth)}/${parseInt(
        dataUser.monthOfBirth
      )}/${parseInt(dataUser.yearOfBirth)}`;

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
    AudioManager.checkPlayMusic();
  }

  update(deltaTime: number) {}

  resetValueWindow() {
    window["typeAction"] = TypeAction.NONE;
  }

  loadProfile() {
    AudioManager.playSoundClick();

    director.loadScene("Profile");
  }

  loadSettings() {
    AudioManager.playSoundClick();

    director.loadScene("Settings");
  }
}
