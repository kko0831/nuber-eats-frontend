# Nuber Eats Frontend

## 14.0 Create React App

프론트엔드를 만듦

create react app을 사용함

typescript도 미리 셋업됨

터미널에 npx create-react-app nuber-eats-frontend --template=typescript 입력함

create react app은 template들을 가지고 있음

typescript code를 쓸 수 있게 설치됨

TS configure 등을 다 포함함

설치가 끝난 다음에 nuber-eats-frontend로 들어가고, 터미널에 git remote add origin https://github.com/kko0831/nuber-eats-frontend.git 입력
 
git repository가 잘 만들어짐

예를 들어 tsconfig 파일이 있음

test 파일도 있음

index.ts 파일도 있고 reportWebVitals()라는게 들어있는데 analytics와 관련됨

setUpTests도 있음

cannot use JSX라는 버그가 뜬다면 TS config로 가서 react-jsx를 react로 바꿔주기만 하면 됨

새 버전이라 버그가 뜨는 것 같음

파일들을 몇 개 좀 삭제할건데 그 전에 일단 잘 돌아가는지부터 봄

터미널에 npm run start 입력함

create react app react-scripts에 버그가 있음

에러들이 떴다면 node_modules를 삭제하고, 재설치 해야함

node_modules를 삭제하고, react-scripts에 바꾼 버전의 node_modules를 재설치함

터미널에 npm i 입력하여 수정된 버전의 create react app을 재설치함

package.json 파일을 수정하고 터미널에 npm i 입력 했을 때 ERESOLVE unable to resolve dependency tree 에러 발생 -> npm i --legacy-peer-deps를 입력하여 해결

파일 삭제를 좀 하고, 나머지 몇 가지를 재설치함

## 14.1 TailwindCSS part One

create react app이 잘 작동함

Tailwind CSS로 작업함

Nomad Coders 웹사이트에 있는 거의 모든 것은 Tailwind CSS를 사용함

Tailwind CSS는 utility-first framework임

Tailwind는 엄청 긴 CSS file임

클래스들을 HTML에 조합해서 원하는 결과를 얻어냄

width에 대한 클래스들도 있음

w- 뒤에 숫자를 붙이면 알맞은 사이즈를 줌

bg-red-50 같은 클래스를 이용하면, red 50인 색깔이 나옴

container도 클래스로 이루어져있음

grid, grid-cols-2, gap-4는 2개의 columns와 4만큼의 gap을 가진 grid container임

일일이 CSS를 수작업할 필요가 없음

Tailwind의 장점은 정형화된 룩이 없음

예를 들어 다른 프레임워크, 부트스트랩 같은 거는 딱 눈에 띄는 생김새가 있음

Tailwind CSS는 어떤 프레임워크도 사용하지 않은 것처럼 그냥 오리지널 CSS로 만든 것 같음

특유의 룩이 애초에 없음

조합할 수 있는 여러 개의 클래스들이 딸려올 뿐임

마지막에 사용하지 않는 클래스의 이름은 빼버릴 수 있음

CSS 파일이 너무 커질까봐 걱정할 수도 있음

실제로도 개발 중에는 전체 파일이 엄청 크기도 하고, 최종 production에서는 매우 작게 만들 수 있음

tailwind는 이미 반응형 기능이 내장되어있음

span은 small screen에서는 hidden이지만 medium screen에서는 inline임

hover states도 있음

누가 group에 hover하면 text-white로 바뀜

react를 위한 기능들도 있음

react에 쓰기에도 참 편리함

클래스 이름을 지정해야함

즉각적인 다크모드 적용은 덤임

dark:text-white라고 써주면 됨

dark는 variant임

CSS할 때 정말 유용함

Grid에도 정말 쉬움

CSS 코드를 전혀 작성할 필요없고, transform도 가능함

수많은 클래스 이름을 가지고 하면 됨

bg-gradient-to-br green-400에서 cyan-500으로 그라데이션을 넣음

br은 bottom, right(오른쪽 아래로)라는 뜻임

Tailwind CSS를 쓰기 위해 해야 할 일은 Tailwind CSS를 설치하는 것임

터미널에 npm install tailwindcss@2.0.1 입력

Visual Studio code extensions로 가서 Brad Cornes라는데서 제공한 Tailwind CSS intelliSense를 찾아서 설치해야함

Tailwind CSS intellisense는 클래스 이름 자동완성 기능이 있음

extension이 있으니 편리하게 쓸 수 있음

사용 가능한 class 이름들을 보여줌

Tailwind CSS는 node.js 버전 12 이상에서만 됨

Tailwind에 대해서 에러가 생긴다면 대부분 버전이 낮아서 생긴 문제임

## 14.2 TailwindCSS part Two

아직 Tailwind 셋업이 안 끝남

CSS 파일들을 다 삭제함

logo도 삭제함

references들도 다 지움

reportWebVitals는 남겨두고, setUpTests도 나중에 필요하니까 남겨둠

Tailwind는 클래스 이름을 CSS로 encapsulate하는 기능도 제공함

클래스 이름들을 다 HTML에 넣고 싶지 않다면, CSS 안에 클래스 이름을 만들어서 다른 클래스 이름들을 적용(apply)함

Tailwind가 CSS 파일을 보고 실제 클래스의 내용으로 대체함

btn은 실제 클래스임

text-base 클래스, font-medium 클래스, rounded-lg 클래스, p-3 클래스를 CSS에 캡슐화(encapsulate)할 수 있음

캡슐화를 위해서는 react components가 이미 있음

긴 클래스 이름을 원하지 않거나 할 때 캡슐화하는게 쓸모 있기도 함

Tailwind는 아주 긴 클래스 이름 파일임

class 이름들로 가득 찬 파일임

직접 class names를 만들거나 기본 class의 내용을 바꾸고 싶을 때가 있음

자신만의 색깔을 추가할 수 있음

primary라는 이름의 color를 추가하고, 50부터 900까지 범위의 변형을 만들 수 있음 

Tailwind가 bg-primary를 쓸 수 있게 해줌

기본적인 세팅이 좀 필요함

리액트가 Tailwind를 자체적으로 지원해주는건 아님

세팅을 위해 조금 시간이 필요함

colors: primary라고 쓰기만 하면 Tailwind가 알아서 클래스 이름을 만들어주고, bg-primary-(50-900)를 쓸 수 있게 바로 만들어줌

potatoes 같은 이름의 color도 만들 수 있고 bg-potatoes, text-color-potatoes도 가능해짐

셋업이 조금 더 필요함

postcss란걸 설치해야함

postcss는 CSS를 post process할 수 있게 해주는 유명한 라이브러리임

터미널에 npm i postcss@8.1.9 autoprefixer@10.0.2 입력함

postcss랑 autoprefixer를 설치함

autoprefixer는 postcss의 또 다른 plugin인데, 클래스 이름에 접두사 호환성을 추가해줌

예를 들어 아직 firefox에 없는 CSS property를 사용한다고 하면, 호환 가능하도록 접두사를 붙여서 쓸 수 있게 해줌

