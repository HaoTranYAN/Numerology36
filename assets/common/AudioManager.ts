import { assert, assetManager, AudioClip, AudioSource, log, sys } from "cc";

const SOUND = "SOUND";
const MUSIC = "MUSIC";

export class AudioManager {
  private static _audioSource?: AudioSource;
  private static _audioSourceSound?: AudioSource;

  // init AudioManager in GameRoot component.
  public static init(audioSource: AudioSource) {
    log("Init AudioManager !");
    AudioManager._audioSource = audioSource;
  }

   // init Sound in GameRoot component.
   public static initSound(audioSource: AudioSource) {
    log("Init SoundManager !");
    AudioManager._audioSourceSound = audioSource;
  }

  public static playMusic() {
    const audioSource = AudioManager._audioSource!;
    assert(audioSource, "AudioManager not inited!");

    audioSource.play();
  }

  public static isMusicOn(): boolean {
    return AudioManager._audioSource.playing;
  }

  public static checkPlayMusic() {
    if (this.getMusic() === "true" && !this.isMusicOn()) {
      this.playMusic();
    }
  }

  public static pauseMusic() {
    const audioSource = AudioManager._audioSource!;
    assert(audioSource, "AudioManager not inited!");

    audioSource.pause();
  }

  public static playSoundClick() {
    if (this.getSound() === "true") {
      this.playSound("click");
    }
  }

  public static setMusic(state: string) {
    sys.localStorage.setItem(MUSIC, state);
  }

  public static getMusic(): string {
    var sound: any = sys.localStorage.getItem(MUSIC);
    return sound ?? "true";
  }

  public static setSound(state: string) {
    sys.localStorage.setItem(SOUND, state);
  }

  public static getSound(): string {
    var sound: any = sys.localStorage.getItem(SOUND);
    return sound ?? "true";
  }

  public static playSound(name: string) {

    const audioSourceSound = AudioManager._audioSourceSound!;
    assert(audioSourceSound, "SoundManager not inited!");
    audioSourceSound.loop=false
    audioSourceSound.play();


    // const audioSource = AudioManager._audioSource!;
    // assert(audioSource, "AudioManager not inited!");

    // const path = `sound/${name}`;
    // let cachedAudioClip = AudioManager._cachedAudioClipMap[path];
    // if (cachedAudioClip) {
    //   audioSource.playOneShot(cachedAudioClip, 1);
    // } else {
    //   assetManager.resources?.load(path, AudioClip, (err, clip) => {
    //     if (err) {
    //       console.warn(err);
    //       return;
    //     }

    //     AudioManager._cachedAudioClipMap[path] = clip;
    //     audioSource.playOneShot(clip, 1);
    //   });
    // }
  }
}
