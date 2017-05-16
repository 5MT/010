'use strict';
// ���i���[�h�ɂ���B���i���[�h����������ɂȂ�\���͂���Ǝv�����A���ʂ���B

//// �ϐ�
//
// �ϐ��͌����Aconst �Ő錾����B�đ���s�B������u�֐��^�v�̃v���O�����ɂ��邽�߁B
// �đ�����ł��� let �Ő錾����̂̓J�E���^�ȂǓ���Ȃ��݂̂̂ł悳���Ǝv�������A
// ���ۂɂ� for of �������ł��i�ϐ��̕]���͈�x�����s��Ȃ��̂Łjconst �ŊԂɍ����Ă��܂��B
//
// �����񃊃e������ '' �ł� "" �ł��������A���W�J���ł��� `` ���f�t�H���g�ɂ����ق����P����������Ȃ�
// �����A��q�̃I�u�W�F�N�g���e������ key �̓��͎��ɂ́A`` ���g���ƃG���[�ɂȂ�ꍇ������̂ŁA"" ���g���̂��������낤�B
const sOasis1 = `Definitely Maybe`;
const sOasis2 = `(What's The Story) Morning Glory?`;

//// Console �I�u�W�F�N�g / �R���\�[��
//
// ���̖��O��Ԃ��璼�ڎg���� console �I�u�W�F�N�g�B
// console.log() �� node �ł͕W���o�́B
// console.time(���x��) �͌v���J�n
// console.timeEnd(���x��) �͌v�����I�����A�W���o�͂Ɍ��ʂ��o���B
console.log(`# Console object (here shows log() and time mesurement examples)`);
console.log(sOasis1);
console.time(`timer`);
console.log(`2 : ${sOasis2}`);
console.timeEnd(`timer`);
console.log(``);

//// �f�[�^�^
//
// �f�[�^�^�̈ꗗ�Atypeof ���Z�q�Ŋm�F�ł���BSymbol �͐����悭�킩��Ȃ��B
console.log(`# Data types`);
console.log(`* ${typeof `String`} ${`String`}`);
console.log(`* ${typeof 3.26+1.0} ${3.26+1.0}`);
console.log(`* ${typeof (1==2)} ${1==2}`);
console.log(`* ${typeof undefined} ${undefined}`);
console.log(`* ${typeof null} ${null}`);
console.log(`* ${typeof function(){}} ${function(){}}`);
console.log(`* ${typeof Symbol(`symTest`)} (Symbol data type was introduced in ES2015 - it's a bit difficult concept.)`);
console.log(``);

//// ���Z�q
//
// ���ӂ��K�v�Ȃ��̂����e�X�g
console.log(`# Operator`);
console.log(`* Power operator : 6 ** 2 ... (Not available in this version of node.js)`);
console.log(`* Ternary operator : (1==2) ? \`T\`:\`F\` ${(1==2) ? `T`:`F`}`);
console.log(`* Strict equal : 1===\`1\` ${1===`1`}`);
console.log(``);

//// Process �I�u�W�F�N�g / �R�}���h���C������
// argv �t�B�[���h
// �� 1 �v�f�� node �p�X
// �� 2 �v�f�͎��s���� JS �t�@�C��
// �� 3 �v�f�ȍ~�͈���
console.log(`# Process object`);
console.log(`* process.argv ${process.argv}`);
console.log(`* process.cwd() ${process.cwd()}`);
console.log(`* process.env ${process.env}`);
console.log(`* process.version ${process.version}`);
console.log(`* process.arch ${process.arch}`);
console.log(`* process.platform ${process.platform}`);
console.log(``);