border-radius는 모든 브라우저에서 호환되지는 않음

앞에 -moz-borde-radius라고 붙여서 파이어폭스에 호환되게 함

autoprefixer가 자동으로 해줌

예를 들어 특정 property를 가져와서, Firefox와 호환이 되는지 보고 호환이 된다면 앞에 -moz-를 붙임

Microsoft의 경우엔 -ms-를 붙임

설치만한다고 되는게 아님

설치를 했으니 postcss config file을 만들어야함

만들면 postcss 가지고 더 많은걸 할 수 있음

원한다면 더 많은 post CSS plugin들을 받을 수도 있음

postcss config 파일을 만듦

그 다음으로 해야할건 Tailwind configuration 파일을 만듦

터미널에 npx tailwindcss init 입력

Tailwind configuration 파일이 생성됨

Tailwind를 확장하기 위해서 만듦

프레임워크를 확장하는 방법임

Tailwind를 tailwind.config.js로 확장함

Tailwind CSS intelliSense 익스텐션은 tailwind.config.js 파일을 자동으로 찾음 

Tailwind를 커스터마이즈하기 위해 Tailwind config 파일이 필요하고, tailwind를 일반 CSS 파일로 빌드하기 위해 postcss config 파일이 필요함

다음으로 할 것은 Tailwind를 우리의 CSS에 include함

src에 tailwind.css를 만듦

파일 이름은 아무렇게나 해도 상관없음

VSCode가 알 수 없는 문법이라고 불평하고 있음

post CSS가 tailwind.css를 보고 세 줄을 Tailwind가 갖고 있는 모든 클래스 이름으로 바꿈

또 tailwind config 파일을 들여다보고 새 클래스 이름이 있다면 그것도 추가함

아직도 CSS가 에러라고 줄을 띄우고 있음

진짜 CSS file이 아니고 Tailwind file이기 때문임

tailwind.css를 post CSS를 통해 변형해봄

Tailwind CSS file을 빌드함

tailwind.css 파일만으로는 사용할 준비가 안 됨

파일 자체를 임포트해봤자 아무 소용 없음

빌드를 해야함

build 명령어를 사용하면 됨

tailwind build 뒤에는 인풋 파일을 넣어야함

인풋 파일은 ./src/tailwind.css임

아웃풋이 필요함

아웃풋 위치는 아무 곳이나 원하는대로 쓰면 됨

./src/styles.css라고 씀

styles라는 폴더를 만들어서 tailwind 파일과 Styles 파일도 그 안에 넣음

.src/styles/styles.css로 변경됨

tailwind build에 tailwind build ./src/styles/tailwind.css(인풋) -o ./src/styles/styles.css(리액트에서 임포트할 아웃풋) 입력함

터미널에 npm run tailwind:build 입력

보다시피 파일이 꽤 무거움

production할 때 사용하지 않는 부분을 제외하는 법을 알려줌

src/styles/style.css에 저장됨

어떤 파일이 생성되었는지 들여다봄

엄청나게 긴 파일이 생성됨

185000줄이나 됨

바로 사용할 수 있도록 잘 만들어져있음

몇 백줄 가량의 코드를 사용함

셋업은 다 끝남

진짜 css를 index.tsx에 임포트하면 됨

뭔가 변화가 있을 때마다 npm run tailwind:build를 실행시켜야됨

react application을 start하는 방식을 package.json에서 바꿈

start할 때 먼저 tailwind:build를 실행시키고 그 다음에 start를 실행함

npm run tailwind:build 후에 react-scripts start됨

변경이 이루어질 때마다 build가 이뤄진다는걸 보장함

Tailwind 파일을 건드릴 일이 많지 않을테니 대부분 빌드가 빠름

Tailwind CSS 파일을 잘 안 바꿀거기 때문에, 아마 한번이면 충분함

거의 건드릴 일이 없음

터미널에 npm run start 입력

스타일이 아무 것도 없으니까 화면에 아무 것도 안 떠야함

App으로 가서 아무 속성이나 넣어봄

예를 들어 autocomplete가 동작하지 않는다면, VScode를 끈 다음에 다시 열어봄

Tailwind를 처음 설치했을 때는 그럴 수 있음

앞으로 Tailwind CSS로 생산적인 코딩을 할 수 있을거고, 프로젝트들도 훨씬 더 예뻐짐

디자이너가 될 필요없이 클래스 이름만 가지고 놀면 됨

CSS 셋업은 끝났고, 다음은 GraphQL 셋업임

## 14.3 Apollo Setup

다음으로 설치할 것은 Apollo client임

Apollo client와 GraphQL을 설치함

터미널에 npm install @apollo/client@3.2.7 graphql@15.4.0 입력함

client를 생성함

src 폴더 안에 새 파일을 만들고 apollo.ts라고 함

우리 backend의 URL을 사용함

nest.js의 localhost 포트가 3000임

우리 front-end create react app도 포트가 3000번이라 문제가 생길 수 있음

nest.js 포트를 수정하는 것이 좋음

미리 nuber-eats 백엔드를 띄워놓음

열어서 백엔드 포트 부분만 빠르게 바꿈

백엔드의 main.ts로 가서, main에서 3000을 바꿔줌

전체 unit에 대해 4000으로 바꿈

GraphQL은 4000에서 돌리고, create react app은 3000에서 돌리고 싶기 때문임

uri: "http://localhost:4000/graphql"로 수정함

백엔드를 실행해야함

백엔드 터미널에 npm run start:dev 입력함

잘 돌아가는지 확인해봐야함

만일 안 되면 client가 연결되지 못 함

백엔드에서 메세지를 잘 던져주고 있고 우리의 restaurant check가 매초 잘 들어오고 있음

이게 클라이언트를 만드는 방식임

index.ts로 가서 ApolloProvider를 사용함

Apollo로부터 client를 임포트함

별 문제없이 동작함

react app에서 에러가 안 뜸

개발자 도구에 가보면 콘솔에 에러가 없어야함

크롬에 Apollo extension을 설치하여 Apollo로 가보면, docs와 연결이 되어있어야함

보다시피 docs가 잘 설치되어있음

Apollo가 백엔드와 연결되는 순간, schema를 가져오기 위해 query를 보내게 되기 때문임

이걸 Reconnaissance query라고 함

개발자 도구 Network탭에서 localhost가 있고 graphql이 있음

localhost와 graphql은 introspectionQuery를 자동적으로 감지함

introspection query가 아니라는건, 단순하게 response를 받게 될 거란 뜻임

schema를 통째로 받게 됨

GraphQL의 모든 schema는 Apollo로 보내짐

Apollo extension을 쓰면 schema를 좀 더 편하게 볼 수 있음

꽤 깔끔함

확장 프로그램은 Apollo dev tools임

Brave랑 Chrome에서 작동함

Apollo client developer tools는 Firefox에도 있음

프론트엔드에서 schema가 보여야함

다음으로 할 거는 route 만들기랑 우리 앱에서의 state를 어떻게 관리할지에 대한 것임

