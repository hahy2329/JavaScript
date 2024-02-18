/**
 * Naming Conventions
 * 
 * 변수 이름 지을 때
 * 1) 일반적으로 영어(라틴문자)를 사용하며 문자와 숫자를 모두 사용 할 수 있다.
 * 2) 특수기호는 언더스코어(_)와 달러를 사용할 수 있다.
 * 3) 숫자로 이름을 시작 할 수 없다.
 *      1Name, 2Hello
 * 4) 키워드는 변수명으로 사용 할 수 없다.
 *      var var = 'var'; (var를 값으로 선언은 가능하나 키워드로는 불가)
 */

let codeFactory = 'codeFactory';
var $ive = 'ive';
const _yujin = 'AnYuJin';

console.log(codeFactory);
console.log($ive);
console.log(_yujin);


// let 1name = 'no'; 에러
// let const = 'attention'; 에러


/**
 * Naming Convention2
 * 
 * 1) camelCase : 첫 번째 글자는 소문자로 시작하여 하나의 단어가 끝나고 다음 단어를 이어붙일 때, 대문자로 시작
 * 2) snake_case : 소문자로만 모두 사용하고 단어 사이에 띄어쓰기가 있을 때 언더스코어로 가능(파이썬에서 주로 사용)
 * 3) PascalCase : 첫 번째 글자도 대문자로 시작함(C# 마이크로소프트 계열의 언어에서 사용 - 시각상 이쁘지 않음)
 */

const anYuJin = 'anYuJin';
console.log(anYuJin);