//// �W���r���g�C���I�u�W�F�N�g�̗�
// 
// Array
console.log(`# Array - a Standard Built-in Object`);
const arrAlbums = [];
arrAlbums.push(`Definitely Maybe`);
arrAlbums.push(`(What's The Story?) Morning Glory`);
arrAlbums.push(`Be Here Now`);
arrAlbums.push(`Standing On The Shoulder Of Giants`);
arrAlbums.push(`Heathen Chemistry`);
arrAlbums.push(`Don't Believe The Truth`);
arrAlbums.push(`Dig Out Your Soul`);
console.log(arrAlbums);
console.log(`* length ${arrAlbums.length}`);
// for of ���������Ŕz��̗v�f�����o����
console.log(`* elements`);
for (const sEntry of arrAlbums) {
 console.log(` - ${sEntry}`);
}
// for of ���������Ŕz��̃C���f�b�N�X�Ɨv�f�̕\�����o����
console.log(`* entries (Array.entries())`);
for (const sEntry of arrAlbums.entries()) {
 console.log(` - ${sEntry}`);
}
console.log(``);
console.log(`* Spread operator`); // �X�v���b�h���Z�q�B�z���I�u�W�F�N�g���o�����Ĉ����Ȃǂ̗񋓂ɂł���
console.log(`A`,`B`,`C`);   // �Ⴆ�� console.log() �͕����̈������󂯂�ƃX�y�[�X�łȂ��ďo�͂���̂�
console.log(...arrAlbums);  // ��������Ɣz����X�y�[�X�łȂ��ďo����
console.log(``);


//// �֐�
//
console.log(`# Function`);
// �֐��̒�`
/* void */ function fncPrintPowerToTwo(x) {
 console.log(x*x);
 return;
}
// �֐��̌Ăяo��
console.log(`* Simple numeric function`);
console.log(` - put 5.0 as the argument x into the function to calculate x power to 2`);
fncPrintPowerToTwo(5.0);
console.log(` - then 7.0`);
fncPrintPowerToTwo(7.0);
// �f�t�H���g�̈����i���������Ȃ������ꍇ�̏����j�ƃ��X�g�p�����[�^�i���������������ꍇ�̏����j
// �O�҂ł� function �̉�������`�ő������B��҂́u...���������v�ŁAArray �I�u�W�F�N�g�œn�����
/* String */ function fncPrintConcatenatedStrings(str1 = `(DEFAULT 1ST ARG)`, str2 = `(DEFAULT 2ND ARG)`, ...arrRestArgs) {
 console.log(`Concatenated 1st and 2nd arguments : ${str1}----${str2}`);
 console.log(`Rest arguments : ${arrRestArgs}`);
 return;
}
console.log(`* Default arguments and rest parameters`);
fncPrintConcatenatedStrings();
fncPrintConcatenatedStrings(`John`);
fncPrintConcatenatedStrings(`John`,`Paul`);
fncPrintConcatenatedStrings(`John`,`Paul`,`George`);
fncPrintConcatenatedStrings(`John`,`Paul`,`George`,`Ringo`);
console.log(``);


//// �z�C�X�e�B���O�i�ϐ��錾�̊����グ�j
// JavaScript �ł́A�֐��錾���i�֐����ł͂Ȃ��Afunction fncName(){} ���j�̒���
// �錾����郍�[�J���ϐ��͒�`�X�R�[�v�̍ŏ��ɐ錾����������i����͕ʁj�̂ŁA
// �O���[�o���ϐ��Ɠ������O�̕ϐ����g���Ƃ��ɗ\�����Ȃ��ӂ�܂������邱�Ƃ�����B
console.log(`* Hoisting of varibles in a function scope`);
/* void */ function fncPrintHoistedVariables(){
 console.log(` - sOasis1 = ${sOasis1} : Though the global variable "sOasis1" has already been initialized...?`);
 const sOasis1 = `Familiar To Millions`;
 // ��̗�ł́A�O���[�o���ϐ� sOasis1 �������Ă��A���̃X�R�[�v���Ń��[�J���ϐ� sOasis1 ��
 // ��Ő錾 + ����������Ă���̂ŁA�錾����ɏ�������A�O���[�o���ϐ��̒l�������� Ref Error �ɂȂ�
 // console.log(` - sOasis1 = ${sOasis1} : << After the local variable "sOasis1" is initialized`);
 return;
}
try {
 fncPrintHoistedVariables();
} catch(e) {
 console.log(e);
}
console.log(``);


