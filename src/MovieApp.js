//api 사이트가 막힘. 고로 팁으로 대신함
//js array 메소드를 이용하여 원하는 데이터 추출
//key값이 필요할 때, 고유한 값이 없을 경우, 자기 자신을 써도 됨  ex.<li key={g}>{g}</li>

/* 컴포넌트 활용 시 props 활용(부모로부터 받는 변수) ex. <Movies prop={....} /> 
function Movies({prop1,prop2,prop3,..}){}
Component 렌더링 시 key 값 반드시 필요
prop-types를 활용하여 PropTypes 체크
*/

/*react-router-dom을 이용하여 route(ex./home)에 따라 화면을 만들수 있음.
components와 routes 폴더 따로 만들기
react-router-dom의 튜토리얼을 이용 (북마크 Tools)
APP()안에 <Router>를 활용하여 링크 만들기
대부분 BrowerRouter 사용
Link Component: 컴포넌트에서 다른 컴포넌트로 "재실행 없이" 이동하게 해주는 컴포넌트(React.js의 장점 활용 가능)
=> 컴포넌트 안에서 <a href="/"></a>대신 사용(rerendering 방지)
동적 경로(/:id)만들기 => 부모컴포넌트로부터 id 변수를 props로 받아와 Link를 활용한다.
url의 id값(변경되는 값) 받기 => useParams() #7.6 5:40
 */

/* npm i gh-pages
웹사이트로 만들어서 무료로 만들어줌. 사용법 : #7.7 2:40
npm run build 실행 시 production ready => 코드가 압축되고 모든게 최적화 됨 => bulid 폴더 생성
*/

//JS String은 array method 사용 가능!!
