/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다.
 * 
 * 
 * Primitive Type(자바스크립트의 타입을 구성하는 가장 작은 단위 )
 * 1) Number(숫자)
 * 2) String(문자열)
 * 3) Boolean(불리언 : true or false)
 * 4) Undefined(정의가 되지 않은 상태)
 * 5) null(널)
 * 6) Symbol(심볼)
 * 
 * 7) Object 객체 
 *      Function
 *      Array
 *      Object
 */




/** 
 * Number 타입
 * 
 * */ 
const age = 32;
const temperature = -10;
const pi = 3.14;

console.log(typeof(age)); // typeof는 타입 구별
console.log(typeof(temperature));
console.log(typeof(pi));
console.log('-----------');

const infinity = Infinity; // 양수의 무한대 값
const nInfinity = -Infinity; // 음수의 무한대 값

console.log(typeof(infinity));
console.log(typeof(nInfinity));
console.log('------------');

/**
 * String 타입
 * 
 */
const codeFactory = '"c"odeFactory';
console.log(typeof(codeFactory));
console.log(codeFactory);

const ive = "'anYuJin' anYuJin";
console.log(ive);

/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newline(새로운 줄) -> 글자를 다음줄로 이동하고 싶을 때(\n)
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두 번 입력하면 된다.
 */

const iveYuJin = 'iveAnYuJin'; // 일반 값 선언
const iveYuJin1 = 'ive\nAnYuJin1'; // newline 값 선언
const iveWonYoung = 'ive\tWonYoung'; // 탭 간격을 이용한 값 선언
const iveWonYoung1 = 'ive\\CodeFactory'; // 백슬래시를 표현하고 싶을 때 값 선언
const smallQutoation = 'ive\'CodeFactory'; // 문자 이어쓰기 값 선언

console.log(iveYuJin);
console.log(iveYuJin1);
console.log(iveWonYoung);
console.log(iveWonYoung1);
console.log(smallQutoation);

//위에처럼 일일히 저걸 다 외워?? 귀찮으니 생긴게 Template Literal 방식이 있다.(선언 방식은 키보드 상 tab키 위에 있음 1번 키보드 왼쪽)
//이걸 사용하면 굳이 Escaping Character를 사용할 필요x
const iveWonYoung2 = `ive
JanWonYoung`;

const iveWonYoung3 = `ive ///// //////fs 
fsf`; //Template Literal 방식 

console.log(iveWonYoung3);

const groupName ='ive';
console.log(groupName + ' AnYuJin'); // 기존 문자열 + 문자열
console.log(`${groupName} anYuJin`); // Template Literal방식 문자열



/**
 * Boolean 타입
 */

const isTrue = true;
const isFalse = false;

console.log(typeof(isTrue));
console.log(typeof(isFalse));


/**
 * Undefined 타입
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때(선언만 하고 값을 할당하지 않았을 때)
 * 
 * 직접 undefined로 값을 초기화하는건 지양해야한다.
 */
let noInit = undefined; //이렇게는 절대 안함
let noInit1; // 다 이렇게 선언함(const는 선언 안됩니다!)
console.log(noInit1);
console.log(typeof(noInit1));


/**
 * null타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값을 초기화할 때 사용된다.
 */

let init = null;
console.log(init);
console.log(typeof(init)); //null이 object타입으로 기반된것이기에. object로 인식함. 실제로는 bug!
console.log('------------');

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용한다.
 */

const test1 = '1';
const test2 = '2';

console.log(test1 === test2); // 왼쪽과 오른쪽이 같은지 비교

const test3 = '1';
const test4 = '1';

console.log(test3 === test4);

const symbol1 = Symbol('1'); //값은 보존이 되지만 유일무이한 값으로 인정? 이건 일단 보류 
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);

/**
 * Object 타입
 * 
 * Map
 * 키 : 벨류의 쌍으로 이루어진다.
 * key : value
 */

const dictionary = {
    red : 'red', 
    orange : 'orange',
    yellow : 'yellow'

};

console.log(dictionary);
console.log(dictionary['red']); // 출력하고 싶은 키를 입력하면 그에 대응하는 값이 출력된다.
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof(dictionary));

/**
 * Array 타입1
 *  
 * 값을 리스트로 나열 할 수 있는 타입이다.
 */

const iveMembersArray = [

    'anYuJin',
    'Gaul',
    'rei',
    'jangWonYoung',
    'lize',
    'leesu'
];

console.log(iveMembersArray);

/**
 * Array 타입2
 * 
 * Array 타입에는 Index라는 것이 있다.
 * 0부터 시작한다.
 * 1씩 올라간다. 
 * [0번째 1번째 2 3 4....]
 */

console.log(iveMembersArray[1]);
console.log(iveMembersArray[5]);

iveMembersArray[0] = 'codeFactory'; // 인덱스 0번째 값 변경
console.log(iveMembersArray);
console.log(typeof(iveMembersArray));


/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시를 한다.
 * java 
 * String a;
 * int b; 
 * 
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"한다. 
 * JS -> dynamic typing
 */