로그인 파트를 만들거고, 어떻게 form을 다룰지를 배움

create account form을 만들고, 인증을 하고, Apollo를 사용해 local state를 다루는 방법을 설명함

user part라는건 restaurant을 볼 수 있고, restaurant을 검색하는 카테고리를 볼 수 있고, 유저 자신의 profile을 볼 수 있고, 자신의 profile을 수정하고 주문하는 부분을 얘기함

그러고 나서 오랫동안 기능 확장을 중단함

이번 강의에는 testing에 큰 비중을 두고 싶음

restaurant owner dashboard를 만듦

그 다음엔 driver 파트를 만들고, driver 부분은 subscriptions랑 map 부분 등을 포함함

user 부분을 만들고, user가 볼 수 있는 부분을 다루고, 그 다음에 testing을 많이 함

Testing을 비중있게 다룸

schema, 프론트엔드에서 details를 사용하는 방법을 알려줌

routes를 셋업하고 authentication으로 들어감

## 14.4 React Router Dom

react router를 셋업함

필요한 routing들이 많음

예를 들어 로그아웃 될 수 있는 사람이 있음

로그아웃된 사람이 볼 수 있는 router가 있고, 로그인된 사람이 볼 수 있는 router가 있음

드라이버의 경우엔 또 달라짐

드라이버는 일부 다른 route를 가짐

driver용 router랑 customer용 router를 만들 수도 있음

restaurant owner를 위한 router를 만들 수도 있음

routing이 조금 더 복잡하고 발전된 형태임

어떻게 routing이 동작할지에 대한 계획도를 만듦

react-router-dom을 씀

react-router-dom은 리액트 생태계에서 가장 많이 사용되는 라우팅 솔루션임

옛날보다 보기에 훨씬 나아짐

터미널에 npm install react-router-dom@5.2.0 입력

어떻게 route를 다룰 것인지를 생각해야함

logged out router만 만드는 것으로 시작함

일단 로그인 상태인지 확인해야함

로그인된 상태라면 logged in router를 봐야함

logged in router에는 다양한 옵션이 있음

두 개의 분리된 파일을 만듦

router라는 이름의 새 폴더를 만듦

logged-out-router.tsx 파일과 logged-in-router.tsx 파일을 만듦

logged-out-router를 먼저 작업하고 이후에 logged-in-router를 작업함

일단 2개의 router를 만들거라는 틀을 기억하고 있어야함

logged-in-router가 더 까다로움

driver-routes, user-routes, restaurant-owner-routes 등으로 나뉨

지금은 logged-out-routes만 리턴함

react 임포트하는거를 잊으면 안 됨

App.tsx를 봄

typescript로 코딩 중이고, typescript는 리턴에 있어서 살짝 까다로운 편임

component로 string을 리턴할 수 없음

Typescript에선 안 되니까 span을 씀

App.tsx가 잘 수정됨

authentication에 필요한 seed를 줌

isolatedModules라는 에러가 뜨면 앱을 재시작해야함

error에 갇히면 계속 걸림

authentication 시스템을 위한 틀이 됨

어플리케이션은 우리가 로그인 상태인지 아닌지 결정해야하기 때문임

로그인 상태면 logged-in-router를, 로그아웃 상태면 logged-out-router를 보여줌

하지만 아직까지 우리 앱은 logged-out만 보여줌

routers 폴더를 만들었고, React router DOM을 설치했고 사용하려는 로직에 대해서도 이해함

App에서 어떤 router를 갖게 될지 다룸

## 15.0 Local Only Fields

이번 파트에서는 authentication의 프론트엔드 부분을 만듦

로그인, 계정 생성 등 authentication은 간단한 것처럼 느껴질 수도 있음

이런 기능들만을 만드는 것으로도, 많은 것을 구현하고 배우게 됨

예를 들어, Local-only fields에 대해 배움

Local-only Fields는 GraphQL 서버의 스키마에 정의되지 않은 것을 말함

Apollo client가 local state를 다룰 수 없다고 생각하지만, 사실 Apollo client는 GraphQL state를 다루는데 굉장히 능함

Apollo의 cache도 뛰어남

local state만을 다룰 수 있다는 사실을 잘 모름

local state는 server에는 없지만 application에는 있기를 바라는 그런 state임

예를 들면 로그인, 로그아웃 같은 것임

그게 바로 front end에서 다루고자 하는 local state임

app.tsx, app component는 유저가 로그인 상태인지 아닌지에 대한 local state를 알아내야함

유저가 로그인하면 local state를 업데이트해서 logged-in-router를 보여야함

이게 바로 local-only Fields의 예시임

다른 예시로는 다크 모드가 있는 웹사이트임

다크 모드의 여부는 모든 컴포넌트가 신경써야할 부분이고, 모든 요소가 다크 모드 세팅을 확인해야하지만 서버로 보내야 할 필요는 없음

YouTube같은 곳에서의 음량도 local-only fields의 예시가 될 수 있음

플레이어를 보면 볼륨을 몇으로 해뒀는지를 기억해야함

local state가 있으니까 비디오마다 몇으로 볼륨을 세팅해뒀는지를 기억함

서버에게 줄 필요가 없는 정보임

우선 local state를 정의함

typePolicies를 추가함

대부분의 기본적인 GraphQL 타입에 대해서 1개의 프로퍼티를 추가함

바로 Query임

Query에는 field들이 있고 그 중 하나는 isLoggedIn이 됨

그리고 field들은 function call read가 있어야함

read는 field의 값을 반환하는 함수임

일단 false로 함

false만 반환하고 있으니 read() 함수는 아무 것도 하고 있지 않음

계속 false만 반환함

app ts 파일에서 어떻게 접근하는지 보여줌

기본적인 GraphQL Query를 짬

gql 안에 isLoggedIn이라고만 써주면 됨

client cache에 요구해야함

@client를 붙여줘야함

쿼리의 isLoggedIn이 fields 부분의 isLoggedIn과 동일해야함

받은 data를 콘솔에 출력함

이게 바로 local state를 cache에 저장하는 방법임

local state에 접근하는 방법 중 하나임

대부분의 경우 local state를 바꾸고 싶어하지 않음

local state는 다른 것으로부터 측정하게 되는 것일 수도 있음

예를 들어 토큰이 있으면, isLoggedIn을 Token이라고 치면 local storage에 token이 있을 때에는 우리가 logged in 되었다는걸 알려줌

그게 read 함수가 하는 일임

아직은 read 함수를 업데이트하지 않음

return false로 해두고, 어떻게 read 함수를 업뎃하는지 보여줌

앱은 언제나 user가 logged in 상태인지를 물어봄

유저가 로그인되지 않은 상태라면 logged out router를 보여줌

로그인된 상태라면 logged in router를 보여줌

LoggedInRouter를 임포트함

로그인 상태에서는 LoggedInRouter를 보여주고, 로그아웃 상태에서는 LoggedOutRouter를 보여줌

Logged out 상태인걸 볼 수 있음

