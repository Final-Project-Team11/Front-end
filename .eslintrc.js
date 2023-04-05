// .eslintrc.js
module.exports = {
  root: true,
  // env는 사전 정의된 전역 변수 사용을 정의한다.
  // 당연한 얘기지만 browser, node 설정을 하지 않을경우 console,require 같은 사전 정의된 전역변수 환경에 있는 static 메서드를 인식할 수 없어서 에러가 발생한다.
  env: {
    browser: true,
    node: true,
  },
  // extends는 추가한 플러그인에서 사용할 규칙을 설정한다.
  // 플러그인은 일련의 규칙 집합이며, 플러그인을 추가하여도 규칙은 적용되지 않는다.
  // 규칙을 적용하기 위해서는 추가한 플러그인 중, 사용할 규칙을 추가해주어야 적용이 된다.
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  // Plugin 목록
  plugins: ['prettier', '@typescript-eslint'],
  // ESLint에는 프로젝트에서 사용하는 규칙을 수정할 수 있다.
  rules: {
    // Prettier 설정
    'prettier/prettier': [
      'error', // 밑에 내용들을 안 하면 error를 표시해준다.
      {
        singleQuote: true, // 따옴표는 홑따옴표를 사용한다.
        semi: true, // 모든 구문에 세미콜론을 붙인다.
        useTabs: false, // Tab을 사용 안 한다.
        tabWidth: 2, // 들여쓰기 할 때, 기본 폭을 설정한다.
        printWidth: 90, // 한 줄에서 wrap 이 되는 기준의 글자 수를 정한다.
        bracketSpacing: true, // 객체 리터럴의 괄호 사이에 공백을 출력
        arrowParens: 'avoid', // 화살표 함수에서 단일 파라미터에 괄호를 붙일지("always") 말지("avoid")에 대한 여부를 결정한다.
      },
    ],
  },
  // parserOptions은 ESLint 사용을 위해 지원하려는 Javascript 언어 옵션을 지정할 수 있습니다.
  parserOptions: {
    // Typescript 구문 분석을 위해 사용되는@typescript-eslint/parser
    parser: '@typescript-eslint/parser',
  },
};