//// �����֐�
//
// JavaScript ������Â���Ƃ����閳���֐��B�֐��̈����Ƃ��ēn���悤�ȑΏۂ̊֐��̒�`�Ŏg���B
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions
// �֐��̈����Ɋ֐���`��n���Ƃ����P�[�X���ǂ̂悤�ȂƂ��ɂ��蓾�邩�l����ƁA
// �u�ʂ̊֐������͂����\��������v���Ƃ𓥂܂����
// �J��Ԃ��Ȃǂň����֐����Ӑ}�����p�^�[���Ŕ������鏈����g�ޏꍇ
// �i�J��Ԃ����֐��͈���Ă��A�J��Ԃ����������j���낤�ƍl������B 
console.log(`* Annonymous function`);
// ��Ƃ��āA�������Ɂi������ 1 �Ƃ�A���Ƃɂ���j�֐��I�u�W�F�N�g�A
// ���X�g�p�����^�Ɋ֐��ɐH�킹��x�N�g�����Ƃ�֐����`
/* Array */ function fncVectorApply(fncApply, ...arrVector) {
 const arrResult = [];
 for (const intIndex of arrVector.keys()) {
  arrResult.push(fncApply(arrVector[intIndex]));
 }
 return arrResult;
}
// �x�N�g�����Z�Ώۂ̊֐��́A��ň����ŗ^����̂Ŋ֐����ɂ��Ă���
const fncPowerToThree = function(x){return x*x*x;}; // ES2015 ���O�̊֐��I�u�W�F�N�g��`
const fncPowerToFour = (x)=>{return x*x*x*x;};      // ES2015 �ł̋L�@�B��{�A�֐��I�u�W�F�N�g�Œ�`�`�ꍇ�͂���ɂ��悤�B
// ���s��
console.log(` - fncPowerToThree fed into fncVectorApply ---- ${fncPowerToThree.toString()}`);
console.log(`   ${fncVectorApply(fncPowerToThree,1,2,3,4)}`);
console.log(` - fncPowerToFour fed into fncVectorApply ---- ${fncPowerToFour.toString()}`);
console.log(`   ${fncVectorApply(fncPowerToFour,1,2,3,4,5,6)}`);
console.log(` - cf. fncPowerToFour single run with the argument "1.5"`);
console.log(`   ${fncPowerToFour(1.5)}`);
console.log(``);
// �����֐��̑������s
console.log(`* Immediate run of annonymous function`);
console.log(` - (() => {return \`hahaha\`;})() --- ${(() => {return `hahaha`;})()}`);
console.log(``);


//// �W���r���g�C���I�u�W�F�N�g Array �Ă�
// ES2015 �Œǉ����ꂽ�@�\������
// Array.prototype.map(�R�[���o�b�N�֐��A���� 1) - �֐���K�p�����l�̔z���Ԃ�
console.log(`* Array.prototype.map() function`);
const fncAddExMark = (strAlbumName)=>{return `${strAlbumName} !!!`};
console.log(` - fncAddExMark single run with "Whatever" : ${fncAddExMark(`Whatever`)}`);
console.log(` - arrAlbums.map(fncAddExMark) :\n${arrAlbums.map(fncAddExMark)}`);
console.log(``);
// Array.prototype.reduce(�R�[���o�b�N�֐��A���� 2, �ŏ��ɃR�[���o�b�N�֐��̑������ɗ^���������)
// - �擪 2 �v�f�̌v�Z���ʂ� 1 �v�f�ɒu�������ėv�f�������炷�J��Ԃ��v�Z���s���A�Ō�܂Ō��炵�ăX�J���[�l��Ԃ�
console.log(`* Array.prototype.reduce() function`);
const fncAddLetterCount = (numFirst, strSecond)=>{return numFirst + strSecond.length;};
console.log(` - fncAddLetterCount single run with (5, "Whatever") : ${fncAddLetterCount(5, `Whatever`)}`);
console.log(` - arrAlbums.reduce(fncAddLetterCount, 0) :\n${arrAlbums.reduce(fncAddLetterCount,0)}`);
console.log(``);