제대로 동작함

local only field를 업데이트하는 주체는, app이 아니라 LoggedOutRouter가 되어야만함

logged-out-router에 div를 만듦

Logged Out 버튼도 넣음

local state를 핸들하는 법을 보여주고 있음

먼저 개념을 증명해서 빌드업한 후, 실제 구현에 들어감

다양한 것들에 대해 먼저 개념을 증명한 뒤, 구현에 들어감

버튼이 있는데, Tailwind 덕분에 아무 스타일도 가지고 있지 않음

어쨌든 클릭은 할 수 있음

local state를 Apollo client를 통해 업뎃함

함수를 만듦

클릭을 했을 때 local state가 업데이트되도록 하고 싶음

문제는 우리 local state가 비유하자면 죽은 상태나 마찬가지임

지금은 항상 false만 리턴하기 때문임

reactive variables라는걸 사용해야함

reactive variables는 Apollo client의 새 기능임

원래는 없었는데, 이제 사용할 수 있는 버전으로 들어섰음

아무튼 새로 나온건데 굉장한 기능임

reactive variable을 만드는 방법은 makeVar() 함수를 쓰는 것임

보다시피 Reactive variables는 application의 어디에서나 읽고 수정할 수 있음

GraphQL operation을 쓸 필요없음

reactive variables를 쓰면 오래된 방법을 사용할 필요가 없음

reactive variables를 쓰면 어디서든 읽고 업데이트할 수 있음

저장은 apollo client에 됨

reactive variables의 값이 변경되면, 그 필드를 갖는 쿼리들이 자동으로 새로고침됨

Fields 값이 reactive variable의 값에 의존한다면, variable 값이 바뀔 때 field를 포함하고 있는 active query들이 자동으로 새로고침됨

reactive variable에 반응하는 모든 것을 업데이트할 수 있음

makeVar() 함수를 사용함

default value를 정해야하는데 일단 함수의 default value를 false로 함

false를 반환하는 대신 isLoggedInVar를 반환함

우선 변수를 export함

logged-out-router에 변수를 import하고, isLoggedInVar()에 새 값을 넣음

이 경우에는 새 값이 true가 됨

redux를 쓸 필요가 없음

Reactive variables로부터 값을 가져옴

GET_CART_ITEMS가 있고, client 사이드에 있음

먼저 GraphQL query를 작성해야하고 그러고나서 Query hook을 써야함

코드 양 자체도 훨씬 적고, reactive variables에는 아무거나 저장할 수 있음

Apollo client가 모든 것들이 다시 렌더링되는걸 확인해줌

로그아웃 상태에서 로그인으로 잘 되는걸 보니까 우리 코드가 잘 돌아가는게 확실함

logged-in-router로 가서 몇 가지만 고침

모든게 제대로 동작하는지 한번 더 확인하기 위한 것임

이게 우리의 authentication이 동작하는 방식임

reactive variables를 사용해서 우리의 authentication state를 알아냄

다음 영상에서는 Library를 사용한 form에서 mutation들을 만드는 방법을 알려줌

## 15.1 React Hook Form

react에서 form을 만드는 것은, react의 가장 최악인 부분 중 하나임

폼을 만드는 프로세스가 얼마나 길어지는지를 보여주려고 한번 시험삼아 만들어봄

만약에 email과 password를 넣는 input을 구현하고 싶다면, 두개의 state를 만들어야함

password, set password 그리고 email, set email임

둘 다한테 unchanged functions를 넘겨주고, unchanged function에서 input의 이름이 email인지를 확인하고, email이나 password에 값을 set함

email을 위한 input에도 값을 줘야하고, password를 위한 input에도 값을 줘야함

이 과정은 하다보면 좀 열받음

우리가 이 폼들을 validate(인증)해야함

예를 들어 email은 이메일의 형식을 띄어야하고, password는 몇자 이상이어야함

패스워드 길이가 10보다 작을 때 유효한 형식인지 validate해야함

또 form에서 error도 보여줘야함

예를 들어 "패스워드가 너무 짧습니다."같은 거라던가 이 에러들을 대체 어디에 만들어야하는가

다른 passwordError, setPassword같은 변수를 또 만들어줘야함

생각만 해도 너무 열받음

이 예시는 그냥 리액트에서 form을 직접 만드는게 얼마나 불편한지를 보여주기 위한 사례임

onSubmit 함수를 만들고, default를 막아야하고, 정말 번거로운 일임

일단 지금은 이메일이 있고, 패스워드가 있고, 모든게 잘 있음

아직은 submit button이 없음

지금 보여주려는건 방금 만들었던 것과 동일한 validation을 더 적은 코드와 error handling과 함께 어떻게 더 쉽게 만들지에 대한 것임

우선 react hook form을 설치해야함

터미널에 npm i react-hook-form@6.11.4 입력

UseState는 쓰지조차 않음

button을 만듦

Tailwind 작업을 해줌

react hook form을 쓰는건 단 한 개의 hook을 쓰는 방식과 같음

useForm Hook 한 개가 너무나 많은 기능을 제공함

우리는 register 부분만을 다룸

register는 useForm이 우리에게 제공하는 함수임

register는 그냥 input의 ref안에 넣으면 됨

오직 register만 추가했는데 이미 react에 의해서 컨트롤되는 form을 생성함

useForm에 watch라는 함수도 들어있음

모든 권능은 useForm으로부터 오는 셈임

unchanged, event 등 잡다한 것들을 다 피해서 만듦

useForm Hook에서 모든 힘을 끌어다 쓰면 됨

register function을 가져와서 ref로 넣음

한가지 더 트릭을 알려줌

submit을 어떻게 handle하는지를 보여줌

email 부분이 좀 마음에 안 듦

보다시피 지금은 작동하지 않음

submit하고 페이지를 새로고침하는 중임

handleSubmit이란 함수를 데려옴

onSubmit을 만듦

email만 watch하고 싶음

handleSubmit과 onSubmit이 어떻게 함께 동작하냐면, form에서 onSubmit을 써주고, hook에서 가져온 handleSubmit을 넣어줌

폼에 입력된 값이 유효할 때 불리는 커스텀 함수를 인자에 넣음

유효할 때 불리는 것, 유효하지 않을 때 불리는 함수를 2개 넣을 수도 있음

onInValid 함수를 만듦

email을 watch하고 있으니까 submit해보면 잘 동작함

그 밖에 아무거나 watch 할 수도 있음

onInvalid를 handleSubmit에 넣음

validate는 함수를 사람이 입력한 데이터와 함께 넘겨줌

그러고나서 ValidateResult를 반환함

ValidateResult는 Message나 Boolean의 형태일 수 있음

hanmail이란 단어가 안 들어가있는 사람을 다 reject함

일단 email은 string임

이렇게 field를 검증함

이메일 철자에 hanmail.net이 포함된다면 true를 반환함

아무 말 넣고 Submit을 누르면 onSubmit이 잘 동작함

이메일 주소를 naas.com으로 바꿔봄

can't create account라고 뜸

