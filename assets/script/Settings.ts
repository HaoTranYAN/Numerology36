import {
  _decorator,
  Component,
  Node,
  director,
  Label,
  Sprite,
  sys,
  native,
  Button,
  SpriteFrame,
} from "cc";
const { ccclass, property } = _decorator;
import { AudioManager } from "../common/AudioManager";
import { Languages } from "../common/Language";
import * as i18n from "db://i18n/LanguageData";

@ccclass("Settings")
export class Settings extends Component {
  @property(Sprite)
  imgCheckVN: Sprite | null = null;

  @property(Sprite)
  imgCheckEN: Sprite | null = null;

  @property(Sprite)
  bgChooseLanguage: Sprite | null = null;

  @property(Label)
  lblTitleLanguage: Label | null = null;

  @property(Label)
  lblTitleVersion: Label | null = null;

  @property(Node)
  btnOnMusic: Node | null = null;

  @property(Node)
  btnOffMusic: Node | null = null;

  @property(Node)
  btnOnSound: Node | null = null;

  @property(Node)
  btnOffSound: Node | null = null;

  onLoad() {}

  start() {
    AudioManager.checkPlayMusic();
    this.initLayout();
  }

  update(deltaTime: number) {}

  initLayout() {
    this.bgChooseLanguage.node.active = false;
    this.updateLayoutMusic();
    this.updateLayoutSound();
    this.updateLayoutLanguage();
    this.loadVersionTitle();


    setTimeout(() => {
      this.preloadScene();
    }, 50);
  
  
  
    }
  
    preloadScene(){
      director.preloadScene("Home",function(){})
      director.preloadScene("Profile",function(){})
      director.preloadScene("Intro",function(){})

  
    }

  clickChangeStateMusic() {
    if (AudioManager.getMusic() === "true") {
      AudioManager.setMusic("false");

      AudioManager.pauseMusic();
    } else {
      AudioManager.setMusic("true");
      AudioManager.checkPlayMusic();
    }
    this.updateLayoutMusic();
    AudioManager.playSoundClick();
  }
  clickChangeStateSound() {
    if (AudioManager.getSound() === "true") {
      AudioManager.setSound("false");
    } else {
      AudioManager.setSound("true");
    }
    this.updateLayoutSound();
    AudioManager.playSoundClick();
  }

  updateLayoutMusic() {
    if (AudioManager.getMusic() === "true") {
      this.btnOffMusic.active = false;
      this.btnOnMusic.active = true;
    } else {
      this.btnOffMusic.active = true;
      this.btnOnMusic.active = false;
    }
  }

  updateLayoutSound() {
    if (AudioManager.getSound() === "true") {
      this.btnOffSound.active = false;
      this.btnOnSound.active = true;
    } else {
      this.btnOffSound.active = true;
      this.btnOnSound.active = false;
    }
  }

  updateLayoutLanguage() {
    var language = Languages.getLanguage();
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
    AudioManager.playSoundClick();

    var language = Languages.getLanguage();
    if (language != "vi") {
      Languages.updateLanguage("vi");
      i18n.init("vi");
      i18n.updateSceneRenderers();
      this.updateLayoutLanguage();
    }
    this.hidePopupChooseLanguage();
  }

  chooseLanguageEN() {
    AudioManager.playSoundClick();

    var language = Languages.getLanguage();
    if (language != "en") {
      Languages.updateLanguage("en");
      i18n.init("en");
      i18n.updateSceneRenderers();
      this.updateLayoutLanguage();
    }
    this.hidePopupChooseLanguage();
  }

  loadHome() {
    AudioManager.playSoundClick();

    director.loadScene("Home");
  }
  loadProfile() {
    AudioManager.playSoundClick();

    director.loadScene("Profile");
  }

  loadIntro() {
    AudioManager.playSoundClick();

    director.loadScene("Intro");
  }

  loadVersionTitle() {
    var versionName: string = "1.0.0(1)";
    if (sys.os == sys.OS.ANDROID) {
      let className = "org/cocos2dx/javascript/AppActivity";
      let methodName = "loadVersionName";
      let methodSignature = "()Ljava/lang/String;";
      versionName = native.reflection.callStaticMethod(
        className,
        methodName,
        methodSignature
      );
    } else if (sys.os == sys.OS.IOS) {
      versionName = native.reflection.callStaticMethod(
        "AppController",
        "loadVersionName:",
        "Numberlogy"
      );
    }
    this.lblTitleVersion.string = versionName;
  }

  showRate() {
    AudioManager.playSoundClick();

    if (sys.os == sys.OS.IOS)
      sys.openURL("https://apps.apple.com/us/app/id1612404166");
    else if (sys.os === sys.OS.ANDROID)
      sys.openURL(
        "https://play.google.com/store/apps/details?id=net.tuviphongthuy.numerology"
      );
  }
  showFeedback() {
    AudioManager.playSoundClick();

    if (sys.os == sys.OS.ANDROID) {
      let className = "org/cocos2dx/javascript/AppActivity";
      let methodName = "sendMailWithSubject";
      let methodSignature = "(Ljava/lang/String;Ljava/lang/String;)V";
      native.reflection.callStaticMethod(
        className,
        methodName,
        methodSignature,
        "Numerology Android Feedback",
        "apps@yan.vn"
      );
    } else if (sys.os == sys.OS.IOS) {
      var ret = native.reflection.callStaticMethod(
        "AppController",
        "sendMailWithSubject:andMail:",
        "Numerology iOS Feedback",
        "apps@yan.vn"
      );
    }
  }
  shareApp() {
    AudioManager.playSoundClick();

    // //We will add Facebook Instant share later
    // // if (typeof FBInstant === "undefined") {
    // //this.bottomNode.active = false;
    if (sys.os == sys.OS.ANDROID) {
      let className = "org/cocos2dx/javascript/AppActivity";
      let methodName = "shareApp";
      let methodSignature = "()V";
      native.reflection.callStaticMethod(
        className,
        methodName,
        methodSignature
      );
    } else if (sys.os == sys.OS.IOS) {
      var ret = native.reflection.callStaticMethod(
        "AppController",
        "shareApp:",
        ""
      );
    }
    // //  }
    // //  else {
    // //   this.node.getComponent("Share").shareFacebook();
    // // }
  }
}
