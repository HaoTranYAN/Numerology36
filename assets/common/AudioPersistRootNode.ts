import { _decorator, Component, AudioSource, assert, director } from "cc";
import { AudioManager } from "../common/AudioManager";

const { ccclass, property } = _decorator;

@ccclass("AudioPersistRootNode")
export class AudioPersistRootNode extends Component {
  @property(AudioSource)
  _audioSource: AudioSource = null!;
  start() {
    const audioSource = this.node.getComponent(AudioSource)!;
    assert(audioSource);
    this._audioSource = audioSource;
    // Declare the resident root node, which will not be destroyed in a scene switch. The target node must be the root node, otherwise it is invalid.
    //game.addPersistRootNode(this.node);
    director.addPersistRootNode(this.node);

    // init AudioManager
    AudioManager.init(audioSource);
  }

  update(deltaTime: number) {}
}
