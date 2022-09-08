System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, resources, TextAsset, _dec, _class, _descriptor, _crd, ccclass, property, CommonTS;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      resources = _cc.resources;
      TextAsset = _cc.TextAsset;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e8581z3l5BP5LgYg9QHAggy", "CommonTS", undefined);

      __checkObsolete__(['_decorator', 'Component', 'resources', 'AssetManager', 'TextAsset']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CommonTS", CommonTS = (_dec = property([]), (_class = class CommonTS {
        constructor() {
          _initializerDefineProperty(this, "array_Name", _descriptor, this);
        }

        static isNamNhuan(year) {
          if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            return true;
          }

          return false;
        }

        static tinhSoNgayTrongThang(month, year) {
          var numOfDay = 0;

          switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
              numOfDay = 31;
              break;

            case 2:
              if (this.isNamNhuan(year)) {
                numOfDay = 29;
              } else {
                numOfDay = 28;
              }

              break;

            case 4:
            case 6:
            case 9:
            case 11:
              numOfDay = 30;
              break;

            default: // // code block

          }

          return numOfDay;
        }

        static isHopLe(day, month, year) {
          var flag = -1;

          if (month < 1 || month > 12) {
            flag = 2;
          } else {
            if (day < 1 || day > this.tinhSoNgayTrongThang(month, year)) {
              flag = 1;
            }
          }

          if (year < 1799) {
            flag = 3;
          }

          return flag;
        }

        static tinhPersonalDay(personal, date) {
          var day = personal.dayOfBirth;
          var month = personal.monthOfBirth;
          var dateYear = date.getFullYear();
          var yearCurrent = this.tinhTong(dateYear);
          var namCaNhan = yearCurrent + day + month; // // namCaNhan = this.rutGonSo(namCaNhan, 9);

          var thangCaNhan = namCaNhan + this.rutGonSo(date.getMonth(), 9);
          var ngayCaNhan = thangCaNhan + this.rutGonSo(date.getDay(), 9);

          while (namCaNhan > 9 && namCaNhan != 11) {
            namCaNhan = this.tinhTong(namCaNhan);
          }

          var personalDay = {
            yearForecast: namCaNhan,
            monthForecast: this.rutGonSo(thangCaNhan, 9),
            dayForecast: this.rutGonSo(ngayCaNhan, 9)
          };
          return personalDay;
        }

        static tinhNgayThangNam(day, month, year) {
          var result = {
            day: this.tinhTong(day),
            month: this.tinhTong(month),
            year: this.tinhTong(year)
          };
          return result;
        }

        static rutGonSo(number, value) {
          var numberRutGon = this.tinhTong(number); // ////console.log("number: " + numberRutGon);

          if (number > value) {
            numberRutGon = this.tinhTong(numberRutGon);

            if (numberRutGon > value) {
              numberRutGon = this.tinhTong(numberRutGon);
            }
          }

          return numberRutGon;
        }

        static tinhTong(number) {
          var str = number.toString();
          var len = str.length;
          var total = 0;

          for (var i = 0; i < len; i++) {
            total = parseInt(str[i]) + total;
          }

          return total;
        }

        static tinhSoTheoTen(str) {
          var impressionNumber = 0;
          var total = 0;
          var totalSoul = 0;
          var groupNA = /[a, e, i, o,u]+/;
          str = str.split(" ");
          var len = str.length;

          for (var i = 0; i < len; i++) {
            var strChild = str[i];

            for (var j = 0; j < strChild.length; j++) {
              var number = this.setNumberType(strChild[j]);

              if (this.checkGroup(strChild[j], groupNA) == false) {
                total = total + number;
              } else if (strChild[j] == "y") {
                var indexF = j - 1;
                var indexB = j + 1;

                if (indexF >= 0) {
                  if (this.checkGroup(str[indexF], groupNA) == false) {
                    // ////console.log("phu am");
                    total = total + number;
                  } else {
                    if (indexB <= len) {
                      if (this.checkGroup(str[indexF], groupNA) == false) {
                        total = total + number;
                      } else {
                        totalSoul = totalSoul + number;
                      }
                    } else {
                      totalSoul = totalSoul + number;
                    }
                  }
                }
              } else {
                totalSoul = totalSoul + number;
              }
            }
          } // // console.log(totalSoul);


          impressionNumber = this.conculatorNumberTotal(total);

          while (totalSoul > 9) {
            totalSoul = this.tinhTong(totalSoul);
          }

          var indexByName = {
            soulNumber: totalSoul,
            impressionNumber: impressionNumber,
            soul: totalSoul,
            impression: impressionNumber
          }; // ////console.log(indexByName);

          return indexByName;
        }

        static tinhNameDestiny(str) {
          var number = 0; // // console.log(str);

          str = str.split(" ");
          var len = str.length;
          var total = 0;

          for (var i = 0; i < len; i++) {
            for (var j = 0; j < str[i].length; j++) {
              total = total + this.setNumberType(str[i][j]);
            } // // total = total + this.conculatorNumberName(str[i]);
            // // console.log("total: " + total);

          }

          number = this.conculatorNumberName(total);
          return number;
        }

        static conculatorNumberName(number) {
          if (number == 11 || number == 22 || number == 33) {} else {
            while (number > 9 && number != 11 && number != 22 && number != 33) {
              number = this.tinhTong(number);
            }
          }

          return number;
        }

        static tinhSoDiaChi(address) {
          var str = address.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").split("");
          var total = 0;
          var len = str.length;

          for (var i = 0; i < len; i++) {
            var number = parseInt(str[i]);

            if (isNaN(number)) {
              number = this.setNumberType(str[i]);
            }

            total = total + number;
          } // // //console.log("total: " + total);


          if (total > 9) {
            // ////console.log("hello");
            if (total == 11 || total == 22) {} else {
              // ////console.log("< 22");
              total = this.rutGonSo(total, 9);
            }
          }

          if (len == 2) {
            // ////console.log("string.." + address);
            if (address == "11" || address == "22") {
              total = parseInt(address); // ////console.log(total);
            }
          } // //console.log(total);


          return total;
        } // // tinhSDT(str) {
        // //   str = str.split("");
        // //   var number = 0;
        // //   var format = /[0-9]+/;
        // //   var len = str.length;
        // //   for (let i = 0; i < len; i++) {
        // //       if(this.checkGroup(str, format) == false) {
        // //         number = number + parseInt(str[i]);
        // //       }
        // //   }
        // //   while (number > 9 && number != 11 && number != 22 && number != 33) {
        // //     number = this.tinhTong(number);
        // //   }
        // //   return number;
        // // }


        static setNumberType(text) {
          var group1 = /[a, j , s]+/;
          var group2 = /[b, k , t]+/;
          var group3 = /[c, l , u]+/;
          var group4 = /[d, m , v]+/;
          var group5 = /[e, n , w]+/;
          var group6 = /[f, o , x]+/;
          var group7 = /[g, p , y]+/;
          var group8 = /[h,q, z]+/;
          var group9 = /[i, r]+/;
          var number = 0;

          if (group1.test(text)) {
            number = 1;
          }

          if (group2.test(text)) {
            // ////console.log("Yes B");
            number = 2;
          }

          if (group3.test(text)) {
            number = 3;
          }

          if (group4.test(text)) {
            number = 4;
          }

          if (group5.test(text)) {
            number = 5;
          }

          if (group6.test(text)) {
            number = 6;
          }

          if (group7.test(text)) {
            number = 7;
          }

          if (group8.test(text)) {
            number = 8;
          }

          if (group9.test(text)) {
            number = 9;
          } // // //console.log("test: " + number);


          return number;
        }

        static checkGroup(str, format) {
          if (format.test(str)) {
            // //Có chứa phần tử
            return false;
          }

          return true;
        }

        static tinhSoChuDao(dataUser) {
          var number = this.tinhTong(dataUser.dayOfBirth.toString() + dataUser.monthOfBirth.toString() + dataUser.yearOfBirth.toString());

          while (number > 10 && number != 11 && number != 22) {
            number = this.tinhTong(number);
          }

          return number;
        }

        static tinhSoDuongDoi(dataUser) {
          var day = this.conculatorNumberTotal(dataUser.dayOfBirth);
          var month = this.conculatorNumberTotal(dataUser.monthOfBirth);
          var year = this.conculatorNumberTotal(dataUser.yearOfBirth);
          var number = day + month + year;
          number = this.conculatorNumberTotal(number);
          return number;
        }

        static conculatorNumberTotal(number) {
          // // console.log("conculatorNumberTotal: " + number);
          if (number == 11 || number == 22) {} else {
            while (number > 9 && number != 11 && number != 22) {
              number = this.tinhTong(number);
            }
          }

          return number;
        }

        static tinhGiaiDoan(personal) {
          var month = personal.monthOfBirth.toString();
          var day = personal.dayOfBirth.toString();
          var year = personal.yearOfBirth.toString();
          var gd1 = this.tinhPeriod(month);
          var gd2 = this.tinhPeriod(day);
          var gd3 = this.tinhPeriod(year);
          var period = {
            gd1: gd1,
            gd2: gd2,
            gd3: gd3
          }; // ////console.log(period);

          return period;
        }

        static tinhPeriod(number) {
          var str = number.split("");
          var len = str.length;
          var total = 0;

          for (var i = 0; i < len; i++) {
            total = parseInt(str[i]) + total;
          }

          if (total > 9) {
            if (total == 11 || total == 22) {} else {
              total = this.rutGonSo(this.tinhTong(number), 9);
            }
          }

          return total;
        }

        static karmicDebt(personal) {
          var array_KarmicDebt = []; // //case 1: Tính theo ngày tháng sinh

          var total = "" + personal.dayOfBirth + personal.monthOfBirth;
          var result = this.checkKarmicDebt(this.tinhTong(total));

          if (this.pushKarmicDebt(result, array_KarmicDebt)) {
            array_KarmicDebt.push(result);
          } // //Case 2: Tính theo ngày - tháng - năm


          total = total + personal.yearOfBirth;
          result = this.checkKarmicDebt(this.tinhTong(total));

          if (this.pushKarmicDebt(result, array_KarmicDebt)) {
            array_KarmicDebt.push(result);
          } // //Case 3: Tính theo số ngày sinh


          if (this.pushKarmicDebt(personal.dayOfBirth, array_KarmicDebt)) {
            array_KarmicDebt.push(personal.dayOfBirth);
          } // //Case 4: Tính theo soul number và expression number
          // // console.log(personal);


          var totalText = 0;
          var totalName = 0;
          var groupNA = /[a, e, i, o,u]+/;
          var str = personal.nameText.split(" ");
          var len = str.length;

          for (var i = 0; i < len; i++) {
            var strChild = str[i];

            for (var j = 0; j < strChild.length; j++) {
              var number = this.setNumberType(strChild[j]);
              totalName = totalName + number; // // console.log(number);

              if (this.checkGroup(strChild[j], groupNA)) {
                totalText = totalText + number;
              }
            }
          } // //console.log(totalText);


          if (this.pushKarmicDebt(totalText, array_KarmicDebt)) {
            array_KarmicDebt.push(totalText);
          }

          if (this.pushKarmicDebt(totalName, array_KarmicDebt)) {
            array_KarmicDebt.push(totalName);
          } // // console.log(totalText);
          // // console.log(array_KarmicDebt);


          return array_KarmicDebt;
        }

        static pushKarmicDebt(total, array) {
          var result = this.checkKarmicDebt(total);
          var flag = true;

          if (result != -1) {
            if (this.checkPtTrung(result, array) == false) {
              flag = false;
            }
          } else {
            flag = false;
          }

          return flag;
        }

        static checkKarmicDebt(number) {
          var group = [13, 14, 16, 19];
          var flag = -1;

          if (this.checkPtTrung(number, group) == false) {
            flag = number;
          }

          return flag;
        }

        static checkPtTrung(pt, array) {
          var len = array.length;
          var flag = true;

          for (var i = 0; i < len; i++) {
            if (pt == array[i]) {
              flag = false;
              break;
            }
          }

          return flag;
        }

        static karmicLesson(fullName) {
          var fullName = fullName.split("");
          var array_Name = [];
          var len = fullName.length;

          for (var i = 0; i < len; i++) {
            var number = this.setNumberType(fullName[i]);
            array_Name.push(number);
          }

          array_Name = array_Name.sort(function (a, b) {
            return a - b;
          });
          var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          var result = [];
          var lenArr = arr.length;

          for (var _i = 0; _i < lenArr; _i++) {
            if (this.checkPtTrung(arr[_i], array_Name)) {
              result.push(arr[_i]);
            }
          }

          return result;
        }

        static loadText(url) {
          var data = [];

          for (var i = 1; i <= 9; i++) {
            var name = url + i;
            data.push(name);
          }

          resources.preload(data, TextAsset, (finish, total, item) => {// ////console.log("Preload...."+ finish+" / "+ total);
          }, (error, items) => {// ////console.log("Finish preload....");
          });
        } // // update (dt) {}


      }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "array_Name", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class)));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dfda539e498822c0b275c5e3f9b11488f39725a2.js.map