submit을 누르니, 바로 form이 에러가 있는 field로 돌아감

pattern으로 validate해도 됨

regular expression(정규 표현식)으로 검증도 가능함

다시 돌아와서 submit함

이제는 계정을 만들 수 있음

error message에 대해서도 얘기함

useForm에는 errors도 있음

onInvalid가 불릴 때, errors를 console.log함

어떤 errors가 찍히는지 봄

errors는 빈 오브젝트임

입력하는 순간 email error가 뜸

email에 error가 떴다는거고, type: "pattern"도 뜸

예시를 들기 위해서 html에 required를 잠깐만 없앰

유저의 브라우저가 지원하지 않더라도, javascript가 보호해준다는걸 보여줌

required를 "this is required" 같은걸로 바꿈

submit하면 error가 뜨고 error의 type은 required임

이렇듯 error messages에도 적용 가능함

useForm()에 typescript를 쓰는 법을 아직 안 배움

이건 다음 비디오에서 다룸

단 한 줄의 import로 많은 기능들을 가져옴

API documentation을 보면, API documentation도 굉장함

다 useForm hook에서 가져올 수 있는 기능들임

옵션들을 넘겨줄 수 있음

useForm 아래에 register가 있고 register에는 옵션들이 있는데 required, maxLength, minLength, max, min, pattern과 validate, unRegister, watch가 있음

watch는 fields를 보여주는 역할을 함

handleSubmit도 있고 에러를 매뉴얼하게 하나하나 설정하고 싶다면 setError도 있음

errors.username 등 에러를 가져오는 방식임

clearErrors, setValues, getValues 등도 있음

getValues는 watch랑 비슷한데 딱 한번만 읽는다는 점이 다름

renderer를 trigger하거나 하는게 없음

react hook form은 form 만드는데 들이는 시간을 정말 많이 줄여줌

검증 기능들이 있으니까 내 form은 훨씬 안전해짐

pattern 같은 것들로 validate하기 편해짐

validate를 보면, 다양한 것들에 대한 validate가 가능하단걸 알 수 있음

validate는 object가 될 수 있음

또 다른 예시로 좋은 코드 챌린지가 있음

username을 validate하는 API endpoint를 만듦

유저가 username을 입력하면 API를 타고 들어감

보다시피 async랑 await를 지원함

fetch해서 해당 username이 허용 가능한지를 판단함

form을 typescript와 통합하고 useForm에 대해 조금 더 배워봄

## 15.2 React Hook Form part Two

useForm에 대해 보여주고 싶은게 한가지 더 있음

profile을 만들어야하고 restaurant도 만들어야하고 dish도 만들어야함

우선 시작하기 전에 useForm을 typescript와 통합시키는 법을 알려줌

typescript Interface를 만듦

이름은 IForm으로 함

항상 인터페이스 이름을 I로 시작함

그래야 이름만 봐도 인터페이스인걸 앎

멤버로 email을 만듦

password도 마찬가지로 type을 string으로 해줌

useForm 함수에다 넣어줌

예를 들어 errors에 가보면 뒤에 .을 붙였을 때 errors 내부의 email과 password가 나오는걸 볼 수 있음

뒤에 messages를 붙일 수도 있음

tailwind를 넣음

Tailwind를 많이 사용함

어떻게 Tailwind 방식으로 생각해서 코딩하는지 배우게 됨

error를 하나 더 해봄

type은 string이 됨

=== "pattern"이라 해줘야함

error의 타입이 pattern과 동일하다면 수행하도록 함

Only hanmail allowed라고 써줌

이메일을 입력해보고 submit해보면 Only hanmail allowed라고 뜸

이메일을 hanmail로 바꿔봄

에러가 사라짐

useForm을 소개함

이제 login form을 만들 모든 준비를 갖춤

무료 GraphQL course를 들었다고 가정하면 mutation을 전송하는 방법은 알고 있을거라 생각함

하지만 아직 어떻게 우리의 schema를 react와 mix하는지는 모름

error를 방지할 수 있음

## 15.3 Router and @types

이제 실제로 해볼 시간이 옴

실제로 유저를 login 시켜봄

router랑 그외 기타 등을 만듦

Pages란 이름의 새 폴더를 만듦

screens든 routes든 부르고 싶은 이름으로 함

pages 폴더에 login page를 만듦

login.tsx 파일을 만들고 sign up page도 만듦

아님 create라고 불러도 좋음

페이지 두 개를 만듦

컴포넌트를 만들어줌

실제 라우터를 만들어봄

logged-out-router에다 만들어줌

물론 로그인 되었을 때는 logged-in-router를 씀

LoggedOutRouter에서 이전에 했던 것을 다 지워줌

logged-out-router가 필요한건 당연히 router임

router를 import해봄

BrowserRouter를 import함

import { BrowserRouter as Router } from "react-router-dom"를 넣어줌

react-router-dom에 빨간 줄이 있음

불평하는 이유는 react-router-dom을 위한 typescript definition이 없기 때문임

개발자가 react-router-dom을 typescript로 작성하지 않았음

아마도 javascript로 작성되었을 것 같음

해결하려면 두 가지 옵션이 있음

declare module react-router-dom 이런 식으로 선언함

빨간 줄은 사라졌는데 router를 실제로 클릭해보면 props도 없고 errors도 뭔지 알 수가 없음

내가 잘못된 prop을 전달했을 수도 있는거고 아무튼 아무런 정보가 뜨지 않음

고맙게도 react-router-dom은 types란걸 가지고 있음

에러를 고치는데 두가지 옵션을 줬음

하나는 npm install @types/react-router-dom함

다른 하나는 declare module "react-router-dom"함

module을 선언(declare)하는 이유는 types에 대한 폴더가 없기 때문임

types가 뭘까

types에 대해 알아봄

definitelyTyped란게 있음

DefinitelyTyped는 하이 퀄리티 typescript type definition을 위한 repository임

보다시피 엄청 인기 많은 repository임

이 repository는 typescript를 사용하지 않는 library의 type을 가지고 있음

하지만 typescript를 사용하고 싶은 사람들이 그냥 그 library의 "type"해서 쓰는 것임

types 폴더를 열어보면 내용이 엄청 방대함

무려 6000개 가량의 내용물이 표시되지 않았음

github에는 1000개만 보여줄 수 있음

typescript로 만들어지지 않은 npm packages들에 상응하는 거의 모든 typescript types를 담은 폴더임

사용하는 라이브러리에 만약 에러가 뜬다면 그 라이브러리가 typescript definition을 지원하지 않기 때문임

두가지 옵션이 있음

첫번째는 npm install @types/...이 제대로 설치되길 기도하는 것임

존재한다면 에러는 사라짐

터미널에 npm install @types/react-router-dom@5.1.6 입력

아무도 repository에 type definition을 만들어놓지 않았다면 declare 해야함

빨간줄 없어진게 보임

아무 것도 이제 불평을 안 함

만약에 type definition이 존재하지 않는다면 추가해야함

typescript에게 보호를 받지 못하니까 처음에 좀 당황스러움