//// �I�u�W�F�N�g
//
// �܂��̓v���p�e�B�݂̂��������I�u�W�F�N�g���쐬�����B
console.log(`* Object "skuTry" example`);
const skuTry = {
  "strSKUId" : `P234567890JQK`
 ,"strPlatformName" : `Neverland`
 ,"numYearProject" : 2015
};
console.log(` - property strSKUId ---- ${skuTry.strSKUId}`);
console.log(` - property strPlatformName ---- ${skuTry.strPlatformName}`);
console.log(` - property numYearProject ---- ${skuTry.numYearProject}`);
console.log(``);
skuTry.cfgSalesFeatures = {
  "strLCD" : `13.5`
 ,"strKeyboardLocale" : `JPN`
};
console.log(` - property inserted, cfgSalesFeatures ---- ${skuTry.cfgSalesFeatures}`);
console.log(` - property inserted, cfgSalesFeatures.strLCD ---- ${skuTry.cfgSalesFeatures.strLCD}`);
console.log(` - property inserted, cfgSalesFeatures.strKeyboardLocale ---- ${skuTry.cfgSalesFeatures.strKeyboardLocale}`);
console.log(``);
// util �R�A�I�u�W�F�N�g�E���W���[����ǂݍ��݁B
// �I�u�W�F�N�g��S�K�w�\������ɂ͒��ׂ��Ƃ��� JSON �� util �̃R�A�I�u�W�F�N�g���g�����A
// �ǂ������킯�� JSON �͐錾���Ȃ��Ă��g����B
// JSON �̏ꍇ�A���\�b�h�͏o�͂��ꂸ�A�v���p�e�B�����o�Ȃ����A
// util.inspect() �̏ꍇ function �����O�����͏o�͂���
const UTIL = require('util');
console.log(` - Showing the object by JSON.stringify() :\n${JSON.stringify(skuTry)}`);
console.log(` - Showing the object by util.inspect() :\n${UTIL.inspect(skuTry, false, null)}`);
console.log(``);
// ���\�b�h�c�c�I�u�W�F�N�g�̃t�@���N�V����
// ��ō���� skuTry �ɒǉ����Ă݂�B�����͖����֐��ł̑���ɂȂ�BThis �͎g���Ȃ�
skuTry.fncGetModel = ()=>{
 return skuTry.strSKUId.substr(0,5);
};
console.log(` - fncGetModel() method to get the first 5 letters of strSKUId : ${skuTry.fncGetModel()}`);
console.log(``);
// ���x�͍ŏ����烁�\�b�h�t���̃I�u�W�F�N�g������Ă݂�
console.log(`* Object "regionUS" example with a method from the definition`);
const regionTAIS = {
  "strRegionName" : `US`
 ,"strCountryOfHeadOffice" : `United States Of America`
 ,fncSayHello() {return `Hello. I'm ${this.strRegionName}.`}
  // this �͎g���Ă��郁�\�b�h�̒���̃I�u�W�F�N�g���w��
  // this �̓v���p�e�B�̐錾�ɂ͎g���Ȃ��B�K�����\�b�h�̒��B
 ,"arrCountries" : [`USA`,`Canada`,`Australia`]
 ,get strRegionCode() {return this.strRegionName.substr(1,1)} 
 // getter �̓v���p�e�B�̂悤��()�Ȃ��A�N�Z�X
 ,set strRegionCode(strRegionCodeInput) {this.strRegionName = `${this.strRegionName}_${strRegionCodeInput}`}
 // setter �����l�Bsetter/getter �͎��v���p�e�B�ƈˑ��֌W�̂���v���p�e�B�Ŏg�����̂��낤�B
}
console.log(` - fncSayHello() : ${regionTAIS.fncSayHello()}`);
console.log(` - ${UTIL.inspect(regionTAIS, false, null)}`);
console.log(` - strRegion Code getter : ${regionTAIS.strRegionCode}`);
regionTAIS.strRegionCode = `01`;
console.log(` - strRegionName : ${regionTAIS.strRegionName} just after set strRegionCode`);
console.log(``);

