import { _decorator, Component, Node, Enum } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('Constant')
export class Constant  {
   
    public static PERSONAL = "DataUser";
    public static MOBILE = "Mobile";
    public static ADDRESS = "Address";
    public static PERSONAL2 = "DataUser2";

}


 export enum TypeAction {
    NONE =0,
    LOVE =1,
    PHONE =2,
    ADDRESS =3,
    LIFE_PATH =4,
    RULING_NUMBER= 5,
    DESTINY =6,
    PERSONAL_YEAR =7,
    PERIOD_CYCLE = 8,
    KARMIC_DEBT =9,
    PERIOD1=10,
    PERIOD2=11,
    PERIOD3=12,

  }


  export enum TypeActionForecast {
    PRE =1,
    NEXT =2
  }