보통 type definitions가 있고 실수를 해서 잘못된 prop을 보낸다면 typescript가 도와줌

하지만 package에 Type definitions가 없다면 따로 선언을 해야함

React-Router-Dom은 주마다 300만 다운로드를 받음

라이브러리가 엄청 유명하다면 누군가가 type definition을 입력할법도 함

그럼 있는지 찾아볼까

react-router-dom을 찾아봄

역시 있었음

누가 모든 type들을 입력해놨음

누군가 우리를 위해 모든 type들을 덧붙여놨음

자원해서 사람들이 하는거니까 일부는 미완성일 수도 있음

마음대로 만들 수 있음

typescript 생태계에 기여할 수 있고 시간도 얼마 안 걸림

모든 옵션들을 작성해서 나열함

이게 types에 대한 전부임

이제 router를 시작함

옵션이 있는데 browser router랑 hash router가 있음

hash router는 해시태그를 가지고 있음

고르고 싶은걸로 고르도록 함

더 복잡하게 만드는걸 좋아하니까 browser router를 씀

browser router가 deploy할 때 configuration을 필요로 함

Senior developer에게 필요한 코스임

좀 더 어려운 browser router를 고르겠지만 browser router url이 더 예쁘게 생김

import route 해봄

Route를 추가함

switch도 import함

switch는 오직 한 route만 임포트할 수 있게 해주는 장치임

route의 맨 위에 또 다른 Route를 만듦

예쁜 라우터가 완성됨

create account랑 login이 잘 뜸

router 만들기의 첫번째 스텝으로 다음 영상에서 login 부분을 만져봄

react hook form을 사용할거고 typescript랑 Tailwind CSS도 사용함

## 15.4 Form Design

이제 login 화면을 만들고 최대한 예쁘게 꾸며봄

이게 디자인 수업은 아니니까 엄청 예쁘게 하려고 하진 않음

아무튼 Tailwind CSS를 써봄

먼저 h-screen을 추가함

스크린 크기만큼 키움

이번 영상은 어떻게 Tailwind CSS로 작업하고 Tailwind가 얼마나 직관적인지 보여줌

처음엔 클래스 이름을 기억하는데 시간이 좀 걸릴 수 있음

그래도 엄청 직관적임

flex를 치면 flexbox class가 자동완성되는 식임

flex container로 만들고 align item center를 함

클래스명에 items-center랑 justify-center를 넣어줌

또 다른 div를 만듦

uber eats의 배경색이 뭔지 찾아봄

bg를 쳐보면 보다시피 엄청 다양한 회색들이 있음

bg-gray-800을 씀

Log In한 다음 Tailwind를 적용해줌

font를 두껍게 만들어줌

font-bold라고 함

text-lg도 적용해주고 이제 색을 정해줌

text-gray-800으로 설정해줌

박스에 padding을 줌

Tailwind CSS에서는 px(padding horizontal, padding x축)를 치면 다양한 옵션들이 나옴

보통 measurement로 rem(상대적 수치)을 사용함

padding에 px를 사용할 것도 있지만 대부분 rem을 씀

이런 특성이 반응형 디자인을 보장해줌

padding 대신 width도 있음

width도 다양한 옵션들이 있음

개인적으로 잘 쓰는 옵션을 보여줌

항상 w-full을 하고 max-w를 함

max-w(최대 너비)의 옵션에는 super small, small, medium, large, XL, 2XL, 3XL 등이 있음

그리고 현재 screen의 사이즈인 screen 옵션도 있음

이 component 너비는 전체로 해줄거니까 w-full이라고 해줌

스크린 사이즈 최대가 small이라 max-w-screen-sm을 넣어줌

반응형으로 만들어진 것을 볼 수 있음

근데 스크린이 필요 이상으로 큰 거 같음

padding top이랑 bottom에 10을 줌

border radius도 만져봄

rounded-sm, rounded, rounded-md, lg, xl, 2xl 등이 있음

circle까지는 필요없음

text-center를 넣어줌

h3는 text-2xl로 바꿈

font-bold는 필요 없을 것 같음

보다시피 화면을 클래스 이름만 가지고 만들고 있음

이게 대단한 포인트임

background, width, max-width, padding은 물론 px pw 또는 p까지를 배움

pw left, right / py up, down, top, bottom / p top, bottom, left, right임

rounded 클래스는 border-radius를 설정해줌

flex / items-center / justify-center / bg로 배경색 설정하는 것도 앎

우리의 form을 만들어봄

form에는 input이 있어야함

이 input은 placeholder="Email"을 가지고 있음

placeholder="Password"도 있어야함

어떻게 생겼는지 봄

정말 별로임

flex-col을 넣어줄건데 flex direction이 column이라는 뜻임

백그라운드 컬러만 바꿔서 크기를 봄

폼이 Log in에 닿음

margin이 필요함

margin top만 쓰려면 mt임

margin top이랑 bottom을 쓰려면 my해주면 됨

여기엔 margin-top을 5로 해줄거라 mt-5를 씀

이 form은 padding도 있어야함

padding 왼쪽, 오른쪽은 x축이니까 px고 크기는 5라서 px-5로 해줌

나쁘지 않음

이제 input을 건드려봄

margin bottom을 3정도 함

mb-3이 됨

input 두 개 모두 padding을 넣음

위 아래를 3으로 해줌

양 옆으로 2만큼 해줌

둘 다 rounded를 추가해줌

rounded-lg를 해봄

근데 아무 것도 안 바뀐 거 같음

rounded-xl로 해줌

둘의 사이드 패딩을 좀 키워줌

모든 컴포넌트에 다 이렇게 일일이 할 건 아님

시간이 오래 걸림

초반에는 Tailwind로 어떻게 작업하는지 보여주고 따라해볼 수 있도록 할건데 어느 순간부터는 Tailwind를 다루지 않음

그렇게 하면 그 영상은 엄청나게 길어짐

배경색을 바꿈

bg color은 red로 놔둬도 될 거 같음

별 문제 없음

다른 색으로 바꿈

Gray로 바꿀건데 중요한 점이 하나 있음

지금 치고 있는데 autocomplete(자동완성)가 안 뜸

우리가 사용하는 extension이 아직 완전하지 않음

자동완성이 안 됨

클래스를 삭제한 다음에 space를 누르면 자동완성이 뜸

가끔 이럼

class를 작성하다가 실수를 했으면 삭제하고 다시 시작해봄

bg-gray-300, 연한 그레이로 고름

200으로 내림

100으로 해봄

이제 그림자를 다뤄봄

쓸 수 있는 그림자 종류가 참 다양함

사용할 수 있는 shadow 중에는 md가 있음

md를 써도 되고 inner shadow를 써도 됨

shadow-inner를 적용해봄

꽤 괜찮다고 생각함

shadow-inner를 실제로 웹사이트 만들 때 많이 씀

테두리 outline을 바꾸고 싶음

좋은 점은 pseudo selectors가 있어서 states를 쓸 수 있음

