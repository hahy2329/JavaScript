/**
 * Variable 선언하기(변수)
 * 
 * 1) var - 더이상 쓰지 않는다.(여기 강의에서는 자주 쓰일 것), 프로젝트에서는 let과 const를 많이 씀
 * 2) let
 * 3) const
 */

var fff = 'codeFactory';
console.log(fff);

var age = 32;
console.log(age);

let ive = 'ive';
console.log(ive);

/**
/* let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */

ive = 'AnYuJin';
console.log(ive);

const newJeans = 'NewJeans';
console.log(newJeans);

// newJeans = '코드팩토리';  const는 한 번 선언하면 값을 변경할 수 없다.

/**
 * 선언과 할당
 * 
 * 1) 선언: 변수를 선언하는 것.
 * 2) 할당 : 변수에 값을 넣는 것.
 */
var name; // 선언(변수의 이름을 선언)
var fsf = 'codeFactory'; //할당(변수에 값을 할당)
console.log(fsf);

let girlFriend; 
console.log(girlFriend); // 출력물이 undefined롤 나오는데 이는 값이 선언되지 않았다라는 뜻

 // const girlFriend2; const는 변수에 값이 선언된 상태에서 진행해야 한다. undefined로 선언이 불가함.

