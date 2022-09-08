System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, SoundPersistRootNode;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd8485+uwhNcYjvUpps7a8N", "SoundPersistRootNode", undefined);

      __checkObsolete__(['_decorator', 'Component', 'AudioSource', 'assert', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SoundPersistRootNode", SoundPersistRootNode = (_dec = ccclass("SoundPersistRootNode"), _dec(_class = class SoundPersistRootNode extends Component {
        // @property(AudioSource)
        // _audioSource: AudioSource = null!;
        // start() {
        //   const audioSource = this.node.getComponent(AudioSource)!;
        //   assert(audioSource);
        //   this._audioSource = audioSource;
        //   // Declare the resident root node, which will not be destroyed in a scene switch. The target node must be the root node, otherwise it is invalid.
        //   //game.addPersistRootNode(this.node);
        //   director.addPersistRootNode(this.node);
        //   // init AudioManager
        //   AudioManager.initSound(this._audioSource);
        // }
        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a76326631fad2a8d5b2e1cbe1ca0434c051a6246.js.map