//// �������
//
// �������������̕ϐ������̂悤�Ɉ�C�ɐ錾�{�������ł���B
const [strAlbum1, strAlbum2] = arrAlbums;
console.log(`* Destructuring assignment`);
console.log(` - strAlbum1 = ${strAlbum1}`);
console.log(` - strAlbum2 = ${strAlbum2}`);
console.log(``);


//// �������򐧌�
// switch �� if
const datNow = new Date;
console.log(`* Conditional routine - Switch and If`);
console.log(` - current second = ${datNow.getSeconds()}`);
switch(datNow.getSeconds() < 30) {
 case true:
  console.log(`  + switch case 1 : Less than 30`);
  break;
 case false:
  console.log(`  + switch case 2 : More than 30`);
  break;
 default:
  break;
}
if(datNow.getSeconds()%2 === 0) {
 console.log(`  + if : Even`);
} else {
 console.log(`  + if : Odd`);
}
console.log(``);


//// Promise �̎����̂��߁A�܂��񓯊��炵���Ղ낮��ނ�p�ӂ���B
// readline ���W���[���v
const READLINE = require(`readline`);
const infReader = READLINE.createInterface({"input": process.stdin, "output": process.stdout});
infReader.setPrompt("# type 0-9 numerics. q to quit. # ");
infReader.prompt(); // �� �v�����v�g

// �ȉ��A"line" ���̓C�x���g���̃n���h���ݒ�
infReader.on(
 "line"
,
 (strInput)=>{
  if(strInput === `q`) {
   infReader.close();
  } else if(!strInput.match(/^\d{1,1}$/)) { // ���K�\���� 1 �����̐������ǂ����ŕ���B�܂��A�}�b�`���Ȃ��ꍇ
   console.log(`Type a 1 digit numeric`);
   infReader.prompt()
  } else {                                  // �}�b�`����ꍇ�B
   const strTimeCalled = fncGetTimeStringNow(); // ���ݎ����擾
   const numSecondsToWait = Number(strInput);   // ���͒l��b���ɉ���
   console.log(`${strInput}[s] to respond... Now at ${strTimeCalled}`); // ���͎����Ǝ󂯕t�����b����\��
   // �҂� + �\�����L���[�ɓ����
   setTimeout(
    ()=>{
     console.log(`\n>>> Thrown at ${strTimeCalled} with ${numSecondsToWait}[s] delay. Now at ${fncGetTimeStringNow()}`);
    }
   ,
    numSecondsToWait * 1000
   );
   //�@�҂� + �\���̃L���[�𓊂����炷���v�����v�g
   infReader.prompt();
  } // if �I���
 }  // �n���h���̊֐������I���
);

// ���p���[�`���A���̃��[�J�������̕������Ԃ��B
/* String */ function fncGetTimeStringNow(){
 const datNow = new Date;
 return `(${datNow.getTimezoneOffset()}[min])${datNow.getHours()}:${datNow.getMinutes()}:${datNow.getSeconds()}.${datNow.getMilliseconds()}`;
}

console.log(`So is this the end?`); // ���̕��� �� �v�����v�g�̒���ɏ��������
console.log(``);