예를 들어 hover state를 클래스에서 설정해줄 수 있음

hover라고 쓰면 뒤에 자동완성이 보임

그리고 hover의 모든 속성이 다 나옴

정말 좋은 기능임

background가 gray지만 hover되면 border-purple-600으로 변하게 되어있음

아직 border를 안 만들어줘서 적용이 안 됨

일단 bg로 바꿔줌

gray말고 purple로 해줌

className만 가지고도 잘 실행됨

.hover 이런 식으로 클래스 이름이 생성되는 것을 볼 수 있음

이게 CSS 파일이 엄청 컸던 이유임

모든 클래스들과 그 클래스들의 hover 클래스까지 담고 있음

focus로 바꿔도 잘 적용됨

예를 들면 focus:outline-none으로 바꾸면 outline이 없어짐

이제 윗 부분을 클릭했을 때 border가 생겼으면 좋겠음

아주 얇은 border가 email이나 password 같은 inputs를 감쌌으면 좋겠음

먼저 Tailwind에서 border를 어떻게 쓰는지 보여줌

예를 들어서 border-를 치면 opacity부터 colors까지 옵션이 많이 보임

green으로 가봄

border-green-600을 넣어봄

보다시피 아무 일도 일어나지 않았음

border-green-600은 보이지도 않음

이건 Tailwind가 각 property에 대해 굉장히 세심하기 때문임

width property가 따로 있는 셈임

border하고 쳐보면 border-width:1px라고 뜸

border-l, border-b 1px도 있음

border-l-8 left, bottom, right, top 8 pixels 등 더 다양한 숫자들이 있음

우리는 Tailwind에게 정확하게 요구해야함

이제 border가 뜸

border opacity도 마찬가지로 지정할 수 있음

50정도로 줘봄

굳이 opacity가 필요 없을 거 같음

이제 내가 focus할 때만 border-green이 뜨게 하고 싶음

focus:border-green-600이 적용됨

email input에도 똑같이 해줌

border를 border-2로 바꿈

border-opacity-20으로 함

focus할 때 border opacity 변화를 주도록 함

이제 희미해졌음

20말고 다른 수치를 넣어봄

50으로 바꿔봄

버튼 하나만 만들면 다음으로 넘어갈 준비가 됨

만약에 form에 button이 하나만 있다면 그 button은 submit button으로 취급됨

버튼을 만들어봄

button도 input들과 비슷한 퀄리티로 만들면 될 것 같음

안에 Log in이라고 적고 padding을 넣어봄

bg-gray-800을 추가해줌

color도 바꿔봄

font는 medium으로 감

input의 mb-3이랑 맞춰서 mt-3이라고 해줌

rounded-lg도 추가함

login button은 왠지 focus:outline-none까지 해줘야 할 것 같음

hover:opacity-80을 해줌

hover:opacity-90으로 해줌

다음 영상에서는 어떻게 하면 코드의 반복을 줄일 수 있을지 알려줌

## 15.5 Form Login

Tailwind에서 가장 좋아하는 점을 공유하고자 함

flex 같은 class 말고도 tailwind는 아름답게 만들어주는 class들이 존재함

예를 들어 ring이라는 class가 있음

ring을 쓰면 멋진 그림자 효과를 줄 수 있음

이러면 input이 훨씬 보기 좋아짐

그냥 border는 멋있지 않음

ring을 적용해서 더 이쁘게 만들어봄

이제 border 대신 ring을 써봄

border를 바꿔줌

focus:ring을 해줌

ring을 쓰면 css가 만들어짐

ring-2로 함

offset도 해줘야함

offset에 대해서 보여줌

ring offset을 해줄 수 있음

ring offset의 색도 변경해줄 수 있음

어렵지 않게 예쁘게 만들어 줄 수 있음

진짜 편리함

ring 색을 적용해주려면 focus:ring-green-600을 해줌

어떻게 생겼는지 봄

보면 약간의 차이가 있음

더 이상 border가 아니라 ring임

focus:ring-opacity-50을 해줌

50말고 90으로 함

일일이 css 효과를 만들려면 정말 괴로운데 Tailwind의 좋은 점이 아름다운 class name을 통해 쉽게 할 수 있도록 도와줌

생성되는 css를 보면 엄청 복잡함

이제 굳이 효과를 주려고 css를 작성할 필요가 없음

너무 많은 class name을 사용하는 것 같음

class들을 복사해서 붙여넣고 정신없다고 생각할 수 있음

그런거를 개선해봄

그 전에 공간을 좀 수정해봄

아래에 비해서 위가 좀 긴 것 같음

form을 약간 수정해줌

margin top은 5고 margin bottom은 없어도 됨

padding을 바꿔줘야함

box의 윗 부분 padding이 약간 높으니까 padding top은 8, padding bottom은 5로 바꿔봄

이게 더 나아보임

많은 부분을 반복하고 있는데 보면 알 수 있듯이 모양이나 그림자나 ring 같은 부분이 반복됨

심지어 padding, round 같은 부분도 반복되고 있음

두가지 선택권이 있는데 하나는 className을 가진 react component를 만들어 주는거고 또 다른 옵션은 전에 만들어둔 css를 사용함

이 경우에는 Tailwind 안에 나만의 input class를 만들어줌

이제 @apply해서 원하는 것을 넣어주면 됨

전부 input에 모든 것을 복사해서 넣어줄건데 button에 뭔가 너무 많이 있음

나중에 button class를 만들어줌

margin bottom만 빼고 다 지워줌

margin bottom은 있어야함

이제 className에 input을 넣어줌

form마다 전부 다르니까 margin bottom은 지워줌

잘 동작하는지 확인해봄

tailwind:build를 해야한다는 점을 잊지 말고 server를 재시작함

터미널에 npm run start 입력

새로고침하면 css에 input이 적용됨

잠깐 기다려봄

잘 동작함

이제 input이라는 className을 갖게 되었고 재사용을 할 수 있음

하나 더 만들어봄

btn이라고 하고 @apply를 써줌

margin top은 form마다 다르므로 margin top은 제외함

className에 btn을 적용시켜줌

다시 실행해봄

터미널에 npm run start 입력

Tailwind를 빌드했고 form을 완성시킴

너무 마음에 듦

css를 작성해주지 않았는데도 input이 아름다움

ring css를 만든다면 얼마나 오랜 시간이 걸릴지 모르겠음

처음에 했던 선택이 별로였던 것 같음

padding top을 10으로 해줌

계속 해봄

이제 form은 끝남

react form을 해줄 차례임

우리는 register를 얻어줘야함

getValues랑 errors가 필요함

그리고 useForm을 써줌

typescript를 만들어봄

email은 string type을 가지고 password도 string이 됨

ILoginForm을 type으로 써줌

이제 register, password, email을 input에 배치해줌

엄청 중요한데 input에 name을 정해줘야함

만약 input에 name이 없으면 useForm이 찾지 못 함

handleSubmit도 필요함

form에서 가져오도록 함

onSubmit={handleSubmit} 해줌

handleSubmit은 valid를 해주는 function이 필요함

일단 우리는 invalid해도 신경쓰지 않음

onValid나 onSubmit이라는 함수를 만들어줌

form이 잘 동작하는지 테스트를 해봄

console.log(getValues()) 해봄

inspect를 보면 console로 가봄

이제 error에 대해서 해봄

HTML required를 통해 보호해줘야함

사람들이 우회할 수가 있음

input에 required 부분을 지워버릴 수 있음

그러니까 그걸 방지하려면 react에서 해줘야함

Email is required라고 써줌

Password is required라고 해줌

그럼 몇 가지 validation을 해줄건데 password의 최소 길이는 10으로 함

back-end에서 이렇게 안 해줬으니까 나중에 이 부분을 지워줌

일단 error를 테스트해봄

error를 한번 내봄

input에 error가 있다면 나타나게 됨

우선 error를 만들어봄

I'm an error라고 보임

이제 className을 넣어줌

text-medium을 해줌

text-red-500을 해줌

font-medium이 됨

I'm an error가 나옴

input에 있는 margin-bottom이 좀 마음에 안 듦

error 메세지가 뜸

flex나 flex column 말고 grid를 사용해봄

grid gap을 className에 넣어줌

grid gap-5를 해봄

column을 해줄 필요도 없고 row도 설정해줄 필요가 없음

만약 error가 없으면 gap은 3이 됨

errors.email?.message를 해줌

다른 error가 있다면 error.email은 어떤 error도 다 가능함

type이던지 types도 가능함

"Password must be more than 10 chars."라고 입력해줌

error message를 해주면 password로 바꿔줘야함

잘 동작함

validation이 됨

이제 첫 mutation을 만듦

## 15.6 Login Mutation part One

어디에서나 error를 사용하려고 함

styles를 통해서 하지 않음

react를 통해서 해봄

typescript와 react를 처음 배우는 사람도 있으니까 typescript로 props를 통해 어떻게 만드는지 알려줌

components라는 폴더를 만듦

그런 다음 form-error.tsx 파일을 만듦

export const FormError라고 쓴 다음 FormError의 type은 React.FC라고 해줌

FC는 Functional Component의 약자임

markup을 return 해야함

errorMessage를 return 해줌

errorMessage는 props로부터 받아와야함

{errorMessage}를 파라미터로 써줌

errorMessage의 type이 any인데 이건 좋지 않음

React.FC에 한해서 "errorMessage는 children type에 존재하지 않습니다"라고 되어있음

component가 반드시 얻어야하는 유일한 prop은 children임

그러니 우리는 interface를 만들어줘야함

그 전에 import React from "react" 해줌

그럼 interface를 만들어줌

errorMessage는 string이어야함

이제 아무 문제 없음

errorMessage의 type이 string이라는 사실을 알 수 있음

ErrorMessage가 아니라 FormError임

errorMessage는 필수라서 빨간 줄이 나옴

"errorMessage가 없습니다."라고 나옴

더 이상 props에 type을 지정해줄 필요가 없음

email도 똑같이 해줌

더 보기 좋아짐

email의 message는 string임

Tailwind를 사용해서 components를 만들어주는 방법임

이제 같은 class를 복사 붙여넣기 해줄 필요가 없음

그리고 어떻게 react component에 type을 주는지 알게 됨

진행하면서 typescript에 대한 것을 계속해서 배우게 됨

mutation을 back-end에 보낼 시간임

login을 하고 싶음

그럼 mutation을 만듦

LOGIN_MUTATION이라고 부름

gql을 해주고 mutation을 작성함

mutation을 입력해주고 안쪽에 mutation을 넣어줌

mutation에 이름을 할당해줌

이 이름은 back-end로 넘어가지는 않음

이 이름은 front-end에서만 사용됨

나중에 엄청 중요한 작업임

기억하기 쉬운 이름으로 해봄

PotatoMutation이라고 함

PotatoMutation은 front-end를 위한 것임

PotatoMutation은 back-end로 넘어가지 않음

이 mutation을 사용하기 전에 schema를 먼저 봄

login, input, type, email, password가 있음

우리는 이것들의 type이 필요함

우선 Apollo validation을 이용하고 실제 schema의 모양대로 type이 필요함

우리는 email이랑 password가 required인 사실을 알고 있음

type은 String이고 password도 마찬가지로 String임

달러($) 표시를 처음 붙여주게 되면 이건 변수라는 뜻임

Apollo는 변수라는 사실을 알게 됨

이제 실제 back-end에 하듯이 적어줘야함

login 안에는 input이 존재하고 input은 email이랑 password를 가짐

그럼 email은 type이 $email이고 password의 type은 $password임

잘 보면 이 방법은 playground에서 적는 방식이랑 같음

Apollo가 login mutation에서 input을 validation해주는 방식에도 써줄 수 있음

그러면 login mutation은 ok, token, error를 받게 됨

ok, token, error라고 써줌

변수의 name이랑 type을 적어줘야함

mutation을 어떻게 활용할까

빈 array를 만들고 useMutation 안에 우리가 만든 mutation을 붙여 넣어주기만 하면 됨

이제 mutation은 MutationTuple을 return해줄거고 기본적으로 이 배열의 첫 변수는 mutation function임

이 function은 mutation의 방아쇠 역할을 함

loginMutation이라고 써줌

loginMutation은 mutation function임

useMutation hook으로부터 얻는 두번째 변수는 loading, error, data를 가지는 객체임

그 말은 data는 mutation으로부터 되돌아온다는 것임

loading은 mutation이 실행되고 있다는 의미고 error는 mutation이 error를 반환한다는 것임

이 정보들을 살펴보려면 console.log 출력을 해봄

mutation을 불러봄

잘 동작함

console을 보면 Object에는 email이랑 password가 있음

const { email, password }에다 getValue()로 받아올 수 있음

typescript를 사용하기 때문에 email은 string이나 undefined라는 사실을 알 수 있음

password도 마찬가지임

둘 다 required라서 반드시 필요하니까 undefined면 안 됨

email이랑 password는 string type만 가질 수 있음

onSubmit이 호출되면 모든 validation이 통과됨

그럼 mutation에 변수는 어떻게 추가할까

mutation을 부른 다음 options로 variables를 주고 variables로 email과 password를 넘겨주면 됨

보다시피 어떤 것으로부터 보호되지 않고 있음

back-end에서 password는 string이어야하니까 error를 냄

mutation에 type을 이용하지 않았기 때문임

mutation을 사용하기 위한 type을 사용할 수 있는데 이건 다음 영상에서 이야기함

다음 영상으로 가기 전에 apollo tools를 다운로드 받음

apollo를 global로 설치해줌

project 안에도 일단 설치해줌

apollo tooling을 package.json이랑 console에서 실행함

그러니까 global에도 설치하고 project 안에도 설치해줌

터미널에 npm install -g apollo@2.31.1 && npm install apollo@2.31.1 입력

mutation을 보호하기 위해서 마법같은 typescript를 가져옴