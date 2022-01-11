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

## 15.7 Apollo Codegen

apollo-tooling은 back-end에서 mutations, query responses, input type을 전부 다 typescript 정의로 자동으로 생성해줌

mutation을 보낼 때 back-end에 데이터를 전송한다는 것을 확신할 수 있고 response를 받으면 받은 response의 type을 알 수 있음

DTO가 모든 것의 시작이라는 점을 기억해야함

DTO가 schema가 되었고 schema가 front-end를 위한 typescript가 되었음

따라서 우리는 정확하게 어떤 타입을 back-end로 보내야할지 알고 있음

하지만 이제는 backend로부터 어떤 type이 되돌아오는지도 알 수 있음

그러면 우선 apollo tooling의 configure부터 해주도록 함

apollo.config.js를 만들어줌

어떻게 파일을 구성하는지 정보가 있음

하지만 중요한 것은 client가 필요하고 이 client에 이름을 만들어줘야함

name은 하고 싶은걸 하면 됨

name을 nuber-eats-backend로 함

그리고 client는 url이 있어야함

그러니까 client는 service가 있어야함

처음에는 service를 먼저 해줘야함

service 안에 url이 있어야함

이 경우에 url은 backend의 graphql url이 됨

다음 할 일은 apollo에게 file을 알려줘야함

여기서 질문이 하나 있음

우리는 무엇을 찾아야할까

apollo가 무엇을 할까

apollo가 기본적으로 하는 일은 front로부터 모든 schema를 가져오는게 아님

그건 말도 안 됨

apollo가 하는 일은 file을 보면서 gql tag를 사용할 때마다 apollo는 typescript definition을 줌

기본적으로 내가 작성한 것을 내가 얻게 됨

그럼 includes가 필요한데 Client에 includes가 있어야하고 경로가 하나 밖에 없지만 array로 해줌

source가 include에 들어가야함

그럼 .src/를 써줌

이걸 glob으로 사용할 수 있음

glob patterns라고 함

glob은 *을 의미함

그럼 src 내부에서 모든 폴더와 확장자를 가진 모든 파일을 포함함

이게 우리가 원한 확장자임

이제 service를 설정했음

name은 뭐든 상관없고 graphql url도 있음

includes는 src 폴더 내에서 모든 폴더 안에 있는 확장자가 tsx인 모든 파일에서 query를 찾는 것을 의미함

이게 경로의 두 단계를 의미하는게 아님

만약 폴더 안에 폴더 안에 폴더 안에 해서 5번의 폴더가 있음

그래도 동작함

마지막으로 만약 Apollo에서 제외하고 싶은 부분이 있으면 해줘야함

기본으로 node_modules랑 test는 제외되어있음

우리가 필요한건 바로 tagName임

tagName은 내가 사용한 tag를 의미함

여기서는 gql tag를 사용했음

그러니 같은 것을 사용해줘야함

이걸 어떻게 부를까

실행해보고 어떻게 되는지 보자

apollo-tooling으로 돌아감

한가지 option이 있는데 apollo client:codegen임

실행해봄

console에 apollo가 잘 되야함

그럼 apollo client:codegen을 실행해봄

결과는 나와야하고 mytypes.d.ts를 써줌

d는 definition을 의미함

이제 configuration은 자동으로 됨

내가 원하는거는 target임

target은 typescript를 사용해줌

잘 되는지 해봄

--target=에다 typescript를 써주면 됨

잘 됨

터미널에 apollo client:codegen mytypes.d.ts --target=typescript 입력

mytypes 안에 파일이 생김

pages 안에 mytypes 안에 Potato Login이 생김

우리는 PotatoMutation의 type을 갖게 됨

PotatoMutationVariables 부분은 backend에 있는 부분이 아님

내가 써줌

그 다음에 Apollo codegen은 login을 봄

그리고 결과로 어떤 것들을 얻는지 살펴봄 

그럼 무슨 일이 일어날까

우리가 결과로 어떤 것들을 얻는지 알아냄

ok를 얻고 이건 boolean일테고 token을 얻는데 이건 string이나 null, error도 string이나 null이 됨

정확히 우리가 DTO에 설정한거랑 같음

pages 내부에 만든걸 알 수 있음

우리는 이걸 원하지 않음

그저 한 개의 file로 생성해줬으면 좋겠음

폴더를 만들고 그 안에 파일을 만들길 원하지 않음

나중에 고쳐줌

우리는 apollo codegen을 이용했음

우선 file을 살펴보고 우리가 필요하다고 했던 모든 변수들의 interface를 제공해줌

그런 다음에 back-end의 실제 schema를 살펴봄

그래서 url을 적어줌

apollo codegen이 back-end를 확인해야함

그리고 mutation의 return을 우리에게 제공해줌

이제 어떻게 얻어오는지 알 수 있게 되었음

useMutation으로 간 다음에 PotatoMutation을 넣어줌

front-end에서 이름이 중요함

PotatoMutationVariables를 얻었음

이제 우리는 변수에 대해서 보호받을 수 있음

typescript가 보호해주고 있음

typescript가 password는 number가 아니라 string이어야하는 사실을 알고 있음

심지어 내가 data를 mutation으로부터 가져와서 console.log로 출력해보면 data가 login을 가지고 있고 login이 error, ok, token을 가지고 있는 것을 볼 수 있음

이건 전에 말했던 DTO로부터 나오는 것임

폴더 안에 파일을 만들어줌

기본적으로 폴더에 있는 모든 mutation을 만들어주고 있음

내가 원하는건 output을 약간 변경해주고 flat output이라고 함

그 output은 folder가 될거고 folder는 api로 함

output을 flat하게 만들어봄

outputFlat을 보면 "기본적으로 TypeScript/Flow는 생성된 각 파일을 원본 파일 바로 옆 디렉토리에 저장한다"라고 되어있음

터미널에 apollo client:codegen --target=typescript 입력

각 파일들 옆에 수많은 폴더들을 갖기 원한다면 이렇게 하는게 좋음

내가 원하는건 이게 아님

output flat을 원함

outputFlat을 써줌

터미널에 apollo client:codegen --target=typescript --outputFlat 입력

어떤 일이 벌어졌는지 봄

이제 outputFlat을 보면 generated에 있음

아무튼 globalType이 있고 아직 아무 것도 없음

potatoMutation이 있음

이건 나의 선택임

그럼 명령을 만들어봄

package.json 안에 만듦

scripts에 codegen을 추가함

apollo:codegen이라고 함

apollo client:codegen --target=typescript --outputFlat 명령을 실행함

그럼 import를 고치러 가봄

PotatoMutation이라고 쓰면 이제 안전하게 보호됨

src 안에 들어갔어야했음

src/__api__로 해줌

아니면 기존처럼 __generated__이 더 나음

npm run apollo:codegen을 실행해봄

터미널에 npm run apollo:codegen 입력함

src 내부에 generated가 있어서 잘 됨

전부 다 src 폴더 내부로 넣어주는 것이 중요함

login component가 src 폴더 밖에까지 도달하지 못 하기 때문에 매우 중요함

이게 create react app에서의 규칙임

이제 보면 찾을 수 있음

잘 찾아짐

typescript 덕분에 우리의 실수로부터 보호받을 수 있음

PotatoMutation 이름을 바꿔줌

loginMutation으로 바꿔줌

codegen을 다시 실행함

터미널에 npm run apollo:codegen 입력함

codegen이 loginMutation을 만들어줌

loginMutation으로 바꿔주고 loginMutationVariables로 바꿔줌

이제 name이 뭔지 앎

PotatoMutation은 지워줌

codegen을 다시 실행할 때마다 폴더를 삭제해주게 함

여기서 일단 멈추고 다음 강의에서 계속함

DTO로부터 모든 것을 가져오고 있음

DTO는 schema가 됐고 schema는 type이 됐음

이제 type에 의해서 우리는 보호받고 있음

## 15.8 Login Mutation

이전 영상에서 typescript의 힘으로 type을 보호하게끔 했음

loginMutation을 써주면 변수를 만들어줌

input type이라는 것을 back-end에 만들어놨었음

input type은 email: String!, password: String!임

우리는 왜 input type을 이용하지 않았을까

email String, password string을 쓰지 않았음

잘못 실수를 할 수도 있음

우리는 실수를 만드는 기계임

그런데 왜 우리는 이런 위험을 감수했을까

DTO를 기억해봄

우리는 DTO를 source of truth(단일 진실 공급원)로 만들고 싶음

source of truth가 이상하게 들릴지도 모르겠지만 진짜 있는 말임

이거 덕분에 Nest, React, Typescript, Apollo codegen을 빌드할 수 있었고 심지어 front-end까지 영향을 미침

output뿐만 아니라 input까지 우리는 input type을 이용할 수 있음

input type을 사용하지 않을거면 input type은 왜 만든건가

type은 LoginInput이 됨

이제 우리의 DTO는 더 가치가 있어짐

머리 속에서 나오는게 아니라 input과 output 모두 DTO로부터 오게 됨

DTO로부터 와야함

npm run apollo:codegen을 해봄

터미널에 npm run apollo:codegen 입력

어떤 일이 일어났는지 우선 globalType을 봄

globalType은 여기 보이듯이 Enums랑 Input Object를 가짐

이제 loginMutation은 LoginInput을 type으로 가짐

typescript가 문제를 감지함

이제 variables는 email이랑 password가 아님

variable은 loginInput: { email, password }라고 해줘야함

우리는 client mutation을 back-end에 있는 LoginInput으로 입력해줌

더 이상 뭉칠 수도 없음

이제 모두 함께 있음

back-end에 있는 DTO를 수정하게 되면 front-end에 있는 typescript가 지적해줌

버그를 만들 가능성을 최소화해줌

만약 theme에서 작업을 한다면 백엔드가 무엇을 하고 있는지 알기 위해서 해야할 일은 단지 apollo codegen을 실행해주면 어떻게 보내야하고 어떤 값을 return해서 받을지 알 수 있게 됨

codegen이 끝남

이제 mutation을 실행해봄

mutation이 끝나면 우리가 무엇을 해줘야할까

LOGIN_MUTATION을 내가 필요한대로 약간 바꿔줄 수 있음

한가지 더 있는데 variables는 getValues()로부터 오기 때문에 variables를 해줄 필요가 없음

만약 getValues()를 호출하게 되면 그 순간의 value를 얻게 됨

원한다면 바꿀 수도 있음

내가 찾는 variables를 전달해줌

email이 들어가고 watch를 써줘야함

watch는 실시간으로 변화를 감지함

이제 mutation을 호출할 때 variables를 넣어줄 필요가 없음

watch는 계속 지켜보면서 변화를 감지해줌

mutation 전체를 함수 외부에서 커스터마이징이 가능함

mutation을 좀 더 맞춤화할 수 있는데 그 중 하나가 onCompleted임

onCompleted는 function임

그리고 onError도 해줄 수 있음

onError도 function임

두 함수를 구현해봄

onCompleted를 만들어줌

그냥 onCompleted만 쓰면 됨

그리고 onError를 만들어줌

onCompleted는 type을 가지고 있음

type을 추가해줘서 LoginMutation type을 가짐

이제 onCompleted는 data를 갖게 되는 사실을 알게 되었음

그리고 error는 ApolloError type을 가짐

ApolloError가 필요함

error는 연결이 안 되면 발생함

back-end에서 request를 받아주지 않아서 error false를 받게 되면 이 error는 발생하지 않음

output에서의 error false는 GraphQL에게 error가 아님

output에서의 error false는 GraphQL에게 onCompleted임

GraphQL에서의 error는 request가 유효하지 않거나 인증이 필요하거나 url이 잘못됐을 경우임

따라서 우리는 error를 그리 많이 사용할 것 같지 않음

data를 사용하지 않음

이 강좌에서 모든 mutation을 기본적으로 다루는 방법을 보여주고 싶음

이제 onCompleted를 하게 됨(Hint: 뒤에서 다시 작성함)

login을 data로부터 얻어옴

onCompleted는 login이 있다는 것을 의미하는걸 알고 있음

ok가 true면 console.log(token)을 출력함

error가 true면 error를 state에 설정해줄 수도 있고 혹은 아무 것도 안 해줄 수도 있음

loginMutation에서 data를 얻을 수 있고 data는 loginMutation이랑 같음

onCompleted는 내가 다룰 수 있는 data를 제공해줌

예를 들면 login이 되었다고 설정해줌

일종의 프로그래밍임

또한 loginMutation은 error나 loading, called 같은 것들을 줄 수 있음

data 이름을 바꿔줌

loginMutationResult로 바꿈

이름을 다시 설정해줌

object를 열었을때 object로부터 property를 얻어옴

완전히 다름

이름을 변경해준 것임

data는 name으로 그닥 좋지 않음

data를 loginMutationResult로 바꿔줌

다음에는 test 해봄

backend에 전달하는거랑 client가 동작하는지 살펴볼거고 mutation이 잘 동작하는지도 살펴보고 모든 것들을 살펴봄

## 15.9 Login Mutation part Two

test를 해보기 전에 무엇을 할거냐면 codegen을 마무리하려고 함

기억날지 모르겠는데 우리는 PotatoMutation을 가졌던 적이 있음

나중에 이름을 수정했지만 PotatoMutation 파일은 generated에 그대로 남아있음

그래서 apollo codegen을 실행할 때마다 generated 폴더를 지워주려고 함

Mac이나 Linux같은 경우는 rm -rf src/__generated__ 해주면 됨

그런데 Windows 같은 경우에는 명령어가 다름

하지만 Windows에서 보고 있는 사람도 있기 때문에 Cross-Platform 방법을 보여주려고 함

Cross-Platform 방식은 rimraf라는 것을 사용하는 것임

rimraf는 패키지인데 많은 사람들이 사용하지 않음

대부분 rimraf를 잘 모름

어떻게 하는지 보여줌

rimraf는 아직 잘 안 알려짐

node.js를 위한 rm -rf임

rimraf를 설치해줌

터미널에 npm i rimraf@3.0.2 입력함

기다리는동안 create-react-app에 경고가 있는지 확인해봄

경고가 없음

rimraf가 설치되면 이제 package.json을 수정해서 그 안에 rimraf를 추가해줌

그리고 start command에도 추가해줌

우선 start command는 type을 얻게 됨

그런 다음에 tailwind를 build하고 react-script start를 실행하면 됨

한번 전체를 테스트해봄

터미널에 npm run start 입력

아직 generated만 됐음

tailwind build를 함

Tailwind 파일을 아주 슬림한 버전으로 만들 수 있는 방법을 알려줌

이제 테스트해봄

backend에 있는 database를 지웠기 때문에 동작이 안 됨

로그인 못 함

아무 것도 없는 상태로 시작하고 싶어서 지웠음

동작은 안 하지만 일단 보도록 함

backend에서 동작하지 않기 때문에 token을 얻지 못 함

하지만 이번 test에서 해볼 것은 mutation의 error를 볼 수 있어야하고 GraphQL이 불러지는 것도 볼 수 있어야함

password는 뭐든 상관없음

우리는 backend로부터 error가 오는 것을 확인해봐야하고 GraphQL network request도 나와야함

loading도 볼 수 있어야함

아직 loading 안 해줬음

loading을 해줌

mutation이 제공하는 것 중에 loading이 있음

mutation이 발생하면 loading은 true나 false임

loading일 때는 "Loading..."을 보여줌

다른 메세지를 보여줘도 됨

loading이 아닐 때는 Log In으로 함

loading은 mutation이 한번만 일어나게 해줌

사람들이 너무 빨리 클릭해서 login이 여러번 되는게 싫기 때문임

가끔 버튼을 클릭할 때 버튼이 아무 동작도 하지 않음

실은 이게 loading 중인데 사람들은 그냥 막 눌러봄

따라서 여러번 클릭되는 것을 원하지 않음

만약 한번 클릭하게 되면 성공하거나 실패할 때까지 loading은 true가 됨

loading이 아닐 때 login 할 수 있음

localhost에서 해서 그런지 mutation이 진짜 빠름

loading을 보지도 못 함

하지만 잘 동작하는 것 같음

error가 떴음

error는 전부 다 backend로부터 왔음

우리는 GraphQL mutation을 원하는 것을 전부 담아서 보냈음

여태까지 많은 form을 만들어봤고 mutation도 사용해봤고 typescript의 강력함도 겪어봤고 모든 mutation의 typescript 정의도 생성해봤음

이제 우리에게 작업 속도를 빠르게 해줌

제대로 모든 타입을 갖추고 어떻게 동작하는지 알게 되면 기능을 구현하는게 얼마나 쉬운지 알게 됨

useMutation은 array를 반환함

array의 첫 원소는 반드시 호출해줘야하는 mutation function임

두번째 원소는 Object이고 많은 것이 들어있음

예를 들면 data, loading, called, error 같은 것들을 가지고 있음

우리는 result도 사용했는데 error를 가지고 있음

mutation을 여러번 호출되는 경우를 원하지 않아서 loading도 사용해줌

loading이 아닐 경우에만 mutation을 호출하도록 했음

전체적으로 어떻게 할건지 한번 다뤄봤음

다음 영상에서는 create account를 만들어봄

일단 login이 잘 작동하고 있음

## 15.10 UI Clonning

계정을 만들러 가기 전에 우버이츠 화면을 Tailwind CSS로 클론 해보려고 함

Tailwind를 가지고 원하는 것은 무엇이든 만들 수 있다는걸 보여줌

Tailwind로 prototype을 얼마나 빠르게 만들 수 있는지 보여주려고 만듦

심지어 디자인에 대해 아무 것도 몰라도 class를 추가만 해줘도 멋진 결과를 얻을 수 있음

Tailwind를 사용해서 layout을 클론하는 과정을 보여줌

이미지를 이미 다운로드 해놨는데 이미지를 다운받고 싶으면 오른쪽 클릭을 하고 새 창에서 열기를 누름(https://www.ubereats.com/에서 오른쪽 위에 있는 Sign in을 클릭하면 나오는 Uber Eats 이미지를 다운로드함)

그냥 svg파일로 저장해주면 됨

nuber-eats-frontend의 src 안에 images 내부에 저장해주면 됨

이제 로그인을 제대로 해봄

form은 중요한 부분이니까 놔둠

div tag를 닫아줌

이제 시작함

우선 items center는 괜찮고 justify-center는 필요없음

이제 margin top이 필요함

고맙게도 tailwind는 size를 제공해줌

하지만 몇몇 특정 부분에서 size가 약간 뜀

4, 5, 6, 7, 8, 9, 10 ... 16까지는 전부 있음

그 다음부터는 4씩 올라감

16, 20, 24, 28, 32, 36, 40, 44 ... 그 다음에는 8씩 올라가는 것 같음

어떻게 보이는지 한번 해봄

15가 좋을 것 같음

15는 존재하지 않음

32로 해봄

여기까지 top이고 이제 logo를 넣어줌

svg를 모를 수도 있는데 이것은 그냥 text로 보임

그냥 code니까 import 할 수 있음

img의 src로 사용할 수 있음

img elements must have an alt prop, either with meaningful text, or an empty string for decorative images라는 warning이 뜸
-> img의 prop으로 alt를 넣어서 해결함

다행이 잘 됐음

약간 크게 만들어줌

다시 tailwind class name을 이용하면 width를 지정해줄 수 있음

다양한 width 선택지가 있음

컨테이너의 25%, 33%와 같은 비율임

혹은 rem을 사용할 수 있음

우리는 rem을 사용함

너무 작음

top을 28로 함

거의 비슷함

logo가 좀 큼

이제 max width를 정해줄건데 responsive하게 만들어봄

우선 모바일 버전부터 함

안쪽에 새로운 div를 만듦

항상 모바일에서 먼저 작업을 시작함

따라서 class name으로 w-full max-w-screen-sm을 해줌

잘 됨

maximum width는 작은 스크린 사이즈고 640임

정확하게 내가 딱 원한 것임

이제 flex flex-col items-center를 해줌

여기서 잊지 말아야 할 것이 만약 item-center를 해줬으면 child에 width를 반드시 설정해줘야함

w-full 해줌

uber eats를 보면 top이 매우 가까움

하지만 크게 만들면 아래로 내려감

Tailwind CSS를 이용해서 responsive design을 해줄 수 있음

저렇게 하기 위해서 sm을 사용할건데 sm은 small screen이라는 의미임

md는 medium screen을 위한거고 lg랑 xl도 있음

Tailwind CSS로 쉽게 responsive하게 디자인할 수 있음

항상 모바일을 먼저 생각해서 시작해주고 있음

margin-top이 그냥 margin-top이면 안 되고 반드시 large screen이어야함

그리고 기본 값으로 모바일을 해줌

이제 large screen으로 만들면 내려오는 것을 볼 수 있음

항상 모바일 먼저 생각해야함

desktop 먼저 생각하면 안 됨

mt-10같이 기본 class name은 항상 모바일로 시작해야함

모바일이 먼저임

그런 다음에 lg:mt-28을 해주는 것임

Tailwind가 이렇게 해주는 것은 진짜 놀라움

class만으로 media query를 해줌

이제 Welcome back을 해주면 됨

h4를 하고 Welcome back이라고 씀

items-center가 있어서 text-left가 안 됨

width full이 됨 

padding에 대해서 해봄

padding이 있음

아마 padding 5인 것 같음

div에 padding을 줌

수평쪽 padding으로 5를 해줌

이제 welcome back에 padding이 생겼고 form에 있는 padding을 지워줌

form에 더 이상 padding이 필요없음

welcome back을 좀 더 크게 해줌

text를 쓰면 많은 옵션이 있는데 left, right, center, size도 있음

4로 해봄

margin-bottom 10을 해봄

input 부분을 해봄

uber의 input이랑 좀 더 비슷하게 보이려고 input을 조금 바꿔줌

border가 끝임

둥근 부분이 전혀 없음

하지만 roundness를 좋아해서 웹사이트에 자주 사용함

font가 약간 두꺼움

medium, bold, semibold, normal 등등 많이 있지만 medium으로 함

input을 해줌

그러기 위해서 input class를 지워줘야함

전에 input class를 만들어줬었음

Tailwind 안에 있음

우리가 만든 것임

저걸 바꿔줘야함

className을 먼저 변경하고 다시 만들어봄

round는 없음

어떠한 round도 없어야함

이제 padding이 필요함

padding이 거의 같아 보임

그럼 모든 방향으로 padding 7정도 해봄

border를 해봄

border를 해주고 border의 색은 gray가 됨

border-gray-400으로 함

너무 padding이 과했음

3정도로 함

괜찮아 보임

border가 너무 어두운 것 같으니까 200으로 함

이제 중요한게 있는데 border-2를 해주고 font size는 medium으로 해줌

충분히 괜찮은 것 같음

font-light를 해줌

focus:outline-none을 함

focus:border-gray-500 해줌

password도 똑같이 해줌

그럼 class를 또 만들어줌

Tailwind를 컴파일 해야하니까 서버를 다시 실행해줌

괜찮은 것 같음

탭할 때 transition이 없음

하지만 uber는 color에 약간 transition을 가지고 있음

transition 해줌

transition을 보면 transition-colors 옵션이 있음

background-color, border-color, color, fill, stroke의 transition을 주고 opacity, shadow, 모든 transform 같은 것들이 존재함

transition-colors를 해줌

이제 우리도 color transition을 갖게 됨

멋진 transition이 있음

복사해서 tailwind에 붙여 넣어줌

쿠킹 클래스가 돌아왔음

login 버튼을 해줌

login 버튼은 보면 회색임

아직 준비가 안 됐으면 회색임

그러면 회색 버튼은 기본적으로 disable인 상태가 될테고 버튼 사용이 가능해지면 초록색이 됨

btn class 앞에 버튼을 만듦

배경을 해주면 green임

green을 해봄

다른 green임

먼저 text-white를 해주고 input이 가지고 있는 padding이랑 똑같이 해줌

input의 padding이 위 아래는 3임

input은 padding이 몇인가

padding이 너무 작은 것 같으니까 4로 해줌

괜찮은 것 같고 다음으로 넘어감

green이 마음에 안 듦

나중에 바꿔줌

green부터 해줌

700이 더 나을 것 같음

약간 더 생기 넘치는 다른 종류의 초록색을 사용해야 할 것 같음

하지만 불행히도 tailwind에는 존재하지 않는 것 같음

사실 가능한데 확장해줘야함

거기에는 에메랄드나 강철 같은 다양한 종류의 색들이 존재함

여기 있는 것은 기본적인 색이고 더 추가가 가능함

일단은 green 600으로 타협함

버튼을 어둡게 만들어주는게 필요함

transition 추가하는거 잊지 말고 hover:bg-green-800 해줌

나쁘지 않음

너무 진한거 같음

글씨가 약간 더 커야할 것 같음

이거만 하면 끝임

text-lg가 맞는지 잘 모르겠음

이제 우리의 nuber eats를 얻게 되었음

베이킹 해야함

잘라내고 btn으로 만들어줌

작업하는게 아님

지금 우리는 베이킹 해주는 것임

터미널에 npm run start 입력

버튼 비활성화를 잊었음

비활성 상태가 필요함

그건 다음 강의에서 보여줌

## 15.11 UI Clonning part Two

저번에 봤듯이 초록색이 마음에 안 듦

초록색이 좀 이상함

다른 색이 필요한 것 같음

그럼 기본 색상을 보여줌

바로 tailwind의 기본 색상임

tailwind는 gray, red, yellow, green, blue, indigo, purple, pink를 50부터 900까지 제공해줌

꽤 다양함

그런데 가끔 더 많은 색을 추가하고 싶을 때가 있을 것임

그럴 때 나만의 color palette를 만들거나 tailwind 사이트에서 제공하는 color palette를 사용하면 됨

tailwind 사이트에서 제공해주는 color palette를 보여줌

True Gray라는 것도 있음

Warm Gray도 있고 처음 보는 것도 있고 Amber도 있음

Amber랑 Yellow랑 다름

Orange랑도 좀 다름

Lime도 있음

전에는 없었던 Emerald랑 Teal, Cyan, Light Blue, Violet, Fuchia 등등 엄청 많음

그래서 우리가 원하는 색은 에메랄드 색임

라임일 수도 있음

라임이 더 맞는 것 같음

라임 맞음

그러면 tailwind를 어떻게 확장해줄까

우선 tailwind color를 import 해줘야하는데 이미 tailwind에 있어서 설치는 되어있음

어떤 부분을 확장할건지 tailwind.config.js에 써주기만 하면 됨

우리의 경우는 colors임

extend를 써주는게 중요함

extend 객체 내부에 원하는 것을 넣어줘야함

왜냐하면 우리는 확장을 하고 싶어서 그럼

교체가 아니라 확장임

그럼 색을 확장하기 위해서 라임 색을 추가해줌

colors.lime을 써줌

터미널에 npm run start 입력하여 재시작을 해줌

재시작이 됐고 background에 lime option이 생김

그런데 좀 별로임

좀 달라도 되니까 라임 500으로 감

우리는 라임 색을 얻었음

이게 확장하는 방법임

우리가 사용한 멋진 extension이 자동 완성을 해줌

이 extension은 tailwind config file을 읽음

그럼 계속 해보면 방금 우리는 tailwind를 확장했고 green 대신 lime으로 요리해봄

Tailwind CSS를 다시 compile 해야하니까 서버를 다시 실행해줌

터미널에 npm run start 입력

매번 해줄 필요는 없음

form이 유효하지 않으면 버튼은 비활성화가 됨

매우 중요한 부분임

어떻게 접근하는지 보여줌

그리 나쁘지 않음

그런데 라임 대신에 에메랄드를 할 걸 그랬음

버튼이 눌리면 안 되고 못 생긴 회색으로 해줘야함

어떻게 form 상태를 얻어야하는지 보여주고 싶음

마법 같은 form의 기능 중에 formState를 얻을 수 있음

formState가 가지고 있는 것을 보면 isDirty가 있음

이건 뭔가 써졌다는 것임

isValid가 정확히 우리가 원한 것임

될지 모르겠는데 btn 써주고 나서 ${!formState.isValid}면 background를 gray로 해줌

gray 300으로 해봄

더 좋음

문제가 하나 있는데 hover over가 문제임

그럼 버튼을 component로 만들어봄

isValid랑 loading까지 자주 사용함

그래서 컴포넌트를 만드는게 좋은 것 같음

components 폴더에 button을 만들어줌

form-button이라고 할까

어디서든 쓸 수 있게 button.tsx로 함

type은 React.FC가 될 것임

ButtonProps는 나중에 만듦

props가 있을거고 button을 return 해야하는데 좀 이상함

그럼 interface를 만듦

기본적으로 canClick이 필요함

이것은 type이 boolean임

그리고 loading도 필요하고 type은 boolean이 될 것임

btn을 좀 바꿔줌

btn을 tailwind로부터 가져와줌

dynamic class가 되어야해서 class를 요리하기는 싫음

그 전에 먼저 만약 loading이면 "Loading..."이라고 해주고 loading이 아니면 actionText를 넣어줌

그 다음은 valid거나 valid하지 않을 때 ${canClick} 클릭할 수 있을 때는 뭔가를 갖고 클릭할 수 없으면 background gray 300 해줌

react import가 필요함

이제 btn class에서 모든 class를 가져옴

약간 분리해줌

background lime이랑 hover over는 사람들이 버튼을 클릭할 수 있을 때만 보여짐

margin top은 필요 없음

버튼은 canClick, loading, actionText를 가지고 있음

canClick은 {formState.isValid}할 때 가능함

그 다음은 loading인데 loading은 mutation을 front에서 기다리는 것임

마지막은 actionText이고 Log in이라 함

이제 멋진 버튼이 생겼음

cooked class는 다 됐음

잘 동작하는 것 같음

문제가 있음

버튼이 안 눌림

property를 pointer-events-none이라고 부름

버튼을 누를 수 없을 때 추가해줌

focus:outline-none 해줌

안 눌림

왜 formState.isValid가 동작하지 않을까

documentation을 읽어봄

form은 valid함

그런데 왜 동작하지 않을까

동작하지 않는 이유는 form은 우리가 submit을 하기 전까지 valid하지 않기 때문임

documentation을 보면 form에서 사용 가능한 magic value 중에 formState가 있음

isValid는 mode에 영향을 받음

그럼 mode가 무엇일까

mode는 많은 option이 있음

mode는 onChange, onBlur, onSubmit, onTouched가 될 수 있음

submit event가 일어날때 validation이 일어난다고 함

그래서 submit을 하기 전까지 form은 invalid임

이게 하나의 예시고 다른 것은 onBlur도 있음

onBlur는 안에 초점이 있다가 밖으로 나온 것임

이게 onBlur임

또 다른 것은 onChange인데 모든 입력이 변할 때마다 validation을 체크한다는 것임

그리고 onTouched는 첫 blur event에 발생함

따라서 isValid는 onChange나 onBlur에만 일어남

그럼 onBlur로 mode를 바꿔주러감

validation을 언제 실행할지에 따라 다름

useForm에다가 mode: onBlur 해줌

이제 동작할 것임

잘 동작함

혹은 onChange를 해줄 수 있음

이 말은 input마다 항상 변화해준다는 것임

uber랑 유사한데 validation이 즉각적으로 일어남

원하는거 하면 됨

Log in도 loading으로 변하는 것 보임

잘 동작하고 User not found라 나옴

꽤 괜찮은 것 같음

이제 마무리함

form 아래 있어야하고 간단한 div로 만들어봄

Create an Account 써줌

link를 사용할건데 react-router-dom을 사용해줄 것임

to가 필요함

Create an Account라고 나옴

이제 className을 해줄건데 green이고 밑줄이 있음

색을 바꿔주고 underline을 해줌

자동완성이 안 되면 스페이스를 누르면 됨

hover는 underline이 되어야함

margin-top만 주면 완벽할 것 같음

form에 margin-bottom을 주는게 좋음

mb-3 해줌

괜찮아 보임

margin bottom 5로 해줌

버튼이랑 form 사이에 약간 공간이 더 있어야겠음

그래도 괜찮아 보임

Create account가 나오는지 봄

create-account로 왔음

## 15.12 Create Account Mutation

이번에는 react-helmet을 설치해봄

react-helmet이 무엇을 해주냐면 title을 변화시켜줌

title이 항상 react app이었는데 이제 업데이트 할 수 있음

먼저 index.html을 수정해줘야함

그럼 react가 전달을 해줌

Nuber라고 함

터미널에 npm i react-helmet@6.1.0 입력

설치가 되는동안 어떻게 계정을 생성하는지 봄

Uber Eats에서 계정을 생성하는 것은 매우 쉬움

휴대폰 번호만 필요한데 우리는 안 했음

계정을 생성하기 위해서 email, password, role이 필요함

그럼 login에 있는 것을 전부 복사함

helmet이 다 설치되었으니 Helmet을 해줌

일단 import 해줘야함

import Helmet from "react-helmet"을 입력함

react-helmet에 typescript definitions가 존재하지 않음

터미널에 npm install @types/react-helmet@6.1.0 입력

이제 helmet을 사용할 수 있음

document의 head를 변경할 수 있게 해줌

이제 nuber에는 Login Nuber Eats가 나옴

login.tsx에 있는거 전부 복사해서 create-account에 붙여넣음

그리고 loginMutation을 지워줌

createAccountMutation으로 바꿔줌

꼭 이렇게 길게 할 필요는 없음

이제 playground에 가서 docs를 보면 Dish의 createAccount가 보임

CreateAccount는 ok랑 error를 가짐

CreateAccount는 input이 필수임

$createAccountInput 해줌

$createAccountInput이 입력이 됨

createAccountMutation을 가지고 있음

createAccountInput의 type은 CreateAccountInput이고 input을 보내면 ok랑 error를 받음

CREATE_ACCOUNT_MUTATION으로 바꿔줌

일단 type도 지워줌

onCompleted도 아직은 필요 없음

우리의 form은 email, password랑 role도 필요함

하지만 role은 나중에 해줄건데 그 이유는 조금 뒤 보여줌

Welcome back 대신에 Let's get started로 바꿔줌

Let's get started 해줬고 Create Account라 해줌

우리는 이미 email이랑 password는 있고 role은 나중에 해줌

button은 일단 false로 해줌

error도 아직 필요 없음

Already have an account?를 적어줌

CreateAccount를 export 해줘야함

New to Nuber? Create an Account 링크가 보임

Let's get started가 나오고 Log in now가 보임

create account에 있는 버튼을 Create Account로 해줌

아직 복사해서 붙여넣고 더 이상 안 쓰는 많은 부분을 지워줬을 뿐임

다 됐음

type들을 얻고 싶기 때문에 codegen을 한번 실행해봄

터미널에 npm run apollo:codegen 입력함

generated를 보면 UserRole이 있음

UserRole이 왜 enum을 갖고 있냐면 우리의 Schema로부터 오기 때문임

input에서 role이 필요한데 이 role은 UserRole임

잘 동작함

email, password가 있고 role은 UserRole type이라는 것임

이제 알 수 있는 것은 우리의 form조차 backend의 DTO의 enum에 의존할 거라는 것임

우리가 enum을 생성했기 때문임

option은 Client, Owner, Delivery중 하나가 될 것임

option을 안쪽으로 넣어줌

잘 되는지 봄

잘 됨

전부 backend로부터 옴

나는 frontend를 했지만 그 정보는 전부 backend로부터 왔음

내일 만약 backend 개발자가 role을 하나 더 추가해도 아무 것도 해줄게 없음

오직 내가 할 일은 type을 생성해주는 것임

그게 끝임

그럼 모든 enum이 나옴

style을 좀 줘봄

className을 넣어줌

input을 주고 어떻게 되는지 봄

나쁘지는 않은데 괜찮아 보임

register를 해줌

default value를 넣어줘야할까

하지 않음

form을 열 때 default value를 설정해줌

defaultValues를 해주고 role은 UserRole.Client로 해야함

기본 값이어야함

우리는 create account form을 만들었음

정말 간단했고 너무 아름답고 엄청 빠르게 만들었음

정말 빠르게 만들었고 완전 수준급임

typescript의 도움으로 혼자서 회사를 차릴 수 있음

하지만 아직 끝나지 않았음

value가 잘 동작하는지 보기 위해서 watch를 해줌

inspect 해봄

ILoginForm을 ICreateAccountForm으로 바꿔줌

email을 써줌

email이랑 password가 나옴

name해주는거 깜빡함

select tag에 name이 필요함

모든 register는 name이 필요함

name은 role이랑 같아야함

그래서 개발자 도구 Elements에 나타나지 않았던 것임

child는 unique한 key prop이 필요함

새로고침 하면 email, password, role을 이미 가지고 있고 role은 default로 설정이 되어있음

email이랑 password도 마찬가지로 default로 설정해줄 수 있음

전혀 문제가 되지 않음

모바일에서 기본 값이 나타남

email, password가 있고 role은 client로 함

완벽하게 동작함

내일 backend 개발자가 role을 한개 더 추가한다고 해도 전혀 수정할 필요 없음

다음 영상에서 이 mutation을 테스트해봄

## 15.13 Create Account Mutation part Two

이번에는 email pattern을 검색해봄

email의 유효성을 검사하려고 함

엄청 김

그런데 99%로 정확함

create account에 email 검증을 해주고 싶음

pattern을 붙여넣어줌

pattern에서 Unnecessary escape character warning이 발생하는데 \[를 [로 수정하여 해결함

login에도 마찬가지로 input에 똑같이 해줌

이제 에러 메세지를 하나 더 추가해야함

{ errors.email?.type === "pattern" }이라 해줌

이제 create account도 해줘야하니 복사함

우리는 최소 암호 길이 같은 것은 안 해줌

다른 것은 하나도 안 해줄거고 mutation의 typescript를 추가해줌

이미 실행해서 보면 createAccount가 만들어져 있는 것을 볼 수 있음

우리는 createAccountMutationVariables랑 createAccountMutation을 가지고 있음

createMutation은 gql에 있는 이름으로부터 왔음

원하는 이름으로 해줄 수 있음

mutation은 이미 만들었고 createAccountMutation이랑 createAccountMutationVariables를 해줌

전에 했던거랑 마찬가지로 { loading }을 추가해줌

if (!loading)이면 createAccountMutation을 호출함

variables도 넣어줌

variables: createAccountInput을 써줌

createAccountInput은 email, password, role이 전부 필요함

하지만 고맙게도 우리는 useForm으로부터 얻은 getValues를 이미 가지고 있음

그럼 불러와봄

{} 안에다가 email, password, role을 써줌

button에 있는 loading을 바꿔줌

loading은 loading이 되고 나머지는 똑같이 두면 됨

이제 onComplete는 어떻게 될까

onComplete를 만들어봄

onComplete는 data와 같이 제공됨

이 data는 createAccountMutation으로부터 옴

onComplete를 등록해줌

const { createAccount: { ok, error } }라고 함

createAccount는 ok랑 error 딱 2가지만 가짐

만약 ok면 user를 login page로 redirect 시켜줌

login page로 redirect를 시켜주는 것을 해줌

error일 경우에는 신경쓰지 않아도 괜찮음

login에 있던 에러랑 같은 방식으로 보여줌

mutation으로부터 에러를 가져옴

button 아래에 둠

data: createAccountMutationResult를 써줌

nest.js에서 우리는 긴 이름을 사용했었음

그러니 익숙할 것임

테스트를 해보기 전에 위로 올라가서 redirect를 해줌

redirect를 하기 위해서 history API를 사용해줌

useHistory로부터 옴

history.push("/login")으로 user를 login page로 보내줌

잘 동작하는지 확인해봄

만약 우리가 login에 성공하게 된다면 token을 출력해줌

그런데 실제로 로그인도 하고 싶음

이 섹션의 초반에 했던건데 live variable을 해줬었음

live variable이 있음

LoggedInVar를 호출해서 true를 넘겨줌

token을 가지고 있음

우리는 JWT를 얻을 수 있음

그럼 테스트를 해봄

email은 itnico.las.me@gmail.com, password는 121212, type은 client로 함

잘 작동함

계정 생성을 했고 이제 로그인 해봄

console창을 열면 warning이 좀 있는데 나중에 고침

로그인이 됐음

항상 처음에 실수를 하고 고침

로그인했고 잘 동작함

variable을 변경해줬음

token도 있음

token에 대해서는 다음 강의에서 이야기함

계정을 만들었고 로그인까지 성공했음

## 15.14 Saving the Token

이제 계정 생성과 로그인을 다 했음

유저들에게 계정이 만들어지면 로그인 화면으로 이동된다는 것을 알려주기 위해 alert를 넣음

우리는 계정을 다 끝냈고 이제 logged-in-router에 대해 얘기해봄

토큰도 state에 저장해줘야함

아직 authentication을 끝내지는 못했지만 거의 다 왔음

로그인하면 token을 가지게 되고 출력해봤음

그냥 token을 get하는 대신에 token을 저장하고 싶음

isLoggedInVar을 변경하는 것처럼 token도 똑같이 해주고 싶음

apollo.ts fields에 보면 isLoggedIn도 있고 token을 만들어줌

read할거고 이 함수는 무엇을 리턴함

token 변수를 만들어줌

jwtToken 혹은 authToken이라고 해줘도 됨

이게 더 나은 것 같음

makeVar를 해주고 이것은 기본값을 가질건데 나중에 보여줌

아직은 기본값이 없음

우리 앱이 시작될 때 authToken을 확인하는 방법도 있음

localStorage.getItem("token")으로 확인해봄

그게 기본값일 것임

localStorage에 아무 것도 없으면 어떡하지

Console에서 localStorage.getItem("lalalala")을 실행하면 null을 받음

우리의 앱 초반에 유저가 로그인하지 않았을 때 authToken은 null이 됨

Boolean(localStorage.getItem("lalalala"))는 false를 리턴함

token이 isLoggedInVar에 영향을 미치기 때문에 null을 boolean으로 변환한 것임

token을 가져옴

isLoggedInVar에 Boolean(token)이라고 해주고 authToken에는 token이라고 함

유저와의 첫번째 interaction에서는 isLoggedInVar는 false일거고 authToken은 null임

이게 중요한 이유는 내가 다시 돌아올 때 로그인 되어있는 상태이길 바라기 때문임

다시 로그인하는 것이 싫음

localStorage에서 token을 가져옴

isLoggedInVar를 만들고 token을 가졌느냐에 따라 boolean 값을 저장하고 authToken에 토큰 값을 저장함

localStorage의 기본 값임

token일 수도 null일 수도 있음

무엇을 더 하기 전에 constants.ts 파일을 만들고 export token을 해줌

많은 곳에서 접근할거기 때문에 더 정확하고 싶으면 LOCALSTORAGE_TOKEN이라고 해줌

LOCALSTORAGE_TOKEN을 넣어줌

다음으로 넘어감

이것이 우리의 apollo client cache임

우리가 로그인하면 token을 바꾸고 싶음

일단 localStorage.setItem(LOCALSTORAGE_TOKEN, token)이라고 해줌

그리고 token은 null일 수도 있으니까 ok를 확인해줌

그 다음에 authToken이라 하고 기억해야할 것은 reactive variable임

token으로 설정해줌

이제 다음으로 넘어갈 수 있음

token을 저장하고 있음

다음에 우리가 새로고침을 하면 로그인 되어있을거고 토큰이 localstorage에 저장되어있음

우리 앱에 token이 뭐라고 말하는지 알 수 있게 nuber-token이라고 함

다음 apollo 파일에 console.log를 해줌

이제 console.log에 isLoggedInVar와 authTokenVar의 기본값을 볼 수 있음

로그인하면 실행됨

token을 설정하고 reactive variable에 token을 업데이트하고 isLoggedInVar도 업데이트함

email과 패스워드를 입력해봄

로그인하면 로그인, 로그아웃을 볼 수 있음

이제 콘솔창을 보면 기본값을 볼 수 있음

warning은 고쳐야함

isLoggedInVar의 기본값은 false임

우리는 기본값으로 로그인 되어있지 않고 authTokenVar의 기본값은 null임

이것은 앱이 막 시작했을 때의 상태임

이제 새로고침에서 기본값이 무엇인지 알아봄

새로고침을 했지만 로그인이 되어있음

이것이 처음에 기본값을 설정하는 것의 힘임

사람들이 로그인 되어있고 기억되고 싶으면 그렇게 할 수 있음

form에서 할 수 있음

예로 들자면 form에 remember me를 만듦

이제 새로고침해도 기본으로 로그인 되어있고 토큰이 있음

일단 에러를 고치고 싶음

react helmet 때문임

react helmet async를 검색해봄

고치는 방법은 react-helmet-async를 사용하는 것임

warning이 있기 때문임

warning은 에러가 아님

그냥 경고임

그러니까 내가 고치고 싶은지에 달렸음

warning이 빨간색임

error처럼 보이지만 그냥 경고임

앱이 작동을 멈추지는 않음

터미널에 npm i react-helmet-async@1.0.7 입력

helmet을 바꿔줌

일단 바꿔봄

빨간 줄이 잠시 좀 보임

설치된 후에 react-helmet-async가 typescript definitions가 있는지 확인함

이제 HelmetProvider를 만들어야함

이것은 helmet을 이용하는 컴포넌트 위로 와야함

index.tsx 파일에다 적용함

HelmetProvider를 가져옴

helmet은 안 이용함

이제 아무 것도 불평하지 않음

모든 것이 잘 작동함

로그아웃하면 모든 것이 변함

다시 한번 말하지만 이것은 조그만 버그임

이제 토큰을 어떻게 사용할까

request를 이제 보내야함

우리의 작은 loggedInRouter가 request를 보내서 "이 사람은 누구일까"라는 질문에 답을 얻어야함

graphql에 보내야한다는 것임

그것은 다음 영상에서 다룸

## 15.15 Using the Token

우리가 사용할 쿼리는 me임

me 쿼리를 사용할거고 완전 유용함

우리가 user에 알아볼 때 완전 중요함

맨 위 loggedInRouter에 사용함

유저가 로그인하면 프로필을 가져옴

email, role, verified 등을 가져옴

중요한 것들을 먼저 가져온 후에 결정함

이제 쿼리를 적어봄

ME_QUERY라고 함

gql``이라고 한 다음 이름을 meQuery라고 함

아무거나 해도 됨

우리 백엔드의 me가 됨

me를 가져오고 싶고 유저의 id랑 email을 가져옴

role과 verified를 가져옴

이제 apollo codegen을 실행시킴

타입을 가져오고 싶음

터미널에 npm run apollo:codegen 입력

타입이 있는지 확인해봄

apollo codegen을 실행시켜봄

이제는 편리하게 타입을 사용할 수 있음

쿼리를 적음

data, loading,error를 가져올거고 useQuery를 사용함

ME_QUERY를 넣어줌

에러는 있을거고 곧 보게 될거기 때문에 에러를 콘솔에 출력해봄

다시 돌아와서 새로고침 해줌

error가 나와있고 undefined라고 나오는데 LoggedInRouter로 가봄

data, loading 순으로 undefined가 나온 것 같음

forbidden resource가 있음

이게 발생하는 이유는 me resolver를 backend에서 호출할 때 토큰없이 호출해서 그럼

backend의 restClient.http에 me를 query해줌

```javascript
query {
   me {
      email
   }
}
```

우리에게 토큰이 없기 때문임

백엔드를 토큰 없이 콜하기 때문에 forbidden이 나옴

일단 apollo에서 무엇을 지우고 넘어감

console.log 이제 필요없음

LoggedInRouter를 발전시킴

일단 loading함

이제 라우터가 로딩할 때의 스크린을 만듦

if(loading)이라 할 때 Loading을 return을 해줌

vh는 viewport height라는 것임

스크린의 높이를 말함

full이면 parent의 100% 높이가 됨

하지만 LoggedInRouter의 parent는 높이가 없음

가끔 사람들이 높이를 100%로 하고 싶어하는데 부모에게 높이가 없기 때문에 body, parent까지 가서 각각 높이를 설정해줘야함

이런 과정은 매우 짜증남

이 화면은 로딩 중이라고 뜰거고 그런 다음 className에 flex를 넣어줌

justify-center도 해주고 items-center를 해줌

새로고침하면 보다시피 완전 빨리 로딩했음

완전 빠름

true로 설정해줌

ubereats가 하는 방법임

font를 써주고 medium으로 설정해줌

text-xl로 설정함

이러면 우버이츠 스타일이 완성됨

tracking 할 수 있나

tracking white 할 수 있음

글자들에 공간이 더 많아짐

Tailwind에는 tracking-wide, wider, widest 설정도 있음 

widest하면 어떻게 되지

그냥 white로 설정함

유저 정보를 가져오는동안 로딩하도록 해줬음

그게 1단계임

이제 에러가 있음

에러는 graphql 때문이 아니라 토큰을 보내지 않아서임

토큰을 보내는 방법은 뭐가 있을까

apollo client에서 설정해줘야하는 문제임

apollo client에게 request 보내는 것에 우리는 아무거나 보내고 싶고 request에 무엇을 추가하고 싶다는 것을 설정해줘야함

apollo client를 변경하고 헤더를 보낼 수 있음

apollo.ts에서 apollo client가 하는 모든 것을 변경할 수 있음

변수에서 토큰을 찾고 모든 request 헤더에 토큰을 넣어줌

이 방법은 apollo client를 조금 변경해서 할 수 있음

graphql에 uri를 설정하면 uri를 apollo httpLink에 보낼 수 있음

httpLink를 만들 수 있고 apollo client에서 나온 것임

모든 것에 import 되어있고 대부분 설정할 필요가 없음

그런데 가끔 변경해야할 필요가 있음

링크를 바꿔줘야함

subscription을 할 때도 subscription은 web socket을 통해 구현되기 때문에 web socket 링크도 만들어줘야함

그런데 감사하게도 완전 쉬움

일단 http link를 만들어줘야함

httpLink = createHttpLink를 해줌

apollo client에서 왔음

uri가 필요함

이제 다음으로 넘어갈 수 있음

apollo client에서 uri를 제거하고 우리의 링크인 httpLink로 대체함

다 괜찮은데 authLink를 생성해야함

참고로 apollo link package에서 온 것임

authentication을 위한 여러 옵션을 가지고 있음

보면 많은 종류의 링크를 가지고 있음

http, state, rest, error 등의 링크가 있음

context를 우리가 사용할거고 apollo-link-ws를 나중에 사용하게 됨

지금 할 것 아님

우리가 필요할 때 함

이제 authorization link를 만듦

setContext를 사용함

apollo client link context에서 옴

setContext는 모든 client가 만든 request의 context를 set함

header를 보낼 수 있음

원하는 것 아무거나 설정해줄 수 있음

모든 request에 발생함

localStorage에서 가져오고 있음

우리는 토큰을 가지고 있으니까 괜찮음

이전 header를 모두 return 해야함

그 다음에 "x-jwt"를 써줌

그 전에 먼저 헤더를 출력해봄

예를 들면 여러 링크를 사용하는 방법은 그냥 하나의 링크에 concat를 해서 계속 추가해주는 방법이 있음

일단 request에 헤더 설정을 하고 그 다음에 httpLink에서 사용함

links에 대해 전문가 수준으로 알아야하는 것은 아님

websocket link를 만들어야하니까 어차피 다시 해봄

이제 headers를 출력함

전에 있던 headers를 리턴함

새로고침하고 inspect로 가봄

출력해보면 headers가 없음

console.log로 돌아옴

보다시피 헤더가 없음

그 말은 우리는 헤더를 보내고 있지 않음

x-jwt를 적어줌

그리고 잊지 말고 토큰을 적어줌

그게 끝임

token만 적어줄 수도 있지만 token || ""이라고 해줌

로그인 되어있지 않은 상태에서도 이 request는 발생하기 때문임

null 혹은 undefined가 아니라 값이 나올 수 있도록 해줌

undefined를 보내면 어떻게 반응할지 모름

authTokenVar()는 우리가 설정한 var를 읽어옴

모든 것을 kill하고 새로고침함

다시 출력해줌

에러가 없음

그 뜻은 data에 무엇인가 있다는 것임

me가 보임

email, id, role, verified가 있음

meQuery 타입을 추가해야함

data는 meQuery임

마지막으로 error를 적음

!data도 추가해줌

만약에 데이터가 있으면 스크린에 보여줌

data.me.role을 해줌

client라고 나왔음

새로고침 해줌

client가 나왔음

이제 authentication이 끝났음

다시 말하자면 link는 그냥 연결할 수 있는 것들임

http, auth, web, sockets 링크를 가짐

authLink라고 하지 않아도 됨

potatoLink라고 이름 지어도 됨

그냥 context를 설정하는 것임

## 15.16 Routers and 404s 

이제 user의 역할을 앎

우리는 그냥 user router, restaurant router 그리고 driver router만 만들면 됨

Pages를 만들고 싶음

그리고 이 Pages들은 user의 역할에 따라서 나눠짐

예를 들어서 client 페이지가 됨

우리는 사용자 혹은 고객이 접속하자마자 처음으로 뜨는 화면인 restaurants.tsx 파일을 생성함

엄청 간단한 route를 만들어봄

그리고 이 화면이 무엇을 하는지 설명해줌

Restaurants 변수를 만들어주고 Restaurants를 써줌

로그인은 user에 있는 것임

우리는 항상 있을 Header를 만들었고 접속하는 사람이 드라이버든 레스토랑 주인이든 손님이든 header가 보임

그리고 카테고리도 있음

보다시피 아이콘 이미지가 쓸만함

그래서 원한다면 저장하고 back-end에 업로드해도 됨

카테고리가 있을거고 많은 식당들을 볼 수 있게 만듦

일단 router를 만듦

logged-in-router.tsx 파일 안에 있어야할 거 다 만듦

파일 용량이 커지면 우리는 다른 파일로 바꿈

우선 Client Router를 만듦

너무 커지면 그 때 바꿈

우선 router를 import 해봄

우리는 BrowserRouter를 추가해줌

switch를 만들어줌

client routes가 더 나음

fragment가 될거고 parent없이 많은 element를 동시에 return 할 수 있게 된다는 것임

우선 data.me.role === "Client"를 입력함

true면 ClientRoutes가 보이게 할 것임

지금 client route가 비어있음

그래서 route를 만들어봄

첫번째 route는 restaurants가 됨

path가 됨

그런데 문제가 생겼음

보다시피 지금 /login 상태임

그런데 /login 상태에서 보이면 안 되는 restaurants가 보임

이것을 몰랐을 수도 있음

그런데 만약에 localhost로 들어가면 index 페이지가 로그인으로 뜨는 것을 볼 수 있음

create account를 눌러보면 create account로 들어가짐

그런데 log in 눌러보면  /login으로 됨

home이 login 페이지니까 이렇게 되면 안 됨

이것을 진작에 눈치채지 못 했을 것임

그런데 일부러 이렇게 한 것임

머리로는 이해가 가는데 route 상에서는 아무렇게나 입력해도 login 페이지가 뜸

router가 만들어진 방법 때문에 그럼

logged-out router를 보면 path가 같음

path에 대해 말하자면 path는 /만 의미하지 않음

react router의 원리는 path가 무엇인가를 포함하고 있다 혹은 있다면 이라고 전제를 두고 있음

예를 들어서 만약에 /create-account 같은 path가 있으면 아래에 있는 route랑 위에 있는 route가 어떤 공통점을 가지고 있음

/를 가지고 있음

/create account에 가면 Create account라고 있음

그래서 react router는 멈춤

그리고 switch가 있어서 그럼

switch가 있으면 한번에 route 하나만 render하라고 알려주는 것임

/create-account로 가면 react router는 component를 발견하고 멈춤

그런데 만약에 /lalalalalal를 입력하면 react router는 계속 찾을거고 가장 비슷하게 찾은 것은 /something이 될 것임

그런데 결국 /임

exact를 넣음

exact를 넣으면 react router는 nothing으로 시작하고 /가 있고 nothing으로 끝나는 것만 받아들임

Log In Now를 누르면 아무 것도 안 보임

의도하던대로임

나중에 혹은 지금일지는 잘 모르겠지만 not found routes를 back to home으로 redirecting하는 법에 대해서 말할 것임

exact가 빠졌음

그런데 우리는 실수한 것과 잘못 작동되는 것을 발견하고 나서야 왜 exact가 필요한지 알게 됨

exact를 설정함

그리고 우리는 create account의 코드를 조금 바꿈

login을 push하는게 아니라 nothing으로 push함

그리고 똑같은 것을 already have an account에다 할 것임

login을 없애고 /를 넣음

그런데 아직 문제가 있음

만약에 내가 원한다면 404를 표시할 수 있음

"This page doesn't exist" 같은 것으로 404를 표시함

아니면 사용자가 원하는 페이지로 다시 돌아가게 redirect 할 수도 있음

두가지 방법을 다 알려줌

우리는 첫번째 방법인 404를 해봄

로그인 표시가 있으면 안 됨

404가 있어야함

그 다음에 우리는 redirect를 함

새로고침 한 다음 404를 해봄

pages에 가서 404.tsx를 입력함

오랜 시간이 걸리지 않음

Tailwind 덕분에 멋있게 잘 될 것임

div를 할거고 늘 하듯이 className 입력하고 스크린의 세로 길이 설정함

내가 만든 텍스트를 중앙에 놓으려고 한 것임

우리는 span 안 씀

h2를 넣음

Page Not Found라고 적어줌

이제 링크를 만듦

go back home을 함

그리고 arrow를 만듦

이제 이 페이지는 많은 router에서 쓰일 것임

logged-in router에도 logged-out router에서도 쓰일거고 그냥 모든 곳에서 쓰임

그래서 어떻게 하지

진짜 쉬움

예를 들어서 logged-out router에 가면 됨

그리고 route를 만듦

router 끝 부분에 path 없는 route를 만들 것임

이것은 NotFound가 됨

위에서 아래로 보이는거니까 코드 끝 부분에 있음

웹페이지로 가봄

incognito(시크릿 모드)로 localhost를 해봄

create account 있고 보다시피 잘 됨

그냥 주소창에 /potato라고 침

Page Not Found 페이지가 나왔음

flex container를 보면 됨

Flex Column을 빠르게 해봄

이제 크기를 늘려봄

font를 입력하고 굵기를 semi-bold로 하고 텍스트 크기는 xl로 만듦

margin bottom은 5로 함

3으로 바꿈

x-large는 아닌데 굵게 함

굵기는 medium으로 하고 텍스트 크기는 large로 함

margin bottom은 5로 함

조금 큰 거 같음

텍스트 크기는 그냥 base로 함

Go back home을 봄

Go back home에 className을 만들어줌

text 말고 hover:underline이라고 씀

그런 다음에 text-lime-500 해줌

링크를 이미 했던거 같음

Link component에 만들 차례인 것 같음

잘 되었음

xl을 2xl로 해봄

이제 home으로 돌아감

다음에 할 것은 redirection임

redirection은 route랑 비슷함

우리는 redirection을 logged-in router에서 작업함

이미 routes가 있음

redirect를 추가함

redirect는 react-router-dom이 제공하는 component고 from이랑 to 같은 props가 있음

우리 같은 경우는 특히 아무데서나 redirect하길 원하지 않음

우리는 모든 곳에서 redirect 할 수 있기를 원함

from을 지울거고 to를 넣음

route가 없으면 redirect to="/"를 찾을 수 있을 것임

이제 새로고침을 해보면 잘 안 됨

정말 흔한 실수임

client route가 fragment를 return하고 있는데 switch가 가질 수 있는 child는 route 밖에 없다고 되어있음

fragment가 될 수 없음

route여야 함

client routes는 fragment를 return하는 component니까 지금 같은 경우에는 client routes를 수정해야함

바꿀거고 방법은 쉬움

이제 client route는 여러 route를 가진 변수가 됨

client routes를 설정함

redirect는 될 것임

새로고침 해봄

잘 되는거 보임

이제 선택하면 됨

사용자한테 "이 페이지를 찾을 수 없다"라고 말해줌

아니면 그냥 redirect 해줌

페이지를 찾을 수 없다고 말하는게 더 좋은 것 같음

from potato일 때만 redirect 할 수 있음

lalalaa를 치면 potato가 아니니까 안 될 것임

이제 다 끝냈음

우리는 router 404를 완성했음

이제 Restaurant route함

## 15.17 Header part One

restaurant 스크린을 하는게 아니라 먼저 헤더를 만듦

header 컴포넌트를 만들었고 header에 있는 링크를 사용할건데 링크는 router 안에 있어야하기 때문에 switch랑 router 사이에 뒀음

router 안에 있어야함

아주 중요함

보이듯이 route에 어디가든 헤더가 어디에 있을 것임

header 컴포넌트를 만들고 싶었음

한번에 모든 컴포넌트를 만들고 싶지 않았음

초반에는 무엇을 해야할지 모름

header를 만들려면 "헤더가 얼마나 큰지 재보자"라고 생각하기 쉬움

이 경우에 높이가 80px임

하지만 tailwind는 80px라는 클래스 이름을 제공하지 않음

이게 나쁜 것이라는게 아님

나쁜게 아니라 사실 좋은 것임

Tailwind에서 사이즈를 정하는 방법은 %를 사용하거나 rem을 사용함

rem은 사이즈 단위임

content를 봐야함

content에 padding이 있음

처음에는 일단 padding을 봐야함

일단 padding을 보고 padding을 정하면서 원하는 결과/사이즈를 가지게 됨

이렇게 해야 responsive design을 쉽게 할 수 있음

그러면 모바일에서도 보기가 좋음

일단 보여줌

높이가 16px임

padding을 보니까 위 아래 모두 16px 같음

이제 클래스 이름을 정해줌

일단 배경을 빨간색으로 해줌

그러면 헤더를 보기가 쉬움

또 padding 위 아래를 설정해줌

보면 rem 단위 밖에 쓸 수 없음

rem에 대해 모를 수도 있음

em도 모를 수도 있음

em이 무엇일까

em은 예를 들면 document에 있는 font의 사이즈임

document가 16px라면 그 다음에 margin top을 1em으로 설정해주면 1em은 16px라는 뜻임

em은 document의 M임

그리고 document의 M은 16px임

그게 em임

사실 document가 아니라 em은 element의 폰트 크기에 좌우됨

예를 들어 div에 있고 폰트 크기가 50px라면 marginTop도 50px임

Tailwind css가 padding과 size를 이용하는 방법은 보다시피 rem임

rem은 root em이라는 뜻임

그 말은 div가 있어도 div의 폰트 크기가 50px고 margin top은 2em일 때 2em은 100px가 되지 않음

그렇게 되는게 아님

em은 100px일거고 rem은 body의 폰트 크기가 될 것임

body의 폰트 크기는 5px고 div는 margin top이 10px임

그게 rem과 em의 차이임

더 좋게 할 수 있음

margin bottom이라고 하고 2em이 될 것임

div는 margin top이 10px고 margin bottom은 100px임

그게 rem과 em의 차이임

rem은 body의 폰트 크기를 가져오고 em은 가장 가까이 정의된 폰트 크기를 가져옴

이제 헤더를 보면 16px 높이를 가지고 있음

그리고 기본 폰트 사이즈가 16px라는 것을 앎

모르면 h1을 inspect하면 됨

h1이 선택되어있음

computed를 눌러서 폰트 크기를 찾아봄

보다시피 16px임

그게 기본 폰트 사이즈의 베이스일 것임

이제 위 아래 padding을 16px하고 싶다면 py를 하고 1rem을 찾아야함

그 말은 padding 위 아래가 16px라는 것임

이제 패딩 위 아래가 16px임

완전 정확했음

container가 있음

완전 중요한 것임

이제 header는 full width가 됨

header container를 안에 만들어줌

div를 써줌

이제 header container가 됨

className이라고 하고 width를 full width라고 해주고 max-width도 해줌

max-width를 7로 해주고 새로고침 해줌

bg-yellow-500을 해줌

작동하기는 함

margin이 있음

mx-auto로 해주면 중간으로 옴

이렇게 하면 될 것 같음

이 정도로 container를 정해주면 될 거 같음

아마 더 필요할지도 모르겠음

max-w에 7xl말고 5xl을 해줌

5로 하면 너무 많음

원하면 max-w-screen을 large로 해줄 수 있음

이것이 tailwind에 따르면 가장 큰 스크린임

아니면 xl 스크린으로 해줌

이게 더 나음

같은 사이즈가 아니지만 괜찮은 것 같음

이제 container라는 className을 만들어줌

이 className은 w-full, max width, mx-auto를 가짐

그렇게 하면 container를 가질 수 있음

그냥 한 예시임

아니면 그냥 size를 외워서 해도 됨

사이즈는 끝임

이제 따라 만들어봄

해야할 것은 로고를 가져오는 것임

import 해줌

이미 되어있음

pages의 createAccount에 같은 사이즈를 사용하고 싶음

이것은 이미 해줬음

이번 기회에 logo 컴포넌트를 만드는 것은 어때

어디든 사용하고 있기 때문에 좋아보임

header 안에 넣어줌

너무 크니까 w-40으로 설정해줌

완전 커보임

다음 비디오에서 바꿈

header를 복제함

그 다음에 restaurant 페이지로 넘어감

## 15.18 Header part One

header로 넘어가기 전에 fontawesome을 설치하고 싶음

리액트 전용 fontawesome을 쓸 것임

많은 것을 설치해야하므로 그냥 복사함

그런 다음에 붙여넣기하고 설치할건데 한번 살펴봄

터미널에 npm i --save @fortawesome/fontawesome-svg-core@1.2.32 @fortawesome/free-solid-svg-icons@5.15.1 @fortawesome/react-fontawesome@0.1.13 입력

react fontawesome을 설치함

fontawesome의 리액트 컴포넌트임

icon set도 설치함

solid-svg-icons랑 fontawesome-svg-core 설치할거고 원하면 깃헙 로고나 인스타그램 로고 같은 회사 brands도 설치할 수 있음

그게 brands임

일단 어떻게 쓰는지 알려줌

user icon이 있음

중요한 것을 보여주고 싶기 때문에 빨리 header를 완성함

margin bottom을 지워줌

img의 width를 24로 바꿔줌

flex justify-between items-center를 적용해줌

검색 기능은 안 할거고 유저 이름을 만들어주도록 함

username이라고 써주고 나중에 아이콘을 넣어주도록 함

일단 username을 가져오도록 함

username이 너무 큼

작게 만들어줌

나중에 아이콘이나 링크를 넣어주도록 함

user를 request하는 방식을 좀 바꿔줄 필요가 있음

그렇게 한 다음 header에서 username을 가져옴

한가지 방법으로는 일단 LoggedInRouter를 가봄

이미 data가 있고 user가 있음

Header에 prop을 줄 수 있음

username이라고 쓰고 data를 쓰고 그냥 email을 사용함

me.email이라고 함

user name은 없음

이제 interface를 만들어봄

user가 아니라 email이라고 함

string 타입으로 함

React.FC를 추가해줌

그 다음 email이라고 적음

만약에 컴포넌트 중에 router에 접근할 수 없는게 있다면 어떻게 할까

email은 string이고 email을 적음

불평하는 곳이 없음

router 아래 바로 header가 나오고 router가 user를 제공함

그런데 만약에 form 같은 컴포넌트가 있는데 user에 접근하고 싶다면 어떻게 할까

만약에 예를 들어 notification, alert 기능이 있는 컴포넌트가 있고 "안녕, 니콜라스" 같은 것을 출력하려고 함

어떻게 할까

prop을 loggedInRouter에서 아래 컴포넌트까지 전달해야할까

당연히 아님

우리에게는 강력한 cache 엔진이 있음

우리는 강력한 apollo client가 있음

그래서 정보를 보낼 필요가 없음

그런데 만약에 누가 로그인 되어있는지 알고 싶은데 컴포넌트가 깊숙히 있다면 어떻게 할까

Router 안에 Route가 있고 그 안에 컴포넌트 안에 컴포넌트가 있다면 어떻게 할까

그리고 끝에 로그인 되어있는 유저의 email을 알고 싶다면 어떻게 할까

그러려면 일단 custom hook을 만들어줌

hooks 폴더를 만듦

useMe.tsx를 만들어줌

이제 이 hook이 무엇을 할거냐면 유저가 누구인지 알려주는 api를 호출함

많은 props를 보내줄 필요가 없음

hook과 apollo cache의 힘을 이용함

return을 써주고 useQuery를 리턴해줌

많은 import를 없앴음

많은 코드를 줄일 수 있었음

logged-in-router.tsx에서 할 것은 useMe()를 통해서 data, loading, error를 가져오는 것임

이제 useMe()라는 hook이 있음

보다시피 똑같이 작동함

그런데 이제 우리는 header가 아주 깊숙이 있다고 가정하고 router 안에 깊숙이 있다고 하고 아니면 props를 header로 보내고 싶지 않다고 해봄

header로 아무 것도 보내지 않음

우리가 해야할 것은 hook을 부르는 것임

그냥 data만 필요함

다른거 없이 useMe()를 사용할 것임

이제 data.me.email을 할 수 있음

이제 계속해봄

저장하고 새로고침하면 똑같이 작동함

지금도 좋음

그런데 좀 바보같다고 생각할 수 있음

api를 header에 부르고 싶지 않다고 생각할 수도 있음

우리는 쿼리를 두번 부르고 있으니까 그건 바보같음

새로고침부터 하고 inspect함

network에 가봄

새로고침 함

그 전에 disable cache를 선택해줌

graphql을 몇번 부르는지 알아봄

새로고침 하고 graphql을 찾아봄

첫 graphql의 Request Method에 options라고 나와있음

그런데 이것은 상관없음

우리가 호출한게 아님

무엇을 호출했는지 보자

우리는 me를 호출했음

apollo가 좋은게 무엇이냐면 apollo는 cache였다는 것을 알고 있음

그래서 알아서 우리한테 정보를 줌

그게 끝임

캐시에서 가져올 수 있게 할 수 있기 때문에 query hooks를 사용하는게 좋다고 생각함

만약에 없으면 graphql, apollo가 알아서 가져와줌

이제 우리는 id, email, role, verified를 주는 hook이 있음

cache에서 가져옴

header에서는 api로 가지 않고 캐시로 감

완전 좋음

props를 보내는 것을 방지할 수 있음

처음에 말한 것처럼 헤더에 props를 보내는 것은 상관 없음

그런데 문제는 컴포넌트가 많은 컴포넌트 아래에 있는데 user id나 email을 보내고 싶을때임

우리는 useMe를 많이 쓸 것임

alert를 작동시킬 때를 생각해봄

useMe()로 미리 저장된 것을 가져올 수 있음

로그인 정보를 가져올 수 있음

레스토랑 오너가 dashboard에 있을때 어느 레스토랑의 order인지 보여줄 수 있음

useRestaurant()라는 hook이 필요할지도 모름

cache에서 데이터를 가져올 수 있게 함

FontAwesomeIcon을 해줌

Icon이라고 해주고 fa를 치고 보면 모든 fontawesomeicon을 자동으로 import 할 수 있음

원하는 것을 찾을 수 있음

우리의 경우에는 User가 필요함

작동하는지 봄

실행시켜보면 User가 보임

icon을 찾는 방법은 간단함

예를 들어 address book을 원한다면 javascript가 원하는대로 적어주면 됨

faAddressBook처럼 원하는 아이콘을 가져올 수 있음

모든 것을 가져오는게 아니라 원하는 것만 가져오면 됨

이 경우에는 faUser가 됨

이제 user를 가져왔음

className을 적고 TailwindCss를 씀

text-2xl을 하면 너무 큼

이제 Link를 만듦

어디로 갈거냐면 /users/라고 적어줌

path가 필요함

my profile에 감

/my-profile이라고 적어줌

/my-profile로 감

스크린을 만들지는 않았지만 곧 만듦

my profile을 클릭하면 my-profile로 감

redirect가 작동하지 않음

이제 작동함

my profile이 존재하지 않으면 그 전으로 돌아감

404로 하면 더 좋을 것 같음

search를 만듦

이제 restaurants를 만듦

그러면 끝임

responsive로 만들어줌

모바일 화면에 margin이 없음

못 생겨보임

빠르게 고쳐봄

normal class names는 작은 사이즈를 위한 것임

small size일 때 왼쪽 오른쪽 padding을 5px로 줌

그런데 medium size에서는 padding을 0으로 줌

다시 말하자면 padding 왼쪽, 오른쪽을 5px로 해줬음

small 사이즈일 때 5px임

그런데 중간 사이즈면 padding이 0이 됨

화면을 좀 늘려봄

중간 사이즈 말고 큰 사이즈에서 padding을 0으로 줌

크게 늘려봄

안 변함

xl로 바꿈

padding은 0이 됨

잘 작동함

Tailwind는 모바일 우선 프레임워크니까 모바일을 우선으로 적용됨

그 다음에 데스크탑을 설정해줌

아주 중요함

data를 header에 사용을 안 했음

다음 섹션에서 함

editProfile을 함

거기서 apollo client를 어떻게 활용할지 배움

## 16.0 Verifying Email part One

header에 쓰지도 않는 data를 만든 이유가 무엇일까

data로 verify email과 edit profile이라는 간단한 기능을 구현해봄

무엇보다 cache를 어떻게 만지고 바꾸는지 배우는 시간이 될 것임

user에게 email이 verified되지 않았다고 말해줘야 하니까 header 위에 배너(banner)를 만듦

!data?.me.verified가 true가 아니면 "email을 verify 해줘"라는 div를 보여줌

텍스트를 span 안에 집어넣음

어떻게 생겼는지 한번 봄

이제 빨간색으로 바꿈

padding을 top과 bottom은 7, left와 right는 3으로 줌

text-align을 center로 적용함

"please verify your email"을 작게 만듦

그래도 padding이 너무 큼

그냥 3으로 통일함

"please verify your email" 텍스트 색상을 화이트로 바꾸고 끝냄

email에는 링크가 있는데 링크를 누르면 127.0.0.1이라고 써있고, page not found가 뜸

page not found는 logged-in-router에 없고 logged-out-router에만 있기 때문에 잘못됐다는 것을 알고 있음

그런데도 이렇게 나오는 이유는 127.0.0.1이 localhost와 다르기 때문임

127.0.0.1을 localhost로 바꿔봄

그런데 redirection 때문에 home으로 돌아감

텍스트를 더 작게 만듦

logged-in router로 가서 redirect를 못하게 만듦

대신 Route를 가짐

이제 localhost에서 confirm?code를 입력하면 보다시피 page not found가 나왔음

"please verify your email"이 있는데 이제 "/confirm"이라는 route를 만들고 싶음

그 페이지를 만듦

이미 user라는 폴더가 있음

user 폴더 안에 새로운 파일인 confirm-email.tsx를 만듦

그리고 confirm email, edit profile처럼 user들이 공통적으로 가지고 있는 부분들을 user 폴더 안에 넣고 client, driver, restaurant owner로 분리해봄

일단 route를 빨리 만듦

그리고 이제 logged-in router로 가서 새로운 route를 만들어줌

path는 "/confirm"이 됨

원했던 것처럼 confirm이 보임

confirm screen은 어떻게 만들면 될까

우선 mutation이 어떻게 나올지 봄

mutation은 아주 쉬움

verifyEmail이라는 mutation에는 input이 있고, input은 code, ok, error임

변수 이름이 길어도 상관하지 않음

짧게 만들어도 상관없음

typescript를 위한 이름을 verifyEmail이라고 적음

input이라는 variable을 가짐

type은 VerifyEmailInput임

백엔드에서 쓰는 mutation 이름을 쓰면 되는데, 똑같이 verifyEmail임

input: $input 그리고 ok와 error를 받음

types를 가져오기 위해 apollo:codegen을 실행함

터미널에 npm run apollo:codegen 입력

mutation을 사용함

mutation을 get함

그리고 loading을 받음

types를 추가해야함

이제 mutation을 만들었고 mutation은 VERIFY_EMAIL_MUTATION임

이 mutation의 confirm email screen을 어떻게 보여줘야할까

우리는 user에게 대기하라고 말하고, 유저의 email을 verifying 중이라고 말함

이게 무슨 뜻이냐면, user는 아무 것도 할 필요가 없음

user가 페이지에 도착하면 우리는 email을 verify함

mutation을 자동으로 call하고 user는 confirm될 때까지 아무 것도 모름

그리고 confirm되면 사라지게 만듦

CSS를 빠르게 함

이제 h1이나 h2를 만들고 "Confirming email..."이라 함

className을 넣음

height를 넣음

404 page는 h-screen이라 함

margin top 50을 함

margin-top 52가 훨씬 나음

Tailwind를 계속 연습해봄

className을 넣음

margin-bottom이 필요없음

아니면 1정도만 해봄

그러면 code를 어떻게 가져올까

useEffect라는게 필요함

useEffect는 ComponentDidMount 같은 것임

우리는 URL만 가져오면 됨

한가지 방법으로 window.location.href에서 url을 가져올 수도 있음

.split("code=")를 쓰면 2개가 나오는데 1번은 관심없고, 우리는 2번에만 신경쓰면 됨

하지만 원한다면 location을 get 할 수도 있음

router와 react에서 useLocation을 사용할 수 있음

router에서 가져온 것임

location을 console log해서 무엇을 get하는지 봄

보다시피 get하는게 다름 

지금은 pathname을 get하고 있음

hash, pathname, search, state를 get 했음

무엇을 선호하는지에 따라 다름

첫번째 방법으로 함

useLocation hook이 얼마나 멋진지 보여주고 싶었음

우리는 window.location.href를 반으로 쪼갬

code 부분을 찾아서 반으로 쪼갬

무엇을 get하지

처음과 끝을 get 했음

우리는 2번째 element가 필요함

그러기 위해 es6 마법을 좀 부림

이제 code를 console.log함

URL에서 온 code임

이제 URL에서 온 code가 있음

verifyEmail만 하면 됨

지금 바로 실행하지는 않을 것임

아직 email을 verify하고 싶지 않아서 그럼

아직 email이 verify되지 않았길 바람

email이 verified 됐음

잘 동작함

verified 됐음

typescript가 좋아서 우리가 실수를 안 함

send 해야하는 것을 정확히 send했기 때문에 user가 verified됨

직감적으로 느낌이 왔음

우리가 save 했을때 auto reload 때문에 verified됨

그러면 내 자신을 verify 해제해봄

새로고침 없이 수동으로 어떻게 하는지 보여주고 싶어서 그럼

pgAdmin의 user table로 가서 itnico.las.me@gmail.com을 찾고 verified true를 false로 저장함

첫 시도에 mutation이 제대로 작동하니까 좋은 소식임

이제 파트 2에서는 email을 verify하고 새로고침 없이 지금은 없어진 배너를 지워야함

지금은 verify your email이라고 나옴

이제 우리는 배너를 지우고 user를 다시 home으로 보내고 싶음

## 16.1 Verifying Email part Two

LoggedInRouter에 생긴 에러인데 array를 쓰고도 key를 지정하지 않아서 그럼

key를 추가함

array이기 때문에 key가 꼭 필요함

verifyEmail mutation을 실행하고 싶음

그리고 onComplete한 것을 listen하고 싶기도 함

onComplete는 Apollo cache로 가서 verified를 true로 바꿔야함

기억날지 모르겠는데 header 안에 !data?.me.verified라는 component가 있음

물론 cache로부터 read 할 수도 있고 바로 write 할 수도 있음

cache에 바로 write함

수동으로 !data?.me.verified를 true로 바꿈

새로고침 할 필요도, 다시 refetch 할 필요도 없음

수동으로 직접 cache를 수정함

onCompleted라는 function을 만듦

우리에게 data를 줄건데, data의 type은 verifyEmail임

만약 data.verifyEmail이 ok면, cache에 직접 write 해봄

Reading and Writing Data to the cache라는 가이드가 있는데 writeFragment를 집중적으로 봄

아마 제일 많이 쓸 것 같음

fragment는 type의 일부분 같은 것임

우리 같은 경우에는 type user가 있는데 verified인 fragment를 씀

fragment에서는 조건(condition)이 매우 중요함

기본적으로 id를 가지고 fragment를 찾을 수 있어야함

id를 가지고 fragment를 찾을 수 있어야하고 type은 API에서 오는 type이어야함

어떻게 찾는지 보여줌

application으로 가서, Apollo developer tools에서 cache를 봄

cache에서 ROOT_QUERY 속 me가 보임

이것은 별로 중요하지 않음

중요한 것은 User: 1임

User가 database에서의 type이고, 1은 id임

apollo는 똑똑해서 id가 type 중에서의 id를 가리킨다는 것을 알고 있음

이제 우리는 이것이 id가 1인 user라는 것을 앎

원한다면 type을 바꿀 수 있음

예시로 user의 id를 email로 하고 싶으면 그렇게 바꿀 수 있음

나중에 보여줌

하지만 지금은 Apollo가 model의 type과 id field로 id를 만든다는 것만 알고 있음

그래서 의도적으로 id field를 씀

못 봤을 수도 있음

이렇게 한 이유는 Apollo가 type에 id 속성이 있으면, model의 id로 쓰기 때문임

그러니까 우리가 무엇을 해야하냐면, user의 id로 writeFragment를 함

말했다시피 fragment는 우리가 바꾸고 싶은 type의 파트여야함

그리고 new data를 send 해야함

하다보면 무슨 말인지 감이 잡힘

하지만 그 전에 우리는 client가 필요함

하지만 현재 client가 없음

그러면 hook으로 client를 get함

useApolloClient는 우리가 원하는 client를 줌

이제 client.writeFragment({})라 하고 이 writeFragment에는 id가 필요한데 우리가 edit하고 싶은 type의 id가 뭐지

useMe()에서 data를 받아서 확인해봄

다시 get하고 있음

cache에 있는 요소를 다시 쓰고 있음

이 경우에는 id를 원함

이제 data의 이름을 userData로 바꿈

이게 더 나은 것 같음

typescript가 id는 undefined일 수 있다고 알려주고 있음

그럼 if에 userData?.me.id를 추가하면 됨

?를 지움

가져온 id는 number인데 입력해야하는 id는 string이어야함

이제 fragment를 넣어야하고 나중에 data를 넣어야함

첫번째 fragment는 gql임

gql이 import 됐는지 확인함

fragment라 하고 원하는대로 하면 됨

user에서 무엇을 수정하고 싶은지 씀

우리는 verified property를 수정하고 싶음

이제는 data를 send 해야함

위에 썼던 data를 그대로 쓰면 됨

우리는 fragment를 write함

fragment는 type의 일부분임

이 경우에는 user의 일부분임

type user는 이미 있고, id가 1인 user entity는 이미 있음

fragment를 write하고 싶은데 id가 1인 entity에 write하고 싶음

그리고 실제로 fragment를 작성할건데, fragment에는 verified만 있음

fragment는 전체 model에서 수정하고 싶은 일부분임

우리의 경우에는 verified 부분만 변경하고 싶음

이제 우리가 무엇을 바꾸고 싶은지 선언하고 data를 send함

지금 id를 보면 id가 아님

숫자 1이 아님

id는 User: 1임

id가 통째로 필요함

client가 가진 id와 똑같은 id가 필요함

cache를 봄

cache에는 User: { id }가 있음

이게 id임

이 id로 fragment를 update하고 싶음

update하고 싶은 부분은 verified임

loading에는 관심 없음

이제 email을 verify함

그런데 이미 한번 백엔드에서 email을 verify 했고 verification을 삭제했음

그래서 새로고침을 해도 백엔드에서 실행되지 않을 것임

백엔드에서 안 됨

그 이유는 이미 백엔드에서 한번해서 verification이 없어졌음

그러니 잠깐 멈추고 아니면 다음 비디오에서 해봄

백엔드로 돌아가서 똑같은 code로 verification을 만듦

그리고 새로고침하지 않고도 어떻게 바뀌는지 봄

verifyEmail을 저장하니까 백엔드에서 verified 되어서 verification code를 지우는 실수를 만들었기 때문임

verification code는 더 이상 작동하지 않음

빠른 복습을 해봄

cache에 write하면 됨

cache에 있는 object들은 id가 있음

그러면 fragment를 write 할 수 있음

fragment는 큰 type의 일부분임

예를 들어, 여기에서는 type이 user임

이 fragment를 cache로 write함

그럴려면 id를 update하면 됨

writeFragment와 writeCache는 많이 사용할 예정이라 계속 보임

저장하고 verified 되는 문제를 겪은 경우에도 지금 고치면 됨

## 16.2 Edit Profile part One

백엔드에 verification을 만들었음

pgAdmin의 verification table을 통해 볼 수 있음

이제 새로고침을 하면 verify your email이 사라지는지 봄

그 전에 한가지만 추가함

verifyEmail이 잘 작동하면 home으로 가도록 만듦

useEffect의 verifyEmail을 주석 처리하고, history를 사용함

성공적으로 실행되면, user가 verify 되자마자 home으로 돌아감

history.push("/")를 쓰면 home으로 돌아감

이제 잘 작동함

그런데 Warning이 나타났음

"Can't perform a React state update on an unmounted component"라고 나와있음

아마 우리가 promise를 시작했기 때문임

verifyEmail은 promise임

Promise를 시작했는데 그냥 나감

다른데로 가버렸음

떠남으로써 component가 unmounted됨

하지만 verifyEmail function은 component를 update하려고 함

지금 발생한 문제는 verifyEmail function이 이미 떠났음에도 불구하고 home에 있는데도 component를 update하려고 함

아마 error는 당장 고치기에는 무리인 것 같음

react strict mode에서 비롯된 react bug로 추정됨

react가 먼저 고쳐줘야 console에서 warning을 없앨 수 있을 것 같음

하지만 큰 문제는 아님

우리는 아주 손쉽게 Apollo cache를 change할 수 있음

user를 verify하는 작업은 끝났음

이제 edit profile을 만듦

일단 우리는 fragment를 write 했음

fragment를 write, read하고 query 또한 write, read 할 수 있음

writeFragment 또한 아주 중요한 method임

이제 user로 들어가서 edit-profile.tsx를 만듦

edit-profile은 아주 심플한 스크린이 될 것임

form이 있으니까 react hook forms를 연습해봄

Tailwind도 물론 연습함

edit-profile을 만들었고 logged-in-router로 가서 하나 더 만듦

key는 3임

EditProfile이라 함

이제 header를 조금 바꿈

my-profile이 아닌 edit-profile로 감

이제 다 된 것 같음

뭐가 필요한지 한번 봄

일단 우리가 edit하고 싶은게 무엇인지 한번 봐야겠음

Playground로 들어가서 무엇을 edit하고 싶냐면 email과 password임

email과 password를 change하고 싶음

그러면 현재 logged in된 user의 email이 필요함

어떻게 가져올까

useMe()를 쓰면 됨

useMe hook은 cache에 바로 접근할 수 있음

그리고 만약 cache에 없으면 API에 직접 접근함

이것이 바로 Apollo를 fetching client와 local state client로 작업할 때의 좋은 점임

우선 cache에 있는지 확인하고 만약 cache에 없으면 Apollo client가 백엔드에서 찾음

이제 user data도 있고 EditProfile을 만들어봄

빨리 profiles와 restaurants를 끝내고 이 코스에서 가장 중요한 testing으로 갔으면 함

className에 margin top을 줌

많은 hook들 덕분에 component들을 작게 만들 수 있음

우리는 container presenter pattern을 쓰고 있지 않음

hook만 쓰고 있음

이미 작기 때문에 container presenter pattern이 필요없음

이제 form을 만들고 form에 input을 넣음

password도 똑같이 함

password는 required면 안 됨

그리고 button을 만듦

이 button은 Update Profile이 됨

그리고 email도 required면 안 됨

우리가 email을 보내지 않아도 API는 확인을 하고 email이 있으면 update하고, email이 없어도 문제 없음

우리가 전에 만든 코드 중에 input class가 있음

form도 className이 필요함

form을 찾아봄

너무 큼

form이 얼마나 크지

form component를 만들어도 될 것 같음

header를 만들때 스크린을 너무 크게 잡은 것 같음

header를 좀 수정해야함

Edit Profile이 더 커야함

title을 위해 component를 만들어볼까

같은 방식으로 설정해야하는 title이 많음

confirmEmail로 가면 나쁘지 않음

그리고 not found를 보면 title이 마음에 듦

그러면 title만을 위한 component를 만들어도 됨

효율적일 것 같음

edit profile이 있음

className이 없고 대신에 button이 있음

이제 form을 불러올 차례임

다음 영상에서 함

useForm Hook을 한번 더 연습하고, confirm-email에서 했던 것처럼 cache를 edit함

fragment를 write함

## 16.3 Edit Profile part Two

form을 가져오기 전에 interface부터 만듦

IFormProps라 하고 email을 만들건데, email은 required일 필요는 없음

NestJS의 resolver에서 email이 없으면 update하지 않는다는 것을 알기 때문에 email이나 password를 send하지 않아도 크게 상관없음

password도 마찬가지임

이제 form을 가져옴

우리 form에는 멋있는 function들이 있음

그 전에 type을 줌

이제 register가 있고, form을 위한 handleSubmit과 getValues도 가져옴

register를 씀

정말 중요한건데, input에는 name이 꼭 필요함

input에 name이 없으면 useForm hook이 작동하지 않음

이제 handleSubmit도 똑같이 해봄

console.log(getValues())를 씀

onSubmit을 추가함

onValid function은 onSubmit으로 하면 됨

onValid를 보면 SubmitHandler임

SubmitHandler는 IFormProps라고 나옴

이제 작동하는지 봄

새로고침하고, 그 전에 default values를 어떻게 set하는지 배워봄

default values는 useForm에서 set하면 됨

보다시피 우리는 input을 절대 건드리지 않음

input에 value를 set하지도 않음

ref와 name만 set함

value를 set하지도 않고, function도 아무 것도 안 함

defaultValues에 email을 쓰고 새로고침함

form의 default values임

하지만 우리는 email이 이미 있음

이렇게 하면 사용자 경험도 더 좋음

새로고침하고, default value가 보임

password는 아무 것도 원하지 않음

password에는 default value가 필요없음

어떻게 돌아가는지 봄

email과 password는 string임

다시 새로고침 해봄

email과 password가 나왔음

password는 빈 string임

우리는 password가 없는 것을 원함

password가 비어있으면 password를 피할 수 있게 백엔드를 고칠 수도 있음

백엔드는 password가 없어야된다고 하니까, 백엔드에서는 혼란스러울 수 있음

나중에 고침

모든 것이 완벽하게 돌아가고 있음

editProfile mutation을 봄

editProfile에는 input이 있음

이제 mutation을 써봄

typescript를 위한 이름을 씀

내가 정한 이름과 같지 않아도 상관 없음

$input의 type은 EditProfileInput이고, required임

apollo:codegen을 실행하고 어떻게 되는지 봄

터미널에 npm run apollo:codegen 입력

form과 values가 있고 edit profile mutation을 만듦

edit profile mutation은 loading이 필요함

loading을 가져옴

그리고 result도 필요함

useMutation을 쓰고, type들을 설정함

이제 onSubmit에서 getValues를 한 뒤 edit profile mutation을 call하고 싶음

하지만 cache도 update하고 싶음

나중에 다른 스크린에 필요할 수 있으니까 user가 email을 update 했을때, cache의 email도 update하고 싶음

그리고 user가 email을 update하면 verified를 false로 바꾸고 싶음

그러면 onCompleted function을 잘 만들어야됨

더 멋진 syntax를 쓰기 위해 같은 이름을 씀

onCompleted는 data: editProfile을 쓰는 function임

항상 그랬듯이 data 안에서 editProfile을 get함

만약 ok라면 cache를 update함

그리고 loading을 loading에 넣고, canClick은 !loading으로 함

login의 Button과 똑같이 작성했음

email 형태를 가져야함

formState도 가져옴

우리가 validation을 handling하는 방법을 바꿔야함

login에서 어떻게 했는지 기억나지

login에서의 mode는 onChange였음

login에서 했던 것과 동일함

이제 mutation을 쓸 준비가 끝났음

그럼 이제 editProfile을 함

variables를 씀

variables에는 input이 필요함

input은 email이 필요함

email은 getValues()에서 가져오면 됨

문제는 password가 빈 string일 수 있다는 것임

그러면 조건(conditional)을 씀

그리고 condition으로 password object를 쓰면 됨

password가 안에 있는 object를 추가함

그리고 해당 object를 확장시킴

password가 ""와 같지 않은 경우 중괄호를 없앰

console.log로 email이 어떻게 생겼을지 봄

email이 보임

pattern이 문제가 될 수도 있음

user가 edit profile을 하면서 email을 delete하지 못하게 email을 required로 만들 수 있음

다른 웹사이트들은 어떻게 하는지 모르겠음

잘 작동함

object를 풀어서 a를 보여줌

password가 빈 string과 같지 않으면 password가 포함된 object를 return하고 object를 풀라는 말임

그런데 onSubmit을 좀 바꿔야함

user가 다른 email로 바꾸면, email을 한번 더 verify 해야하기 때문임

매우 중요함

editProfile은 그냥 둠

그런데 우리가 ok를 받는 순간 체크할게 있음

form의 value(email)가 query useMe()의 email과 다르다면 user가 email을 바꿨다는 뜻임

그럼 cache에 있는 email을 바꿔야하고, verified도 false로 만들어야함

## 16.4 writeFragment vs Refetch

이전 영상에서 form의 value를 get 할거라고 했음

만약 누가 email을 바꾸면, cache에 있는 email을 바로 update함

그리고 verified를 false로 update함

2가지 방법이 있음

첫번째 방법은 직접 cache에서 바꾸고 싶은 부분을 바꾸는 것임

우리의 어플리케이션에서 일어나는 모든 update를 백엔드에 의존하지 않았으면 좋겠음

mutation이 일어나면 내가 직접 cache를 update함

이렇게 하면 어플리케이션이 웹사이트처럼 아주 빠름

내가 만드는 모든 mutation이 cache에 update됨

API가 refresh하는 것을 기다리지 않음

그리고 두번째 방법을 알려줌

mutation 이후에 cache를 update하는 방법이 2가지인데 하나는 cache를 직접 update함

우리가 지금 하려는 방법임

다른 방법은 query를 refetch하는 것임

이렇게 하면 cache를 update해줌

2가지 방법 모두 보여줌

말했다시피 value(email)를 get하기 전에, get한 email이 useMe hook에 있는 email과 다르다면 user가 password를 바꿨다는 뜻임

만약 ok이고 userData가 있다면, userData 안에 me가 있음

me에는 email이 있음

그리고 email을 쓰고, newEmail로 이름을 바꿈

email이라는 이름이 2개면 안 됨

그냥 2개 다 이름을 다시 붙임

prevEmail로 바꾸고 newEmail에는 getValues()를 씀

그리고 만약 prevEmail이 newEmail과 다르다면 email이 바뀌었다는거니까 cache를 update함

한번 해봄

client가 없으니까 client를 get함

이제 user의 id가 필요한데, 이것은 userData 안에 있음

User에 id만 쓰면 됨

그리고 fragment 이름을 바꿈

EditedUser로 바꿈

중요한 것은 fragment on 뒤의 User가 같아야함

graphql에서 오는 type이기 때문임

그리고 이 경우에는 email도 update 해야함

verified: true라고도 써야하지만, cache도 update하고 싶으니까 email: newEmail도 써야함

우리는 hook인 userData에서 이전 email과 id를 가져오고 form의 getValues를 써서 새로운 email을 가져옴

email이 다르면 User: ${id}인 fragment를 write할건데, fragment에는 verified와 email이 있을 것임

새로운 data임

패턴이 보일텐데, 계속 이렇게 만듦

object의 id를 갖고 fragment를 write하고, data를 send함

작동하는지 봄

console을 새로고침함

이제 cache로 가서 verified도 true임

email을 바꾸고 싶음

email을 nicolassexylas@gmail.com으로 수정함

verified를 false로 해야함

하지만 잘 작동했음

다시 해봄

email을 다시 바꿈

email을 itnico.las.me@gmail.com으로 수정함

verified: false고 "Please verify your email."이 나왔음

header를 디자인할 때, 컴퓨터 화면이 확대되어 있어서 다 작게 만들었음

이제는 괜찮음

훨씬 나음

화면이 확대된줄 몰랐었음

아주 잘 작동함

한번 더 해봄

보다시피 pgAdmin의 verification table에 새로운 verification이 생겼음

API가 email을 바꿀 때마다 새로운 verification과 email을 갖도록 만들었기 때문임

이제 처음부터 test할 수 있음

code를 confirm하고 방금 받은 새로운 코드도 confirm함

URL에 http://localhost:3000/confirm?code=pgAdmin의 verification table에 있는 code 입력함

verify 됐음

정말 빠름

이제 profile을 edit함

email을 nicolas@gmail.com으로 수정함

보다시피 모든게 즉시 바뀜

이게 한가지 방법임

시간 들여서 fragment를 write하고 바뀌는 부분들을 update함

그냥 즉시에 하는게 더 좋다고 생각함

우리가 무엇을 하고 있냐면, 백엔드는 data를 send하는 용도로 쓰고 있고 프론트엔드에서는 data를 update하고 있음

새로운 data가 백엔드에서 들어오길 기다리지 않고, 프론트엔드에서 바로 update함

예를 들어 nomadcoders.co에서 새로운 무료 강의를 등록하면 빠르게 진행됨

백엔드를 기다리지 않게 만들었기 때문임

강의에 바로 등록해줌

만약 fragment를 write하고 싶지 않다면 다른 방법은 뭐가 있을까

그럴 때 다른 간단한 방법이 있음

먼저 다시 verify함

URL에 http://localhost:3000/confirm?code=pgAdmin의 verification table에 있는 code 입력함

나를 verify함

그 방법은 바로 query를 refetch하는 것임

confirm-email을 좀 수정할거라 아직 enter는 안 누름

useMe hook은 useQuery를 return함

useQuery는 return object에 아주 흥미로운 속성이 있음

그 속성은 바로 refetch임

refetch는 function인데 이것을 call하면 query를 다시 fetch해줌

refetch function은 useQuery에서 오고 모든 query가 가지고 있음

refetch를 call하면, function을 refetch함

그리고 query를 refetch하면 cache가 자동적으로 update됨

Apollo가 자동으로 cache를 업데이트함

writeFragment 부분을 지우고 refetch를 쓰면 됨

그러면 useMe query를 refetch함

우리가 백엔드에서 가장 최신의 data를 가져옴

저장하고 confirm하면 됨

다 동일하게 작동함

하지만 refetch는 promise임

그러면 async, await를 써야함

그리고 refetch한 다음, home으로 돌아감

이 모든 것은 confirm-email에서 한 것임

저장하고 email을 다시 confirm 해봄

email을 confirm 했고 보다시피 똑같이 작동하고 있음

edit-profile로 가서 fragment에 write하는 대신 useMe에서 refetch를 받음

그냥 useQuery를 return하는거지만 어느 component나 page에서 접근할 수 있다는 것은 멋진 일임

이제 edit-profile에서 똑같은 것을 함

원하는만큼 refetch를 call해도 됨

그리고 세부적인 작업은 할 필요가 없음

그냥 refetch만 하면 됨

profile을 update하고 update가 Completed가 되면 새로운 data를 받음

그리고 백엔드가 verified 되어야하는지 알려줌

백엔드가 email 주소 등 모두 줌

그러니까 async를 씀

profile을 edit하면 되고, useMe를 사용해서 refetch하면 됨

원한다면 getUserAgain이나 refetchUser 같은 이름으로 바꿔도 됨

그러면 test 해봄

Edit profile에서 email을 itnico@gmail.com으로 바꿈

보이는 것처럼 똑같이 작동함

다른 방법이 더 빠른 것 같음

실제 백엔드를 가지고, 서버도 실제 서버에 있고, 실제 프론트엔드가 있고 production을 deploy하고 있다면, 이 방법이 더 느리다고 100% 확신할 수 있음

이렇게 하면 다른 API call을 만드는거나 다름없음

선택은 내가 하면 됨

refetch를 call하면 Apollo client cache가 자동으로 update함

시간이 많거나 user에게 빠르게 동작하는 느낌을 주고 싶다면 fragment를 write 해봄

또 다른 API call을 기다릴 필요가 없음

이것도 최적화할 수 있는 기술이 됨

app을 시작할 때는 다 refetch로 쓰고 백엔드가 좀 힘들어하는 것 같을 때 refetch를 fragment로 바꾸면 됨

Edit Profile은 끝났음

기대만큼 폼나지 않음

그런데 앞으로 더 멋진 것들을 봄

routers, custom hooks, Apollo cache, Apollo client를 배웠음

Apollo client는 아직 안 끝났음

websocket link라는 것을 배워야함

나중에 subscriptions를 다룰 때 얘기해봄

links, authentication도 배우고 모든 type들을 가진 graphql로 작업하는게 얼마나 재밌고 멋지고 빠른지도 알았음

그리고 첫 시도부터 작동했음

그것이 Typescript의 힘임

올바르게 만들면 첫 시도에도 바로 작동함

log-in하고, email verify하고, profile을 바꿀 수 있음

그리고 cache를 직접, 또는 간접적으로 바꾸는 것도 배웠음

마지막으로 하고 싶은 것은 로고를 클릭하면 home으로 가고 싶음

restaurants를 시작할 수 있음

그리고 test도 할 수 있음

## 17.0 Restaurants Query

이번 섹션에서는 restaurants 스크린을 만들어봄

모든 음식점들을 볼거고, 이 음식점들을 볼 때 카테고리도 볼 수 있어야함

그리고 음식점들을 클릭할 수 있고, 요리들을 전부 load해서, 음식점의 세부사항도 봄

또한 카테고리를 클릭하고, 카테고리의 모든 음식점을 봄

먼저 Query를 작성해야함

Query는 좀 큼

우선 음식점을 가져와야하고, 카테고리도 가져와야하기 때문임

일단 시작하기 전에 Helmet이 모든 페이지에 있는지 확인해야함

create-account에는 Helmet이 있음

Not Found(404)를 보면, Helmet이 없음

그럼 Helmet을 만들어주고 "Not found | Nuber Eats"로 적어줌

Helmet을 import해줌

user에도 똑같이 해줌

Helmet을 만들어서 Verify Email이라고 함

edit-profile도 마찬가지임

이제 playground로 가서 우리가 호출할 Query를 봄

우리가 호출할 Query는 restaurants이고 input으로는 기본값이 1인 page가 있음

그리고 allCategories도 사용함

왜냐하면 allCategories가 우리한테 모든 카테고리를 줄 것이기 때문임

그럼 allCategories부터 시작해봄

restaurants query라고 부름

물론 레스토랑과 카테고리를 가져오지만, 대단한 graphQL 때문에 하나의 Query만으로도 많은 것을 request 할 수 있음

그래서 const RESTAURANTS_QUERY라고 해주고, 이제 우리한테 필요한 것은 allCategories임

그리고 내가 원하는 것은 ok, error 그리고 categories임

카테고리에서는 id, name, coverImg, slug, restaurantCount를 가져옴

거의 전부임

이것이 allCategories query임

그리고 또 다른 Query를 만들 수 있음

우리는 API를 한번만 call하면 됨

그게 바로 restaurants임

restaurants의 경우 input을 보내야함

좀 귀찮지만 page를 설정해야하기 때문임

우선 ok, error, totalPages, totalResults, 그리고 results를 가져옴

그리고 results는 여러 restaurant을 가지고 있음

우리가 restaurants에서 원하는 것은 id임

name도 필요하고, coverImg도 필요함

그리고 category도 가져옴

address도 가져옴

owner, orders, menu는 필요없음

아마도 isPromoted는 필요할 것임

isPromoted를 추가함

보다시피 정말 긴 query임

만약 내가 원한다면 이 Query를 별도 파일로 분리할 수 있음

Query가 너무 커지면 별도의 파일로 분리함

하나 빠진게 있는데, 그것은 restaurants Query의 input인 page임

그래서 input을 추가함

input이라 부르고 type은 RestaurantInput임

그리고 restaurants query에 input으로 $input을 줌

엄청 큰 Query임

지금까지 했던 것 중 가장 큰 Query 같음

하나의 요청으로 많은 Query를 할 수 있음

이제 npm run apollo:codegen을 할 시간임

터미널에 npm run apollo:codegen 입력함

모든게 정확한지 봄

에러가 있음

category field에서 원하는 field를 선택하라고 함

Restaurant의 category에서 원하는 field를 선택함

category에 name을 추가함

왜냐하면 category는 타입이라서 원하는 데이터를 선택해야함

graphQL Query에서 실수했는데, 그것을 다 알려줌

정말 놀라움

그러면 Query를 실행하고 results로 무엇을 받는지 확인해봄

query를 실행해서 data, loading, error를 받음

error는 필요없음

useQuery에 Type을 쓸 수 있음

바로 restaurantsPageQuery와 restaurantsPageQueryVariables가 됨

이 Query에서는 처음에 에러가 나옴

왜냐하면 input을 보내지 않을 것이기 때문임

그런데 input은 required니까 Query에서 에러가 생김

새로고침을 하고, inspect를 하면 아마 에러가 나올 것임

Bad Request가 보임

왜냐하면 우리가 page를 보내지 않아서 그럼

그러면 error를 추가하고, 이게 맞는지 error를 console.log해서 확인해봄

variable인 input이 제공되지 않았음

우리는 어떤 variable도 보내지 않았음

그래서 이제 variable을 보냄

default로 page를 1이라고 할 것임

우리가 전에 이렇게 만들었음

이제 data를 console.log 해봄

새로고침하고 console.log를 확인해보면 보다시피 allCategories가 있는 object를 받았음

ok는 true고 categories가 있음

BBQ, Sweet, 한국, Italian category를 추가했음(백엔드에서 createRestaurant를 Mutation할때 생성됨)

그리고 또한 restaurants도 몇개 만들었음

보다시피 잘 작동하고 있음

Nomad's Place, Mint Choco 곳, 김치십, BBQ Hawaii, 김밥 is Love, Nico's Place restaurant를 만듦(백엔드에서 createRestaurant를 Mutation할때 생성됨)

이게 파트 1이고, 보다시피 잘 작동함

이 과정은 graphQL을 사용하기 때문에 반복되는게 많을 것임

우리는 Query를 만들고, Type을 가져와서, Query를 실행하면 됨

정말 지루하지만 좋음

언제나 휘황찬란한 기술을 쓸 필요는 없음

ReactJS에서 우리만의 반복적인 작업방식이 생긴 것은 정말 좋음

팀으로 작업하면 더 큰 것을 만들 수 있으니까 NestJS에서처럼 하나하나 반복하는 것은 좋음

우리는 restaurants 화면을 디자인 해봄

이 섹션의 대부분은 TailwindCSS를 배우고 사용할 것임

restaurant에는 type이 있기 때문에 그렇게 어렵지 않음

categories부터 만들어봄

## 17.1 Categories Style

이제 restaurants를 디자인해봄

Header 같은 부분을 만들어봄

그리고 Black-owned나 검색창을 넣음

그러면 div를 만들고 시작해봄

또 다른 div를 만들고 원한다면 header나 section으로 해도 상관없음

그리고 검색창을 만듦

이것은 검은색 background를 가지게 함

완벽한 검은색은 절대 사용하지 않고 800이나 700을 사용함

800으로 함 

그리고 full width라고 함

padding을 조금 줌

위 아래로 20을 주고 크게 만들어봄

조금 더 줘봄

이제 flex로 만듦

이전에 만들어둔 input class를 사용할 수 있을 것 같음

어떻게 되는지 봄

그리고 width로는 full이 아니고 %를 사용함

보다시피 %가 있음

이전에 써본 rem도 있지만 %도 있음

이것은 컨테이너의 95%, 컨테이너의 75%, 컨테이너의 66%, 컨테이너의 58%임

따라서 이 부분에서 중요한 것은 parent인 컨테이너임

58%는 input의 컨테이너의 58%를 의미함

이제 %가 어떤 것의 기준인지 알게 됐음

%가 어떤 것을 기준으로 하는지 아는게 정말 중요함

그러면 스크린의 25%라고 해봄

내 생각에는 충분히 괜찮은 것 같음

input을 약간만 바꿔봄

rounded-md라 해서 조금 둥글게 만들어 줄 수 있음

그리고 border는 0으로 함

이제 border는 전혀 없음 

괜찮은 것 같음

div를 form으로 바꾸고 싶음

사용자가 Enter를 누르면 어딘가로 보내고 싶기 때문임

form으로 바꿔주고 form이 해야할 일에 대해서는 나중에 이야기함

첫번째 파트인 Search restaurants였음

만약 배경 사진을 넣고 싶다면 더 보기 좋음

이제 categories를 디자인해봄

카테고리는 어떻게 생겼는지 봄

우리는 DB에 카테고리가 있음

마우스 오른쪽을 클릭하면 보다시피 이미지 주소를 복사할 수 있음

이미지에 접근할 수 있음

이 이미지 주소를 DB에 붙여 넣었음

우리는 form이 있음

data를 받음

그런데 loading은 할 수 있음

만약 loading이 아니면 categories를 보여줌

카테고리랑 레스토랑을 다 보여줘도 됨

그럼 카테고리를 만들어봄

name, coverImg 그리고 slug가 있음

name으로 해서 작동하는지만 봄

이제 원을 만들어봄

그러면 className에 width를 줘야하는데 rem을 찾아봄

5rem으로 함

height도 그렇게 하면 정사각형이 될 것임

그리고 rounded-full을 해줌

rounded-full은 모든 것을 원으로 만들어버림

Background 색은 red로 해서 어떻게 보이는지 한번 봄

그리고 name은 필요없음

너무 큰 것 같은데 20에서 18로 바꿔봄

Tailwind에는 18이 없음

15는 없고 14는 있음

나쁘지 않음

컨테이너는 header에도 있고 body에도 있음

일단 header에서 우리가 어느 정도의 크기로 만들었는지 확인해봄

className을 쓸 수도 있고 아니면 container라는 className을 만들어도 될 것 같음

이제 header에 맞게 정렬되었음

카테고리에는 위에 공간이 조금 있음

mt-8정도면 충분함

categories는 또 다른 div 안에 넣음

justify-around로 하면 너무 넓음

왜냐하면 카테고리가 몇 개 없어서 그럼

좀 보기 좋지 않지만 이렇게 두거나 카테고리 컨테이너를 작게 만들어봄

max-w를 screen-sm으로 함

그리고 auto를 추가함

나쁘지 않음

아직도 너무 큰 것 같음

이제 배경색인 red를 실제 이미지로 바꿔봄

이미지는 style로 추가해야함

어떻게 생겼는지 봄

적용된 것 같은데 영 별로임

rounded-full로 함

다 나왔음

이제 밑에 text를 추가해봄

거의 다 했음

text를 작게 해줌

너무 작음

그리고 center로 하고 bold(굵게)로 함

center가 작동하지 않았음

그러면 className에 flex flex-col items-center를 추가함

그러면 모든게 center가 됨

이제 hover를 추가해도 될 것 같음

여기에다가 hover:bg-gray-200이라 해봄

나쁘지 않음

카테고리를 클릭할 수 있다는 것을 알려주게 만들어봄

거의 똑같음

margin-top을 줌

모두 끝냈음

너무 가까운 것 같아서 조금만 바꿈

그러면 카테고리는 끝났음

이제 백엔드에 더 많은 카테고리를 만들 수 있음

나중에는 사람들이 카테고리를 클릭할 수 있게 하고, 어딘가로 보내줌

일단 지금도 원본이랑 완전 비슷함

이미지를 얻는 방법은 마우스 우클릭을 하고 이미지 주소를 복사하고, 데이터베이스에 넣으면 됨

카테고리 안에 넣음

## 17.2 Restaurants List

Tailwind CSS 로 할 수 있는 멋진 것을 봄

이미지 위에 있을 때 색깔이 있음

원에 색깔이 있음

그런데 문제는 우버이츠에서 보면, Text 위로 갈 때도 원에 색깔이 생김

이미지 위에 올려놓을 때 뿐만 아니라 텍스트 위에 올라갈 때에도 색깔이 바뀜

이런 것은 아마 이 부분에 hover over하면 이미지에 색을 주도록 CSS 로 만들 수 있음

그런데 이런 것을 위해 Tailwind CSS에는 group-hover라는게 있음

group-hover는 selector임

group-hover는 요소에 속성을 설정할 수 있음

이 경우에는 이미지임

그리고 group class가 hover-over면 작동함

group-hover:bg-gray-100이라고 했음

이제 우리가 할 일은 group에 group class를 추가하는 것임

여기서 group은 카테고리의 컨테이너임

group을 추가하면 됨

그래서 Tailwind CSS를 사용하면 좋음

이런 것을 위한 클래스도 준비되어 있음

마우스를 Sweet, 한국, Italian에 올려도 잘 작동하는 것을 볼 수 있음

group-hover만 씀

다시 말하면, group-hover는 group:hover와 우리한테 필요한 element만 쓰면 됨

따라서 group class와 group-hover를 같이 사용해야함

좀 더 크게 만들고 싶은데, w-16으로 함

그럼 레스토랑을 함

원하면 카테고리를 만들 수 있음

코로나 때문에 Pickup Only도 있음

일단 시작하기 전에 Component로 만드는 것을 강력히 제안함

Category Component가 될거고 분명 다른 스크린에서도 사용하게 될 것임

그리고 우리가 만들 레스토랑도 마찬가지임

우리는 이런 레스토랑을 만들고, 나중에 또 사용할 수 있도록 컴포넌트로 만듦

그래서 Categories Component로 만들면 됨

새로운 컨테이너를 만듦

이 컨테이너는 레스토랑을 위한 것임

보다시피 Typescript는 이미 추가 해줬음

Optional chaining이라고 하는데, Typescript가 확인한다는 것을 의미함

만약 results가 존재하지 않으면, Typescript가 멈추고 실행하지 않음

에러가 생기지 않도록 만들어줌

Optional chaining이 있으면 Typescript가 체크해서 에러가 없음 

data도 마찬가지임

먼저 Typescript는 data가 존재하는지 체크하고, 그렇다면 data.restaurants로 넘어감

Typescript는 이것을 알고 있고, 자동으로 해줌

우리가 API로부터 type을 생성하기 때문임

예를 들어 API에서 results는 Restaurant의 array가 된다는 것을 알고 null 또는 undefined일 수 있다는 것을 알려줌

Typescript는 이것을 알고 도와줌

그러니 자동으로 생겨도 지우지 않음

있는게 좋음

만약 전부 존재한다면, 우리가 마지막으로 할 것은 map임

이제 우리의 레스토랑을 만들어봄

이미지가 있고, title이 있고, 카테고리가 있음

이미지는 width가 있고 title과 카테고리에는 약간의 margin이 있음

이것들은 만들기 쉬운 component가 될 것임

우선은 이미지를 만듦

이미지 만들 때 div를 사용할건데, backgroundImage를 쓰는게 쉽기 때문임

일단 크기를 보기 위해 red로 함

어떻게 보일까

그리고 이제 div가 필요함 

h1으로 함

너무 큼

h3로 함

그리고 이것은 레스토랑의 이름이 됨

그리고 카테고리를 만듦

카테고리는 span으로 하고, { restaurant.category?.name }이라 함

이제 이 컨테이너에 위아래로 padding 10을 줘서 크게 만듦

얼마나 큰지 봄

30으로 함

존재하지 않음

그러면 32로 함

이정도면 충분함

실제로 height를 계산하는 것보다 padding으로 크기를 조정하는게 훨씬 좋음

그런데 지금은 선만 있음

좋지 않음

우리가 원하는 것은 바로 grid임

이것은 3열의 grid임

고맙게도, 우리의 TailwindCSS는 아주 쉬운 className이 있음

grid가 생겼는데 gap을 잊으면 안 됨

gap-7으로 해봄

거의 다 했어

padding이 너무 큰 것 같음

이제 카테고리와 레스토랑 사이에 간격이 필요함

이미지를 추가했음

우버이츠에서 몇 개 이미지를 복사해왔음

jpeg가 생겼음

이전과 같은 방법으로 background에 넣을 수 있음

어떻게 보일까

나쁘지 않음

그런데 bg-cover를 해야겠음

몇 개는 해상도가 좋지 않지만 나중에 바꿈

거의 다 했어

이제 margin-bottom을 추가하면 좋아짐

일단 bg-center를 함

그리고 margin-bottom을 추가함

이미지에 공간이 있음 

title을 크게 만들어봄

이정도면 괜찮음

text를 좀 더 진하게 해봄

그냥 xl로 함

거의 다 한 것 같음

이제 줄을 만듦 

그리고 카테고리를 만듦

먼저 카테고리에는 border-top을 만들 수 있음

따라서 className에 border-t-2로 하고 border-gray-200이라 해봄

어떻게 보일까

restaurant.category가 없어서 그런 것 같음

아마 데이터베이스에서 load되지 않아서 그럼

데이터베이스에서 load되지 않은 것 같음

흥미로운 것을 발견했음

category가 null임 

백엔드를 고쳐야겠음

category를 load 해야함

카메라에서 고침

다음 영상에서 함

일단 지금까지는 꽤 괜찮아 보임

흥미로운게 있음

간격이 있음

그런데 수직 간격이 수평 간격보다 큼

그래서 원하면 바꿀 수 있음

gap을 사용하는 대신에 gap-x는 수평인데, 수평으로는 5로 하고, 수직인 y로는 10을 해봄

수직은 공간이 더 있고 수평은 적음

꽤 만족함

백엔드를 고침

category를 load하도록 만들어야하는데, 코드를 열어봐야함

다음 영상에서는 카테고리를 마무리함

그리고 클릭하면 카테고리로 넘어감

여러 page가 있을테니까 pagination도 다뤄봄

## 17.3 Restaurants Pagination

백엔드에서 Category를 eager로 만들고 왔음

이제 카테고리가 있으니 끝낼 수 있음

title이 있고, border도 있음

border-top을 1로 할 수도 있고, padding-top을 3으로 할 수도 있음

그리고 margin-top을 3으로 함

2로 하면 더 좋을 것 같음

그러면 끝남

이제 작게 만들어봄

그냥 opacity를 줄 수도 있음

0.05부터 100까지 할 수 있음

그러면 50으로 해봄 

margin-top이 너무 큰 것 같음

이제 레스토랑이 있어.

그런데 우리는 이것을 Restaurant Component로 옮겨야함

왜냐하면 이것을 다른 많은 스크린에서도 사용할 것이기 때문임

restaurant.tsx라고 하고 props를 적어줌

interface를 만들어봄

뭐가 작동하지 않는지 확인함

우선 React를 import 해야함

coverImg, restaurant.name 그리고 category가 작동하지 않음

categoryName은 존재할 수도, 아닐 수도 있음

그리고 coverImg, name 그리고 categoryName을 넣음

Typescript Component가 생겼음

Typescript 문법에 맞지 않는게 있어서 에러를 알려줌

우리는 coverImg와 name이 필요함

이것들이 required임

categoryName도 해줌

일단 못생긴 코드를 만듦

하지만 작동함

코드를 작성하기 전에 이 코드를 어떻게 구성할지 생각하지 않음

방금 본 것처럼 일단 코드를 만듦

그런 다음에 했던 것을 깔끔하게 정리함

이것이 최고의 코딩 방법이라고 생각함

책에서 읽었는데, 이 방법이 마음에 들었음

왜냐하면 우리가 무엇인가를 만들 때, 우리는 창작 모드에 있게 됨

그래서 우리는 스크린에서 무엇인가를 빠르게 보고 싶음

왜냐하면 아이디어가 있을 때, 우리는 빨리 스크린에 넣어서 확인해보고 싶음

그것을 코드에 넣고 싶음

코딩에 시간을 사용하는만큼 코드를 정리하는데 시간을 사용함

그러니까 만약 5분을 코딩에 투자하면, 5분은 코드를 정리함

처음부터 깔끔한 코드를 작성하려고 하지 않음

그렇게 하면 나중에 큰 일이 생길 수도 있다고 생각함

못생긴 코드를 작성해보고 작동하면, 정리하는 것이 더 좋음

이제 Restaurant Component에서 필요한 모든 것을 알았음

빨간 배경은 필요없음

레스토랑 component는 끝났음

말했다시피 이렇게 한 이유는 나중에 component를 사용할 것이기 때문임

이것은 정말 중요함

지금 예상되는게 있는데, 그것은 바로 우리가 레스토랑을 클릭할 것이라는 사실임

그래서 우리는 restaurant ID가 필요함

그러면 restaurant에 id도 보냄

왜냐하면 우리가 클릭 할 때 ID가 필요해서 그럼

id : string이라 하고 <Restaurant />으로 넘겨줌

보다시피 Typescript가 prop이 없다고 불평하고 있음

조만간 레스토랑을 클릭할 것을 알고 있음

restaurant id 는 string이라고 했는데 숫자임

""를 붙이면 string으로 바뀜

이제 우리가 할 것은 Pagination을 구현하는 것임

NestJS를 쓰는 백엔드로 돌아왔음

그리고 service를 바꿈

restaurants의 page 크기를 바꿈

왜냐하면 지금 6개의 레스토랑이 있는데 한 페이지에 3개씩만 나오게 함

그러면 우리는 2페이지를 볼 수 있음

페이지 크기를 3으로 함

새로고침하면 서버가 다시 시작됨

이제 레스토랑이 3개뿐임

말했다시피 2페이지를 원해서 이렇게 했음

그래야 이것들이 어떻게 생겼는지 보여줄 수 있음

이제 레스토랑 사이에 공간을 더 만듦

Pagination 시간임

우리가 totalPages와 totalResults를 얻었음

totalPages를 먼저 함

그리고 여기 page가 있는데 1로 하드코딩된 것을 볼 수 있음

이것을 원하지 않음

내가 원하는 것은 state에 page를 두는 것임

그러면 page, setPage를 만들어서 default로 state를 1이라 함

나중에 바꿀 예정임

그러면 page만 쓰면 됨

이제 다음으로 가는 버튼을 만듦

만약 현재 페이지가 totalPages보다 작으면 다음 페이지가 있다는 것을 알려줘야함

현재 페이지가 1이고, totalPages가 2이면, 더 load하거나 다음 페이지를 볼 수 있게 화살표를 보여줌

그러면 레스토랑 밑에 다른 div를 만듦

현재 페이지가 data?.restaurants.totalPages와 같지 않으면, 다음 페이지가 있다는 뜻임

한번 봄

Next Page를 볼 수 있음

그럼 이제 제대로 된 방법으로 Pagination을 만들어봄

항상 하던 것처럼 flex justify-center items-center를 씀

margin-top을 10으로 함

그리고 컨테이너에 padding bottom 20을 추가함

잘 나옴

Next page는 너무 못 생긴 것 같음

예쁜 버튼으로 만들어봄

button을 만들고 &rarr이라 해봄

크게 만들어봄

xl 아니면 2xl로 해봄

이제 클릭 할 수 있음

원한다면 배경색을 넣어도 됨

그리고 텍스트를 넣을 수 있음

fragment를 만듦

사실 fragment가 필요없음

근데 totalPages는 없음

margin을 줌

Page 1 of 2라 하는게 더 좋겠음

우리가 클릭하면 페이지를 바꿈

그러면 next page function을 만들어봄

현재 페이지에서 +1한 값으로 setPage를 함

setState에는 value를 보내거나 function을 보낼 수도 있음

React.js는 function의 argument를 쓸 수 있게 해주는데, 이 argument(current)는 현재 state임

어떻게 되는지 봄

onNextPageClick을 onClick에 넣음

새로고침을 클릭하면 보다시피 페이지 2로 바뀌었음

정말 멋짐

우리가 State를 변경했고 우리의 Query는 State에 달려있음

만약 state를 변경하면 Query의 variable 또한 바뀜

이것이 바로 React.JS가 멋진 이유임

re-render 때문임

우리가 State를 Query의 variable로 사용하기 때문에, State가 변하면 query가 다시 실행되고 페이지 2를 보여줌

setPage에서 현재 페이지를 -1한 값을 Return하도록 같은 것을 만들어봄

이제 쉽게 할 수 있음

"1보다 크면"의 의미는 우리가 다른 페이지에 있다는 것임

따라서 만약 page가 1보다 크면 똑같은 버튼을 넣어서 왼쪽 화살표로 바꾸고 onClick은 onPrevPageClick으로 함

그러면 이제 어떻게 생겼는지 봄

이제 우리는 CSS를 고쳐야 할 것 같음 

전부 center로 가게 만듦

다음으로 할 일은 grid를 할 수 있을 것 같음

grid-cols-3으로 하면 엄청 큼

그리고 text-center를 하면 중앙으로 이동하고 그리고나서 max-width를 xs로 함

정말 작은 width임

너무 작음

md로 해봄

그리고 items-center를 할 수 있음

그리고 mx-auto를 하면 끝남

뒤로 돌아가보면 잘 됨

그러면 빈 div를 만들어봄

grid 때문임

우리는 비어있는 열을 만들어줌

그럼 이제 돌아가면, 빈 컬럼이 있음

모든게 좋게 보이려면 세 개의 element가 필요함

우리는 더 멋진 것들을 만듦

이제 margin은 필요없음

다음 단계는, 우리가 레스토랑을 클릭하면 레스토랑으로 가야함

카테고리에 있는 바베큐를 클릭하면 그 카테고리로 가야함

그리고 무엇인가를 검색하려고 엔터를 누르면, 어디인가로 가게 만들고 싶음

## 17.4 Search part One

지금 우리 웹사이트의 모습임

모바일에서는 예쁘지 않음

그래서 이것을 고쳐봄

우선, 3개의 열로 디자인 되어있는데, 이것을 lg 이상의 화면에서만 가능하게 만듦

그래서 lg:grid-cols-3을 하면 됨

보다시피 잘 작동함

large말고 medium이 좋겠음

그럼 다시 해봄

md에서는 3개 그리고 responsive하게 작동함

다음 단계는 검색창임

그리고 일반적인 화면에서는, 50%로 함

그러면 1/2이 됨

너무 작음

이제 모바일은 됐음

Tailwind가 반응형 디자인을 만들때 어떻게 작동하는지 이해하고 있기 때문임

아무것도 붙어있지 않은 class는 모바일에 적용됨

md: 같은게 붙는다면 md 사이즈나 그보다 큰 화면에 적용됨

다음으로 내가 하고 싶은 것은 우리가 카테고리를 클릭하면 어디인가로 가고, 여기서 무엇인가를 검색하고 엔터를 누르면 어디인가로 가게 만들고 싶음

React form을 사용할건데 React form을 사용하는 이유는 빠르게 작성할 수 있기 때문임

useForm()을 쓰고 register를 가져옴

이제 search를 register함

그리고 { required : true }라 함

원한다면 interface를 만들 수 있음

어려운 일이 아님

원하면 하면 됨

그리고 handleSubmit이 필요함

onSearchSubmit을 만듦

우리가 할 일은 다른 페이지로 redirect하는 것임

그러므로 getValues도 가져옴

그리고 handleSubmit을 복사해서 form 안에 넣어줌

원한다면 글자를 최소 3자로 할 수 있음

그리고 getValues 전부를 console.log함

우리는 name이 필요함

name은 interface와 같아야함

따라서 name은 searchTerm이 됨

이제 어떻게 생겼는지 봄

새로고침을 하고 inspect를 들어감

console이 너무 큼

key로 restaurant.id를 줌

Category도 마찬가지임

데이터베이스에서 id를 가져와야하는 이유가 하나 더 있음

엔터를 하면, searchTerm을 얻을 수 있음

이제 우리가 할 일은 다른 페이지로 redirect하는 것임

이것을 위해 우리는 react-router에서 가져온 history를 사용함

useHistory라 하면 react-router에서 history를 가져옴

history.push()를 쓰면 push에는 path랑 state가 있음

Path와 Search가 있음

Search는 이런 것임

우리는 push를 해서 pathname으로 가고 싶음

이 경우에는 "/search"로 가고 싶음

그러면 getValues로부터 searchTerm을 가져옴

그럼 준비됐음

search는 string이어야함

어떻게 생겼는지 봄

search라는 페이지가 없다는 것을 앎

따라서 우리는 404를 보게 될 것임

하지만 여기서 핵심은 redirect가 잘 되는지 보는 것임

Redirect가 필요없음

Route Not Found랑 똑같이 해봄

Redirect는 아님

다시 한번 해봄

보이는 것처럼 search?korean임

이것이 /search와 무엇인가를 URL로 함께 보내는 방법임

searchTerm과 함께 보냄

그러면 다시 해봄

home으로 돌아와서 Korean으로 엔터를 하면 /search와 term=korean이 있음

이것이 첫 단계였음

이제 우리는 client에 page를 만들어야 하는데, search.tsx라고 함

React를 import함

이제 궁금한 것은 어떻게 URL로부터 term을 가지고 올 수 있을까임

confirm-email에서 했던 것과 같음

하지만 다른 방법으로 함

보다시피 이것들은 모두 react-router의 hook임

useLocation으로는 우리가 어디에 있는지 알 수 있음

useHistory로는 어디인가로 이동할 수 있음

location을 console.log 해봄

뭐가 나오는지 봄

우리가 404에 있다는 것을 알고 있음

그리고 아직 /search를 볼 수 없음

왜냐하면 logged-in-router에 넣지 않았음

/search라 하고 exact는 필요없음

pathname은 "/search"고 term도 확인할 수 있고, state가 undefined라고 나옴

이것은 Route로 정보를 보낼 수 있는 또 다른 방법임

한가지 방법은 여기에서 볼 수 있듯이 URL에서 하는 것임

따라서 이 방법은 여기 보이는 것처럼 사용자에게 노출됨

왜냐하면 사용자가 URL에서 볼 수 있기 때문임

그리고 이것을 potato 같은 것으로 마음대로 바꿀 수 있음

그래서 사용자에게 노출됨

만약 이렇게 하고 싶지 않다면, search를 사용해서 redirect하는 대신에 state를 사용함

state는 object인데 원하는 것들을 모두 보낼 수 있음

이 경우에는 searchTerm을 바로 보낼 수 있음

state는 한 곳에서 다른 곳으로 감

이것이 무슨 말이냐면, home에서 /search로 넘어가는 경우 state가 설정된다는 것임

만약 우리가 home에 있고 예를 들어 korean을 검색하면 localhost:3000/search를 볼텐데, 그 뒤에는 아무것도 없음

검색어와 관련된 정보가 없음

그런데 여기 location에는 state가 있고 searchTerm인 korean을 확인할 수 있음

이것이 다른 경로로 데이터를 보낼 때 URL에 데이터를 포함시키지 않는 방법임

종종 URL에 있는 데이터를 사용자에게 표시하고 싶지 않은 경우가 있음

그런데 검색의 경우에는 사용자에게 검색어를 보여줘도 문제가 없을 것 같음

그러나 가끔 URL의 정보를 사용자에게 표시하지 않고 페이지를 변경하고 싶을때가 있음

여기서 한가지 놀라운 것은 새로고침을 하면 브라우저가 Route의 state를 기억하고 있음

왜냐하면 Route의 state가 브라우저 메모리에 저장되기 때문임

따라서 새로고침을 하면, React는 사라지고나서 다시 돌아오고, 브라우저는 Route의 state를 기억하고 있음

그런데 이렇게 하면 검색 URL을 공유하고 싶어도 할 수 없음

왜냐하면 이 URL은 모두에게 똑같이 보이기 때문임

이제 우리가 만든 것으로 돌아와서 search에 대해서 말함

우리는 아직 조건에 따라 달라지는 Query를 실행하는 방법을 모름

Search로 가면, 우리는 Query를 보내야함

보내려는 Query는 searchRestaurant임

그리고 searchRestaurant은 input으로 query(searchTerm)와 page가 필요함

이 query는 URL에서 가져옴

하지만 URL에서 이 query를 가져오는데 시간이 걸릴 수 있음

아니면 사용자가 URL에서 query를 삭제할 수도 있음

그러면 Query가 실패하고 graphQL 에러가 발생함

그래서 다음 영상에서 lazy Query라는 것을 보여줌

게으른 Query임

즉, Query가 바로 실행되지 않는 것임

내가 불러야함

직접 call 해야함

## 17.5 Search part Two

지금까지 작성한 Query는 즉시 실행되는 것뿐이었음

대부분의 경우에는 문제가 없음

그런데 가끔은 조건에 따라 Query를 하고 싶을 때가 생김

여기에서 조건은, 사람들이 검색어 없이 /search에 갈 수 있다는 것임

그래서 우리는 이 조건을 처리해줘야하고, 원하는 조건이 되면 Query를 실행하면 됨

그래서 Lazy Query를 배우는게 정말 중요함

우선 URL로부터 term을 가져와봄

/search가 있고 =의 뒷부분을 가져오면 됨

그리고 "?term="을 가지고 split을 함

searchTerm을 console.log해서 뭐가 나오는지 확인해봄

빈 string이랑 "korean"이 나왔음

딱 우리가 원하던 것임

그러면 Array를 열어주고 그냥 문법을 멋있게 사용해보는 것임

그러면 "korean"이 나옴

만약 searchTerm이 없으면 무슨 일이 벌어지는지 봄

이처럼 undefined가 나옴

그래서 우리는 이 경우를 먼저 처리해봄

defensive programming으로 만약 searchTerm이 없으면 history.push 아니면 replace를 쓸 수도 있음

push와 replace의 차이점은 replace를 사용하면 URL이 History API에 나오지 않음

그런데 push를 하면, 뒤로가기를 할 때 History API에 나옴

replace를 하면 나타나지 않음

말 그대로 페이지를 대체하는 것임

이것은 내가 원하는대로 하면 됨

갑자기 생각났는데 여담으로 우선 restaurants로 와보면 아직 Helmet을 만들지 않았음

Helmet은 helmet-async로부터 import 해야함

아니면 쓰지 않는 다른 하나를 uninstall 하도록 함

이것이 중요한 이유는, replace와 push가 어떻게 다른지 보여주고 싶기 때문임

지금 Home에 있는데 완벽함 

다시 "korean"으로 감

그냥 갑자기 하는게 아니고 replace와 push의 차이를 보여주고 싶기 때문에 이렇게 함

이제 replace를 배워봄

우선 replace를 해서 Home으로 간다고 해봄

replace를 배우기 위해 탭을 닫음

왜냐하면 깔끔한 History 상태로 시작하고 싶음

이제 다시 가봄

뒤로가기를 하면 new tap으로 가고 있음

말이 됨

내 History를 볼 수 있음

내 History에 접근할 수 있음

push는 새 페이지를 push하고, 이전 페이지를 기록에 남김

그런데 replace는 history에 남기지 않음

일단 Edit Profile로 갔다가, Home으로 감

Home에서 Korean을 검색하고 엔터를 침

term으로 korean이 있음

이제 다시 Home으로 가봄

뒤로가기를 누르면, home, Edit Profile, home이 있음

보다시피 home에서 korean을 검색한 것도 나와있음

내용이 저장되어있음 

이제 home으로 가봄

home, edit profile, home, 그리고 search가 있음

이처럼 search가 내 history에 있음

그럼 탭을 닫고 하나를 다시 열어서 이제 Edit Profile로 감

그리고 home으로 가서 korean을 검색함

그런데 이번에는 term=korean을 지워봄

그러면 여기서 조건이 실행됨

이제 home으로 돌아왔는데 한번 생각해봄

내가 만약 이것을 누르면 어디로 가질까

search로 갈까 

어디로 갈까

어디인지 봄

search korean으로 왔음

이 navigation은 브라우저의 history 데이터베이스, 메모리에 저장되지 않음

이것이 replace와 push의 차이임

push는 어디인가로 가면 다시 돌아갈 수 있음

하지만 replace는 기록되지 않기 때문에 돌아갈 수 없음

Edit Profile로 가서 그 다음 search로 감

이제 나는 home에 있음

뒤로가기를 누르면 뭐가 나올까

Edit Profile을 볼 수 있음

보다시피 이전 navigation인 search는 없음

기록에 없음

다시 search로 갔다가 뒤로가기를 누르면 어디로 가게될까

Edit Profile로 왔음

보다시피 /search로 가는 것은 작동하지 않음

이게 replace와 push의 차이임

여기까지 여담이었고 지금 배운것이 정말 중요하다고 생각함

이제 우리가 할 다른 일은 조건적으로 검색을 하는 것임

예를 들면, searchTerm이 있는데 이 함수가 끝나도록 return함

우리가 searchTerm을 찾으면, Query에 searchTerm을 전달할 수 있음

state로 할 수 있음

그게 하나의 옵션임

setState 아니면 setTerm을 쓰면 됨

다른 옵션으로는 그냥 Lazy Query를 만들 수 있음

우리가 할 것임

백엔드를 보면서 searchRestaurant Query를 작성해봄

searchRestaurant은 input이 필요함

input : $input으로 하고 그리고 searchRestaurant에서 그냥 다 가져오면 됨

그리고 여기 restaurants는 조금 지루함

그래서 무엇을 할거냐면 fragment를 만듦

fragment는 Type의 일부분을 나타냄

모든 곳에 복사 붙여넣기를 할 필요가 없음

대신에 그냥 포함시키면 됨

그럼 어떻게 하는지 보여줌

src 폴더 안에 fragments.ts 파일을 새로 만듦

그리고 fragment를 만들건데 원하는 이름 무엇이든 괜찮음

Restaurant라고 해야하니까 이 부분은 중요함

보다시피 항상 restaurant에서 필요한 것들임

기본적인 것들임

그래서 여기에 무엇을 하냐면 RestaurantParts라고 함

그리고 fragment를 포함시켜야함

따라서 RESTAURANT_FRAGMENT를 가져오면 됨

이렇게 하면 복사하지 않아도 됨

이제 쓸 수 있는 fragment가 생김

그런데 query에 fragment를 포함시켜야함

카테고리도 같은 방법으로 하면 됨

만약 같은 Query 구조를 사용할 것 같으면, fragment를 만듦

많은 fragment를 가질수 있음

restaurants와 search에서는 Query가 완전히 같았음

그럼 이제 실행해봄

터미널에 npm run apollo:codegen 입력함

오늘의 첫번째 에러임

이 에러는 알아채기 꽤 쉬움

RestaurantParts fragment를 찾을수 없음

fragment가 codegen을 해서 만든 코드에서 발견되지 않음

그럼 코드를 생성하는 파일을 봄

그 파일은 apollo.config.js임

src 폴더에서 확장자가 tsx인 파일들만 포함하고 있음

하지만 fragments는 ts임

그래서 tsx와 ts를 모두 포함시켜주면 됨

이렇게 하면 되고 다시 실행해봄

이제 기막히게 작동함

searchRestaurant Query가 있는데 우리가 아직 모르는 Lazy Query를 사용해봄

Lazy Query는 즉시 실행하지 않는 Query임

모든 Query는 즉시 실행되고 있음

Query를 작성하면 즉시 실행을 함

data와 loading과 error를 바로 가져다줌

그런데 가끔은 Query를 즉시 실행시키고 싶지 않을 때가 있음

사용자가 버튼을 누를 때 실행하고 싶다던가 흔히 일어날 수 있는 일임

버튼을 누를 때만 Query를 하고 싶을 수도 있음

이 경우에는, 오직 searchTerm이 있을 경우에만 Query하고 싶음

그럼 여기에 적어봄

Lazy Query는 일반적인 Query와 다른 것을 Return함

useLazyQuery를 함

Lazy Query는 QueryTuple을 Return함

useQuery처럼 Object를 return 하지 않음

Tuple을 return함 

이것은 Array가 됨

그 말은 Query를 function으로 받는다는 것임

mutation처럼 생겼지만 여기서 function을 얻음

그러면 fetchNow라고 부를 수 있음

loading, error 원하는 것 모두 있음

이게 차이점임

물론 data도 가질 수 있음

이 function을 실행하면 data를 얻을 수 있음

이것이 Lazy Query임

Lazy Query에 우선 variables를 추가함

이제 Query를 시작할 준비가 됐음

하지만 아직 실행하지 않았음

loading과 data를 console.log하고 called라는 것을 얻을 수 있는지 봄

called는 query가 호출됐는지 알려줌

브라우저로 돌아와서 search로 가서 inspect를 해봄

load되지 않았다는거고 undefined는 data가 없다는거고 called는 호출되지 않았다고 알려줌

많은 warning이 있음

그 중 하나는 search에 있음

history, location을 넣음

search에서 나온 warning을 없애려고 함

그냥 경고임

큰일은 아님

그냥 경고이고, 하나씩 고치면 됨

만약 searchTerm이 있으면 준비된 Query를 호출하고 싶음

variables를 입력하면 되는데, variables는 input에 default가 1인 page를 주고 query로 검색함

그것은 searchTerm인데, query로 이름을 바꿈

다시 한번 말하지만, 이것은 오직 /search에 query가 있는 경우에 일어남

저장하자마자 자동으로 새로고침 됐음

loading은 true고, undefined, 그리고 called는 true임

그리고 loading이 false로 바뀌고 resource가 생겼음

그리고 called는 true임

보다시피 잘 작동했음

이것이 Lazy Query임

다시 말하지만 Tuple(Array)의 첫 element는 호출될 준비가 된 Query임

이것을 callQuery라고 해도 상관없음

그런데 URL에 아무것도 없으면 호출되지 않음

이것이 조건부 Query를 하는 방법임

우리가 전에는 몰랐던 것임

보다시피 korean이 있는 restaurants를 찾지 못했음

term nico로 restaurants가 있나 찾아봄

잘 작동하는지 볼까

restaurant이 있음

그리고 fragment가 완벽하게 작동하고 있음

Lazy Query는 놀라움

즉시 실행하는게 아니라 원하는 경우에만 실행함

## 17.6 Category

검색 화면을 잠시 멈춤

왜냐하면 우리는 빨리 진행함

Home으로 돌아감

일단 먼저 스크린을 만듦

category.tsx가 됨

우리는 이미 어떻게 하는지 알고 있음

이제, 어떻게 카테고리로 갈까

정말 쉬움

일단 카테고리를 만들고 있는 restaurants로 돌아감

Category라는 Component를 만듦

그러면 그냥 Category Component만 쓰면 됨

일단 지금은 이 카테고리에 Link를 만듦

Link는 카테고리로 이동하게 만듦

category의 slug인 `/category/${category.slug}`로 가게 하면 됨

Link는 react-router-dom에서 import 되어야함

그러면 이 카테고리를 어떻게 받을 수 있을까

아주 쉬움

logged-in-router로 와서 key를 5로 바꾸고 path는 "/search/:slug"라 함

이렇게 Route에 variable을 포함시키면 됨

그리고 Category /를 넣으면 됨

작동하지 않으니까 직접 import 해봄

/category/:slug로 감

새로고침 하면 Category를 찾을 수 없음

이제 보게 될텐데, URL이 /category/bbq가 됨

Category로 왔음

작동하는 것처럼 보임

URL에서 variable을 받는게 이렇게 쉬움

원하는대로 URL을 보내야함

/category와 category의 slug임

bbq를 클릭하면 카테고리의 slug임

어떻게 얻을까

history일까, location일까

location임

location은 내가 어디에 있는지 알려줌

history는 어디로인가 가게 만듦

그게 차이점임

location은 내가 어디에 있는지 알려주고 history는 어디로인가 보내줌

그럼 Category로 감

그리고 location을 받음

다시 말하지만, 모두 react-router-dom이 제공하는 hook임

그리고 useEffect()를 씀

그리고 location을 넣고, location을 console.log 해봄

클릭하고 console.log를 봄

location은 object인데, hash, key, pathname이 있음

pathname은 bbq임

하지만 이것으로는 부족함

/category/를 split해서 할 수도 있지만 location을 사용하는 대신 useParams에서 params를 쓸 수 있음

이것이 또 다른 옵션임

그럼 어떤 것이 더 나은지 비교해봄

params를 console.log해서 새로고침을 하면 parameter가 있음

slug: bbq가 있음

보다시피, 이것이 더 좋은 선택같음

pathname을 쓰는 것보다 더 좋은 선택인 것 같음

pathname은 검색한 모든게 나옴

그래서 term=lalala라고 하면 보다시피 location에서만 접근 가능함

그런데 route에 몇가지 parameter가 있기 때문에 가져올 수 있음

slug가 어디에서 오냐면, 내 router에서 옴

potato로 바꾸면 patato: "bbq"임

location을 사용하는 대신 parameter를 쓰면 됨

그러면 useEffect도 사용할 필요가 없음

왜냐하면 params.slug만 쓰면 됨

무엇인가 잘못됐다고 알려주고 있음

왜냐하면 parameter type에는 slug가 없음

parameter가 빈 object로 보이기 때문임

그래서 원하면 type을 추가할 수 있음

그럼 이제 JavaScript가 좋아함

params에 slug가 있다는 것을 알 수 있음

이제 category Query를 작성할 수 있음

category는 slug를 가진 categoryInput이 필요함

Query를 작성함

category에 input이 필요함

input이 여기 있고 ok, error, totalPages, totalResult, restaurants, 그리고 category를 가져옴

이미 fragment가 있으니까 사용함

RESTAURANT_FRAGMENT에는 RestaurantParts가 있음

바로 사용하면 되고, 우리는 category도 받을 수 있음

category를 한 번 더 사용해야함

그러면 restaurants로 가서 또 다른 fragment를 만듦

CategoryParts가 됨

그리고 fragments로 와서 이름은 백엔드에 있는 이름과 같아야함

CategoryParts가 생겼음

CategoryParts가 있으니까 CATEGORY_FRAGMENT를 포함시킴

FRAGMENTS가 아니라 FRAGMENT임

이제 category를 써봄

원한다면 pagination을 위한 fragment를 만들어도 될 것 같음

ok, error, totalPages, totalResults를 가진 PAGINATION_FRAGMENT라 하면 됨

왜냐하면 이것들은 Category, Restaurants 페이지에 나타나고 searchRestaurant 페이지에도 나옴

그러니까 PAGINATION_RESULT_FRAGMENT를 만들어봐도 될 것 같음

하고 싶다면 해봄

항상 하듯이 분할 정복(Divide & Conquer)을 함

CATEGORY_FRAGMENT를 넣으면 됨

category Query를 만들었음

실행해봄

터미널에 npm run apollo:codegen 입력함

Query를 작성해봄

Type은 이미 가지고 있음

그리고 category query를 사용함

바로 variables를 추가해봄

slug는 params.slug로 함

이제 console.log(data)를 함

새로고침 해봄

category가 있음

restaurants는 Nomad's place랑 BBQ Hawaii 2개가 있음

왜 totalResults가 null이지

백엔드에 버그가 있는 것 같음

고쳐야겠음

백엔드의 restaurants.service.ts에서 category에 해당하는 레스토랑을 검색하는 부분인 findCategoryBySlug의 CategoryOutput DTO는 PaginationOutput을 exdends하고 있기에 함수내부에서 검색된 레스토랑 갯수 count기능을 담당하는 totalResults를
return에 포함시킴

category도 있음

한번 흐름을 타면 즐기면 됨

fragment를 만들어서 사용하고, types를 생성하고, 필요한 variable을 포함시키면 됨

category와 search가 있는데 Lazy Query에 대해 배웠고, Parameter도 배웠음

보다시피, 에러가 정말 적게 나왔음

내가 좋은 프로그래머라서 그런게 아니라 모두 TypeScript 덕분임

정말 적은 에러가 나왔음

우리가 무엇을 request 해야하는지 정확히 알고 있기 때문임

## 17.7 Code Challenge

이 섹션에서 우리는 많은 것을 배웠음

우선 router를 다루는 법을 배웠음

useParams, useLocation, useHistory를 쓰는 법을 배웠음

replace와 push의 차이점도 알게 됐음

그리고 우리는 Link에 있는 arguments도 배웠음

`/category/${category.slug}`가 router에 어떻게 반영되는지 알게 됐음

그리고 가장 중요했던 것은 Lazy Query에 대해 배운 것임

Lazy Query는 즉시 호출되지 않고 원할때만 호출됨

만약 주소창에 term이 없으면, 우리는 replace를 함

만약 term이 주소창에 있으면, 우리는 Query를 원할 때 호출할 수 있음

그리고 TailwindCSS를 다루는 것도 많이 봤음

그리고 Components를 만들 때 interface를 사용해서 버그로부터 안전하다는 것도 앎

이제 챌린지가 있음

category sweet에 아무것도 없음

그리고 korean을 검색해도 아무것도 보이지 않음

restaurants에서 어떻게 그런 모든 것들을 구현할 수 있는지 보여줬음

restaurants에서 pagination도 했으니까, 통합하는 법과 pagination도 앎

grid도 했기 때문에 어떻게 restaurants를 보여줄지도 알고 있음

이제 Lazy Query도 할 수 있고, 이제 혼자서 TailwindCSS를 연습할 때임

따라서 코드 챌린지는 카테고리 화면을 구현하는 것임

알고 있겠지만, useParams로 category를 얻는 방법도 알려줬음

그러니 할 수 있음

그리고 다음은 Search 화면을 구현하는 것임

이제 URL로부터 뭔가를 가져오는 법도 앎

원할때 Query를 실행하는 방법도 앎

그리고 restaurants를 보여주는 방법도 앎

Restaurant Component가 이미 있기 때문에 오래 걸리지 않을 거라는 것임

그러니까 Restaurant grid Component를 만들 수도 있음

왜냐하면 Home에서 했던 같은 방법으로 restaurants를 보여줄 수 있음

그리고 BBQ 카테고리 또한 똑같은 방식으로 만들 수 있음

예를 들어, korean을 검색하면 home처럼 3개의 restaurant을 보여줄 수 있음

시간이 많이 걸리지 않음

스크린들을 만들면서 우리가 했던 것들을 연습할 수 있음

TailwindCSS를 이용해서 예쁘게 만들어봄

우리는 챌린지에 필요한 모든 것을 구현했음

Pagination도 했고, parameters도 했으며, Lazy Query도 했음

다 해봤음

restaurants 뭐든 다 해봤음

그러니 챌린지를 하고 다음 영상에서는 Restaurant의 세부 페이지를 구현해봄

restaurant 화면으로 간 뒤, 거기서 주문을 할 수 있도록 만듦

그것을 다 마치면, subscriptions는 하지 않을거고, 실시간도 아직 하지 않음

driver, restaurant owner도 하지 않음

클릭하면, 주문을 할 수 있게만 만듦

React 하는 것을 멈춘 다음에 테스트를 해봄

왜냐하면 우리가 테스트 해야할 많은 Component를 만들었기 때문임

코드 챌린지를 끝내고, 레스토랑의 세부 화면을 마치면 테스트를 시작함

## 17.8 Restaurant part One

이번 영상에서는 레스토랑의 세부 화면을 만들어봄

마무리를 하고나서 주문은 나중에 만들어볼려고 함

그 이유는 주문을 하기 위해 음식이 필요하기 때문임

그리고 중요한 것은 아직 음식을 upload 할 방법이 없다는 것임

그리고 postico를 이용해서 음식을 만들고 싶지는 않음

왜냐하면 어떻게 사진을 업로드하고, 어떻게 옵션을 입력할지 보여주고 싶음

기억할지 모르겠지만, 옵션들은 JSON일 뿐임

그래서 나는 postico를 이용해서 음식을 upload하고 싶지 않음

대신에 무엇을 할거냐면, 헤더 부분을 만들어보려고 함

다시 말하지만, 우리는 계속해서 Tailwind CSS를 연습할 것이고, 다음 섹션으로 넘어가서 테스트를 진행함

사용자 인증과 카테고리, 그리고 pagination을 테스트 해봄

그리고 테스트가 끝나면 다음 단계로 레스토랑 대시보드를 만듦

레스토랑 대시보드에는 레스토랑을 생성하는 것도 만듦

왜냐하면 레스토랑을 만드는 form이 있음

그리고 dish를 생성하는 것도 만듦

그것도 form임

레스토랑에 dish를 올리고 뭐 그런 것들임

그리고 준비가 끝나면 주문 파트를 만듦

왜냐하면 dish가 없다면 주문 파트는 의미가 없기 때문임

그래서 우리는 레스토랑 대시보드를 만들어서 dish를 올릴 때까지 기다림

그리고 드라이버 대시보드도 만듦

그러면 앱에 있는 세 유저의 관점에서 주문과 subscription 등을 테스트해 볼 수 있음

그러면 이제 레스토랑 페이지를 만들기 시작해봄

pages에서 client 폴더에 만듦

restaurant.tsx라고 함

이번이 우리가 테스팅으로 넘어가기 전 마지막으로 TailwindCSS를 연습하는게 됨

GraphQL Apollo Query를 테스트하기 전 마지막임

다시 한번, 우리는 먼저 Component를 만들어야함

그리고 router에 Component를 추가해야함

router로 가볼까

이것은 /restaurant/:id가 됨

지금 여기서는 component인 Restaurant을 import하고 있음

나는 pages에서 Restaurant을 import함

이 Restaurant page의 이름을 RestaurantDetail 같은 다른 이름으로 바꿔도 됨

이제 파트 2임

restaurant으로 가게 만들어봄

어떻게 할까

클릭해서 가게 만듦

그러면 components의 Restaurant으로 가서 Link를 만듦

Link는 react-router-dom에서 옴

그리고 말했다시피 props에 id가 있음

그러면 id를 가져와서 ${id}를 붙임

이것이 스텝 2였음

이제 Link가 생겼음

여기를 클릭하면 /restaurants/4로 옴

restaurant이 보임

이제 레스토랑의 ID를 가져와야함

restaurant page에서 하면 됨

어떻게 ID를 가져오지

useParams로 parameters를 가져올 수 있음

react-router-dom은 우리에게 3개의 hook을 줌

사실 다른 것도 있음

하지만 중요한 것은 useLocation, useHistory, 그리고 useParams임

useLocation은 우리가 어디있는지, URL을 알게 해주고, useHistory는 이곳저곳 돌아다닐 수 있게 change, replace, push를 할 수 있음

그리고 useParams는 우리에게 parameter를 줌

먼저 있는지 확인부터 해봄

이제 playground로 와서 우리가 쓸 query를 찾아보면 그것은 바로 restaurant임

input은 variable이어야함

그리고 안에 query를 쓰면 되는데 여기 input은 $input임

우리가 받고 싶은 것은 error, ok, 그리고 restaurant이 됨

그리고 우리가 이미 fragment를 가지고 있음

여기서 쓸 fragment는 RestaurantParts임

fragment를 사용하면 import 해야함

이제 types를 만듦

터미널에 npm run apollo:codegen 입력

Query를 사용할 준비를 마쳤음

loading, data를 가져오고 useQuery()로 RESTAURANT_QUERY를 사용함

variables가 필요함

input은 restaurantId임

restaurantId는 parameters로부터 가져오면 됨

parameters에는 id가 있음

Typescript가 불평하고 있음

왜냐하면 parameters는 빈 object여야하기 때문임

그러면 이제 Interface를 만듦

id는 string이여야함

useParams에 IRestaurantParams를 씀

restaurantId는 string이고, params.id도 string이 됨

이제 data를 console.log해서 Query가 성공적인지 봄

restaurantId는 number여야함

string은 number Type에 할당할 수 없음

그래서 restaurantId는 integer여야함

그런데 params.id는 string임

우리는 이렇게 +를 하면 더 이상 불만이 나오지 않음

우리는 restaurant이 있음

이것은 우리 리스트에 있는 어떤 레스토랑에서도 동작함

보다시피 새로운 것은 아무것도 없음

우리가 원하는 것을 얻는 방법을 앎

어떻게 Query를 작성하는지 알고, fragment로 코드를 재사용하는 방법도 알고 있고, URL에서 어떻게 parameter를 가져오는지도 알고, 그리고 꽤 잘 작동했음

Typescript는 우리가 실수하는 것을 잘 잡아줬으니까 놀랄 일은 없음

다음 영상에서는 말했다시피 연습을 해봄

TailwindCSS로 이 header를 만듦

## 17.9 Restaurant part Two

이제 Tailwind CSS를 연습함

이 모듈을 마지막으로 다음에는 테스트를 진행할 수 있음

우리는 이 header만 만듦

만약 TailwindCSS에 관심이 없고, header를 어떻게 만드는지 알고 있다면, 그냥 다음 섹션으로 넘어가도 괜찮음

이것이 Tailwind CSS를 다루는 마지막 시간일 것 같음

이제 이 모든 것이 어떻게 돌아가는지 알거라고 확신함

이것이 header가 될것이고,  header는 배경 사진이 있음

그래서 아마 컨테이너에 배경 사진을 바로 지정할 수 있음

className에 bg-red-500을 줌

항상 padding을 사용해서 수직 크기를 조정하는게 더 나은것 같음

py-40으로 해봄

충분한 것 같은데 48로 해봄

이제 이미지를 함

bg-center 그리고 bg-cover를 함

이제 흰 부분을 만듦

컨테이너 내부에 div를 또 만들고, 그 안에 h4를 만듦

폰트를 크게 만들어봄

text-5xl로 해봄

충분한 것 같음

4xl로 해봄

그리고 className에는 bg-white를 넣음

보다시피 오른쪽 끝까지 길어져 있음

왜냐하면 width가 100%기 때문임

그러면 width를 20%정도로 만들어봄

25%로 함

괜찮은 것 같음

그리고 위아래로 padding을 줌

위 아래 padding을 4로 해봄

이제 왼쪽에 padding이 필요함

padding left를 함

이제 아래쪽에 카테고리를 추가함

보이는 것처럼 이 카테고리를 클릭할 수 있음

그러니 이것을 코드 챌린지에 추가해보는 것은 어때

카테고리에 클릭을 추가함

어떻게 하는지 앎

카테고리를 함

사진이 없을 때 배경색을 바꿈

red는 썩 좋지 않은것 같음

bg-gray-800으로 함

새로고침하면, 보다시피 로딩 중일 때 배경색이 회색임

이제 폰트를 조금 다르게 바꿈

조금 더 크게 만듦

category의 className은 text-sm, font-light임

이 사이에 약간의 공간이 있음

margin-bottom을 4로 해봄

좀 더 작게 해도 됨

그리고 address가 있음

h6 className에도 똑같이 함

이제 위아래 padding을 조금만 추가함

만약 평점을 넣고 싶으면, 백엔드를 바꿔야함

앞으로 우리는 여기서 dish들을 보게 됨

그것은 레스토랑 대시보드가 끝나고 함

레스토랑 대시보드는 테스트가 끝난 뒤에 함

마침내 테스트를 하게 됐음

Component 테스트도 하고 흐름도 테스트함

유저가 로그인하고, 어떻게 클릭을 하게 만드는지, 그런 모든 것들을 어떻게 하는지 보여줌

## 18.0 Tests Setup

마침내 테스팅을 할 차례가 왔음

여기서 우리는 정말 멋진 testing library를 사용함

이것을 왜 사용하는지 나중에 알게 됨

그리고 jest를 사용할건데 jest는 create-react-app에 이미 설정되어있음

그래서 우리는 아무것도 준비할 필요가 없음

이것은 마치 백엔드의 NestJS에서 사용한 것과 비슷함

둘 다 jest를 돌릴 수 있음

jest는 expect, mock 이런 것들을 했었음

이미 프로젝트에 jest가 포함되어 있고 App.test.tsx에 이미 작성된 테스트도 있음

앞으로 우리가 만들 것과 정말 비슷함

test가 있는데 백엔드에서 썼던 것처럼 it을 쓸 수도 있음

그리고 어떻게 작동하는지 모르겠지만 나중에 알게 됨

우선은 테스트를 조금 셋업해봄

create-react-app은 package.json에서 jest 설정을 할 수 있는데, jest에 무슨 설정을 할 수 있는지 알 수 있는 가장 좋은 방법은 잘못된 설정을 해보는 것임

터미널에 npm run test 입력

npm run test로 테스트를 작동시켜보면 warning이 나타남

"권한 밖입니다. create-react-app은 아래의 옵션들만 override할 수 있습니다."라고 나옴

jest를 설정할 수 있는 방법은 정말 다양함

jest에서 더 많은 설정을 해야한다면 eject를 하면 됨

그리고 webpack 파일을 가지고 무엇이든지 할 수 있음

그런데 eject를 하지 않아도 component를 잘 테스트할 수 있는 방법을 보여주려고 함

어떤 ejection도 필요하지 않음

보다시피 우리가 설정할 수 있는 옵션들이 나와있음

우선 component의 coverage를 확인해봄

기억날지 모르겠지만, 우리는 파일이 얼마나 cover됐는지 알 수 있는 coverage라는게 있음

이것을 통해서 우리가 만든 테스팅이 얼마나 부족한지 확인할 수 있음

터미널에 npm test -- --coverage 입력

npm test -- --coverage를 실행해봄

보다시피 all files라 나와있지만 아무 파일도 보이지 않음

그래서 무엇을 해야하냐면 --watchAll을 못쓰게 만들어야함

그래서 --watchAll=false를 추가함

물론 에러가 있음

걱정할 필요는 없음

아무튼 이렇게 하면 우리 app 모든 부분의 coverage를 확인해서 보여줌

별로 좋지는 않음

우리는 reportWebVitals 같은 것은 테스트할 필요가 없음

fragments, constants, apollo는 테스트할 필요가 없고 component들만 테스트하고 싶음

그래서 방금 보여준 설정 중에서 하나를 수정해봄

그리고 jest가 특정 폴더에서만 테스트 파일을 찾을 수 있도록 만듦

components, pages, routers에 있는 모든 것들을 테스트해봄

collectCoverageFrom을 써봄

jest라 해봄

이 안에 collectCoverageFrom을 넣음

어디에서 coverage를 검사하라고 할거냐면, components 안에서 모든 폴더의 모든 tsx 파일의 coverage를 검사하라고 할 것임

tsx인 이유는 component를 검사하기 위함임

pages도 똑같이 해줌

routers도 마찬가지로 해봄

우리가 coverage를 확인하려는 파일들을 나타냄

이제 다시 한 번 돌려봄

다시 돌리기 전에 script를 만듦

test:cov라고 함

단어 전체를 쓰고 싶다면 이렇게 하면 됨

터미널에 npm run test:coverage 입력

이제 npm run test:coverage를 실행할 수 있음

에러들을 고치면서 여러 가지들을 배움

이제 components, pages, pages/client, pages/user를 검사하고, 나중에는 더 많은 pages를 검사함

그리고 routers를 검사하고 logged-out-router는 이미 테스트된 것으로 나오는데, 이것은 아무것도 하지 않는 component라 그런 것 같음

그래서 이미 테스트된 것으로 나옴

여기까지 셋업을 해봤고, 하나 더 테스트 해보고 싶은 것은 바로 app임

이것도 component니까 테스트해봄

그러니까 app.tsx라는 새로운 파일을 만듦

에러를 고쳐봄

index는 "./components/app"에서 App을 가져오면 됨

우리는 셋업을 마쳤고, 보다시피 generated를 포함하고 있지 않음

그리고 우리는 쓸모없는 constants를 테스트할 필요가 없음

우리는 components를 테스트하는 것에 몰두함

이제부터는 마인드를 바꾸고 생각하는 방식을 바꿔야함

code 자체를 테스트하는게 아니고 user의 관점에서 components를 테스트하기 때문임

이 말을 계속 반복함

백엔드에서는 우리가 무엇을 해야할지 알 수 있었음

그런데 여기서는 백엔드에서 했던 것과 분명히 다름

mock하고 function call들을 체크하는 것들은 하지 않음

터미널에 npm run test:coverage 입력

이제 npm run test:coverage를 실행하면 에러가 나옴

테스트가 없음

필요한 것은 다 준비됐고 이제 app.tsx 테스트를 시작해봄

정말 쉬울수도, 아닐수도 있음

## 18.1 App Tests

첫번째 테스트를 작성해봄

app부터 시작해봄

우리의 application임

테스트는 어떻게 만들면 될까

NestJS에서는 파일의 이름에 .spec을 붙였었음

frontend에서도 똑같이 하면 됨

app.spec.tsx라 함

이렇게 하면 작동할거고 테스트로 인식함

그리고 이런 방법도 있음

이렇게 __tests__ 폴더를 만듦

이 폴더는 너가 원하는만큼 만들면 됨
 
하나는 여기에 두고 pages, routers에 만들어도 됨

여기에 두는 모든 파일들은 테스트가 됨

그리고 꼭 .spec을 붙일 필요는 없음

그냥 app.tsx라 해도 테스트가 될 것임

docs에서 __test를 검색해보면 설명을 볼 수 있음

__tests__에 js 파일을 만들거나 test.js 또는 spec.js 파일이면 됨

물론 js를 ts로 바꿀 수도 있음

우리는 typescript를 쓰니까 원하는대로 하면 됨

어떤 사람들은 각 component마다 폴더를 만들어서 app.tsx, app.spec.tsx 파일을 만듦

그런데 나는 __tests__ 폴더를 만들어서 테스팅을 함

원하는 방식대로 하면 됨

그리고 icon으로 구별하는 것을 좋아해서 이 파일을 app.spec.tsx로 이름을 바꿈

둘 중에 하나만 만족하면 되지만 icon을 구별하고 tests 폴더를 쓰는게 좋아서 그럼

어떻게 테스트를 작성하면 될까

프론트엔드에서 테스트를 작성하는 것은 백엔드에서 하는거랑 정말 비슷함

기억날지 모르겠는데, 백엔드에서는 무엇인가 describe를 하고 테스트를 만들었음

우선, component를 가지고 작업할거니까 React를 "react"에서 import함 

그리고 원하는 아무거나 describe를 하면 됨

예를 들어 potatoes도 되고 어떤 것도 가능함

테스트하려는 component의 이름을 넣음

꼭 이름을 이렇게 적을 필요는 없음

그냥 App이라고만 해도 됨

원하는 대로 함

그리고 백엔드에서처럼 describe 안에는 function을 넣음

individual test로 it()라 하고 테스트의 이름을 적으면 됨

내가 가장 먼저 하는 테스트는 "renders OK"임

그러면 어떻게 App이 잘 render됐는지 테스트할까

정답은 직접 App을 render 해보는 것임

중요한 것이 있는데 보다시피 여기에 react-dom에서 import하는 render가 있음

여기서 import하면 안되고, render를 import할 곳은 @testing-library/react임

처음으로 testing library를 쓰고 있음

이것으로 render를 해볼거고 다른 테스트에서 이 testing library가 얼마나 멋진지 알게 됨

이것을 보면 component를 render할거라는 것을 예상할 수 있음

render function에는 우리가 테스트하고 싶은 실제 component를 주면 됨

그리고 render function을 call하고나면 정말 많은 것들을 쓸 수 있게 해줌

render function이 정말 좋은 것들을 쓰게 해주는데 그것은 나중에 알아봄

이제 첫번째 테스트인 "renders OK"가 준비됐음

에러 나타날 준비를 해봄

터미널에 npm run test 입력

npm run test를 해보면 첫번째 에러가 나타났음

무슨 문제가 있을까

엄청 큼

보다시피 App을 render하려고 하는데 에러가 나왔음

에러는 context에서 "client"를 찾을 수 없다고 나와있음

보다시피 apollo와 관련된 에러 같음

에러가 생긴 라인에서 useMutation을 쓰고 있음

그런데 무슨 파일에서 문제가 생긴거지

바로 login임

login 화면에 loginMutation이 있으니까 테스트의 일부분은 작동하는 것 같음

왜냐하면 LoggedOutRouter를 render하고, 그 안에 Login이 render될 때 useMutation을 쓰는 loginMutation에서 에러가 생김

이것은 바로 context에 client가 없기 때문임

어떻게 app.tsx를 render하고 있지

app.tsx는 index에 의해 render되고 있음

보다시피 index에는 ApolloProvider, HelmetProvider, App이 있음

그러면 여기서 에러가 생기는게 납득이 감

그런데 나는 이 에러를 아직 고치고 싶지 않음

아예 안 고칠 수도 있음

왜냐하면 login page에 있는 useMutation을 신경 쓸 필요가 없음

유저가 LoggedOutRouter나 LoggedInRouter를 보고 있는지 테스트하고 싶음

그것만 알고 싶음

loginMutation이나 client 이런 것들은 신경쓰지 않음

나중에 login 화면을 테스트할 때 하면 되니까 지금은 정말 신경 쓸 필요 없음

내가 지금 신경쓸 것은 isLoggedIn이 true일 때, false일 때 보여줘야할 것을 잘 보여주는지임

그래서 백엔드에서 했던 것처럼 component를 mock함

component가 있는지만 알고 싶음

component의 내용, login page, graphql 등등 이런 것들은 신경쓰지 않음

그렇게 하면 정말 안 됨

그러면 mock을 해봄

우리는 mock하는 방법을 앎

백엔드에서 많이 해봤으니까 설명하지 않음

그리고 LoggedOutRouter를 mock함

implementation을 mock하면 됨

logged-out-router는 파일이고 이것은 LoggedOutRouter라는 component를 return함

LoggedOutRouter는 logged-out이 적힌 span을 return하게 만듦

정말 쉬움

그러면 이 테스트는 통과함

보다시피 통과하고 있음

전에 말했듯이 여기 있는 renders OK에서 render는 정말 많은 것들을 쓰게 해줌

예를 들어, 여기서 render를 call하면 이 function들을 모두 사용할 수 있음

엄청 많은 get이 있고, find를 할 수 있고, container, debug도 쓸 수 있음

debug가 무엇을 하는지 알아봄

debug를 call 해봄

debug는 테스트를 하는 관점에서 app이 어떻게 생겼는지 보여줌

보다시피 logged-out을 rendering하고 있음

우리는 app이 어떻게 rendering하는지 확인할 수 있음

여기서는 보통 html을 render함

renders LoggedOutRouter로 바꿈

그리고 render에서 또 다른 것을 사용할 수 있음

여기서는 getByText를 써봄

그리고 getByText()라 함

우리가 가져오고 싶은 텍스트는 logged-out임

한번 확인해봄

getByText가 텍스트를 찾지 못하면 어떻게 되는지 봄

에러가 생겼음

logged-out을 가진 element를 찾지 못했음

그리고 페이지에 뭐가 있는지 보여주고 있음

첫번째 테스트가 잘 통과하고 있음

이제 LoggedInRouter를 render 해봄

"renders LoggedInRouter"로 바꿈

logged-out을 logged-in으로 바꿈

이제 debug는 더 이상 필요 없고, LoggedInRouter를 mock 해봄

LoggedInRouter가 될거고 logged-in으로 바꿈

작동하는지 확인해봄

우리 app에 condition이 있기 때문에 안 됨

바로 isLoggedIn인데, 테스트에서 유저가 login을 안 해서 false를 return하기 때문임

그래서 "renders LoggedInRouter"가 통과되지 않음

그러면 isLoggedIn의 value를 바꾸고 mock 해야겠다고 생각함

우리는 이런것 하나도 할 필요가 없음

전에 했던 방식으로 variable을 세팅하면 됨

그러면 테스트에서 ReactiveVar를 설정할 수 있음

내가 test component를 만든다고 생각하면 이 부분을 그대로 테스트하고 싶지는 않음

component를 바꿔주는 interaction을 만들고 싶음

물론, login을 다시 만들거라면 token 등등 다른 것들이 필요하니까, 여기서는 유저의 interaction을 다시 만들어봄

interaction은 유저가 login을 하면 isLoggedInVar로 바꿔줌

isLoggedInVar는 ReactiveVariable임

그리고 여기에 우리가 원하는 value로 바꿔주면 됨

그러면 또 다른 문제가 생김

"테스트를 할 때, state를 update하는 코드는 act() 안에 있어야합니다"라고 나와있음

act는 유저가 한 행동이라고 생각하면 됨

그래서 우리는 알려준대로 해결해도 되고 아니면 @testing-library/react를 쓸 수도 있음

어떻게 할거냐면 await waitFor(()=>{ isLoggedInVar(true) })라고 하고 async를 추가해야함

그러면 어떻게 될까

보다시피 잘 통과하고 있음

state를 바꾸고 있는데 waitFor()에서 무엇을 하고 있는것일까 

말그대로 state가 refresh하고 쓸 수 있도록 기다려줌

debug()를 써봄

그리고 app이 어떻게 생겼는지 확인해봄

보다시피 app이 logged-in이 되었음

그러면 이것이 잘 작동한다는 뜻이고, 이렇게 App component를 테스트 해봤음

이제 coverage를 확인해봄

터미널에 npm run test:coverage 입력

그리고 app이 어떻게 됐는지 확인해봄

## 18.2 Button Tests

어떤 테스트는 엄청 복잡하고, 어떤 것은 정말 쉽고, 또 어떤 것은 중간정도 됨

예를 들어, 여기 있는 것이 중간에 있는 거라고 볼 수 있음

대단한 것은 안 했음

getByText가 찾으려고 하는 것을 못찾으면 테스트에 통과하지 못함

정말 중요함

아직 expect는 하나도 쓰지 않았지만 다음 테스트부터는 쓸지도 모르겠음

그것은 바로 button임

그러면 button을 열고 button.spec.tsx 파일을 만듦

이제 button이 어떻게 작동해야하는지 봄

button에는 canClick이라는 condition이 있고, loading도 있음 

이것이 중요함

그러면 테스트를 만들어봄

왜냐하면 우리는 button에 props를 보냄

전에 했던 것으로 그대로 해주면 됨

그리고 여기서 Button을 render함

이 Button에는 canClick이라는 prop이 있음

button을 오른쪽에 띄움

canClick은 boolean이어야하니까 true라고 하고, loading은 false, actionText는 "test"라고 함

테스트를 만들었음

테스트가 어떻게 작동됐을까

node에서 확인해보면 통과했음

button이 잘 작동함

한 가지 알려줄게 있음

만약 이 문구를 테스트에서 확인하고 싶다면, verbose flag를 쓰면 됨

package.json의 test에 --verbose를 추가하면 됨

그러면 다시 테스트해봄

보이는 것처럼 테스트를 확인할 수 있음

원하는대로 하면 됨

그런데 내용이 길어질테니 지움

확실하게 체크하는 것이 안심이 된다면 추가하도록 함

button이 잘 render되고 있는데, 더 자세하게 어떤 내용으로 render하는지 확인해봄

actionText가 제대로 rendering되는지 확인해보고 싶음

그리고 button의 어느 부분이 render되지 않았는지 알아보게 coverage를 확인해봄

다시 한 번 돌려봄

이미 button을 render 했음

conditions 부분임

그러면 render가 제공하는 function 중 debug를 다시 사용해봄

debug()를 많이 씀

이제 debug하려고 console.log 할 필요가 없음

debug가 알아서 console.log 해주니까 걱정할 필요 없음

우리 app이 어떻게 생겼는지 한번 봄

button이 있고 test라 써져있음

그러면 getByText를 써봄

같은 prop이 있음

getByText가 잘 통과했음

만약 이 component를 다시 render하고 싶으면 어떻게 하면 될까

왜냐하면 이제 false인 loading을 true로 바꾸고 싶음

그러면 rerender라는 것을 쓰면 됨

똑같이 rerender라고 함

element를 다시 render하고 싶음

loading을 true로 바꿈

그리고 debug를 다시 call함

원래 쓰던 debug를 쓰면 됨

그리고 getByText()로 "Loading..."을 찾음

존재하는지 확인해봄

보다시피 test가 있고, prop을 바꿔서 button을 rerender하면 loading을 볼 수 있음

그러니까 둘 다 작동한다는 것임

다른 text를 가지고 rerender함

loading이 false니까 getByText("test")가 작동함

우리는 component를 render하고 있고, props를 기반으로 한 state 변화를 확인하고 있음

보다시피 우리는 세부적인 implementation을 테스트하는 것이 아님

세부적인 implementation은 react의 관점에서 component가 작동하는 방식임

우리는 이것을 테스트하는게 아님

그래서 testing-library/react가 멋진 이유임

왜냐하면 유저의 관점에서 테스트할 수 있게 해줌

필요없으니까 이제 debug를 지움

테스트는 통과함

이제 무엇을 할거냐면 테스트의 implementation을 바꿈

다시 한 번 testing-library/react가 대단하다는 것을 알 수 있음

implementation은 이런 것임 

이런 것을 삼항 조건 연산자(ternary operator)라고 하는데, loading이라 하고 물음표 ,"Loading..." 이런 것이 implementation임

우리는 이런 것을 테스트할 필요 없음

우리가 테스트해야할 것은 유저들이 볼 수 있는 output임

예를 들어 우리는 implementation을 테스트하지 않는 testing-library 방법을 사용하기 때문에, 이 component의 implementation을 바꿔도 output만 테스트함

그리고 !loading도 추가함

이런식으로 implementation을 바꿔도 테스트가 잘못되지 않음

왜냐하면 우리는 코드를 테스트하는 것이 아니고 코드의 output을 테스트함

우리는 유저의 관점에서 component를 테스트함

테스트는 여전히 작동함

이것은 정말 중요함

왜냐하면 우리는 button의 코드를 테스트하는 것이 아닌데, 우리가 코드를 테스트해야하는 것으로 생각할 수가 있음

coverage를 보면 cover되지 못한 라인을 보게 됨

그런데 안타깝게도 그 라인은 implementation 라인이니까 cover되지 않음 

대부분은 100%의 라인이 cover됨

그런데 가끔은 cover하지 못하는 라인이 있을 수 있음

그것은 유저가 button에서 보게 될 output만 테스트하기 때문임

우리는 component가 이렇게 되어있든 아니든 상관없음

이것은 정말 신경 쓸 필요가 없는 것임

그러니까 두 경우 모두 테스트에서 실패하지 않음

굉장히 좋은거니까 여기 rerender를 다시 보여주고 싶음

그런데 나는 이 테스트를 나누는 것이 더 보기 좋을 것 같음

나만 그럴 수도 있으니까 그냥 냅두고 싶으면 냅둬도 됨

나는 그저 어떻게 component를 rerender하는지 보여주고 싶음

여기 it("should render OK")는 완벽함

완전 똑같이 만들어봄

rerender를 지우고 loading을 true로 바꿈

그리고 getByText("Loading...")만 놔두면 됨

나는 테스트를 분리하고 싶어서 이렇게 함

이렇게 안해도 됨

그런데 이렇게 하면 더 많은 것을 알 수 있음

coverage를 한 번 더 확인해보면 button에서 여전히 cover되지 않은 라인이 있음

16번 라인이 있음

16번 라인은 condition임

이 canClick을 cover해야함

canClick을 false라고 해봄

그리고 debug()를 call함

canClick이 하는 일은 className을 바꿔주는 것임

이 둘 중에 하나가 됨

그러면 이 className인지 체크하면 됨

그러면 어떻게 체크하면 되지

정말 간단함

우리는 container라는 것을 사용함

render가 container를 쓸 수 있게 해주는데, container는 여기 있는 div임

이것이 render에서 쓸 수 있는거고, container의 children이 무엇을 가지고 있는지 체크할 수 있음

그리고 React가 아닌 VanillaJS로 api를 사용해서 element를 만질 수 있음

그러면 이 className이 있는지 확인해봄

그리고 여기서 드디어 jest를 사용해봄

그리고 user event를 못하게 하는 pointer-events-none class가 있는지 체크함

모두 통과하고 있음

이제 실패하는지도 확인해봄

항상 테스트가 실패하는 경우를 만들어보는 것이 좋음

잘 작동함

이렇게 button을 테스트해봤음

보다시피 엄청 복잡하지는 않지만, rerender를 하고, props를 바꾸는 방법을 배웠고 getByText를 써봤음

그리고 container를 사용해서 모든 것을 체크할 수도 있음

firstChild, getByText, class가 있는지, click이 됐는지, style이 있는지 모든 것을 확인할 수 있음

그냥 옵션을 봄

여기 보면 toHave 등등 정말 많음

button은 여기까지고 coverage를 한 번 더 확인해봄

만약 이전 영상에서 잘 이해가 안됐다면 이번 영상에서 좀 해결됐길 바람

만약 아직도 이해되지 않았다면 계속 연습을 해봄

언젠가 이해가 됨

100%를 달성했음

중요한 것은 implementation을 테스트하지 않는다는 것임

이런 것들은 신경 쓰지 않음

이것은 if~else로 만들 수도 있음

중요한 것은 output이 무엇인지, 유저가 보게 되는 것이 무엇인지임

implementation은 테스트하지 않음

## 18.3 FormError and Restaurant Tests

이제 form-error를 테스트해봄

어렵지는 않음

props만 테스트하면 끝남

render를 import함

이제는 visual studio code에서 testing-library로 자동완성 해줌

당연히 작동하겠지만, errorMessage가 제대로 나오는지도 확인해봄

getByText를 가져옴

coverage를 확인해봄

초록색으로 바뀌었음

이제 restaurant을 테스트해봄

header에는 graphql이 있어서 따로 설명할게 있음

그러면 form-error, restaurant 테스트를 하나의 영상에 담아봄

이제 restaurant.spec.tsx 파일을 만듦

coverage를 보면 cover되지 않은 구간이 11-17임

무엇이 있는지 한 번 봄

분명히 에러가 있을 것임

한번 봄

testing-library의 render를 쓰고, Restaurant을 render함

Restaurant에는 props가 필요한데, 그 props들은 id="1" coverImg="x" name="nameTest" categoryName="catTest"라고 함

그런데 개발자에게 이렇게 쉬운 일은 없음

에러가 있음

에러는 Router 바깥에서 Link를 쓰면 안된다고 말해주고 있음

말이 됨

Router 바깥에서 Link를 쓰면 안됨

그것이 react Router의 규칙임

그러면 무엇을 해야 하냐면 Router로 감싸줘야함

그럼 import를 해봄

우리는 react에서 하는 방식으로 component를 rendering하고 있음

이 component에는 규칙이 있음

우리가 테스트하고 있는 restaurant component는 Router로 감싸져있음

왜냐하면 restaurant component는 LoggedInRouter 안에서 보여짐

Router로 감싸면 에러가 나오지 않음

다시 한 번 저장함

보다시피 rendering이 잘 작동하고 있음

이제 render에서 쓸만한 것들을 꺼내봄

component의 모습을 확인하기 위해 debug를 가져옴

그리고 debug()를 call함

보다시피 Link가 있음

nameTest, catTest도 있음

이제 내가 props로 보낸 것들이 잘 갔는지 테스트해봄

그리고 Link가 있는지도 테스트할 수 있음

무엇을 할거냐면 getByText를 가져옴

getByText("nameTest")라고 하면 잘 찾아냄

그리고 catTest도 찾아봄

둘 다 잘 작동함

call한 debug()를 보면, Link도 확인할 수 있음

Link는 component의 첫 부분에 있음

component의 시작 부분에 있음

이제 container를 쓸 수 있음

expect()를 먼저 쓰고, container.firstChild를 하면 많은 것을 쓸 수 있는데 우리는 여기서 href를 확인할 수 있음

toHaveAttribute()를 씀

우리가 확인하고 싶은 attribute는 "href"임

prop에 따르면 value는 "/restaurants/1"이 됨

좀 더 구조적으로 만들려면, restaurantProps object를 만듦

coverImg도 있음

그리고 "nameTest" 대신에 restaurantProps.name을 체크하면 됨

이렇게 하면 에러가 덜 남

toHaveAttribute에는 ${restaurantProps.id}를 씀

이 정도면 꽤 탄탄한 테스트인 것 같음

이제 debug()를 지움

아주 잘 작동함

coverage도 확인해봄

restaurant이 100%임

다음에는 Header를 테스트 해봄

## 18.4 Testing Header and 404

보다시피 header의 "renders OK" 테스트를 거의 다 만들었음

잘 작동해야하는데 안됨

문제는 client임

왜냐하면 header에서 useMe query를 쓰고 있음

useMe는 apollo랑 관련된 것임

좋은 소식은 apollo에 testing을 할 수 있는 도구가 있다는 것임

apollo에서 쓸 수 있는 테스팅 도구가 있는데, MockedProvider라는 것임

component를 테스트할 때, 어떤 때는 MockedProvider를 쓰고 어떤 때는 다른 것을 사용함

둘 다 사용법을 보여주고, 장단점을 알려줌

무엇을 사용할지는 내가 선택하면 됨

그러면 MockedProvider는 어떻게 작동할까

정말 쉬움

우리는 import만 하면 됨

MockedProvider를 import하고, Header를 MockedProvider 안에 render함

그러면 Router 바깥에서 Link를 사용하지 말라고 나옴

맞는 말임

Header를 보면 어떻게 생겼지

안에 Link가 있음

그러면 또 다른 것으로 감싸줘야함

먼저 import함

Router로 감싸줌

보다시피 지금 우리는 이 component가 render될 수 있게 condition을 맞춰주고 있음

이제 잘 render되고 있음

문제가 되지는 않겠음

그러면 이제 체크를 해야하는데 Header를 보면 condition이 있음

그럼 본능적으로 useMe hook을 mock 해야겠다고 생각함

문제는 component 안에서 무엇인가를 mock하면 안됨

hook 자체를 mock하면 안되고 hook에 결과를 주는 것을 mock 해야한다는 것임

예를 들어, 나는 이 useMe response를 mock하지 않음

대신 서버에 보내는 graphql request를 mock함

hook 말고 request를 mock함

다행히 MockedProvider로 할 수 있음

MockedProvider는 mocks라는 prop을 받는데 mocks는 query, mutation, result를 mock 할 수 있게 해줌

말 그대로 결과를 만들어서 테스트할 수 있음

예를 들어 이 variable을 가지고 query를 만들고, 이 output을 만들어 result를 테스트함

이제 직접 해봄

header.spec으로 와서 MockedProvider에 mocks로, mocks는 여러 mock의 array가 됨

그리고 ME_QUERY를 export 해줘야함

정말 중요함

ME_QUERY를 export해서 mock에서 같은 query를 사용함

ME_QUERY가 아직 import 되지 않았음

import를 먼저 함

이제 result도 mock 할 수 있음

정말 중요한건데 result는 여기에 작성한 형태여야함

type도 모두 같아야함

me : {  }하고 안에 붙여넣기함

그리고 value를 작성함

중요한 것은 id는 number여야하고, verified는 true여야함

query를 request하고 있고, query의 result를 mock하고 있음

useMe를 mock 할 필요는 없음

query의 result만 mock하면 됨

정말 좋음

console.log로 component가 어떤 data를 받는지, mock이 잘 되는지 확인해봄

작동이 안됨

작동이 되지 않는 이유는 알다시피 query는 즉시 일어나는게 아님

query가 끝나기까지 시간이 좀 걸림

그래서 apollo에서는 response를 기다려서 해결하라고 알려주고 있음

이것은 timeout이고, 0초에 result를 받는거니까 아무것도 아닌 것 같지만 result를 기다리기는 함

result를 기다리도록 만들어봄

MockProvider를 줄임

result를 기다린 다음에 테스트를 진행함

async를 추가함

그러면 또 다른 에러가 나타남

이 에러는 우리가 state를 update해서 나타나는건데, 우리는 state update도 기다려줘야함

그래서 어떻게 할거냐면 await waitFor()를 씀

이것은 async여야함

우리가 component를 render하면 mock과 함께 render됨

그리고 0초지만 어쨌든 Promise를 resolve하기 위해 기다림

그리고 이 모든 것을 waitFor() 안에 넣었음

왜냐하면 우리가 website(react)의 state를 바꿔서 rerender를 trigger하고 있음

rerender를 기다려야하고, Promise도 기다려줘야 됨

이제 저장을 함

여기에는 query의 loading state가 있고, 여기를 보면 mock한 response가 있음

이제 verified가 true인 것을 볼 수 있음

debug()를 call함

Please verify your email이라는 문구가 없음

이제 "renders verify banner"로 만듦

또 다른 테스트를 만들어봄

우리는 verified만 바꾸면 됨

renders without verify banner는 유저가 verified라는 것임

그런데 renders verify banner는 유저가 verified가 아니라는 것임 

그래서 이 경우에는 banner를 만들어냄

이제 debug는 필요없고 getByText를 가져옴

이번에는 내가 생각하는 element가 없다는 것을 확인하고 싶음

component에 특정 text가 없다는 것을 확인하고 싶음

getByText는 내가 찾고자 하는 것을 찾지 못하면 실패하게 됨

get 어쩌고 하는 것들은 찾지 못했을 때, 테스트를 실패하게 만듦

실패하고 싶지 않다면, 정확히 말해 무엇인가 존재하지 않는다는 것을 확인하고 싶다면 query를 사용하면 됨

query는 실패하지 않고 null을 return함

그래서 queryByText로 같은 내용을 확인해봄

그리고 getByText 대신에 queryByText를 사용함

다시 한 번 강조함

getByText는 찾지 못했을 때 실패하게 만듦

그런데 queryByText를 보면 HTMLElement 또는 null을 return함

그러니 에러는 없음

너무 복잡하니까 내가 만든 console.log를 모두 지워버림

모든 것이 잘 통과하고 있음

getBy와 queryBy의 차이는 정말 중요함

다시 한 번 설명함

getBy는 element를 찾지 못하면 테스트에 실패함

그래서 무엇인가 존재하지 않는지 확인할 때는 queryBy를 사용하면 됨

queryBy가 찾지 못했을 때는 null을 return함

이것이 딱 내가 원하던 것임

나는 banner가 null인지 expect 했음

header를 테스트해봤음

coverage를 확인해봄

다시 한 번 돌려서 얼마나 진행됐는지 봄

빠르게 404 page를 테스트해봄

이것을 테스트하는게 오래 걸리지는 않음

404.spec.tsx 파일을 만듦

render를 쓰고 NotFound를 render한다고 함

render를 import하지 않았음

이 테스트를 빠르게 돌려봄

통과하지 못함

통과하지 못한 이유는 우리가 여기에 helmet을 사용하고 있어서 그럼

index에는 HelmetProvider가 있음

또 다시 Link를 바깥에서 쓰지 말라고 나옴

이것을 좀 더 좋게 만드는 방법이 있는지 궁금해함

계속 같은 것을 반복하지 않는 방법이 있으니까 알려줌

일단 지금은 고생 좀 해봄

이제 404가 작동하는 것을 볼 수 있음

NotFound가 render 되었으니 기분이 좋음

그런데 또 무엇을 할 수 있냐면 document의 title을 테스트해볼 수 있음

보다시피 테스트에 실패했음

왜냐하면 Helmet이 바로 바꿔주지 않기 때문임

그러면 Helmet을 좀 기다려주면 됨

그리고 여기에 async를 추가하면 됨

실패하는지도 확인해봄

잘 작동하고 있음

이런 식으로 Helmet을 사용하는 component를 테스트할 수 있음

보다시피 여기 document.title처럼 기본적인 javascript, vanillaJS를 사용하고 있음

react로는 아무것도 할 필요가 없음

testing-library 정말 좋음

## 18.5 Login Tests part One

이제 login page 테스트를 시작해봄

이 테스트는 우리가 만드는 것 중에 가장 복잡함

login과 create-account 모두 복잡함

다 만들고나면 볼만함

이미 에러가 하나 있는데 client를 찾을 수 없다는 에러임

graphql에 문제가 있는거니까 이런 에러에는 익숙함

우리가 header에서 무엇을 했었는지 잘 생각해보면 component를 mockedProvider로 감쌌었음

그렇게 했었는데 지금은 그렇게 하지 않음

왜냐하면 mockedProvider에서 mutation을 테스트하는 것은 내 기준에서 좋음

mutation을 mock 할 수 있고, mutation의 variables를 보낼 수도 있음

그리고 result를 테스트하고 expect를 할 수도 있음

나는 이 테스트에 좀 더 깊이가 있었으면 좋겠음

login page를 보면 꽤 복잡함

form이 있기 때문임

user가 email과 password를 입력하고 에러가 없다면 form에서 email, password를 가지고 login mutation을 call함

그렇다면 mutation이 form에 있는 email, password로 call 되는지 체크할 수 있고, mutation이 딱 1번 call 되는지도 체크할 수 있음

그런데 apollo graphql이 제공하는 테스트 방법으로는 이것들을 테스트할 수 없음

왜냐하면 query를 이렇게 작성해야하고 provider를 만들어야되며, mutation을 function으로 테스트할 수도 없음

그리고 내가 실수하고 싶지 않아도, 분명히 실수를 하게 됨

그래서 mock-apollo-client라는 것을 사용함

이것을 만든 사람이 여기에 더 좋은 테스트를 할 수 있어서 library를 만들었다고 했음

내가 딱 하고 싶었던 것으로 예를 들어봄

나는 login mutation이 1번 call 되는 것을 expect하고, 특정 argument로 call 되는지 expect하고 싶음

loginMutation이 내가 input에 입력한 email, password로 call 되는지 expect하고 싶음

보다시피 좀 더 많은 제어를 할 수 있음

이 library는 한 주에 5만 명이 다운로드하고 있음

사람들이 사용하고 좋아하니까 나중에는 이 library가 여기에 채택됨

왜냐하면 이것은 mutation을 테스트하는데 별로 좋지 않음

mutation을 하면 result를 테스트할 수 있지만 variables는 테스트할 수 없으니까, call 같은 것들은 테스트하지 못함

터미널에 npm i mock-apollo-client@1.0.0 --save-dev 입력

다 되면 여기 있는 Login을 수정함

우리의 header는 apollo graphql에서 제공하는 mockedProvider로 감싸져있음

이제는 component를 진짜 ApolloProvider로 감쌀건데 client는 mockClient가 됨

한 번 해봄

진짜 ApolloProvider를 import함

이제 client가 필요하니까 client를 만듦

createMockClient를 import하면 @apollo/client/testing에서 가져올텐데 이게 아님

방금 다운로드한 mock-apollo-client에서 createMockClient를 가져옴

전에는 provider 전체를 mocking 했다면 지금은 client만 mocking 하고 있음

이제 render를 함

당연히 render를 못함

cannot read property 'add' of undefined라는 에러가 있는데 이것은 정말 이상한 에러임

이 에러는 Helmet 때문에 생기는 에러임

HelmetProvider를 추가함

이제 보면 Router 바깥에서 Link를 쓰지 말라고 나옴

login page에서 Link를 사용하고 있음

BrowserRouter가 아니라 Router임(rename을 사용했기 때문임)

이제 act 안에 있지 않은 테스트가 update가 되었다고 나옴

우리는 state가 변하는 update를 await하지 않았음

Login은 잘 render 됐지만 state에 변화가 있었음

말했다시피 state가 바뀌는 것을 await 해줘야함

그러면 누가 state를 바꾸고 있지

바로 여기 있는 useForm임

useForm이 state를 바꾸고 있음

아무튼 useForm이 state를 바꾸고 있으니까 무엇을 하면 되냐면, 이 모든 것을 await waitFor() 안에 넣어주면 됨

waitFor()는 state가 바뀌는 것을 await하게 해줌

여기는 async로 해야함

이제 모든 것이 다 괜찮아짐

보다시피 아무 문제 없이 render가 되었음

여기까지 셋업을 해봤음

그래도 계속 해봄

어느 라인이 테스트가 되지 않았는지 확인해봄

이제 render가 됐고, 무엇을 테스트했고 무엇을 안했는지 봄

login에서 44-48, 58-60이 안됐음

이것은 implementation이라 테스트할 수 있을지 모르겠음

이것이 render 됐다는 것은 component가 작동한다는 것임

이제 mutation을 테스트해야하는데, implementation은 테스트하지 않음

onSubmit을 mock하지 않음

loginMutation도 mock하지 않음

우리는 실제 login 과정을 trigger함

물론 백엔드로 가는 것은 아님

어쨌든 실제 login 과정을 trigger함

그것이 우리가 테스트하고 싶은 것임

우리는 코드를 테스트하고 싶은게 아니라 유저에게 생길 일을 테스트하고 싶음

유저가 클릭하고, 입력하고, 에러를 볼건데 이런 것들을 테스트해봄

이제 잘 render하고 있음

첫번째로 하고 싶은 테스트는 바로 이것임

쉬운 것부터 시작함

title을 테스트해봄

이것을 하기 전에 앞으로 많은 render를 하게 될텐데 이 모든 것을 계속 작성하고 싶지 않음

그러니까 beforeEach를 씀

그리고 이 안에서 component를 셋업함

물론 여기서 render에 바로 접근할 수는 없음

나중에 접근하도록 만들거고 mockedClient도 접근할 일이 있음

지금은 it("should render OK")만 하고 title을 체크해봄

여기 있는 것을 확인하면 모든 것이 render 됐다는 것을 알려줌

이 Helmet이 state를 바꾸기 때문에 await waitFor()를 써야함

잘 작동함

실패하게 만들어서 잘 작동하고 있는건지 확인해봄

아주 잘 작동하고 있음

우리는 앞으로 많은 테스트를 만들기 때문에 beforeEach를 사용함

이것이 첫번째 테스트임

다음으로 하고 싶은 테스트는 error를 trigger 하는 것으로 해봄

잘 작동하는지 확인해봄

어떻게 하면 될까

정말 간단함

이 부분을 작성할 때 코드가 술술 적히는 것 같음

많은 것들을 await 해야하니까 async를 사용함

그리고 input에 접근해야하니까 여기에 접근할 수 있어야함

render에 접근할 수 있으면 될 것 같음

그러면 render를 여기에 가져와서 renderResult라 해봄

이것은 let으로 하면 될 것 같음

render는 RenderResult type을 return함

import 됐고, 이제 renderResult = render()라 함

이제 renderResult에 접근할 수 있게 됐음

getBy는 아무것도 찾지 못하면 fail함

우리는 getByPlaceholderText를 사용함

placeholder text로 가져올 수가 있음

이 경우에는 email만 가져옴

getByPlaceholderText("Email")로 하면 됨

여기에 regular expression을 쓸 수도 있음

i는 insensitive(대소문자 구분 안함)라는 뜻임

이제 아무 문제 없이 잘 작동함

모두 잘 통과했음

이제 email을 가져왔는데 무엇을 할 수 있냐면, await waitFor()에 user testing module의 userEvent를 import해서 사용할 수 있음

말그대로 event를 발생시킬 수 있음

보다시피 우리가 직접 input의 value를 바꾸는게 아님

유저가 하는 방식을 우리가 똑같이 할 수 없음

그런데 이렇게 type을 하면 type function이 있음

이것이 좋은 이유는 우리가 implementation call인 change event를 직접 할 필요가 없음

우리가 원하는 것은 그저 type임 

유저가 type을 하면 정말 많은 event를 trigger함

key down event, onchange event 등등 많은 event를 trigger함

그래서 우리는 email element에 type을 함

그리고 이번에는 쓸 수 없는 email을 type 해봄

기억할지 모르겠지만 email에는 일정한 pattern이 요구됨

그래서 쓰지 못할 email을 type 해봄

"this@wont"라고 해봄

이것은 쓸 수 없음

이제 debug를 가져와서 우리의 html이 어떻게 생겼는지 확인해봄

html이 어떻게 생겼지

아주 잘 만들어졌음

내가 type을 했는데 이 조건을 trigger하고 있음

이제 getByText를 가져오면 getByText는 바로 Please enter a valid email임

getByRole도 사용할 수 있음

이것도 우리에게 정말 좋은 기능을 선사하는데 무엇을 할 수 있냐면, 예를 들어 form-error로 가서 여기에 role="alert"를 추가해봄

이제 여기에 getByRole을 쓰고 여기서 error를 많이 받음

보다시피 정말 많은 role을 만들 수 있음

그래서 alert를 씀

role에 potato를 쓸 수는 없으니까 alert라 함

대소문자 상관하고 싶지 않다면 아까처럼 regular expression을 쓸 수도 있음

우리는 implementation을 테스트하고 싶지 않음

email을 가져다가 value를 직접 바꾸고 싶지 않고, 말 그대로 내가 유저인 척하고 싶음

이 element는 테스트 되었음

이제 이것을 테스트 해야함

이것은 email이 입력되지 않았을 때 발생하는 에러임

이것을 위해서 await를 또 씀

그리고 waitFor()를 씀

그리고 userEvent.clear()를 사용함

clear는 input에서 모든 value를 지움

깨끗하게 없애버림

그리고 여기에 debug를 또 다시 call함

무엇을 받았는지 봄

input이 있고 보다시피 Email is required라는 다른 에러가 생겼음

이번에는 이것을 trigger하고 있음

다음 영상에서 봄

userEvent를 사용해서 form을 테스트하는 것을 끝내고 mutation을 테스트해봄

## 18.6 Login Tests part Two

이쯤돼면 우리가 만든 app이 어떻게 작동했는지 헷갈릴수가 있음

form은 keyword에 변경이 있을 때마다 input의 유효성을 체크함

서버를 구동시키면 compile을 함

그러면 login 창이 나오는데, 여기에 무엇인가 입력했을 때 잘못된게 있다면 'please enter a valid email'이라고 나옴

우리가 처음에 테스트한 부분임

그리고 이것을 지우면 'Email is required'라고 나옴

이렇게 우리는 simulating을 해봤음

form이 어떻게 작동하는지 다시 설명하자면, form은 input의 유효성을 즉시 체크해줌

어떻게 작동하는지 다시 설명해주고 싶었음

이제 'Email is required' 에러를 끝내고 password 에러로 넘어감

expect(errorMessage).toHaveTextContent(/email is required/i)는 분명히 통과함

좀 오래 걸렸음

모든 것이 잘 통과했음

email validation 에러를 잘 확인할 수 있음

이제 password validation 에러를 확인하는지 테스트해봄

우리 password에 최소 길이 제한은 없으니까 더 이상 필요없음

이번에는 password is required를 보이게 만들어봄

그리고 form submit을 trigger할건데, 우리가 password를 입력하지 않을 것이기 때문에 password is required를 보게 됨

이 똑같은 것을 가져와서 여기에 붙여넣고 이번에는 실제 사용 가능한 email을 입력함

그리고 바로 submit을 함

submit을 하기 위해서 우선은 button을 가져와야함

이 button에 role을 "button"이라고 해봄

getByRole("button")이라 함

어떻게 되는지 확인할 수 있도록 userEvent.click(submitBtn), 그리고 debug()도 함

이 debug는 어떻게 나올까

우리는 button을 click했음

button을 click하도록 만듦

그리고 password is required가 나왔음

그러면 이제 errorMessage를 받을 수 있음

getByRole("alert")로 가져옴

click을 하게 만들고 html의 output을 가져와서 체크할 수 있음

아주 잘 통과하고 있음

이것이 제대로 통과한 것인지 확인할 때는, test 내용을 통과하지 못하게 바꾸고 통과하는지 안하는지 확인해보면 됨

여기 에러가 나옴

우리는 이 에러를 테스트했고 이번에는 login을 클릭하면 mutation을 하는지 테스트해봄

이번에는 다른 테스트를 만들어볼건데, 당연히 async를 사용할거고 여기에 실제 form을 만들어봄

중요한 것은 이 formData에는 유효한 데이터가 들어가야함

실제로 db에 저장된 data일 필요는 없음

여기에 await waitFor(() => {})를 만들고 입력을 함

우선 email, password를 가져오고, 이전과 같이 getByPlaceholderText(/password/i)를 함

먼저 button을 찾아봄

여기 있는 button을 가져와서 userEvent.click(submitBtn)하면 mutation을 submit함

그런데 우리는 mutation을 테스트하고 싶음

어떻게 하면 되지

정말 쉬움

mockClient.setRequestHandler()를 call하고 provider로 가는 mutation, query를 가진 request를 가로채면 됨

그러면 사용할 수 있는 mockClient를 만들어야겠음

여기서 하는 것은 variable을 공유하는 것뿐임

만약 beforeEach 안에 선언하면 여기서 사용할 수 없음

그래서 밖에서 생성하고 값을 지정한 다음에 사용함

이제 여기서 mutation을 하게 만듦

mutation을 call하기 전에 이 setRequestHandler method를 call함

여기에서 setRequestHandler를 만들건데, 말했다시피 실제 mutation을 사용함

LOGIN_MUTATION에 export를 추가함

정말 중요함

아래 mockClient.setRequestHandler()에 실제 mutation인 LOGIN_MUTATION을 추가함

우리가 원한다면 mockResolvedValue를 사용해서 implementation을 mock 할 수 있음

우리가 알고 싶은 value는 login을 보면 알 수 있음

ok, token, error가 있음

항상 data에 작성해야함

작동됐다고 가정하고 ok:true, token:"XXX", error:null이라 해봄

이제 login component 안에 console.log를 추가함

그리고 어떤 data를 받았는지 확인해봄

백엔드에서 mocking을 많이 해봤으니까 여기에 mockedMutationResponse를 만들었음

mockedClient.setRequestHandler(LOGIN_MUTATION, mockedMutationResponse)를 했음

그리고 테스트를 돌려보면 에러가 생김

data 안 login에 줘야함

왠지 이건 잘 작동할 것 같음

우리가 mutation의 response를 mocking하고 있음

이제 이것은 mocked function이기 때문에 이렇게 할 수 있음

여기에서 expected와 received를 볼 수 있음

이 console.log data는 실제 component에 작성된 것임

그래서 작동된다는 것을 확인할 수 있고 response의 data를 mocking 할 수 있음

이것이 우리가 받은 데이터임

그래서 loginInput을 복사해서 여기 toHaveBeenCalledWith({}) 안에 붙여넣고, formData를 가지고 call 했는지 테스트해봄

보다시피 이 모든 것을 테스트하고 있음

보다시피 mock-apollo-client에서 가져온 mockedClient로 테스트하는 방법이 더 좋음

왜냐하면 response를 mocking 할 수 있고 mutation 전체를 확인할 수 있기 때문임

우리는 form에 무엇인가 입력했고 그 내용이 mutation을 call하는데 쓰였음

보다시피 모든 것이 다 잘 작동하고 있음

coverage를 확인해봄

그리고 무엇을 테스트 해야할지 알아봄

login에 45~58, 117번 줄이 남았음

mutation에 에러가 있는 경우를 체크해야함

아직 안한게 있었음

## 18.7 Login Tests part Three

마지막으로 테스트할 것은 여기 form에 에러가 생겼을 경우 나타나는지 확인하는 것임

이것을 테스트할 한가지 방법으로는 "shows error on mutation"이라는 테스트를 만듦

아니면 여기에 error를 작성해서 예를 들어 "i'm an error"라고 함

이것은 말도 안됨

이론적으로 ok, token을 받는다면 에러가 없음

이런 일은 절대 생기지 않음

token을 받는다면 error는 없음

그런데 이것을 하려는 이유는 이 라인을 cover하기 위해서임

이것은 "mutation-error"라고 함

그리고 여기에 debug를 call해서 어떻게 보이는지 확인해봄

말했다시피 서버에서 이런 경우는 절대 생기지 않음

그런데 프론트엔드에서 테스트할 수는 있음

mutation에 error가 있다면 mutation-error를 보여줌

그러면 mutation에 error가 있는 경우 error message를 받음

다시 한번 말하지만 이렇게 하는 이유는 코드 작성을 줄이기 위해서임

원한다면 그냥 이 모든 것을 복붙해서 이 부분만 error:"mutation-error"로 바꿔주면 됨

그냥 테스트할 수는 있음

한 번 해볼까

그리고 여기는 mutation-error가 됨

이것이 통과하는지 한번 봐봄

이제 login function은 끝났음

coverage를 봐볼까

100%까지 얼마나 남았나 확인해봄

보다시피 100%의 라인이 cover됐음

uncovered line으로는 45-58이 있음

이것이 가장 테스트하기 어려움

왜냐하면 45-58을 보면 이것들이 component 안에 있는 function임

이런 것들을 implementation이라 볼 수 있는데, functional component 안에 있는 function은 테스트할 수 없음

한번 보여줌

이렇게 하면 아무것도 하지 못함

localStorage가 call 되는 것을 테스트함

이것을 위해 꼭 해야할게 있는데 mutation을 하기 전에, 우리는 이것을 spyOn함

여기에는 아무것도 작성하지 말고 작동되는지만 확인해봄

작동되는지만 확인함

에러가 나오겠지만 우리는 내용을 확인함

보다시피 expected에 0개의 argument로 call 되었다고 나오지만, received에는 "nuber-token", "XXX"라고 나옴

이렇게 spy가 잘 작동하고 localStorage.setItem을 spy하고 있음

여기 Storage.setItem이 있음

잘 작동하고 있음

말그대로 setItem을 잘 보고(spy) 있음

원한다면 localStorage가 "nuber-token"과 "XXX"로 call 되고 있는지 테스트해볼 수 있음

"XXX"는 우리가 mocking한 token임

그러면 이렇게 하면 되겠지

이것은 잘 통과함

왜냐하면 spy하고 있는 localStorage를 받음

이제 우리가 원하는 token으로 call 된다는 것을 알 수 있음

잘 작동함

coverage를 다시 한 번 확인해볼까

보다시피 여전히 45-58이 남아있음

아무것도 바뀐 것이 없음

아쉽게도 여기까지는 처리하지 못함

component 안에 있는 function을 테스트할 수 없음

component의 function을 테스트한다면 implementation을 테스트한다는 것임

우리는 implementation을 테스트할 필요는 없음

이것을 보고 implementation을 테스트했다고 생각할 수도 있음

function이 call 됐는지 테스트하는거니까 그 말이 맞을 수도 있음

이것은 완전히 implementation이지만, mutation은 이 email과 password로 call 되야하니까 만약 이것을 바꾸더라도 아무 일이 없어야함

그런데 mutation을 바꾸고 input을 바꾸면 당연히 작동되지 않음

아쉽게도 모두 100%로 만들 수는 없지만, lines에서 100%, functions에서 100%, branch에서 85%, statements에서 100%를 달성했음

테스트할 수 없는 line들만 빼면 꽤나 만족스러운 결과임

이제 login 테스트가 끝났음

굉장히 생산적이었고 배운게 많음

빠르게 복습해봄

우선 우리는 모든 조건에 맞도록 component를 만들었음

왜냐하면 이 component는 Router, HelmetProvider, ApolloProvider가 필요함

그래서 mock-apollo-client라는 라이브러리를 사용하기로 했음

이것을 사용하는 이유는 내가 말했다시피 mutation을 살펴보고 싶어서 그럼

apollo를 테스트하는 기본적인 방법은 이렇게 테스트하는 것을 허락하지 않음

mutation의 output만 테스트할 수 있게 해줌

그러니까 form에 입력한 내용으로 mutation을 call 했는지는 테스트할 수 없음

그래서 mock-apollo-client를 사용함

이것은 필요할 때 쓰고 필요없을 때는 다른 것을 쓰면 됨

나는 query를 확인할 때 보통 방법을 사용하고, mutation을 확인하고 싶을 때는 mock-apollo-client를 사용함

그리고 여기에 client를 만들었음

그런데 공유를 하고 싶어서 밖에 만들었음

그리고 component들을 render 했음

render에는 정말 많은 좋은 function이 있음

문제는 이것을 여러 곳에서 써야하니까 이렇게 밖에서 만들었음

이렇게 공유를 하고, 첫번째로 한 테스트는 모든 것을 잘 render 하는지 확인하는거였음

이것을 위해서 "Login"이 title에 있는지 확인을 했음

그리고 validation error가 잘 나타나는지 테스트했음

placeholder가 email인 곳에 쓸 수 없는 email을 type했음

이것은 testing-library의 userEvent를 사용해서 만듦

보다시피 clear, click, dblClick, select, deselect, upload, type, tab, paste, hover, unhover를 할 수 있음

정말 많은 것을 할 수 있음

우리는 우리가 찾은 email에 쓸 수 없는 email을 type함

그리고 role이 "alert"인 errorMessage를 찾았음

무조건 errorMessage component에 role="alert"가 있어야함

그렇지 않으면 작동하지 않음

그리고 errorMessage가 textContent로 우리가 원하는 문구를 가지는지 확인함

그리고 email을 clear 했음

그러면 에러로 Email is required가 나옴

그럼 잘 작동함

display password required errors도 같음

유효한 email을 type하고 submitBtn을 click하면, getByRole을 사용해서 submitBtn을 찾아서 click하면 Password is required라는 에러가 나옴

다음으로 가장 긴 것이 있는데, form을 submit하면 mutation을 call하는지 확인함

이것을 위해서 email, password, submitBtn을 가져오고 formData object를 만들었음

formData object는 우리가 mutation에 어떤 것을 입력해서 call 했는지 체크하는데 쓰임

그리고 처음에 공유한 mockedClient를 사용해서 requestHandler를 이렇게 overwrite했음

이 mutation이 실행되면 response가 mockedMutationResponse가 될거라는 것임

mutation의 response는 data, login, ok, error 등등을 가진 mockResolvedValue임

그리고 form에 formData에서 가져온 유효한 email, password를 type하고 click하면, 어떤 에러도 없음

그러면 mockedMutationResponse가 1번 call 됐는지 테스트할 수 있고, 이것이 formData에서 가져온 data가 form에 입력되어서 call됐는지도 테스트할 수 있음

마지막에는 치트키를 조금 썼지만, 백엔드에서 절대 일어나지 않을 mutation을 만들었음

ok가 true고 token이 "XXX"인데 error도 있음

백엔드에서 이런 경우는 절대 생길 수 없음

항상 ok와 token을 받던가 error만 받는 경우만 있음

이것은 내가 mutation-error를 표시하는지 테스트하고 싶어서 만듦

물론 잘 작동함

그리고 implementation을 어떻게 spy하는지 보여줬음

implementation을 테스트했을 때 coverage에 포함되지 않는다는 것도 보여줬음

우리는 다 테스트할 필요가 없음

할 수 있는만큼 cover하면 됨

우리는 implementation을 테스트할 수 없기 때문에 cover 할 수 없다는 것도 앎

우리는 output만 테스트할 뿐임

다음은 create account임

## 18.8 CreateAccount Tests part One

이번에는 create account test를 만들면서 연습해봄

새로운 것도 배울거지만 login에서 한 것을 복습하는 것에 가까움

우선 이 코드들을 개선 시켜봄

먼저 여기 보이는 것처럼 만들어봤음

당연히 에러가 나옴

왜냐하면 바로 client 때문임

<ApolloProvider>로 <CreateAccount />를 감쌈

여전히 에러는 남아있음

helmet, react-router에 문제가 있음

왜냐하면 어쨌든 항상 helmet이랑 react-router를 사용해야함

그러니까 이렇게 하는 대신에 직접 우리의 render를 만들어봄

왜냐하면 helmet, react-router 같은 많은 것들을 import할 필요없게 만들어줌

그런데 ApolloProvider는 직접 해야함

어떤 component는 graphql을 사용하고 어떤 것은 사용하지 않음

그래도 helmet, router를 항상 import 할 필요없게 만들어주는 utils를 만들 수 있음

그래서 test-utils.tsx라는 파일을 만듦

이 파일은 이 매뉴얼을 따라서 만들어봄

AllTheProviders라는 component를 만들었는데, 이 component는 children이 필요함

children은 우리가 사용해야하는 모든 provider들에 둘러싸여 있음

예를 들어 HelmetProvider를 추가해봄

그리고 react-router도 해봄

"react-router-dom"에서 BrowserRouter를 Router로 import하면 됨

이제 우리는 component를 계속 같은 것들로 감쌀 필요가 없어졌음

이것의 type을 React.FC라 해야 children에서 문제가 생기지 않음

그리고 customRender를 만들건데 여기에는 ui와 options를 가지고 call 할 수 있음

ui는 ui를 말하는데 이것의 type은 React.ReactElement라 할 수 있음

wrapper는 여기 있는 AllTheProviders를 말하고, options는 any로 하면 됨

여기에 :any를 추가함

그리고 options는 ?를 붙여서 선택적으로 받을 수 있게 만듦

꼭 required일 필요가 없음

이제 @testing-library/react에서 가져온 render와 작별인사를 함

그리고 testing-library가 아니라 우리가 만든 test-utils에서 render를 import함

그러면 helmet에 관련된 에러는 없음

utils에서 만든 render를 사용하기 때문임

이제 보다시피 helmet 에러가 아님

이 에러는 state를 바꾸는 것을 await 해야하기 때문에 생김

그러니까 async를 추가하고, test-utils에서 모든 것을 export 했기 때문에 여기서 모든 것을 import 할 수도 있음

예를 들어 waitFor가 있음

다 된 것 같음

한 번 볼까

아주 잘 rendering하고 있음

이제 이것을 beforeEach 안으로 옮김

"renders OK"는 createAccount가 header에 적합한 title을 가지고 있는지 확인하는 테스트임

renders OK에서 title을 확인하고 있음

다음으로 넘어감

이제 mockedClient와 renderResult를 공유함

type이 MockApolloClient였음

이제 여기 있는 HelmetProvider는 필요없음

직접 나의 render를 만들어봤음

그리고 여기서 가져오는 render 말고 "../../test-utils"에서 render를 가져옴

이제 test-utils를 render하고 있음

404에서는 에러가 나오지 않음

왜냐하면 우리가 만든 render를 사용하고 있음

404가 잘 작동하고 있음

코드를 보면 훨씬 보기 좋아진 것을 알 수 있음

지금이 다시 뒤로 돌아가서 고치기 좋은 때임

다른 test들을 어서 고쳐봄

우리는 여기서 create account를 계속 진행해봄

여기서 render가 잘 되고 있고, create account를 좀 더 살펴보면 이런 에러를 테스트해볼 수 있음

password도 마찬가지로 에러가 존재함

여기 있는 minLength는 필요없음

여기서 하는 작업은 거의 다 비슷함

준비를 마쳤고 직접 render를 만들어서 코드를 개선해봤음

더 보기 좋아졌고 ApolloProvider는 render에 넣지 않기로 결정했음

왜냐하면 어떤 때는 ApolloProvider가 필요하지만 어떤 때는 MockApollo가 필요할 때도 있음

login test를 만드는 것은 다음 영상부터 시작함

계속 비슷한 작업을 함

에러를 만들고, 그것을 테스트함

create-account를 클릭하는 것도 테스트해봄

## 18.9 CreateAccount Tests part Two

이제 validation error를 만들어봄

그리고 여기에서 발생할 에러를 만들어봄

코드 작성을 줄이게 하나의 function에 작성함

renderResult는 신비한 것들로 가득차 있음

여기에서 getByRole과 getByPlaceholderText를 가져옴

그리고 email을 가져올건데 getByPlaceholderText(/email/i)를 사용함

password도 똑같이 해줌

그리고 button을 가져옴

await waitFor()을 씀

state가 바뀌는 것을 기다리기 위해 waitFor를 call함

그리고 userEvent를 사용해서 email에 쓸 수 없는 email을 type함

expect(errorMessage).toHaveTextContent(/Please enter a valid email/i) 테스트는 통과할거고, 결과가 나오는 동안 계속 진행해봄

이제 무엇을 할거냐면 email을 clear함

먼저 await waitFor()를 쓰고, email을 clear함

그리고 여기에 똑같이 해봄

errorMessage는 Email is required가 됨

이번에는 쓸 수 있는 email을 씀

email에 "working@email.com"을 type함

그리고 userEvent.click(button)을 함

여기 button이 있음

에러는 없고, 이것을 trigger하면 "Password is required"를 보게 됨

다시 message를 가져와서, errorMessage가 /password is required/i의 텍스트를 가지는지 expect함

여기를 password is required로 바꿈

처음에는 잘못된 email을 입력하고 enter a valid email이라는 message를 받았음

그리고 email을 clear하고나서는 email is required를 보게 됐음

쓸 수 있는 email을 입력했을 때는 form을 submit해서 password is required를 볼 수 있음

이제 테스트를 확인해봄

결과를 처리하는동안 또 다른 테스트를 만들어봄

it("submits mutation with form values") 그리고 이것은 async가 되야함

이제 테스트 결과를 확인해봄

다 잘 작동되고 있음

여기 있는 것처럼 만들어볼건데, email이 필요하고 password는 필요없을 것 같음

나중에 password가 필요할 수도 있음

여기 모든 것이 다 필요함

여기에 붙여넣음

우리는 또 다시 formData를 만들어야함

create-account를 살펴보면 role이 있음

role이 필요한데 우리는 UserRole.Client를 사용하면 됨

이제 formData를 만들었고 type을 해봄

그리고 userEvent를 사용해서 email에 formData.email을 type함

그리고 role은 default로 선택되어 있으니까, userEvent.click(button)을 함

save하기 전에 체크할게 있는데, login에서 했던 것처럼 loginMutation response를 만듦

여기 mockedMutationResponse가 있음

우리는 mockedLoginMutationResponse라 해봄

엄청 긴 이름이지만 상관 없음

그리고 mockResolvedValue를 사용해서 이 function을 mock함

아무 것도 받지 않음

우리가 variables를 보내야함

mutation은 이렇게 생겼음

login에서 했던 것처럼 data, mutation의 이름, 그리고 fields를 작성하면 됨

이 경우에는 data, mutation의 이름으로 createAccount, ok, error가 됨

data, createAccount, ok는 true라 함

그리고 error도 true로 해봄

errorMessage도 테스트해보고 싶음

그러면 "mutation-error"라 함

이것이 우리의 mockResolvedValue가 됨

이제 mockedClient.setRequestHandler()에서 실제로 사용하는 query를 갖다씀

그러니까 이 query를 export하고, 거의 모든 mutation들을 이렇게 만들어줘야함

이제 create-account에서 CREATE_ACCOUNT_MUTATION도 import 해줌

그리고 여기에 넣어주고, handler로 mockedLoginMutationResponse를 넣어줌

create-account를 보면 createAccountInput이라는 것으로 call됨

createAccountInput에 필요한 것은 email, password, role임

그러면 mutation이 우리가 입력한 내용으로 call됐는지 체크함

createAccount가 통과하길 기다려봄

오늘 처음 나온 에러임

거의 다 됐는데, 여기서 생긴 에러는 window.alert가 사용할 수 없다는 내용임

이게 무슨 말이냐면 코드가 이 지점까지 실행했다는거니까 테스트가 잘 작동한다는 것임

알다시피 window.alert()를 사용할 수 없다고 나왔지

원한다면 테스트할 수 있음

그렇게 하려면 여기에 jest.spyOn(window, "alert") 그리고 mockImplementation(() => null)로 하면 window.alert가 null을 return하는 function이 됨

아무 것도 아닌게 되는 것임

expect(window.alert).toHaveBeenCalledWith() 안에 이 text를 가져오면 됨

이렇게 window.alert()를 spyOn하고 있고, 기존 implementation을 우리가 만든 implementation으로 바꿨음

그리고 window.alert()가 "Account Created! Log in now!"로 call되는지 테스트함

보다시피 잘 작동하고 있음

이 말은 mutation mocking이 잘 작동한다는 것임

ok가 true니까, 이게 call 됐다는건데 정말 멋짐

그리고 이것을 어떻게 mock하는지 보여주고 싶음

이것은 정말 많이 쓰임

기억할지 모르겠지만 우리는 history, location, parameters를 사용하고 있는데, 이 모든 것은 useHistory 같은 hook에서 가져옴

useParameters도 있고 useLocation도 있음

그래서 hook을 어떻게 mock하는지 알려주고 싶음

여기서는 react-router-dom에서 hook을 가져오고 있음

일단 여기까지만 해도 만족함

보다시피 테스트를 실패했으니까 잘 작동한다는 말임

이렇게 테스트를 작성해봤음

어렵지 않지

셋업 이런 것들만 이해하면 어렵지 않음

코드를 읽고 이해하는 것도 어렵지 않음

테스트가 잘 통과하고 있음

coverage를 확인해봄

100%까지는 바라지도 않음

그렇게까지는 만들지 못할 것 같음

왜냐하면 이것을 테스트할 수 있을지 모르겠음

어떻게 될지 봄

다음 영상에서는 library에서 가져온 hook을 mock하는 방법을 알려줌

그것도 정말 재밌음

coverage를 확인해볼까

같은 부분에서 말썽임

login을 봄

45-58에서 cover가 안됐음

이것은 테스트할 수 없음

이것은 마치 variable 같음

잊은게 있는데 mutation을 실패하면 error message를 받음

이것을 한 번 확인해봄

여기에는 "mutation-error"가 들어감

내가 이것을 하는 이유는 모든 가능한 경우를 trigger하고 싶어서 그럼

물론 이런 경우가 실제로 일어나지 않을거라는 것을 앎

ok가 true라면 error가 없음

나는 단지 component에서 모든 경우를 테스트하고 싶어서 그럼

다음 영상에서는 필요하다면 어떻게 history를 mock하는지 보여줌

보다시피 모든 것이 잘 통과함

## 18.10 CreateAccount Tests part Three

만약 component에 있는 library에서 가져온 hook을 테스트하고 싶다면, 그리고 그 library에 ApolloMock 이런게 없다면 library를 mock 해야함

이것을 mock 해야 history가 이걸로 call 됐는지 체크할 수 있음

어떻게 하는지 지금 바로 보여줌

그렇다고 coverage 문제를 해결해주지는 않음

아무튼 library를 mock 해봄

jest.mock()으로 "react-router-dom"을 mock함

그리고 이것은 object를 return 할건데, 이 경우에는 이 object가 useHistory를 mocking 한다고 해봄

useHistory는 또 다른 function을 return하는 function이 됨

이 function의 이름은 push임

그리고 jest.fn()으로 만듦

여기에서 react-router-dom을 mocking하고 있고, react-router-dom은 여기 있는 useHistory hook을 return하는 object가 됨

그리고 이것을 call하면 여기 있는 push를 return함

콘솔에서 테스트를 보면 보다시피 에러가 있음

이 에러는 우리가 react-router-dom을 전부 다 override 했다는 것을 알려줌

여기서 우리가 만든 implementation으로 react-router-dom 전체를 바꿔버림

여기 useHistory를 작성한 것 때문에 그럼

react-router-dom에는 useHistory 말고도 쓰이는 것이 많은데 그것을 다 바꿔버림

우리가 react-router-dom을 망가트려버림

기억날지 모르겠지만 우리가 만든 render는 react-router-dom에서 Router를 import하고 있음

BrowserRouter를 import하고 있음

여기서 우리는 새로운 implementation을 만들었고 jest가 모듈을 대체함

그러니까 새로운 implementation을 만들어서 여기서 사용하는 BrowserRouter가 없음

하나의 function만 가지고 있음

그래서 react-router-dom에는 useHistory만 있음

내가 이렇게 library 전체 또는 library에서 하나의 function만 mock하고 싶을 수도 있음

그런데 이렇게 하면 모든 것이 고장나버림

그렇게 하고 싶지 않으면, 여기에서 모든 function의 mock을 작성해야함

그래서 나중에 useParams를 쓴다면 그 mock도 작성해야된다는 것임

그런데 그것은 너무 별로임

그래서 jest.requireActual()에 대해 알려줌

이것은 실제 모듈을 require함

여기에 "react-router-dom"이라 하면 됨

그리고 이것을 const realModule로 바꿈

그러면 이제 실제 react-router-dom에서 너가 mock하고 싶은 function을 mock 할 수 있음

이렇게 하면 고장나지 않음

우리가 일부분만 mock하고 싶어할테니까 이것은 정말 중요함

여기서 save를 하고, 알아서 재작동을 시켜주지 않음

보다시피 아주 잘 작동하고 있음

CreateAccount에서 submits mutation with form values가 우리가 만든 mock으로 작동하고 있음

만약 내가 바꾼 것이 있다면 그것을 다시 돌려놓음

안으로 옮김

여기서 우리가 이것을 mocking하고 있음

이것을 spyOn 할 수 있다는 뜻임

그래서 여기 alert 이후에 expect를 할건데, history.push()가 우리가 세팅한 router인 "/"로 call 됐는지 확인해봄

history.push()가 "/" route로 call 됐는지 확인해봄

그럴려면 이 jest.fn()을 밖으로 옮겨서 pushMockImplementation = jest.fn()이라 함

이제 pushMockImplementation이 어떤 것으로 call 됐는지 확인해봄

여기까지만 하고 어떤 것으로 call 됐는지 확인해봄

jest.mock() is not allowed to reference any out-of-scope variables를 고칠 수 있는 방법은 variable을 만들어서 'mock'을 prefix(변수 이름 앞에 붙이면 됨)하는 것임

mockPush로 해봄

그러면 작동함

여기를 mockPush로 바꿈

그리고 또 다른 에러가 생김

이것은 "/"로 call 된다고 해야하기 때문임

이렇게 variable을 mock하면 되고, 원한다면 hook을 mock 할 수 있음

expected에 0개의 argument로 call 되었다고 나오고 있음

이걸로 call 되어야 하겠지

이렇게 하면 작동됨

작동시켜서 coverage를 확인하면 create account 테스트를 마친 것을 알 수 있음

이 테스트는 통과함

모든 것이 완벽하게 통과하고 있음

그리고 coverage를 확인하면 coverage는 초록색임

물론 여기에는 implementation이기 때문에 테스트할 수 없는 라인도 있음

결과는 정말 만족스러움

이제 모듈을 고장내지 않고 mock하는 방법을 알게 됐음

이것은 jest를 써서 배울 수 있는 것 중에 정말 중요한 것임

말했다시피 뭐 하나가 call 됐는지 확인하기 위해 모듈 전체를 못쓰게 만들 수는 없음

그런데 웬만하면 모듈을 mocking 하지마

왜냐하면 mock을 할 수 있게 해주는 package가 있을 수도 있음

내가 useQuery, useMutation, response 등등을 mock 할 수가 있는데, 이럴 때 mutation을 실행시켜주는 package가 있으면 정말 좋음

mock-apollo-client를 쓰던가 공식적인 apollo testing 방법도 있음

아무튼 mock을 해야한다면 이렇게 하면 됨

requireActual은 정말 좋음

그리고 mock이 끝나면 mock을 다시 돌려놔야함

왜냐하면 다른 테스트에서 useHistory를 쓰고 싶은데 mock된 useHistory를 쓰지 않을 수 있음

## 18.11 Conclusions

이것이 바로 내가 만든 아름다운 들판임

노랗게 바랜 것도 있지만 고칠 수가 없음

이제 이 부분을 노란색, 녹색 들판으로 만들 차례임

웬만하면 녹색으로 만듦

이 component들에는 테스트하는 방법을 모르는게 없을 것임

query와 mutation을 어떻게 mock하는지 보여줬고 form을 어떻게 다룰지, component가 render를 했는지 안했는지, 그리고 click, delete하는 모든 방법을 알려줬음

예를 들어, client의 category를 보면 query를 mock하는 방법이 있음

정말 쉬움

그리고 restaurants에는 Helmet을 체크하는 방법도 있음

이제 어떻게 하는지 앎

또 나왔음

query를 mock하는 방법이 여기 있음

방법을 잊었다면 header를 확인해봄

여기서 처음으로 query를 mock 해봤음

알다시피 await를 해야함 

이제 query를 mock하는 방법을 완벽히 앎

그러면 이제 원하는 response를 받을 수 있음

edit-profile에서는 form을 다루고, title을 체크하고 error가 있다면 이것을 어떻게 trigger하는지도 앎

그런데 여기에는 error를 만들지 않았음

button을 click하는 것까지 모두 다 할 줄 앎

이 빨간 부분을 테스트하는 방법 중 알려주지 않은 것은 없음

form, click, mutation과 query를 mocking하는 방법, state를 loading하는 것 전부 다 알려줬음

이제 내가 도전할 차례임

이것을 직접 다 테스트하지는 않음

그러면 수업이 엄청 길어짐

말했다시피 우리는 다 배웠음

계속 반복적인 것을 할테고, 누구도 여기서 배울게 없음

그냥 길고 지루한 강의가 됨

이번 섹션은 여기까지 함

jest를 가지고 테스트를 하는 것은 여기까지임

이제는 end-to-end test로 넘어감

보다시피 여기에서는 모든 component들을 개별적으로 테스트하고 있는데, 이제는 다 함께 테스트해봄

이것은 Cypress라는 것으로 해봄

## 19.0 Installing Cypress

이 섹션이 너무 기대됨

왜냐하면 우리는 cypress로 작업하기 때문임

Cypress는 Mac, Windows, Linux에서 멋지게 end-to-end 테스트할 수 있게 해줌

Cypress는 최고임

이제 가장 먼저 할 것은, Cypress를 설치해야함

터미널에 npm install cypress@6.0.1을 입력함

첫 번째 설치이기 때문에 시간이 걸릴 수도 있음

Mac, Windows나 Linux에서 실제 프로그램을 다운로드하고 설치해줌

그냥 기다려야함

react 설치하는 것만큼 빠르지 않음

아마 그것보다 좀 더 걸릴 것임

그럼 설치하고 끝나고 다시 봄

Cypress 한 개가 설치됐고 Cypress를 실행해야함

그럼 npx cypress open을 해줌

터미널에 npx cypress open 입력함

-> Failed to deserialize the V8 snapshot blob. This can mean that the snapshot blob file is corrupted or missing 에러가 발생했는데 터미널에 npx cypress install --force 입력하여 해결함

-> cypress verification timed out 에러가 발생했는데 터미널에 npx cypress verify 입력하여 해결함  

그리고 이제 내가 보게 되는 것은, 컴퓨터에 software를 여는 것임

그리고 처음에 Mac에서는 시간이 조금 걸림

왜냐하면 권한이나 뭐 그런 것을 물어봄

만약에 error를 보게 된다면, 그냥 모든 권한을 허용해 주고 npx cypress를 다시 실행해줌

그리고 이제 여기 보면 우리는 말 그대로 cypress라고 하는 software를 열었음

보다시피 이미 이런 integration 테스트라든지 몇몇 테스트들의 예시가 차고 넘침

충분히 멋짐

우리는 cypress.json이라는 파일을 가지고 있음

이것은 비어있음 

그리고 우리는 여기 cypress 폴더도 가지고 있음

그럼 어떻게 cypress가 움직이는걸까

기본적으로 cypress에서는 우리가 만들었었던 test를 적음

beforeEach, describe, it이든 뭐든 우리는 이 모든 것을 어떻게 하는지 배움

그런데 이것은 기본적으로 page에서 navigate하게 해주고, 어떤 것이 존재하는지 확인하고 버튼이 여기 있는지 확인해 주기도 하고, 클릭도 할 수 있게 해주고 cookie를 set하기도 하고 get할 수도 있게 해줌

말 그대로 모든 것을 테스트할 수 있음

그래서 만약 이것이 어떻게 동작하는지 알고 싶다면, 우리가 해야 할 일은 integration folder 안에 folder랑 file들을 만드는 것임

그것은 여기 Cypress 안에서 보일 거고, 우리는 '19 integration specs 실행하기'를 클릭함

여기를 누르면 이것이 Chrome 87인가 뭔가를 실행함

그리고 보다시피 이 웹사이트로 이동해서, 거기서 우리가 작성한 모든 테스트를 실행함

그래서 우리는 웹사이트로 감

그리고 이게 웹사이트에서 모든 테스트를 실행함

여기에 테스트를 하고 있음

작동되는 것이 보임

우리 웹사이트에서 activities들을 실행하고 있음

그리고 각 activity는 하나의 테스트임

이것이 cypress임

이 부분에서 우리가 배움

그래서 chrome을 닫음

여기 stop(버튼)을 누름

그리고 examples라는 폴더를 지움

왜냐하면 이제 우리가 우리의 테스트를 만들려고 하기 때문임

그리고 이제 우리는 cypress로 가서, 그 안에서 tsconfig.json이라는 파일을 만듦

이것은 cypress 폴더 안에 typescript를 구성함

왜냐하면 cypress 안의 typescript 구성은, 우리 react application의 typescript 구성과는 다르기 때문임

여기에 compilerOptions를 작성해줌

처음에는 allowJs를 써줌

왜냐하면 우리는 js 파일이 있으니까 그리고 이것은 사실(true)임

그리고 우리는 baseUrl을 써줌

baseUrl은 기본적으로 cypress가 설치된 곳이 어디인가 하는 것임

그것은 node_modules 안임

그리고 우리는 여기에 include라고 해줘야함

그리고 이것은 array이고, 우리는 모든 폴더를 포함(include)하고 싶음

그리고 또한 우리는 어떤 type들을 더하고 싶음

그래서 여기에 'types'를 적어줌

내가 적고 싶은 것은 cypress임

여기에 'input 파일을 덮어쓸 수 있기 때문에 이러한 파일을 작성할 수 없습니다.'라는 error가 있을 수도 있음

이것은 기본적으로 typescript가 cypress(로 구성된) code를 build할 수 없기 때문에 하는 말임

만약에 cypress 코드를 build 할 수 있다면, 이것이 index나 index.js같은 것으로 교체될 수 있기 때문임

typescript는 우리가 일반적인 javascript를 build 한다고 생각하지만 사실은 그렇게 안 함

그래서 우리는 "outDir"에 뭐가 적혔든 이 경고를 고침

가끔 시간이 좀 걸림

역시 보다시피 고쳐졌음

우리는 tsconfig를 가지고 있음

그리고 이게 cypress임

그리고 이제 우리 첫 번째 테스트를 만들어봄

그래서 'first-test.ts' 파일을 만듦

그리고 여기에 describe를 사용함

여기 보다시피, 이 describe는 Jest에서 오지 않았음

이것은 mocha에서 왔음

그냥 이것은 cypress가 Jest 대신에 mocha를 사용하기 때문임

그래서 react-js 테스트에서는 '이것은 jest에서 왔습니다'를 보게 됨

이 경우에는 mocha에서 왔지만, 이것은 library가 다를 뿐, 말 그대로 같은 기능임

이제 여기 우리는 우리의 test suite를 설명(describe)해줌

그리고 그것은 "first test"나 어떤 거든 괜찮음

그리고 이제 cypress에 대한 간략한 설명을 해줌

그래서 우리는 first test라고 설명함

it안에 'homepage로 가야합니다.'라고 예를 듦

그리고 이전에 했던 거라서 이것은 엄청 쉬움

이제 우리는 우리 키보드에 해야 할 일이 있음

우리가 여기에 type을 cypress라고 더했기 때문에 이런 일이 일어남

cy, 이것은 cypress를 의미함

그리고 우리는 visit를 해주고 localhost:3000으로 감

일단 여기서 멈추고, 아니면 이렇게 title() 해줌

should("be") 해주고 아니면 should("eq") 해줌

그리고 Login이랑, 그리고 Nuber Eats 해줌

이렇게 생겨야 할 거 같음

그래서 우리는 localhost 포트 3000번을 방문하고 title은 Login | Nuber Eats랑 같아야함

게다가 보기에도 엄청 좋음

그래서 실행시켜봄

절대 잊지 않아야 할 것이 있음

우리 react application을 실행시켜야 할 필요가 있음

그래서 우선 우리는 react application을 실행해야함

터미널에 npm run start를 입력하고 이것이 한번 실행되면 우리는 cypress를 실행하러감

그래서 npx cypress open 해줌

개발 서버를 시작하고 있음

여기를 zsh로 바꾸고, 그리고 우리는 run npx cypress open을 함(터미널을 새로 열고 npx cypress open 입력함)

그리고 이제 보다시피 우리는 cypress에서 볼 수 있음

우리는 한 개의 test만 가질 거고 그게 바로 첫 번째 테스트(first test)임

그래서 이제 우리 웹사이트가 실행되고 있음

그리고 나서, 이제 테스트해 볼 시간임

그래서 우리는 "1개의 integration spec 실행하기"를 클릭함

이제 chrome 87을 엶

그리고 우리는 localhost 포트 3000으로 감

우리가 'Login | Nuber Eats'로 타이틀이 나오기를 원했었는데 그렇게 됐음

이렇게 우리는 첫번째 end-to-end 테스트를 만들었음

이제 한번 망쳐봄

그리고 내가 새로고침 했을 때, 보다시피 테스트가 즉시 새로고침 됐음

그리고 보다시피, 여기 타이틀이 (기대한 것과) 같지 않음

이것이 바로 cypress였음

다음 시간에 우리는 로그인 화면에 end-to-end 테스트 진짜로 다뤄봄

우리는 브라우저를 컨트롤 할 수 있고 우리는 브라우저에 테스트를 실행시킬 수 있음

모든 것이 작동하는지 한번 확인하고, 이 테스트가 통과되는지 확인하고 cy를 확인할 수 있는지 확인함

모든 것이 작동하는지 보고, describe()는 mocha에서 온 거고, it()도 mocha에서 온 거고, cy는 cypress로 왔는지도 확인해줌

## 19.1 Our First Cypress Test

그럼 이제 진짜배기를 만들어봄

그런데 내가 하고 싶은 것이 하나 있음

매번 visit() 안에 "localhost 3000포트 어쩌구 저쩌구"하는 것을 하고 싶지 않음

그래서 우리는 cypress.json으로 감

여기에다가 "baseUrl"해주고, 그리고 이것은 http://localhost:3000이 됨

나는 매번 'localhost:3000으로 가'라고 적기 싫음

그리고 만약에 궁금하다면, setting은 여기 있음

갖고 있는 setting을 볼 수 있음

이 모든 것이 다 확인할 수 있는 setting임

그리고 여기를 보다시피, 우리는 그냥 baseUrl에서 localhost:3000을 바꿀 수 있음

그리고 내가 바꿀 수 있는 setting들임

그래서 우리는 이거 다 끝냈음

그래서 우리는 이것을 안 해줘도 됨

그냥 이렇게 하면 됨

이제 cypress가 어떻게 움직이는지 봄

다시 실행시켜봄

테스트가 제대로 작동함

바로 작동해야함

잘 됨

'localhost:3000'임

그래서 이것은 우리한테도 빨라질거고 cypress에서도 빠름

그럼 이제 진짜로 할 것에 대해서 말해봄

그래서 예를 들어서 이 경우에는 home 페이지로 가야함

이것은 괜찮음

그래서 이것은 작동함

그런데 이 경우에는 describe('Log In')으로 함

그럼 어떻게 되냐면 login 페이지가 떠야함

그래서 이 테스트는 작동함

첫번째로, email을 클릭할 수 있고, password를 클릭할 수 있고, form을 채워 넣을 수 있음

그래서 'form을 채워넣을 수 있습니다.'라고 함

그리고 cy를 다시 해주고, visit()하고 메인( "/" )으로 감

그리고 여기에 우리는 get이라고 불리는 것을 사용함

그리고 이제 get은, 예를 들어서, 여기다가 어떻게 email을 가지고 오는지, 우리는 여기에 selector playground라는 무엇인가를 가지고 있음

그래서 여기를 클릭함

그리고 보다시피 난 내가 원하는 것을 선택할 수 있음

그래서 이 경우에는, 예시로 name이 됨

그래서 나는 그냥, get만 씀

그래서 나는 email을 가지게 될 거고, 여기에는 type()을 적고, 유효한 이메일을 적어줌

그리고 나는 get을 해줄 거고 password를 get함

그리고 type()함

벌써 실행해버림

보다시피 타이핑 중임

엄청 잘 됨

그리고 이제 내가 원하는 것은 button임

여기와서 button이라 적음

보다시피, 내가 어떻게 하면 버튼을 가질 수 있는지 알려주고 있지만, 좀 이상함

썩 그렇게 좋지는 않음

element를 가져오는 방식이 Tailwind class name처럼 CSS class name을 쓰는 방식임

그렇게 좋은 방법은 아님

우리는 일단 계속해서 진행할거고, 나중에 고침

그리고 우리는 button이 should()한다고 해줌

그리고 여기에 엄청 많은 옵션들이 있음

이 경우에는, 우리는 have.class를 사용함

아니면 우리는 not.have.class를 사용할 수도 있음

그리고 우리가 원하지 않는 class는 pointer-events-none임

그래서 이제 새로고침하면 보다시피 꽤 빠름

자동으로 잘 작동하고 잘 됨

보다시피 여기에 버튼이 있는데 이 class가 없음

그래서 form을 채울 수 있다는 의미임

여기서 우리는 할 일을 만들어둠 

log in은 나중에 하고, 이제 여기서 우리는 'email이랑 password validation(검증) 에러를 할 수 있다'라고 함

그러니 error를 엄청 빨리 만들어봄

그래서 가지고 여기로 옴

그래도 한번 해봄

우리는 cy.visit()를 하고, get('.text-red-500')을 적어줌

여기서는 should("have.text")라고 함

그리고 value는 'please enter valid email'임

첫번째로 email을 가지고 와야 하고, type()을 해줌

이것이 작동하는지 한번 봄

보면, 'form을 채워 넣을 수 있음'을 볼 수 있음

다음은 'email이랑 password validation(검증) 에러를 할 수 있다'가 보이고, 여기 보다시피 작동함

왜냐하면 '유효한 이메일을 넣으세요'라는 문장을 갖는 span이 있음

그래서 이것은 작동함

이제 보다시피 가장 첫번째로 cypress는 너무 쿨함

이렇듯 user가 하듯 나의 website를 테스트할 수 있음

다루는 범위를 보면 우리는 react testing library 그리고 jest를 사용하고 있음

그런데 다른 하나는, 나의 user가 어떻게 상호작용하는지를 보는 것과 그 상호작용을 테스트하는 것임

근데 element들을 이런 식으로 갖는 것은 진짜 별로임

그래도 감사하게도 우리는 cypress testing library라고 불리는 것을 설치할 수 있음

원하면 --save-dev 해도 됨

터미널에 npm install @testing-library/cypress@7.0.2 --save-dev 입력  

그리고 이것이 우리한테 해줄 수 있는 것은 react testing Library에서 우리가 사용했던 것으로 element를 가지게 하는 것임

만약 잊어버렸다면 예시로 component로 가봄

button으로 가봄

우리가 이것을 설치하면, 'getByText'와 같은 것을 사용해서 element를 가지고 올 수 있음

우리는 getByText, getByRow, getByContainer를 할 수 있음

testing-library/cypress를 설치해야 가능함

그래서 이것이 설치될 거고 끝나는 동안에, 여기 types에 추가함

그래서 이제 cypress와 함께 이런 type들을 더했음

그리고 cypress/support/commands.js로 가서 붙여넣기해줌

그리고 이제 우리는 여기로 와서 이런 식으로 get하는 것 대신에, 예를 들어서, findByPlaceholderName을 사용할 수 있음

잘 작동함

만약 자동완성에서 이것이 보이지 않는다면, 만약에 testing library가 제공하는 방법이 보이지 않는다면, 그것은 typescript를 재시작시킬 수 있게 vs code를 재시작해야 한다는 의미임

그런데 첫번째로 이렇게 testing library cypress 관련해서 적어줘야 하고, 명령문을 이렇게 import 해줘야함

첫번째 테스트로 가서, find를 확인해보고 이것이 작동하면, 그것은 너가 시작해도 좋다는 의미임

만약 그렇지 않으면, vs code를 다시 시작함

그래서 우리는 이렇게 get하는 것보다, 이렇게 향상시킬 수 있음

우리는 findByPlaceholderText()를 써줄 수 있음

react components를 테스트할 때 우리는 전에 썼던 방식과 똑같이 써줄 수 있음

그리고 여기에는 findByRole("alert")를 써줌

이것이 훨씬 나음

그리고 여기 똑같은 것을 해줌

그리고 여기도 findByRole 해줌

이메일을 찾을 수 있고, 이메일 type을 해줄 수 있고, alert를 찾을 수도 있음

여기에도 email을 찾을 수도 있고, password도 찾을 수 있고, 타입도 체크함

보다시피 훨씬 더 좋아 보임

이제 다시 실행시켜봄

시작할 준비가 됐음

터미널에 npx cypress open 입력함

그리고 여기에 잊지 않고 npm run start 해줌(다른 터미널에 npm run start 입력함)

내 type들을 새로고침 해야만 해서 껐었음

그래서 이제는 작동하고, 진행하면 됨

그래서 이 test가 통과하는지 한번 본 다음에, 다음 영상으로 넘어감

우리는 이제 진짜로 우리의 end-to-end test를 만듦

우리는 '로그인'이랑 '회원가입'을 테스트함

'프로필 수정'이랑 몇몇 상호작용에 관해서도 테스트함

그것들을 마치고 나면, 'forms', 'local storage', 등등을 배울 거고, 그리고 어떻게 연결을 'intercept'하는지에 관해서도 알아봄

왜냐하면 가끔 request를 별로 보내고 싶지 않거나, 마치 mock처럼 그 request를 가로채고 싶을 경우가 있음

모든 것은 언제나 mock 같음

이제 이것을 실행시켜봄

다시 시작해봄 

"1 integration spec"을 다시 클릭해줌

이것이 실행되는지 한번 봄

되는지 보고, 다음 영상으로 넘어감

log in 페이지로 가야함

## 19.2 Login E2E

보다시피 instruction을 연결하는 것은 우리가 전에 했던 것만큼 쉽지는 않았음

왜냐하면 이것은 react testing library고 이것은 그저 계속 연결하는 것을 허용하지 않음

그래서 이것을 위해서는 우리가 몇몇을 분리해야만 함

예를 들어서, 우리가 findByPlaceholderText를 쓸 때, 또 다른 cy로 분리해야함

이것이 기본적으로 그럼

여기서 type()은 할 수 있는데, 그 다음 것은 또 분리해줘야만 함

단지 그들이 그렇게 정했기 때문에 이렇게 하는 것임

그래서 우리는 여기에 cy 해주고, 우리는 또 find를 cy 해줌

기본적으로 이렇게 해야함 

이것이 보여야할 거고, 연결시킬 수 없음

find instruction들은 연결시킬 수 없음

그런데 다른 것은 그렇게 해도 됨

그래서 email을 한번 찾으면, 이메일을 type 할 수 있음

password를 찾으면, password를 type 할 수 있음

만약 원한다면, user = cy라고 선언해줄 수도 있음

내 생각에는 이것이 너의 코드를 훨씬 보기 좋게 만듦

그 이유는 cy를 user로 바꿀 수 있기 때문임

그래서 아마도 이것이 나음

아마도 이것이 보기 좋음

이제 이 모든 테스트는 통과해야함

form을 채워 넣어야함

그리고 보다시피 프로페셔널하게 잘 작동함

그래서 모든 것이 잘 통과함

모든 것이 find 되고, 모든 것이 잘 움직임

이제 이것이 우리가 해야 하는 것들임

만약에 내가 이렇게 findByPlaceholderText 하길 원하면 그럼 user.findBy 어쩌구 저쩌구를 쓰고, 아니면 cypress인 cy.find 어쩌구 저쩌구를 씀

만약에 모든 것을 하나로 연결하고 싶다면, 가장 좋은 방법은 findBy를 쓰는 대신에 get을 쓰는 것임

그럼 이제 진짜 login 테스트를 만들어봄

먼저, login 페이지 열기를 했고, 'form을 채울 수 있음'도 했음

우리는 login은 나중에 하고 password에 대한 테스트부터 끝냄

"유효한 이메일을 입력해 주세요"라고 쓰는데 이것은 여기 그대로 있을 거고, 우리는 다시 findByPlaceholder를 씀

그리고 다시 email이 됨

그리고 여기에는 아무것도 type하지 않음

그래서 우리는 clear()를 씀

input 칸을 비우고, 그리고 우리는 alert를 찾음

"이메일이 필요합니다"라는 문구가 필요함

이 테스트가 작동하는지 봄

login 페이지가 나와야 하고, 'form을 채워 넣을 수 있음'이 보이고 'email / password validation error'도 볼 수 있음

다음으로 우리는, 이메일에 대해서 또 하나 할 것이 있음

여기 보이듯, 유효한 이메일 형식이어야함

그리고 나서 login을 클릭함

email을 쓰고, password를 클릭한 다음에 이렇게 'password 필요함'이라고 나와야함

그러니까 email을 쓰고 난 다음, password를 쓰도록 해야함

그럼 여기까지 무슨 일이 일어나는지 한번 봄

우리는 그냥 password 칸을 클릭함

그러니까 이렇게 칸을 클릭하고, 무엇인가 적어넣고 그리고 삭제함

클릭하고, 적고, 그 다음에 지움

그래서 우리는 password에다가 type()을 해주고, 그 다음에 clear()해줌

error를 만드는지 한번 봄

이제 저기에 'password가 필요함'이 있게 됐음

그래서 이것이 우리가 가져야 할 alert임

이제 우리는 alert를 가지게 될 거고, 그건 'password가 필요합니다'가 됨

그리고 그 모든 assertion들이 일어나는지 살펴봄

email/password 유효값 확인과 에러 생성 테스트가 잘 작동함

이제 이것을 이동시킴

어디냐면, 'can fill out the form' 위로 이동시킴

왜냐하면 'form을 채울 수 있음(can fill out the form)'은 사실 login으로 감

그리고 난 이미 이 웹사이트에 이 email로 계정을 가지고 있음

그리고 password는 121212임

즉, 이것을 입력하면 login을 할 수 있음

그래서 여기서 우리가 하려고 했던 '로그인하기' 테스트를 함

그러고 나서 button을 찾고 button을 클릭함

이제 여기서 멋진 것은 user.window().its()를 할 수 있다는 것임

이것(its)은 window의 property임

여기에 localStorage라고 함

이것은 constant 안에 있음

그래서 우리는 localStorage.nuber-token 해주고 .should("be.a.string") 해줌

"be.a" 하고, (value로) "string" 해줌

보다시피, window localstorage의 nuber-token에도 접근할 수 있음

이것을 저장할 때, 빠르게 이곳으로 와야함

왜냐하면 내가 저장하는 순간 이것은 실행됨

우리는 실제로 login함

실제로 우리 back-end로 감

그래서 이 모든 것을 하게 됨

빨리 Chrome으로 가서, login 페이지를 봄

validation error들을 볼 수 있음

'can fill out the form'도 볼 수 있음

잘되고 있음

우리는 로그인 했음

우리는 심지어 여기 있는 nuber-token까지 테스트했음

그리고 아마도 몰랐을 수 있겠지만, 원한다면 다시 이 액션들의 모든 단계들을 역추적할 수 있음

login을 클릭했고 window를 하니, localStorage.nuber-token도 뜨고 잘 작동함

만약에 다시 저장하면 무슨 일이 일어날까

우리가 (다시) 로그인할까

우리는 로그인 못 함

이 친구는 우리 token을 기억 못 함

이것이 좋은 것임

왜냐하면 우리가 재시작할 때마다 우리는 log out 안 해도 됨

아무튼 보다시피, 이제 테스트가 완전 잘 작동함

심지어 local 저장소에서도 테스트가 가능함

그런 것들을 테스트 할 수 있음

이것으로 로그인 페이지의 테스트를 마침

우리는 이제 sign up page 해야함

하기 전에 여기서 sign up을 시뮬레이션 해봄

user.visit("/")라고 작성함

그리고 우리는 create-accounts라고 적음

이것이 log out이 되어있어야함

log out이 되는지 아닌지 한번 봄

왜냐하면 내가 log in 되어있으면 create account를 못 봄

여기 보다시피, 이 테스트에서 내가 한번 로그인하면, localStorage가 작동하고 있음

이것은 좋은 것이기는 함

그런데 여기 sign up 부분에서 더 이상 log in 되어있지 않음

여기서 보듯, 이 테스트들이 다 분리되어 있음

우리는 create account를 테스트함

## 19.3 Create Account E2E part One

여기 sign up 부분을 삭제함

더 이상 필요하지 않음

여기에서는 우리가 로그인 된다는 것을 테스트 했음

이제 integration 폴더 안에 auth라는 폴더를 만듦

인증(authentication)을 위해서, 이것을 login이라고 이름을 바꿈

폴더별로 나누는 것을 좋아함

이것이 더 좋음

이것을 옮겨줌

그리고 이제 여기서 create-account를 만듦

이것은 원하는 대로 하면 됨

나는 기본적으로 스토리별로 나눔

예를 들어서 인증(authentication) 관련해서 할 수 있는 것들, 그리고 사용자들(users) 관련해서 할 수 있는 것들로 나눔

그럼 이제 describe()함

"Create Account"라고 함

이제 여기서는, 첫번째로는 또 다시 it("should see validation errors.")라고 시도해봄

이것(대문자)은 필요 없지만 하고 싶으면 이렇게 해도 됨

그리고 아까와 마찬가지로 email/password에 대한 것임

우리는 다시 한번 연습하고 있음

이제 여기 와서 cy를 user라고 해줌

그리고 만약에 원한다면 우리는 홈에서부터 시작할 수 있음

우리는 홈에서부터 시작할 수 있고, 'Create an account' 부분을 클릭할 수 있음

아마 우리는 이렇게도 할 수 있음

home에서 시작해서, create an account를 하는 것으로도 할 수 있음

그럼 이것을 찾아봄

여기로 와서 첫 번째로, home("/")을 방문함

그러고 나서 우리는 user.findByText()를 함

다시 돌아가서 create an account라고 해줌

이것이 작동하는지 한번 봄

그래서 모든 테스트를 다시 실행시킴

이제 보다시피, 여기 폴더 같은 것이 생김

모든 것이 잘 작동함

'can fill out the form' 다음에 and log in을 넣어줌

이제 여기로 와서, 우리는 'Create an account' 부분을 클릭하고 있음

그리고 이것부터 멈춤

우리는 'Create an account'를 클릭함

'Create an account'로 가봄

우리는 email도 가지고 와야 하고 password도 받아야 하고 이것 말고도 등등 받아야함

user.findByRole하거나 아니면 findByPlaceholderText해줌

이전에 했던 것과 같은 것임

그러고 나서 우리는 type() 해줌

user.findByRole() 해줌

우리가 했던 것과 완전 똑같음

should라고 해야함

expect는 jest스러운 것이고, should는 mocha에서 옴

그리고 이것은 "Please enter a valid email."임

그리고 또다시 user.findByPlaceholder(/email/i)이라고 해줌

그리고 아무것도 안 씀

clear() 해줌

alert는 우리가 했던 것과 같음

'Email is required'가 됨

password도 똑같이 해줌

그럼 password를 가지고 옴

우리는 type()으로 아무거나 넣음

그리고 난 다음 그것을 clear() 해줌

그럼 이것은 'password is required'라는 alert를 갖게 해줌

그래서 우리는 'Create an account' 부분을 클릭했음

지금까지 좋음

'Password is required'라는 문구가 있어야함

user.findByRole("alert")를 써서, password is required라는 문장을 가져야만(should("have.text"))함

존재하지 않았던 것 같음

너무 많아서 그럼

그것이 이유임

아니면 우리가 진짜 이메일을 적어줄 수도 있음

그럼 이메일을 적어봄

그럼 이제 불평하지 않음

다시 해봄

계정 생성 페이지로 왔음

password는 잘 됨

이제 됨

alert가 2개 있어서 그랬음

그것이 이유였음

우리가 이미 실행한 테스트임

그래도 여전히 만족스러움

이제 우리가 할 일은 user를 만드는 것임

'Create an account' 부분으로 감

이제 우리는 실제로 user를 만들어봄

그리고 그것은 back-end로 감

그러고 나서 이 자격 증명(credentials)들로 로그인시킴

하지만 우리는 매번 그렇게 되기를 원하지는 않음

매번 테스트할 때마다 새로운 user를 만들고 싶지는 않음

이것이 잘 작동하는지는 봐야되니까 딱 한번만 새로운 user를 만듦

그 말은 back-end에 엄청나게 많은 user들을 가질건데, 테스트용 user들을 지우기 위해서 Timeout이나 Cron job같은 것을 만들어야함

아무튼 그것이 두번째 일이 됨

여기서는 'it should be able to create account.'라고 해줌

이제 user.visit() 해줌

이 경우에 우리는 create account로 바로 가줌

link를 클릭할 필요는 없음

이전에 하긴 했었는데 지금은 괜찮음

그리고 여기는 user.findByPlaceholderText() 해줌

그냥 우리가 가지고 있는 것을 복사함

이것은 user가 됨

그리고 난 유효한 이메일을 type으로 줌

그리고 password도 유효한 패스워드로 똑같이 해줌

그냥 그대로 둠

password까지 완벽하고, 이제 button을 찾아봄

그리고 click() 해줌

이제 무슨 일이 일어나는지 봄 

그리고 나서 우리는 계정을 만듦

그리고 보다시피 됐음

계정을 만들었음

그런데 이제 하나만 더함

바로 그 계정으로 로그인 하는 것임

그러니까 계정을 만들고 바로 로그인도 할 수 있어야함

그래서 여기서 우리는 기본적으로 똑같은 것을 다시 함

만약 잘 모르겠다면, 여기에서는 redirect로 user를 로그인시킴

그래서 우리는 이 프로세스를 반복함

테스트하기 위해서 우리가 했던 똑같은 것을 함

user.window() 해줌

여기 있는 것을 그냥 복붙할 수 있음

Nuber-token은 string이여야함

아까 테스트하면서 이 user는 back-end에다가 생성했었음

그래서 난 real2를 씀

이것은 곧 고침

우리는 back-end response를 속임

왜냐하면 매번 테스트할 때마다 user들을 생성하는 것은 원치 않음

그럼 email/password validation error를 보는 테스트가 일단 우선임

이제는 real2로 계정을 만들 수 있어야하고 로그인도 할 수 있어야함

이제 우리는 로그인도 함

그런데 계정을 못 찾았음

찾지 못한 이유는, 우리가 이 모든 것을 너무 빨리해서 그런 것 같음

그래서 적어도 우리가 조금은 기다려줘야 할 것 같음

그러니 user.wait을 해주고 여기서 밀리초 단위로 기다릴 수 있으니까 1초를 기다려줌

2초 기다려도 됨

1초로 하고 이것이 작동하는지 한번 봄

이 이메일은 이미 사용되었으니 바꿔놓음

그럼 시작해봄

유효값 확인 에러가 보임

계정을 새로 만들 수 있어야함

그럼 우리는 계정을 만들고, 1초 기다림

그리고 보다시피 이제 작동함

계정을 만들었음

이제 똑같이 다른 테스트도 진행됨

로그인 테스트도 됨

테스트 할 때마다 이 모든 테스트를 돌리지 않아도 됨

저장할 때마다 모든 테스트를 하고 싶지 않음

그것은 시간을 좀 먹는 일임

그래서 만약 원한다면, 실행하기 원하는 테스트만 클릭할 수 있음

그럼 그 테스트만 열게 됨

당연히 이것이 더 효율적임

왜냐하면 그냥 실행하기를 원하는 테스트만 클릭해서 실행하는 것임

모든 테스트를 실행할 필요는 없음

매번 한번의 테스트만 하면 됨

이제 우리는 계정을 만들 수 없음

왜냐하면 이 계정은 벌써 만들어졌기 때문임

이것은 작동하지 않음

그럼 이것은 다음 시간에 고침

우리는 여기에 이벤트를 가로채서 계정 만들기가 작동된 것처럼 행동하게 할 수도 있음

아니면 우리는 여기에 error가 없는지 확인해볼 수도 있음

기회가 되면 한번 해봄

우리는 이것이 다시 일어나지 않도록 intercept함

## 19.4 Create Account E2E part Two

우리가 할 수 있는 또 한 가지는, user가 한번 등록되면, 여기에서 확인(assert)해볼 수 있음

user라고 해주고, 그리고 title()해주고, 여기에 "Log In | Nuber Eats"라고 적어줌

그래서 이 방법은 우리가 계정을 만든 뒤에 우리가 또 다른 페이지로 넘어갔다는 것을 재확인해주고 있음

이것이 더 좋은 방법일 것이라 생각함

작동하지 않음

login 부분 엄청 빨리 보고 옴

cypress를 이용해서 어떻게 request를 가로챌거야

엄청 쉬움

내가 할 것은, 문자 그대로 'cypress.intercept()'를 사용하는 것임

아니면 이 경우에는 user.intercept()하면 됨

여기서 intercept라고 작성함

이 intercept가 작동하는 원리는, 어떤 HTTP request에 대한 stub(mock), 또는 spy하는 것을 허용함

그래서 이것으로 무엇을 할 수 있냐면, 'http request의 body, headers 그리고 URL을 변경'할 수 있음

예를 들어서, header를 만들어 보내고 싶을 때, back-end한테 '나 테스트하고 있어' 이런 식으로 header를 써서 보내도록 설정해줄 수 있음

또는, cypress가 보내는 모든 request는 '테스팅: true'라는 headers와 함께 보내져야 한다고 해줄 수 있음

아니면 여기 보듯이, 진짜 http response를 변경할 수도 있음

이것이 딱 우리가 원하는 것임

우리는 계정 만들기의 response를 변경하기를 원함

그 response는 지금 'user가 이미 존재합니다'라고 말하고 있음

우리는 이 response를 수정해서, react.js가 성공적으로 계정이 생성되었다고 생각하게 만듦

그래서 이렇게 생겼음

우리는 cy. 또는 user.으로 intercept()만 하면 됨

어떤 것을 intercept하고 싶은지 적고, req를 받음

그리고 원하는 것으로 응답하면 됨

보다시피 심지어 res.body에 expect를 쓸 수도 있음

그래서 만약 response에 대해 궁금한 것이 있다면, response를 감시할 수 있다는 것을 의미함

아니면 다른 메세지를 res로 보낼 수도 있음

이것이 딱 우리가 해야 할 일임

그럼 여기서 intercept()함

우리는 localhost:4000/graphql을 intercept함

그런데 하기 전에 여기서 빠르게 테스트를 실행함

그리고, 검사(inspect)를 클릭하고 네트워크로 이동해봄

그리고 graphql로 검색함

response가 정확하게 어떻게 생겼는지 보고 싶기 때문임

그래서 계정을 만드려고 하는데 이메일이 이미 존재하고 있다고 함

그래서 이것이 어떻게 생겼을까

이것이 response임

'data', 'createAccount', 뒤에 있는 이 모든 것도 그래서 이것을 복사해서, 이제 우리는 intercept함

이것이 내가 갖게 되는 response임

이것을 우리가 바꿈

우리는 http://localhost:4000/graphql을 intercept()함

그리고 req라는 object를 받고 request를 받음

그리고 우리는 req를 reply()함

그리고 reply는 response를 가짐

여기에서 res.send() 해줄 수 있음

그리고 우리는 원하는 data를 보낼 수 있음

그런데 이 경우에는 ok가 true가 됨

그리고 error는 null이 됨

그래서 우리는 localhost의 graphql을 intercept 할 수 있음

그리고 우리는 reply를 해서, 이 user가 database에 존재하지 않았더라면 일어났을 일을 발생시킴

그래서 이 부분을 진짜로 존재하는 user로 바꾸고, 그리고 여기에는 121212를 해줌

그래서 이제 user가 (실제로 존재하는데) 존재하지 않는 척 함

그리고 우리를 login 화면으로 가게 해줄거고, 로그인이 잘 되게 함

저장하고 cypress로 감

그리고 모든 테스트를 새로고침함

그럼 validation errors가 나오고 이제 우리는 계정을 만듦

계정이 만들어졌다고 생각함

잘 작동함

그런데 여기 error가 있음

request를 intercept하고 있음

그런데 여기서는 로그인할 때, 이 request가 여전히 계속해서 가로챔(intercept) 받고 있어서 그럼

그럼 우리는 token을 못 받음

나는 request를 intercept 했음

그래서 이 request는 가로채지고 있었음

이것은 기본적으로 만약에 우리가 createAccount나 login mutation을 보내거나, 아니면 query me 등등 뭐가 됐든지 간에 이런 것들을 보내면, 이것이 여전히 우리가 createAccount의 ok가 true인 것으로 응답함

그런데 이것은 우리가 원하는 것이 아님

그래서 고칠 수 있는 한가지 방법은 게을러지는 것임

우리는 login 부분을 지울 수 있음

계정 만들기 부분에 로그인이 필요하지는 않기 때문임

그냥 보여주고 싶었을 뿐이고, 굳이 그렇게 하지 않아도 됨

그냥 보여주고 싶었음

그래서 다시 돌아가서, 수정하는 방법은, 우리가 버튼을 클릭할 때, 1초 기다리고 로그인에 리다이렉트하면, 이것은 우리가 사실 계정을 만들었다는 것을 의미하고 그래서 이 부분을 만족함

우리는 모든 것을 여기에서 함

내가 보여주고 싶은 것은 우리가 무슨 request들을 가지는지 봐야됨

왜냐하면 지금은 여기서 모든 mutation에게 모든 쿼리에게 이것으로 reply하기 때문임

그래서 여기에서 어떤 req를 받는지 보여줌

그래서 req.body를 console.log()함

그러면 우리의 cypress로 감

그러면 보게 됨

여기 req.body가 보임

그리고 loginMutation이 보임

이것은 우리가 아까 봤던 error임

위로 올라가보면, req.body가 있음

보다시피 req.body는 createAccountMutation이나 loginMutation을 가지고 있음

그리고 operationName으로 접근할 수 있음

그러니까 operationName을 req.body로부터 가지고 와서, 만약에 operationName이 있고 operationName이 createAccountMutation이면 우리는 intercept함

그것이 아니면 우리는 아무것도 안 함

이것이 작동하는지 한번 봄

그리고 이제 계정 만들기를 해야함

이메일, 패스워드, reply를 보내고, 그리고 이제 작동함

우리는 로그인하고 token도 받고 response intercept 되지도 않았음

이렇게 해서 intercept의 전문가가 되었음

가끔 모든 것을 intercept하고 싶을 수는 있는데, 거의 대부분 특히 graphql로 작업할 때는, 모든 것을 intercept하고 싶지 않음

만약에 REST로 작업하면, 예를 들어서 '/login'은 intercept 할 수 있음

그러면 '/account'는 intercept되지 않으리라는 것을 앎

만약 지금처럼 graphql로 작업한다면, 그리고 몇몇 것들만 테스트하고 싶다면, 그럼 operationName을 살펴봐야함

이것은 매우 중요함

왜냐하면 어떤 것을 intercept하고 싶다면 이런 것을 정말 많이 하게 됨

예를 들어서 레스토랑을 만드는 것을 테스팅할 때, 아마도 intercept를 써야함

왜냐하면 매번 테스트를 실행할 때마다 레스토랑을 만들고 싶지 않음

이것이 계정 만들기 문제를 고치는 방법임

이제 어떻게 intercept가 작동하는지 알게 되었음

create account 부분을 마침

프로필 편집으로 이동해서, 어떻게 진행되는지 살펴봄

## 19.5 Custom Commands

보여주고 싶은 것이 있음

나만의 command를 어떻게 만드는지 보여주고 싶음

예를 들어서, should 같은 것이 있음

support/commands.js에서 나만의 command를 만들 수 있음

여기 보다시피, command를 만드는 방법이 있음

엄청 간단함

그래서 우리는 command를 만듦

이 command의 이름은 assertLoggedIn이 됨

왜냐하면, 로그인이 되었는지를 확인하는 이 작업을 매번 반복해왔음

그래서 우리는 이것을 하기는 해야하는데 좀 더 짧게 함

아마도 나중에 이것을 또 써야할텐데, 이것을 반복하고 싶지 않음

그래서 우리는 Cypress.Commands를 하고, 여기다 command를 더해줌

그 이름은 assertLoggedIn이 됨

이름은 원하는 어떤 것이든 될 수 있음

assertPotato가 될 수도 있음

무엇이 되든 상관없음

그러고 나서 우리는 implementation을 정함

이제 종종 command가 argument를 가질 수 있음

그런데 이 경우에는 어떤 argument들도 가지지 않음

그리고 우리가 할 일은 cy.window.을 해줌

그리고 nuber-token을 잊지마

아니면 그냥 이것을 다 복사해도 됨

그래서 이렇게 assertLoggedIn이라는 command를 만들었음

그러니까 매번 반복하는 확인 작업 같은 것들을 command로 만들 수 있음

'로그인 확인'이나 '로그아웃 확인'이나 원하는 어떤 것이든 command로 만들 수 있음

그래서 이 command를 사용하기 위해서는, 여기서 user.assertLoggedIn을 해주면 됨

복사해서 붙여넣어줌

assertLoggedIn은 cypress에 존재하지 않는다고 뜨지만, 우리는 commands.js에 있는 것을 사용하고 있음

아마도 commands.ts를 사용한다고 하면, 작동할지 잘 모르겠음

그래서 모든 것이 작동해야하는데, 그냥 모든 것을 다 ts로 바꿈

이것이 잘 작동할지 한번 봄

그리고 이것이 typescript쪽에서 작동하지 않더라도, 여기서는 잘 작동될 것이라고 확신함

js에서 ts로 바꿨음

이것을 닫고 cypress를 다시 열어봄

이제 작동해야함

내 typescript가 불평하고 있음

만약에 typescript가 불평하는 것을 원치 않는다면 // (골뱅이) ts-ignore를 해주면 알아서 조용히 함

create-account.ts를 이용함

왜냐하면 이것이 assertLoggedIn을 가지고 있음

Chrome을 열고 기다려봄

보다시피 '로그인 확인'을 했음

여기에 'assert'가 있음

잘 작동함

Window, its, assert는 완전 잘 작동함

이제 완성됐음

이 command뿐만 아니라 원하는 어떤 command든 그 어떤 방식으로든 만들 수 있음

command가 argument를 가질 수도 있음

그럴 때는 command를 만들 때 여기다가 argument를 넣으면 됨

여기 보다시피, command를 만들 수 있음

이 command는 login이고 email하고 password를 받음

뭐 할지 궁금하지

이것이 바로 우리가 만들 command임

왜냐하면 우리는 '프로필 수정하기'를 테스트함

예를 들어서 우리가 프로필을 수정하고 싶음

그럼 우리는 로그인을 먼저 해야함

그런데 매 순간 이것을 (login.ts) 실행시키고 싶지는 않음

로그인해야할 때마다, 이 테스트하는 부분을 실행시키고 싶지는 않음

그럼 login이라고 불리는 command를 만듦

결국에는 엄청나게 많은 command들을 갖게 됨

login 확인, logout 확인, click 확인, dismiss, popup 등등 같은 command들을 갖게 됨

그럼 이제 여기로 와서 그냥 login이라고 적어줌

그리고 보통은 email이랑 password를 이 command로 보내고 싶음

그럼 우리는 이렇게 해서 당연히 get() 해줌

"/login"이나, 아니면 그냥 "/"함

왜냐하면 우리는 로그아웃 했음

우리는 로그아웃을 했었음

그리고 그냥 여기 이것을 복사함

이것을 cypress로 변경함

이런 것들은 이대로 둠

이렇게 하고, 모든 것이 괜찮다고 가정함

우리는 email을 type()함

우리는 password도 type()함

그러고 나서 우리는 cy.assertLoggedIn()이라고 해줌

Typescript가 불평함

그럼 이제 login command를 만들었음

home 화면으로 갈거고, 이렇게 하고, 우리는 password를 type()함

button을 찾을거고 그것을 click 할 수 있는지 확인함

그것을 클릭할거고 우리는 '로그인 확인(assertLoggedIn)'함

원한다면 우리는 로그아웃 했다는 것을 확실하게 하려고 assertLoggedOut을 할 수도 있음

그래서 이 경우에는 localStorage.nuber-token이 'null이 되어야함'

그래서 이 command를 시작하기 전에 우리는 assert 해줌

typescript가 불평함

이 라인에 typescript를 무시하도록 함

그럼 이제 login(command)에서 할 일은, login이 작동하는지 테스트하는데, 이것은 동일한 작업이니까 그래서 그냥 이렇게 함

assert가 아니라 그냥 user.login하면 됨

이것이 로그아웃이 되어있는지 확인 해줄거고, 이것이 다 해줌

그런데 login이 username하고 password를 요구함

이것이 login이었고, 다시 말하지만 typescript는 불평함

여기에 이렇게 해줌

그리고 우리는 똑같은 command를 create-account 테스트에도 사용함

그래서 assertLoggedIn 대신에 여기로 와서 그 다음 user.login() 이것으로 로그인함

그리고 또 login command에다가 이 라인을 추가해줌

그래서 이제 몇 개의 command를 가지게 되었음

우리는 login command에 assertLoggedOut이랑 assertLoggedIn이 있음

이제 문제가 없어야함

login으로 가서 undefined를 만났음

이것은 null이 아니라 undefined이어야함

이 에러를 고치기 전에, 이것이 error를 읽는 방법임

window, its, localStorage의 nuber-token이 null이기를 기대했음

그런데 이것이 내가 받은 것임

좀 별로라는 것을 앎

나도 jest스러운 메세지를 더 좋아함

이것은 mocha 스타일이라서 다름

그런데 expected 다음에 나온 이것이 내가 얻은 것임

null이 되는 것이 내가 바라는 것임

그래서 나는 undefined로 바꿈

다시 해봄

그래서 email이랑 password 확인 테스트를 넘어감

계정 만들기랑 로그인 되어야하고, 그래서 우리는 계정을 만들고 로그인함

보다시피 작동함

우리의 무지하게 큰 command가 작동함

이제 login을 테스트 해봄

우리 login을 바꿨었음

'form을 채워 넣을 수 있고 log in 할 수 있습니다.' 이제 이것은 말 그대로 하나의 command임

그럼 한번 봄

cypress로 가서 login.ts로 감

이것을 클릭하면 Google Chrome을 엶

그럼 이제 login 페이지가 보여야함

'can see invalid password validation errors.'가 보이고 'can fill out the form and log in'도 보임

보다시피 여기 지금 하고 있는 것, 이것이 바로 우리 command임

이 모든 테스트가 우리 command임

보다시피 여기 첫번째로 command에서 assertLoggedOut을 불렀음

예상대로 localStorage.nuber-token에서 undefined를 받았음

그리고 우리는 여기를 방문(visit("/")) 했음

그리고 title은 우리가 예상한 title과 동일했음

그러니까 잘 작동함

보다시피 visit()를 부르기 전에 assertLoggedOut을 불렀었음

그래서 순서를 바꿈

그러니까 먼저 home 페이지를 방문함

그러고 나서 우리는 로그아웃 상태인지 확인해봄

이것이면 충분함

이제 우리는 아름다운 command를 가지게 됐음

새로운 test를 만들어봄

이 command들을 사용해서 프로필 수정하기를 위한 새로운 테스트를 만들어봄

그런데 그것은 다음 시간에 함

우리 command를 만들었음

command는 엄청 유용함

가끔은 command를 너무 많이 갖게 되는데, 그것은 그것대로 멋짐

## 19.6 EditProfile E2E part One

이제 우리는 프로필을 수정하러감

여기를 클릭하고, email을 바꾸고 프로필을 저장함

그런데 우리가 배운 command랑 intercept를 사용함

그래서 여기에 user라는 새로운 폴더를 만들고, edit-profile이라는 파일을 만듦

우선적으로 할 일은 it("can go to /edit-profile using the header")라고 함

그래서 header를 한번 봄

Inspect 모드로 들어가서, 확인해야할 것은 link임

/edit-profile로 가는 link임

이것을 가지고 올 수 있는 방법이 없음

그래서 시도해봄

첫 번째로 const user = cy; 해줌

그리고 user 해주고, 첫번째로 우리는 argument랑 같이 login을 함

만약 나라면 command 정의부분 안에 이 username이랑 password를 넣었을 것임

그런데 그냥 이런 방식을 보여주고 싶었음

일단 ts-ignore하고 그냥 command에 어떻게 argument를 주는지 보여주고 싶었음

이렇게 login함

그리고 우리는 user.get()을 할건데, get을 한번 살펴봄

기본적으로 CSS selector들을 이용해서 가지고 올 수도 있음

예를 들어서 list, first child나 class 이름을 통해서 가지고 올 수도 있음

이렇게 꽤나 편리함

그래서 brave 브라우저를 보면, 벌써 나의 edit profile 페이지에 와있는데, 여기로 오는 방법은 여기 있는 'edit-profile' 링크를 클릭하는 것임

그래서 href를 가진 a 태그를 찾음

href가 '/edit-profile'인 a 태그를 찾음

그리고 그것을 click()함

그럼 log in하고 나서 우리가 dashboard에 있을 때, 그것을 클릭할거고, 이것은 내가 header를 이용해서 edit profile 페이지로 갈 수 있다는 것을 의미함

그래서 cypress로 가면 이제 여기 'edit-profile'이 생긴 것을 볼 수 있음

이것을 chrome에서 실행시킴

어떻게 작동하는지 봄

Visit하고 잘 되고 있음

이제 작동함

보다시피 우리가 클릭할 수 있고 잘 작동함

그럼 이제 이 title을 확인해봄

그리고 우리가 계속 사용하던 것과 같은 것을 쓸 수 있음

assertTitle이라는 command를 하나 만들면 좋을 것 같음

그리고 우리의 title들은 모두 이런 구조를 가지고 있음

그래서 아마도 assertTitle이라는 command를 이렇게 만들 수 있음

그리고 그냥 'Login'이라는 단어를 보냄

그리고 command 안에서 그 argument를 써서 확인해줌

아마도 이것은 Edit Profile이 됨

그리고 테스트 한가지만 더함

it('can change email.')을 작성함

user.login()을 해줌

그 다음 user.함

Login을 예상했음

이것은 Edit Profile임

저장을 안했음

그럼 email을 찾음

findByPlaceholder를 씀

그리고 우리는 이렇게 type()함

login을 두번 호출하는 것이 조금 보기 싫음

그래서 우리가 할 수 있는 것은 beforeAll하거나 beforeEach하는 것임

beforeAll은 없음

beforeEach에다가 login을 넣어줌

그럼 우리는 두번 안 해도 됨

그럼 이제 beforeEach로 login을 함

이 부분에서는 메일주소를 type()하고, 우리는 button을 findByRole로 찾음

그리고 button을 click()함

나는 내 이메일을 바꾸고 싶지는 않음

그래서 이것을 intercept 해보는 것은 어떨까

그런데 일단 이 테스트부터 통과하는지 보고 나서 함

보다시피 Edit Profile에서 login을 먼저 하고, email을 변경할 때도 login을 먼저 함

로그인부터 먼저 하고 그런 다음 edit profile로 가야하는데, visit('/edit-profile')에 대해서 완전하게 깜박하고 있었음

우리는 button을 또 다시 click()할 필요는 없음

왜냐하면 우리는 이것이 작동하는지 알고 있음

한번 봄

이메일을 바꿀 수 있고, edit profile로 감

문제가 생겼음

이메일이 수정되지는 않음

이것은 유효하지 않은 형식임

먼저 이메일을 clear() 해야했음

그러고 나서 type()함

beforeEach가 정말 좋음

아주 유용함

다른 모든 것을 하기 전에 로그인부터 함

보다시피 우리 코드가 한결 간결해졌음

매번 로그인하라고 쓰지 않아도 됨

이렇게 우리는 이메일을 바꿀 수 있음

title에 대한 문제가 있었음

title을 봄

title은 'Edit Profile'이 되어야함

우리가 어떤 title을 갖지

다시 title을 보면 Login을 예상했음

title은 Edit Profile이 되어야하는데 Login이 되었다고 함

이것은 맞지 않음

내 생각에는 여기 있는 command 때문에 그런 것 같음

"Login | Nuber Eats를 받았는데, 기대한 것은 Edit Profile | Nuber Eats"임

아마도 login-profile이 user를 가지고 있지 않은 것 같음

우리 edit-profile이 Helmet을 가지고 있지 않나봄

Helmet을 가지고 있음

아마도 우리는 조금 기다려야할 것 같음

기다리면 아마도 title이 생길 것 같음

그것이 문제였던 것 같음

우리 title이 불평하는데 내 생각에 그것은 2초를 기다려주면 해결됨

그리고 이렇게 하고 난 다음에는 모든 것이 잘 통과될 것이라고 생각함

우리는 이메일을 바꿨음

그러면 이제 내 login은 실패함

왜냐하면 그 user가 더이상 존재하지 않음

내 login이 실패했음

이것을 intercept하는 것은 다음 시간에 해봄

마지막 시간임

## 19.7 EditProfile E2E part Two

여기서 테스트를 했는데, 새 이메일을 back-end로 보내는 테스트를 하도록 함

여기서 우리는 intercept 비슷한 것을 해야함

그래서 기본적으로 응답을 intercept 해야하는 것이고, 또한 request도 intercept 해야함

왜냐하면 사실 back-end로 이 새로운 이메일을 보내고 싶지 않음

그래서 난 이것을 intercept하려고함

작동은 되는데, 다만 그것을 intercept함

매번 테스트할 때마다, 테스트 계정의 이메일을 바꾸는 것은 원하지 않음

그래서 그것을 하기 위해서, documentation을 보면 보다시피 request를 intercept하는 방법이 있음

그래서 여기로 와서, user.intercept를 할 수 있음

우리의 경우에는 POST가 됨

그리고 /graphql 경로로 POST하고, 그런데 이 경우에는 http://localhost:4000을 해줌

그리고 만약 원한다면 body를 바꿀 수 있는데, 이것이 우리가 해야할 것임

이 경우에 우리는 /graphql로 POST하고, 잠시 body를 console.log 해봄

이 테스트를 실행해봄

그리고 어떻게 되는지 한번 봄

우리 body는 어디갔지

body가 어떻게 생겼지

body를 한번 봄

operationName이 editProfile이고, query가 있고, variables에 바로 그 새로운 이메일이 있음

그래서 내 계정의 email이 new로 시작하는 것으로 바뀌었음

이제 body를 봤고, 우리가 무엇을 해야하는지 앎

그런데 code에서는 별로 보기 안 좋을 수 있음

그런데 이렇게 해야됨

이것을 사용함

typescript가 불평하지는 않음

일단 이것 먼저 해야함

operationName이 editProfile인지 먼저 확인해봐야함

그래서 우리는 if를 써서 req.body?.operationName이 editProfile이 맞는지 확인함

그러니까 기본적으로 우리는 새 이메일을 덮어씀

저 email로 저장하고 싶지 않아서 그럼

그리고 이것이 문제가 됨

왜냐하면 여기 이것들이 없을 수도 있음

variable도, input도, 아마도 email이 존재하지 않는 등 그래서 이 시점에만 typescript가 비활성화 되도록 함

이제 테스트가 어떻게 진행되는지 한번 봄

다시 이것을 바꿔야함

pgAdmin에서 user 테이블의 newnico@gmail.com을 itnico@gmail.com으로 바꿈

왜냐하면 이렇게 두면 작동하지 않을거니까 바꿨음

다 됐음

테스트가 작동되지 않았음

다시 해봄

그래서 이제 보다시피 우리는 request를 intercept 했음

response를 intercept하지 않았음

우리는 문제없이 login 해야함

email을 변경할 수 있을까

일단 login 할 수 있어야함

그 다음에 우리는 edit profile로 감

그리고 새 이메일을 입력해서 보냄

작동하는 것처럼 보임

그래서 모든 것이 작동하는 것을 볼 수 있음

새 이메일을 쓰고, 프로필을 저장했는데, 여기를 새로고침하면 보다시피 이메일은 여전히 그대로임

바뀌지 않았음

내 DB를 새로고침 해봐도, 그대로 있음

우리는 request를 수정할 수 있었음

그래서 이제 가짜 request와 response를 꾸미는 방법을 알았음

마지막으로 얘기하고 싶은 것은 fixtures에 대한 것임

여러분이 network request로 작업을 할때, 이 application 테스트하는 것을 마무리할 때쯤에는 아주 많은 network로 작업하게 될 것이라고 확신함

많은 response들을 mock하기를 원함

그래서 이것을 정리하기 위해서 fixture를 만들어 볼 수 있음

이것은 그냥 json 파일임

그래서 우리는 여기로 와서 example.json을 지우고, fixtures 폴더에 새로운 폴더를 만들어서 기본적으로 integration 테스트와 동일한 구조를 만듦

그러니까 auth 폴더에 create-account.json 파일을 만들어줌

그리고 이제 우리는 이것을 이 json 파일 안에다가 넣음

그리고 "data"라고 하고, 여기도 큰 따옴표로 묶음

그럼 이것이 fixture임

그리고 좋은 소식은 만약 response를 intercept하고 싶을 때, 이렇게 fixture를 보낼 수 있음

그리고 cypress는 그것이 무엇이든 간에 fixtures 안에서 찾아냄

그래서 이 경우에 우리는 그냥 fixture를 보낼 수 있음

그리고 그 fixture는 auth/create-account.json에 있음

이것이 바로 fixture를 정리하는 새로운 방법인데 멋진 거 같음

왜냐하면 request를 보내기 위해서나 response를 받기 위해서 많은 fixtures를 가지게 됨

그래서 여기에 정리해놓는 것이 더 좋음

그리고 당연히 얘네를 import할 필요는 없음

그냥 올바른 경로를 적어주면 됨

그럼 된 것임

이제 이 친구를 닫음

그리고 내 fixture가 작동하는지 보기 위해서 create account 테스트만 실행해봄

먼저 validation error 등등을 테스트하게 됨

그리고 이제 Create account 테스트를 함

그리고 보다시피, 우리는 성공적으로 fixture를 보냈음

그리고 로그인까지 했음

잘 작동함

이제 fixture를 보낼 수 있고, 보다시피 우리 code는 한층 더 발전했음

여기 보다시피 request가 있음

여기 계정이 만들어졌고, 이 request를 바로 여기서 intercept 했음

이것은 우리가 intercept 했고 '계정 생성, 로그인함'이라는 alert까지 나왔음

그래서 이제 나만의 command 만드는 방법을 알고, 나만의 fixtures를 만드는 방법도 알게 되었음

그리고 또 우리는 response뿐만 아니라 request도 intercept하는 방법을 배웠음

이것은 유용함

테스트를 위해서 어떤 middleware를 가지고 있다고 가정하면, 테스트라고 쓰인 header를 보낼 수도 있음

resolver를 바꾸거나 어떤 계정을 검색하도록 할 수도 있음

창의적으로 해볼 수 있음

나의 request나 response를 수정할 수 있다는 것은 엄청 멋진 것임

## 20.0 Order Dashboard Routes

방금 내 database의 Role을 owner로 바꿨음(pgAdmin이나 DBeaver에서 함)

왜냐하면 지금부터는 식당 사장님 부분을 작업함

식당 주인 부분에서 가장 중요한 route들을 작업함

restaurant(식당)을 만들 거고, dish(메뉴)를 업로드하고, 음식점 dashboard를 만들거고, 음식점의 매출 수익을 보여주는 그래프도 만듦

그래서 첫번째로 할 일은 Role을 owner로 만드는 것임

아니면 새로운 사용자를 만들 수도 있음

그렇게 해도 문제 없음

웹사이트를 새로고침해보면 보이는대로 page not found라고 뜸

당연한 일임

왜냐하면 아직 owner에 route가 없음

client에만 route가 있음

그러니 owner에 route를 생성해봄

data.me.role이 "Owner"와 일치한다면, 몇가지 routes를 지니게 됨

이 route들은 ClientRoutes와 상당히 다름

하지만 여기의 route 두개는 여기에 그대로 놔두고 싶음

이 두 route는 고객(client)과 음식점 주인과 운전자(driver) 자기의 이메일을 confirm하고 프로필을 수정할 수 있도록 모두가 공유함

다만 여기의 이 key 부분이 좀 신경쓰임

이 부분도 좀 개선함

이렇게 ClientRoutes처럼 쓰고 array를 보여주는 방식 대신에 client route들의 map을 만듦

client route는 route들의 array가 됨

하지만 route들은 이것과는 좀 달라짐

이것은 array가 될거고 그 안에 object가 옴

path라고 적고, 이것은 문자열이 됨

그리고 component라고 적음

이것은 component가 됨

한번 해봄

첫번째 path는 "/"고, component는 Restaurants임

그리고 다른 것들도 똑같이 해줌

ConfirmEmail은 아직 안 할 거고, EditProfile도 아직 안 함

그리고 다음으로 /search가 있음

component는 Category가 됨

/restaurant/:id는 path고, component는 Restaurant임

이것은 clientRoutes가 됨

다음으로 commonRoutes라는 것을 만들건데, 여기에는 ConfirmEmail과 EditProfile route 두개가 옴

하지만 이렇게 적는 대신에 일단 path를 적음

이것을 object에 넣음

그리고 /Router는 지움

앞으로 이런 방식으로 할거고, 이렇게는 하지 않음

이런 방식으로 route를 render함

만약 role이 "Client"라면 ClientRoutes를 가져와서 map을 적음

그리고 여기서 route.component를 render함

그리고 key 부분은 index를 쓰거나, 아니면 이렇게 route.path를 적을 수 있음

이것은 유니크한 거라고 확신할 수 있음

그리고 여기 commonRoutes도 똑같이 써줌

이 부분은 common route들을 render 해줌

common route들은 /confirm과 /edit-profile 이 두개임

이 부분은 지움

왜냐하면 더 좋은 것을 만들었음

여기는 여전히 먹통임

하지만 /edit-profile로 들어가면 제대로 들어가짐

왜냐하면 commonRoutes를 render 했었음

하지만 아직 restaurant route는 없음

그러니 restaurant route 부분을 작업해봄

첫번째는 path: "/"이고, component는 아직 만들지 않았지만 MyRestaurants라고 적어줌

restaurant routes를 render함

client routes랑 owner routes랑 모두가 공유하는 common route를 작성했음

여기 MyRestaurants는 보다시피 아직 정의되지 않았음

그러니 빨리 만들어봄

우선 pages 디렉토리로 가서 새로운 폴더를 생성함(폴더명: owner)

그 안에 my-restaurants.tsx 파일을 생성함

React부터 import함

한번 가서 봄

logged-in-router.tsx 파일의 코드를 확인함

콘솔도 한번 보고, 에러가 없는지도 확인해봄

client category에 있는 것들을 하나도 사용하지 않았다는 경고문만 뜸

사용되지 않은 variables에 대한 내용들임

이정도는 괜찮음

사용되지 않은 변수들은 아직 신경 쓸 필요없음

restaurant routes를 만들었음

이제는 복붙이나 key 수정 같은 과정이 불필요한, 더 괜찮은 방법으로 route를 만들 수 있게 됐음

그런데 더 멋지게 할 수도 있음

renderer를 만들거나 다른 방법도 가능함

하지만 문제는 이 Switch 부분임

Switch의 자식들은 route여야만함

다른 component를 사용할 수는 없음

하지만 이대로 충분히 좋음

다음 시간에 봄

보면 알겠지만 이것은 my-restaurants라고 되어있음

그러니까 여기는 음식점 주인 입장에서 나의 음식점을 보고 싶을 때 오는 곳임

그런데 우리는 이런 기능을 아직 backend에 구현하지 않았음

backend에 만든 것을 보여줌

아주 짧지만 꼭 필요함

이 부분을 backend에 만들었음

다시 말하지만, 만들어놓고 그동안 까먹고 있었음

하지만 기본적으로 이것은 myRestaurants이고, myRestaurant을 return해주는 기능을 함

이 myRestaurant은 음식점 주인 본인이 소유한 음식점임

이것은 dto를 return해주는 query임

이것은 CoreOutput에서 extend하는 ObjectType임

아무튼 보면 다 이해가 됨

Role은 Owner니까 owner들만 이 resolver를 볼 수 있음

그리고 이것은 restaurantService에 있는 myRestaurants를 호출하고, myRestaurants는 이렇게 생겼음

myRestaurant는 인자로 owner를 받고, 이 owner를 가진 모든 음식점들을 찾음

그리고 해당 음식점들을 모두 return 해줌

그리고 다시 말하지만 이것은 한명의 owner가 복수의 음식점을 소유할 수 있도록 기획했기 때문에 일어난 일임

만약 하나의 계정당 하나의 음식점만 등록 가능하도록 만든다면 이런 것은 필요 없음

이런 query를 만들었으니까 backend 부분도 업데이트해줌

코드가 4~5줄 밖에 안되니까 쓰는데 그렇게 시간이 오래 걸리지도 않음

그저 해당 유저(Owner)의 음식점을 찾아주는 작업일뿐임

원한다면 me resolver를 사용하는 것도 가능함

왜냐하면 me에 음식점들이 있음

이것들이 내가 소유하는 음식점들임

이것을 사용할 수도 있음

하지만 이 경우 entities 폴더의 user.entity.ts에 들어가서 user를 받을 때마다 음식점들도 함께 받아지도록 restaurants eager를 만들어야함

하지만 이것은 별로라고 생각함

왜냐하면 이렇게 하면 매번 user를 받게 됨

use me라는 hook이 있음

아무튼 그것도 하나의 방법임 

이 relationship을 eager로 만들 수 있지만, database 입장에서 별로임

그냥 이렇게 restaurant.service랑 restaurants.resolvers를 만듦

## 20.1 Create Restaurant part One

이번 시간에는 MyRestaurants를 받았는데 음식점 정보가 없는 경우, 음식점을 업로드할 수 있는 create restaurant 스크린으로 이동하도록 만들어봄

그리고 이미지도 업로드해봄

왜냐하면 음식점들은 원래 cover image가 다들 있음

그러니 파일을 업로드하는 방법을 배워봄

이것은 backend 관련 내용이기는 함

그런데 막상 이것을 backend에 구현해보면 좀 이상함

이미지 업로드에는 이것이 더 좋은 거 같음

물론 backend도 건들기는 함

그런데 기본적으로 frontend에 있을 때 구현하는 것이 더 좋은 거 같음

평소대로 해봄

미리 말해두는데 앞으로 같은 내용들을 무한반복하게 됨

왜냐하면 새로운 것을 그다지 배우지 않음

이미 query 생성 방법도 알고, apollo에서 무엇인가를 가져올 줄도 알고, typescript도 사용할 줄 앎

그래서 이미 배운 것들은 그만 설명할 거고, 디자인이나 component 작업 과정 같은 것들은 카메라를 꺼놓고 미리 해놓음

왜냐하면 그 과정은 보여줘 봤자 지루하기만 하고 배워갈게 없음

새로운 내용들은 전부 다 설명함

하지만 query 생성 같은 것들은 전부 생략함

그래도 마지막으로 이 query만 같이 만들어봄

왜냐하면 이것은 이 직전의 강의에서 막 만듦

const MY_RESTAURANTS_QUERY = gql한 다음, query myRestaurants의 인자는 받지 않음

이미 아름다운 fragment를 하나 만들어놨으니 사용해봄

이름을 잊었으면 이렇게 열어서 확인해봄(ctrl+클릭)

터미널에 npm run apollo:codegen을 입력함

이 query를 사용함

useQuery에 먼저 타입을 적고 (MY_RESTAURANTS_QUERY)를 쓰고, console.log(data)를 해봄

엄청 좋음

여기로 와보면(우클릭, 검사, Console탭) data가 여기에 보임

이 부분은 카메라를 끄고 아름답게 만듦

여기서는 이렇게 조건을 넣어서 확인함

이 경우에는 "음식점이 없음. 하나 생성하세요!"라고 출력되도록 함

어떻게 보이나 볼까

"음식점이 없음. 하나 생성하세요!" 물론 이것보다는 더 예쁘게 꾸밈

카메라 꺼놓고 작업함

그런데 먼저 Helmet을 사용하는 것을 잊지마

물론 필수는 아니지만 좋음

그리고 react-helmet-async에서 Helmet class를 import 해와야함

매우 중요함

title은 My Restaurants | Nuber Eats임

브라우저 탭을 확인함

카메라를 좀 멈추고, 이것을 좀 예쁘게 만들고 다시 돌아옴

이렇게 만들었음

My Restaurants라는 title이 있고, You have no restaurants라는 것도 있고 /add-restaurant로 가는 링크가 있음

그렇지만 이것을 누르면 not found로 감

not found로 가야하는데 왜 안되지

exact라고 안 해놨기 때문임

그러니 exact라고 여기에 적어서 render되도록 함

여기 My Restaurants로 와서, 이것을 누르면 not found로 가게 됨

owner에 add-restaurant.tsx를 생성함

그리고 여기 router로 와서 restaurantRoutes 안에 route를 하나 더 추가함

path는 "/add-restaurant"고, component는 AddRestaurant임

한번 봄

Add Restaurant라고 나옴

이 class를 계속 복붙하는게 슬슬 지겨운데 이 class를 bake함

여기 tailwind로 와서 이 class를 bake함

container라고 부르도록 함

그리고 link라는 것도 만듦

이것도 apply함

link도 저 class를 계속 복붙했음

이러면 bake 할 수 있게 됨

class 좀 bake한다고 서버 전체를 다시 시작하지는 않음

터미널에 npm run tailwind:build를 입력함

이것은 계속 돌아가도록 내버려둠

지금부터는 query를 작업함

보면 알겠지만 query를 다 만들기 전에는 component는 전혀 사용하지 않음

나는 query를 먼저 전부 준비해서 전체적인 그림을 파악하는 방식을 선호함

그런데 사실 이것은 query가 아니라 gql임

그리고 여기에 넣을 input의 이름은 documentation에서 찾아봄

이것은 그대로 복사함

그리고 무엇을 받지

error와 ok를 받음

전부 다 bake 되었음

이제 이 녀석들의 typescript 의미를 받을 수 있도록, codegen을 실행함

typescript 덕분에 생산적임

이것은 mutation을 줄테고 useMutation함

엄청 생산적임

무엇을 받게 하지

createRestaurantMutation을 받게 함

그리고 loading과 error를 받게 함

error는 없을 거 같음

data를 받음

왜냐하면 error는 항상 form에서 보여줌

안에 어떤 게 들어가는지 CreatorRestaurantInput을 한번 봄

name, address, categoryName가 있음

coverImg는 나중에 얘기함

일반적인 form을 만듦

먼저 form을 instantiate시켜야함

hook form을 사용함

interface IFormProps에 name, address, 그리고 categoryName이 들어가야함

여기에서는 useForm이 제공하는 모든 도구들을 가져옴

form을 만듦

하나를 까먹었음

submit할 때 어떻게 되는지 기억나

handleSubmit을 추가함

onSubmit이라는 함수를 만듦

그리고 getValues를 콘솔에 찍어봄

다시 말하지만 이것은 전부 다 본 적 있는 것들이니까 일부러 빨리 작업함

input 3개를 생성해야함

input 세 개를 만듦

아니면 이렇게 required message를 사용할 수도 있음

세가지 각각이 required하다고 적음

마지막은 Category Name임

name이 있고, placeholder가 있음

placeholder에 각각 Name, Address, Category Name을 채워주고, name도 적절히 적어줌

그리고 input들의 name은 IFormProps의 이름들과 같아야한다는 것을 기억해야함

type="text"라고 추가함

baked class 중 input으로 마무리함

버튼을 하나 만듦

className을 btn으로 줌 

그런데 사실 이것은 필요가 없음

이미 button component를 만들었음

그것을 사용함

이것은 mutation동안의 loading을 의미함

한번 흐름을 타게 되면 얼마나 생산적인지 보임

mutation을 만들고, form을 만듦

제대로 돌아가는 것 같음

한번 봄

나중에 좀 고침

react-helmet-async로부터의 Helmet도 잊지 마

그래도 끝났음

기능은 전부 구현됐음

버튼을 보면 전부 다 있음

기능은 전부 다 끝났음

다음 시간에는 이미지 업로드로 들어가봄

## 20.4 Create Restaurant part Two

backend에서 업로드된 이미지의 url을 돌려주게 되었음

사용자에게 이미지를 받아봄

div를 만들어서, input을 넣음

type은 "file"임

name="file"이라고 해야함

그리고 이것은 react hook 형식으로 register함

여기는 required=true라고 적음

이렇게 react hook을 사용하면 아주 간단하게 파일 업로드 기능을 만들 수 있음

이벤트 설정 같은 것도 전혀 필요 없음

새로고침 해봄

파일을 하나 선택함

Create Restaurant를 누르면 됐음

이것이 우리가 받게 될 데이터임

콘솔에 출력된 내용을 읽음

이 파일을 우리의 back-end로 업로드할 수 있게 됐음

여기에 file을 추가함

여기 보이는 대로 type이 FileList임

그래서 지금 IFormProps에 파일을 추가하고 있음

이러면 된 것임

지금부터는 이미지를 업로드하면 됨

그런데 이미 이미지가 있음

그래서 이미지를 어떻게 업로드하지

아주 간단하게 POST를 함

여기 이 API로 보냄

다 됐음

그래서 좀 지저분하게 fetch를 함

하지만 다음으로 utility function을 만듦

여기에 async라고 씀

const request = fetch()함

file을 가져옴

그런데 우리는 실제 파일(actualFile)을 원함

그래서 file(0)이라고 적어야함

왜냐하면 file은 사실 list임

그 안에 여러 개의 file이 존재함

그리고 이미지 유형의 모든 확장자 파일을 받도록 함

http://localhost:4000/uploads/에 실제 파일이 오게 됨

body가 필요하니까 여기에 body를 생성함

이름은 "file"이어야함

그리고 value는 actualFile이어야함

이 부분을 await로 함

여기를 전부 다 잘라냄(ctrl+x)

괄호 내부의 fetch를 다시 await하고, json으로 받음

그러니까 이중으로 await함

코드 몇 줄 덜 쓰려는 것임

여기서 console.log(request)함

그러면 여기는 url이 됨

여기의 모든 것을 try 안에 넣고 catch(e)라고 함

그러면 됐음

이제 되는지 시도해봄

웹사이트로 와서 에러가 있나 봄

이 에러는 policy 때문임

localhost:4000이 외부에서 오는 그 어떤 request도 받아주지 않음

보다시피 localhost:3000이 request를 보냈는데 받아주지 않았음

이것은 아주 쉽게 해결할 수 있음

우선 main.ts에 가서 app.enableCors()하면 됨

아주 쉬움

그래서 여기를 봄

전부 문제 없음

잘 돌아감

request에서 url을 받을 수 있음

url을 받음

여기에 우리는 URL이 있음

그 말은 즉, createRestaurantMutation을 사용할 수 있게 됨

input은 getValues에서 받아야함

그러니까 다시 여기에 돌아와서 name, categoryName, address 그리고 coverImg:url 아니면 url을 coverImg로 다시 명명할 수도 있음

이러면 됐음

createRestaurantMutation이 완성됐음

이제 loading 중인 Button에게 알려줘야함

그런데 여기에 보면, 우리가 submit을 누르면 먼저 파일을 업로드하고, url도 받아야함

그러니 그 작업도 끝날 때까지 기다려야함

이것을 위해 state를 하나 만듦

uploading, setUploading이라고 하고 useState(false)함

그러니 업로드가 시작되면 setUploading(true)가 되고, 업로드가 끝나면 setUploading(false)가 되고, 이것이 실행됨

이렇게 할까

아예 onCompleted function(을 만들어서 그 안)에 넣음

그러니 처음에 업로드 중일 때 loading=(uploading)이 되도록 수정함

왜냐하면 loading은 mutation으로부터만 오는 거니까 onCompleted를 만듦

이것은 data: createRestaurant를 줌

if(ok)라면, 여기에 setUploading(false)를 넣음

새로운 것은 없음

다 우리가 전에 해본 것들임

createRestaurantMutation으로 가서 onCompleted라고 function을 씀

그런데 여기로 옮겨야함

이러면 다 된 것임

음식점을 업로드하기 시작하면, setUploading(false)가 됨

즉, 버튼은 이미지 업로드를 시작한 순간부터 mutation이 끝날 때까지 로딩 중이라고 표시됨

늘 이렇게 할 필요는 없음

다시 말하지만 mutation의 로딩 부분이 여기에 있고, 그렇지만 다른 작업들도 일어나고 있으니까 이것은 쓰지 않음

여기에 data도 있고, 그러니 error를 만들어봄

만약 error가 발생한 경우를 위해 어떻게 하면 되는지 알고 있지

물론 로그인, 계정 생성 페이지에서 한 것처럼 이쪽에도 error를 설정할 수 있음

마지막으로 한번만 시험해봄

새로고침하고 사진도 준비되어있음

음식점을 생성함

물론 이 input을 더 예쁘게 만들 수도 있겠지

공백을 넣을 수도 있고, 하지만 이대로도 충분히 좋음

Create Restaurant를 눌러봄

개발자 도구의 Network를 열어놓음

로딩 중이라고 나옴

곧 사진이 업로드될 거고, mutation이 만들어질거고 된 거 같음

엄청 빨리 됐음

그러니 여기 My Restaurants로 가면 내 음식점을 볼 수 있음

보다시피 "레스토랑이 없음" 이란 문구가 뜨지 않음

그냥 아무것도 보이지 않음

왜냐하면 이 경우에 무엇을 보여줄지 아직 설정하지 않았음

하지만 내 음식점이 등록됐다는 것은 알 수 있음

개발자 도구를 보면 자막에 가려지려나

이렇게 하면 보이려나

개발자 도구의 내용을 읽음

다 준비됐음

일단 이 음식점은 삭제함 

왜냐하면 redirect해서 사용자에게 더 좋은 것을 보여주고 싶음

## 20.5 Cache Optimization part One

우선 재빠르게 음식점이 보이게 해봄

이미 restaurant component는 만들어놨음

여기서 restaurants의 length가 0이 아닌지, 즉 음식점이 존재하는지 확인함

그러니 여기에 div태그를 만들고, 여기서 restaurants를 render함

이미 여기 restaurants.tsx에 restaurant grid를 만들었음

여기 보면 있음

그래서 이것을 그대로 복붙함

그리고 이미 말했듯이 restaurant grid component를 따로 만드는 것이 더 좋을 거 같음

엄청 유용할테니까, 여기에 붙여넣기함

import 수정도 함

Restaurant 컴포넌트가 있음

여기는 restaurants 대신에 data?.myRestaurants.restaurants함

그리고 results는 뺌

여기에 오면 보임

이것이 내 음식점임

이것을 클릭하면 restaurants/8로 이동하게 됨

이것은 말이 됨

왜냐하면 만약 우리가 고객이었고 이 component를 클릭했다면 id를 통해 이 음식점을 보고 싶음

그런데 아직 owner router쪽에 이 route를 만들지 않았음

이 route는 owner router쪽에 존재하지 않음

그렇지만 괜찮음

이 restaurants/8 부분에 우리는 다른 component를 만듦

my-restaurants라고 나오도록 함

왜냐하면 여기를 눌렀을때 음식점 페이지가 아니라 restaurant dashboard(관리자 페이지)로 갔으면 함

메뉴를 추가할 수 있는 버튼이라거나, 나중에 만들 수익 그래프를 보여줌

음식점이 (일정 비용을 내고) 홍보 혜택을 받는 Buy promotion이라는 버튼을 보여줌

아무튼 다양한 것을 좀 보여주도록 함

그래도 지금 이것도 충분함

이 음식점을 삭제함

그냥 모든 음식점을 삭제함

그냥 하나만 지움

우리는 더 개선된 Create Restaurant의 로직 흐름을 만들어야함

여기 이 과정을 봄

여기가 끝난 직후인가

끝난 이후에 아무 것도 없음

우리는 선택해야함

어떻게 할지를 정해야함

지금 보여줄 것은 같은 API를 두번 건드리는 것을 회피하는 방법임

왜냐하면 이것 때문임

여기 My Restaurants를 보면, 내가 음식점이 없다는 것은 이미 cache에 존재함

만약 음식점을 생성하면 업로드를 하고, 그 외에는 아무것도 하지 않음

음식점은 이제 서버에 존재함

그렇지만 페이지를 되돌아가면 cache는 여전히 나한테 음식점이 없는 줄 앎

이것을 해결하는 방법 중 하나는, refetch queries라는 property를 사용하는 것임

refetch queries는 말 그대로 query를 다시 fetch 해주는 기능임

그래서 이 경우에는 query를 refetch하고, refetch하고 싶은 query를 export 해줘야함

그러니 MY_RESTAURANTS_QUERY를 export함

MY_RESTAURANTS_QUERY를 import함

다시 음식점을 생성해보고 어떻게 되나 봄

물론 지금 새로고침을 하면 보임

여기를 다시 삭제하면 cache는 음식점이 없다고 나옴

다시 새로운 음식점을 만듦

하지만 이번에는 query가 refetch됨

그리고 refetch 작업은 mutation 작업이 성공적으로 끝나면 자동으로 일어남

이러면 모든 음식점들을 가져오게 됨

이전 페이지로 돌아갔더니 바로 보임

그러니까 제대로 먹힘

보면 곧바로 일어난 것처럼 보이지

음식점을 생성하고, 즉시 되돌아갔더니 바로 보임

물론 이것은 사전에 My Restaurants 페이지에 방문했을 때만 일어나는 일임

만약 처음부터 Create Restaurant 페이지로 가고, 그 다음에 My Restaurants로 왔으면 My Restaurants에는 cache가 없음

하지만 이것은 적절히 수정할 수 있는 거니까 괜찮음

그런데 이러면 API를 건들게 됨

그리고 만약 음식점을 많이 소유한 경우에는 어떨까

만약에 그 경우에는 어떨까

이 문제 때문에 backend를 조금만 손봐야함

왜냐하면 나는 backend로부터 mutation 결과만 받고 싶음

그냥 새롭게 생성된 음식점들의 ID만 받고 싶음

왜냐하면 refetch query를 건드는 일 없이 전체 음식점을 통째로 fake하는 방법을 보여줌

API를 건들지 않음

cache와 직접적으로 상호작용하는 방법을 초반에 말했음

refetch query를 호출할 필요는 없음

이 과정 때문에 강의가 좀 길어지겠지만, 오히려 좋음

왜냐하면 application이 훨씬 더 최적화됨

refetch query를 호출할 필요없이 Restaurant 생성 그 자체를 fake함

이미 restaurant를 fake하는데 필요한 것들은 전부 다 있음

categoryName, address, 음식점의 이름(name), 보여줄 이미지(file)는 다 있음

여기에 모든 것이 다 있음

restaurant을 fake하는데 필요한 것들은 전부 다 있음

하나 더 필요한 것이 있는데, 음식점을 클릭했을때 /restaurants/10으로 이동하도록 음식점의 id도 필요함

이 link를 속이기 위해서임

backend로 가서 restaurant을 조금만 수정함(nuber-eats-backend)

create-restaurant.dto.ts에서 create restaurant 과정을 조금만 수정함

restaurantId: number라고 추가함

방금 말했듯이 이것을 하는 이유는 음식점의 ID가 필요해서임

dto를 업데이트 했으니까 restaurants.service.ts도 업데이트함

createRestaurant을 찾음

restaurantId: newRestaurant.id함

이것만 하면 됨

nest.js가 얼마나 좋은지 알겠지

이렇게 아름다운 구조를 간단하게 만들 수 있음

mutation을 거치면 restaurantId를 반환받게 됨

이것으로 frontend에서 모든 것을 속일 수 있게 됐음

여기 createRestaurant에서 error, ok 다음에 restaurantId를 추가함

이것이 바로 새로 만든 음식점을 속이려면, frontend를 최적화시키고 싶다면 해야할 작업임

이것을 한 이유는 fake하는 방법을 알려주고 싶어서임

터미널에서 npm run apollo:codegen을 다시 실행함

왜냐하면 restaurantId가 추가되었음

restaurantId를 포함해서 모든 것을 다 generate 했음

이제 createRestaurant에는 restaurant ID를 추가함

그리고 기존의 코드를 망가뜨리는 일 없이 새로운 기능을 추가할 수 있다는 점에서 typescript가 얼마나 멋진지 다시 알 수 있음

이제 restaurantId가 있음

Apollo client로 가봄

공식 문서로 감

caching으로 가서 무엇을 사용할지를 확인해봄

readQuery, readFragment, writeFragment 모두 사용할 수 있음

이 녀석들을 많이 사용함

이것들을 왜 사용할지는 금방 알려줌

그런데 일단 이 음식점 좀 삭제함

웹페이지를 새로고침하면, 처음으로 할 일은 사용자가 My Restaurants에 있는지 확인하는 것임

그리고 여기서 cache를 보고 있어야함

보다시피 myRestaurants라는 query가 이미 준비됐음

이제 하고 싶은 것은, cache로부터 이 query를 읽도록 해야함

단순히 음식점을 fake한다고 끝이 아님

실제로 음식점을 이 restaurants에 집어넣어야함

그러면 모든 것이 동작함

음식점을 만들기만 하는게 아니라, 실제로 여기에 음식점 정보를 넣음

그러니 우선 cache로부터 현재의 myRestaurants 정보를 가져와야함

왜냐하면 사용자에게 이미 음식점이 있을 수 있음

새로 생성한 음식점 하나만을 넣을게 아니라, 이미 생성한 음식점들이 cache에 있다면 그대로 둬야함

이것이 어떻게 돌아가는지 보여주기 위해, 이 모든 것은 my-restaurants.tsx에서 작업함

useEffect를 사용하고, cache를 어떻게 변경하는지 보여주고 싶으니까 MyRestaurants에서 작업함

버튼은 나중에 만듦

일단은 hook을 사용해서 client를 씀

다시 말하지만, 실시간으로 어떻게 돌아가는지 보여주고 싶으니까 My Restaurants 스크린에서 테스트 해봄

그리고 전부 완성되면 AddRestaurants의 onCompleted로 옮겨줌

바로 이 부분에서 fake를 함

그런데 useEffect에서 먼저 테스트를 해봄

여기서는 우선 client를 가져와야함

const client = useApolloClient()함

이제 query를 읽어옴

queryResult를 가져옴

그리고 여기서는 MY_RESTAURANTS_QUERY를 읽음

여기 이 줄에서는 cache의 현재 state를 읽고 있음

이것은 api로 보내지지 않음

이것은 cache로 감

queryResult를 콘솔에 찍어봄

console을 보면, cache에 뭐가 있는지 볼 수 있음

이것은 API에 있지 않음

이것은 cache에 있음

여기까지가 1단계임

2단계는 query를 write하고 싶음

즉 이 query에 무엇인가를 추가하고 싶음

이것은 writeQuery를 사용하면 됨

이 사이트의 예시에서는 todo를 활용하고 있음

우선 todos가 포함된 query가 있음

먼저 이 query를 읽고, todo를 생성하고, 그 다음에 query를 작성함

똑같은 query를 일단 그대로 적어야함

그리고 data가 맞아야함

그래서 우리도 client.writeQuery()를 해줌

그리고 이 query에 새로운 data를 보내야함

포인트는 query를 대체할 때, 이전 형식에 맞게 대체해야 한다는 점임

Apollo탭으로 가봄

여기에 적힌 것은 queryResult로부터 받는 내용임

한번만 확인해봄

이것을 console.log 해봄

그러니까 이전 정보를 대체해야함

query의 구조 자체를 변형시키면 안 됨

사실상 완전히 동일한 데이터를 보내야함

data에 queryResult라고 적음

이것은 cache에 있던 data를 그대로 보낸다는 뜻임

하지만 이 경우 restaurants를 대체해야 하니까, 콤마를 찍고, restaurants라고 적음

이처럼 query를 이전 형식처럼 다시 넣어야 한다는 점이 굉장히 중요함

만약 이렇게 queryResult를 삭제한다면, query가 완전히 바뀌게 됨

restaurants만 들어있는 query를 보내게 됨

원래 있던 query를 무조건 다시 넣어야함

아주 중요함

이렇게 하면 무조건 실패함

왜냐하면 queryResult에 myRestaurants가 있는데, myRestaurants에 restaurants: Array가 있음

그러니 이것을 좀 수정해야 하고, 음식점을 fake 해야함

## 20.6 Cache Optimization part Two

우리가 할 작업은 queryResult를 가져다가 그 내부의 myRestaurants를 받는 것임(...queryResult.myRestaurants)

그래서 이 myRestaurants를 여기에 적음

그리고 restaurants도 안으로 옮겨서 array를 하나 만듦

이러면 myRestaurants를 반환하고, 그 안에는 기존의 myRestaurants와 새로운 restaurants array가 있게 됨

cache의 기존 정보에 부합됨

이 내용은 즉시 실행되지 않도록 전부 setTimeout 내부에 넣음

그리고 이것은 페이지가 로딩되고 8초 후에 실행되도록 함

저장하고 새로고침 해봄

8초 뒤, 에러 없이 제대로 돌아가는지 한번 기다려봄

제대로 동작함

음식점 몇 개를 만들어냈음

사진도 안 보이고 마우스를 가져다 대면 링크가 localhost:3000/restaurants/undefined라고 뜸

Apollo 탭으로 가보면, cache에 들어가서 봄

내가 생성한 음식점들임

음식점 6개 맞지

제대로 돌아가지

우리는 cache를 읽어내서 cache를 업데이트하고 있음

이론적으로 우리가 해야 할 일은 이것임

우선 restaurants를 가지고, restaurants를 완전히 대체하는게 아니라, 새로운 restaurant을 하나 더 만듦

이 restaurant의 name은 fake guy라고 함

좀 긴 코드임

/undefined는 지움

좀 긴 코드임

여기 내용이 변하는지 확인함

형태가 좀 달라서 받아들여지지 않는 것 같지만, 돌아가기는 함

긴 코드고 지저분하지만, 이전의 데이터를 반환해야 한다는 것을 꼭 염두에 둬야함

데이터를 대체하는 것이 아니라, 기존 데이터에 추가를 해야함

그래도 돌아감

그러니 이것은 onCompleted로 옮김

여기에서 이 부분을 잘라내고, useEffect 부분은 지움

다시 말하지만 테스트 목적이었음

그리고 여기서 writeQuery로 우리가 import한 MY_RESTAURANTS_QUERY를 write함

그리고 여기서는 진짜 restaurant을 만들 수 있음

restaurant은 name이 필요한데 이미 getValues로 name을 앎

그러니 여기에 있는 getValues를 사용함

그러니 name은 이제 name이고, category는 좀 달라야함

restaurant은 형태가 좀 이상함

그러니 무엇을 할거냐면, 이 부분을 잠시 잘라냄

왜냐하면 가짜 restaurant을 사용해서 restaurant의 구체적인 형태를 확인하고 싶음

왜냐하면 완전히 동일한 형태로 fake 해야함

다시 말하지만 이것은 속이기 위해서 필요함

이제 됐고 여기로 되돌아가서, 새로고침 해보면 음식점이 생겼음

그런데 이번에는 MyRestaurants에 console.log를 추가함

우리가 받는 데이터의 형태를 확인하기 위함

그래서 restaurant은 이렇게 생겼음

이것이 우리가 fake 해야하는 형태임

그러니 이것을 그대로 복붙함

여기에 새로운 restaurant을 만듦

또 뭐가 있지

모두 콤마로 연결함

이것이 실제 restaurant임

이것이 cache에서 보여야하는 모습임

우리 form에 있는 것들로 대체함

cover image는 나중에 바꿔야하고, id는 backend에서 가져온 restaurantId를 넣어야함

이 목적으로 이것을 했던 것임

name도 form으로부터 오는 name임

이것은 지울 수 있고, 이제 cover image만 하면 됨

이것을 위해 여기 위쪽에 state를 하나만 더 만듦

imageUrl, setImageUrl이라고 함

이것을 하는 이유는 이미지를 업로드했을때 해당 url을 variables와 공유하고 싶기 때문임

나중에 한번 정리함

이제 imageURL을 저기에 넣음

즉 coverImg에 imageURL을 넣음

보면 사실상 우리는 database에 있는 object의 모양으로 object 하나를 만들고 있음

이건 cache에서 일어나지 않음

이것은 Javascript 관련 내용임

하지만 __typename은 그대로 있어야하고 구조도 동일해야함

string을 저장하는 새로운 state를 만들었음

새로 생성한 restaurant의 fake 버전에서 업로드된 이미지를 사용하기 위해서임

이 코드는 지우고, 음식점도 삭제함

나는 음식점이 없는 상태임

이렇게 My Restaurant 페이지에서 시작하고, restaurant을 추가함

여기의 것들은 문제없이 돌아감

이전 페이지로 돌아가야함

여기 Uber Eats를 클릭하면 방금 생성한 내 restaurant을 볼 수 있으면서, backend에는 아무런 requests도 없음

적어도 graphql에는 아무런 request가 없음

만약 모든 것이 제대로 돌아갔다면, 이 가짜 restaurant이 우리의 cache에 존재하고 있음

보이는대로 API를 건드리지 않고도 이미 저기에 존재하고 있음

fake를 만듦

그래서 보면 API를 건들지 않고도 자동으로 restaurant이 추가됐고 심지어 restaurant ID도 있음

물론 이미지는 건드렸음

이제 fake하는 방법을 알게 됐음

이것은 예를 들어 사용자가 댓글을 남기는 작업을 할 때도 똑같이 활용할 수 있음

얼마나 빠른지 실감할 수 있음

왜냐하면 우리 사이트도 댓글의 id만을 가져가고, 프로필 사진 등을 통해 가짜 댓글을 만들어냄

드디어 해치웠음

그동안 이것을 알려주고 싶었는데 드디어 됐음

사용자를 이전 페이지로 redirect 해줌

query 작성 이후에, history.push()를 써서 home으로 되돌아가도록 함

마지막으로 한번만 해봄

이번에는 실제 restaurant이어야함

왜냐하면 restaurant dashboard를 다뤄야함

새로고침하면 아무것도 없어야함

restaurant이 하나도 없음

이것은 실제 restaurant이 됨

나중에 Google Maps로 진짜 주소를 사용함

이번에는 진짜 이미지를 사용함

이것이 로딩되는동안 말하자면, 업로드하는 이미지 파일의 크기에 제한을 거는 것이 좋은 생각일 거 같음

잘 돌아감

물론 이미지가 좀 커서 로딩 시간이 좀 걸리지만, 그것만 빼면 매우 멋짐

## 20.7 Restaurant Dashboard part One

방금 백엔드에 기존에 없던 resolver를 하나 더 추가했음

myRestaurant이라는 resolver임

restaurants는 전부 나의 음식점들임

그런데 특정 음식점을 클릭했을때 My Restaurant 페이지로 이동하고 싶음

이렇게 하고 싶은 이유는, 음식점 주인의 입장에서는 데이터베이스로부터 더 많은 정보를 가져왔으면 함

만약 오래전에 만들어뒀던 이것(findRestaurantById)을 사용한다면, 이 음식점은 딱히 다양한 정보들을 load해오지 않음

menu만 가져옴

그리고 이것이 우리의 고객이 보게 되는 것이고, 고객은 menu만 보게 됨

하지만 음식점 주인이라면 예를 들어, 음식점에 들어온 주문들도 보고 싶어 할 수 있음

자기 음식점과 관련된 많은 정보들을 알고 싶음

주문도 보고, 선전되고 있는지 등 다양한 정보를 보고 싶음

그래서 myRestaurant이라는 resolver를 새로 만듦

myRestaurant은 일단 음식점을 보여주는 MyRestaurantOutput이 있음

Input과 Output이 무엇인지는 당연히 앎

그리고 MyRestaurantInput은 음식점의 id 정보만 필요로 함

이것이 이 resolver의 모습임

query는 MyRestaurantOutput을 return하고, Role은 "Owner"임

AuthUser로부터 owner를 받고, input을 받고, owner와 id 정보를 통해 음식점 하나를 찾음

이것으로 그 사람이 주인이고, 이것이 음식점의 id인지 알 수 있음

그러므로 음식점의 주인이 자기 음식점을 보고 있는지를 알 수 있음

dto, resolver, service 그리고 nestJS가 최고라서 모든 것을 다 제공해주고 있음

우리가 할 일은 class들을 호출하기만 하면 됨

이제 frontend에 my-restaurant 스크린을 만듦

owner 폴더에 들어가서, my-restaurant.tsx라고 만듦

그동안 form을 엄청 많이 사용했음

edit restaurant 버튼 같은 것을 만들지는 않을건데 원하면 만들어봄

내가 할 것은 메뉴를 업로드하는 form을 만들고, 홍보하기 위해 돈을 내는 버튼을 만듦

다시 말하지만 메뉴를 업로드하는 form을 만듦

왜냐하면 메뉴는 좀 다르니까 어떻게 구현할 수 있는지 보여주고 싶음

하지만 이미지를 업로드하는 것과 사실상 동일한 내용임

그리고 결제를 위한 버튼을 만듦

말했듯이 edit restaurant 버튼 같은 것은 구현하지 않음

왜냐하면 이미 이 강의에서 form은 너무 많이 다뤘음

만들고 싶으면 도전할겸 직접 만들어봄

사람들은 id를 통해 이 페이지에 오게 됨

즉 parameter와 함께 올 거라는 뜻임

parameter는 이렇게 하면 됨

그리고 parameter를 기대하고 있다고 하고, interface IParams를 씀

parameter들을 출력해봄

logged-in-router로 가서 restaurantRoutes에 추가함

path는 매우 유사함

다만 이 경우에는 /restaurants/:id가 되고 component는 MyRestaurant이 됨(단수형)

이제 새로고침 해보면, 실제 음식점을 클릭하면 restaurants/13으로 감

parameters를 보면 parameter를 굉장히 잘 받고 있다는 것을 알 수 있음

이것을 저장하고, 다시 여기 옴

query를 생성하는데 필요한 모든 것이 준비됐음

이것을 어떻게 했었는지 까먹었지만, 여기로 와서 그대로 복사하면 됨

그리고 output은 ok, error, restaurant임

그리고 이미 restaurant이 있으니까, RESTAURANT_FRAGMENT라고 입력함

아직 모두가 사용하는 fragment와 똑같음

하지만 나중에 다른 것들을 여기에 더 추가해 나감

아니면 여기 restaurant 안에 우리의 음식점에 아직 없는 요소들을 추가할 수도 있음

그러니 RestaurantParts라고 추가함

이 query는 일반적인 restaurant과 똑같음

하지만 적어도 현재 사용자가 이 음식점의 소유자인지를 체크할 수는 있음

왜냐하면 그렇다면 이 사람에게 몇가지 버튼을 보여줌

터미널에서 npm run apollo:codegen을 다시 실행함

그리고 그 사이에 query를 만듦

useQuery()를 써서 MY_RESTAURANT_QUERY를 넣음

자동완성 기능이 가끔 제대로 안 먹힘

직접 고침

typescript가 제대로 안 먹히는줄 알았음

가끔 좀 느려짐

내 생각에 앞으로의 강의들에서는 route를 만드는 과정을 좀 생략할 수 있음

routers가 어떻게 동작하는지도 알고, query를 어떻게 작성하는지도 알고, fragment를 어떻게 사용하는지도 앎

그러니 같은 작업을 반복하는 모습은 좀 덜 보여주도록 함

왜냐하면 굳이 그 과정을 볼 필요가 없음

이제 됐음

왜 bad request지

가서 한번 봄

에러 메시지를 확인함

그런데 이렇게 하면 parameters로부터의 id는 string 타입이 됨

우리는 number 타입이 필요함

그러니 +id라고 함

이러면 id가 숫자로 전환됨

console에 출력해보면 myRestaurant이 뜸

그리고 말했듯이 만약 보안을 별로 중시하지 않는다면 이것은 필수는 아님

하지만 난 보안을 중시함

그리고 나중에는 예를 들어, 음식점은 주문이 들어오니까 주문 같은 정보들을 여기에 더 추가할 수 있음

나중에는 주문을 load하게 해서 그래프를 만듦

다음 강의에 들어가기 전에 나는 미리 restaurant의 title을 만들고, 'promotion 구매하기'라고 적혀있는 버튼을 하나 만들고, 음식점이 아직 메뉴를 업로드하지 않은 경우를 위해 '메뉴 업로드'라는 버튼도 여기에 만듦

음식점에 메뉴가 존재한다면 그대로 메뉴를 보여줌

그런데 우선 메뉴를 업로드하는 것에 집중함

## 20.8 Create Dish part One

이것이 현재 모습임

html 작업을 조금만 했음

별것 아님

우리가 이미 만든 배너를 추가했음

만드는 방법은 이미 다 앎

그래서 이 페이지를 새로고침 하면, 아주 잠깐동안 화면에 loading이라고 뜨고, Real One으로 이동하게 됨

그리고 Add Dish와 Buy Promotion이 있는데 이것은 눌러도 어디로도 가지 않음

일단 여기서 멈췄음

왜냐하면 새로운 fragment를 만드는 방법을 보여주고 싶었음

왜냐하면 restaurant에는 menu와 dish가 있음

그리고 이 fragment는 엄청 자주 사용하게 됨

그러니 지금 당장 dish fragment라는 fragment를 만듦

이렇게 dish fragment를 사용하는 이유는 사용자들만이 아니라 음식점 주인들도 요리를 봐야함

그리고 이것은 on Dish가 됨

필요한 것들을 써넣음

restaurant은 필요 없고, options는 넣음

options에는 name, extra, choices를 넣음

그리고 choices에는 name과 extra가 있음

이것이 dish fragment고 앞으로 이 fragment에 다른 것들도 엄청 추가하게 됨

그래서 DishParts를 복사해서 여기 restaurant 내부에 넣음

DishParts를 받게 하고, 그러면 보이듯이 fragment 두개를 합치게 됨

보면 새로운 fragment를 별개로 만들었지

이 fragment를 기존의 restaurant fragment에 추가하지 않았음

왜냐하면 restaurant fragment는 search page에서도 사용됨

그리고 search page에서는 딱히 요리에 관심이 없음

특정 restaurant에 대해 알고 싶을때 요리를 보고 싶어함

그래서 됐음

DishParts가 생겼음

그런데 잊지 말자

요리들에 대한 정보가 들어있는 곳은 menu니까 이렇게 수정함

DISH_FRAGMENT, DishParts on Dish, RestaurantParts on Restaurant 다 만들었음

터미널에서 npm run apollo:codegen을 실행시켜서 돌아가나봄

제대로 동작하는 것 같아 보임

myRestaurant을 보면 myRestaurant은 myRestaurant을 주고, restaurant을 주고, menu를 주고, 그러면 이것들이 다 있음

options를 누르면 여기로 가게 됨

그리고 모든 것이 다 typescript임

엄청 좋음

이제는 backend로 가서, backend는 relations: (대괄호)"menu"를 load하도록 해야함

relations: (대괄호)"menu"를 load 해야함

왜냐하면 현재 restaurant은 relations를 불러오지 않고 있음

그래서 여기 restaurant을 console.log 해보면, 다시 backend에 보이게 됨

다시 말하지만 이것이 backend임

새로고침 해봄

일단 제대로 돌아가는 것 같음

전부 다 있음

menu도 있음

물론 menu가 비어있지만 좋은 일임

이 에러가 대체 무엇인지 모르겠으니까, frontend를 껐다가 다시 시작함

여기까지가 우리들의 여정의 파트1임

이제 data와 menu가 있다는 것을 알 수 있음

그러니 여기로 와서 div를 만듦

만약 length가 0이면 my-restaurants의 "You have no restaurants"와 비슷한 것을 보여줌

여기서는 "Please upload a dish."라고 보여줌

그리고 나중에 여기에 요리들을 넣음

어떻게 보이지

이것을 여기로 옮김

이렇게 restaurant dashboard가 완성됐음

앞으로 다른 것들도 추가해 나감

예를 들어 여기에는 요리들도 보여주고, 앞으로 Victory로 제작할 그래프도 보여주게 됨

나중에 알려줌

충분히 좋음

지금부터는 add dish 페이지를 만듦

owner 폴더 안에 add-dish.tsx를 생성함

내가 무엇을 하는지 다들 아니까 딱히 설명할 필요가 없음

여기서 중요한 것은 router에 가보면, logged-in-router를 보면 route는 /restaurants/:id/add-dish가 됨

왜냐하면 요리를 추가할때, 여기 MUTATIONS의 createDish를 보면 input으로 restaurant id를 필요로 함

그래서 여기에 restaurant ID가 옴

그러니 여기에서 parameter를 필요로 함

const params = useParams()함

참고로 매번 interfaces를 만들 필요는 없음

그냥 여기에 이렇게 해도 됨

이것도 가능함

그런데 나는 이 방식이 더 좋음

하고 싶은대로 하면 됨

요리를 생성할 준비가 거의 됐음

이제 form을 만듦

그런데 먼저 거대한 mutation을 하나 만듦

const CREATE_DISH_MUTATION = gql함

그대로 복붙함

createDish를 한번 더 씀

이제 output을 보면, ok와 error만 넣으면 됨

createDish는 이것을 받고, input이 있고, 내부에 ok와 error가 있음

mutation이라고 적어야함

터미널에서 npm run apollo:codegen을 실행시킴

그러면 됨

이제 mutation을 사용해봄

여기로 와서 mutation을 build함

mutation을 load하고 있을 수 있으니까 loading이라고 적음

useMutation(CREATE_DISH_MUTATION)함

일단 여기까지만 하고, 다음 강의에서 봄

그전에 미리 form을 완성시켜 놓음

왜냐하면 css 작업만 하면 됨

카메라가 꺼졌을때 내가 하는 일들은 전부 예전에 보여줘서 이미 할 줄 아는 것들임

새로운 내용만 카메라에 담음

## 20.9 Create Dish part Two

create dish mutation을 위한 form을 거의 다 만들었음

이 form에서 먼저 요리를 업로드하는 것에만 초점을 맞춤

그 다음에는 옵션을 위한 form을 만듦

왜냐하면 각 요리에는 여러가지 옵션들이 있음

그리고 옵션을 만드는 것은 좀 흥미로움

왜냐하면 다양한 state를 handle함

우선은 아무런 옵션이 적용되지 않은 요리를 생성해봄

왜냐하면 실제로 아무런 옵션도 적용되지 않는 요리도 주문할 수 있음

요리는 name이 필요한데 여기에 있음

price도 필수인데 여기 있음

이것을 price로 바꿈

타입은 number임

이것들은 create restaurant에서 복붙해온 것임

요리는 description도 필요하니까 여기에 적음

restaurantId는 나중에 함

form에는 name, price, description이 있음

이미 useForm을 import했지만 아직 interface는 만들지 않았음

Button은 이미 있으니까 수정함

uploading을 loading으로 수정함

그리고 formState는 hook으로부터 옴

다시 말하지만 새로운 것은 안 하고 있음

이미 다 한 것들임

그냥 제대로 돌아갈지 검토하는 것임

Create Dish로 수정함

이러면 에러가 발생함

왜냐하면 form이 안 닫혔음

어떻게 보이나 한번 봄

아직 이 링크를 만들지 않았음

my-restaurant에 add dish로 가는 링크가 있어야함

이미 useParams에 restaurant의 id가 있음

그러니 곧바로 여기에 와서 이 링크는 Add Dish에 있음

그러니 add-restaurants.tsx에 가서 css를 복붙함

my restaurant이 아니라 add dish임

title만 추가하면 끝임

이름은 바비큐 치킨임

설명란에는 "맛있어요", 가격은 12라고 씀

이러면 요리가 생성됨

그런데 왜 안 되는거지

왜냐하면 mode를 안 넣었음

로그인에서 했던 것처럼 validation을 하려고 하면 어떤 내용이 required인지 즉시 알려줌

그리고 onChange를 해야함

참고로 form의 mode가 onChange가 아니면 formState도 안 먹힘

그러니까 formState는 onChange mode가 필요함

왜냐하면 그렇게 해야 특정 input의 값이 변경될 때마다 실시간으로 form에서 validate 해줌

default 설정대로 submit을 누른 순간에만 해주는게 아님

다시 해봄

제대로 됨

이제 mutation을 호출함

getValues로부터 모두 가져옴

이미 다 해본 것임

다만 mutation을 조금만 수정함

mutation이 호출되면 query를 refetch하도록 함

query를 refetch하는 것이 어떤건지 이제 다 이해함

그리고 MY_RESTAURANT_QUERY를 refetch하도록 함

export도 해줌

getValues로부터 name, price, description을 가져오고, createDishMutation을 호출함

여기에 type을 적지 않아서 typescript의 도움말이 안 뜸

createDish, createDishVariables를 추가함

typescript가 없었으면 실수를 더 많이 했겠지

그리고 restaurantId는 parameters에서 옴

그런데 restaurantId는 숫자여야함

그런데 지금 문자열임

앞에 +를 넣음

이것은 dish mutation을 생성함

무엇을 더 해야하지

전부 다 연결됐고, 문제 없음

마지막으로 해야 할 일은 history를 사용하는 것임

여기에서 useHistory()를 사용함

왜냐하면 mutation이 끝나면 어디인가로 가야함

그러니 여기에 history라고 적음

그리고 우리는 이전에 있던 페이지로 되돌아가고 싶음

그냥 goBack이라고 하면 됨

그냥 이렇게 하면 됨

마지막으로 검토해봄

그리고 price는 숫자가 되도록 했음

이렇게 하면 안 돌아감

왜냐하면 form에는 문자열 밖에 없음

number를 string으로 수정함

price의 type을 문자열에서 숫자로 바꾸도록 해야함

form에 있는 모든 것은 문자열이 됨

음수가 나오지 않았으면 하니까 최소값을 0으로 함

왜냐하면 price가 -10 같이 되면 backend에서 graphQL을 고장낼 수 있음

그리고 restaurantId가 parameters에 존재하는지만 테스트 해봄

이것은 router에 있음

그런데 없음
 
실수를 했음

restaurantId가 아니라 id라고 해야함

어떻게 할거냐면 아예 여기를 수정하는 것이 오히려 더 나을 것 같음

이렇게 하거나, 아니면 여기에 id라고 적고, useParams에서 전부 id라고 수정할 수도 있음

이제는 테스트 준비가 끝났음

여기로 와서 restaurants/13으로 들어갔음

에러가 있을 수 있으니 network를 열어놓음

Add Dish를 누름

잘 보이게 조금만 키움

Create Dish를 클릭함

뭐가 문제일까

"필수로 입력 해야하는 MyRestaurantInput 값이 보내지지 않았습니다"

여기에 문제가 있음

문제가 뭐냐면, 우리는 지금 query를 refetch하고 있음

그런데 MY_RESTAURANT_QUERY는 변수가 필요함

이전에는 음식점들을 싹 다 가져와서 돌아갔던 것임

우리는 myRestaurant을 refetch하려고 한 것인데 얘는 변수가 없음

이게 무슨 의미냐면 MY_RESTAURANT_QUERY를 refetch하려고 했는데, MY_RESTAURANT_QUERY에는 변수가 필요하다는 뜻임

다행히 여기로 그 변수들을 보내면 됨

myRestaurant에서 했던 것과 동일한 변수들을 넣으면 됨

우리가 refetch하려는 음식점의 id와 variables, input을 넣으면 됨

그러니까 우리가 작업한 것이 제대로 돌아가는 거 같음

여기까지 도달한 다음에 에러가 발생했음

그러니 실제로 query를 refetch하려고 시도했음

그리고 이것이 변수들을 사용해서 query를 refetch하는 방법임

이 에러가 발생해서 오히려 좋음

여기로 오면 요리가 업로드 되었음

왜냐하면 여기에 Please upload a dish라는 문구가 없음

보아하니 제대로 돌아간 거 같음

my-restaurant에 뭐 좀 추가함

이미 data가 여기에 있음

myRestaurant이 어떻게 생겼는지 한번 봄

restaurant이 있고, 그 안에 menu가 있고, 그 안에 dish가 있음

이것이 우리가 업로드한 요리임

아직 이 요리에는 옵션이 없는데 걱정하지마

나중에 추가함

그래도 일단 돌아감

요리를 삭제함

왜냐하면 처음부터 모든 것이 제대로 동작하는지 보고 싶음

아무것도 없는 상태에서 요리를 생성함

엄청 빠름

그리고 보이지

엄청 빠르게 query를 refetch함

변수로 query를 refetch하는 방법도 알고, 그것이 싫으면 수작업으로 cache를 수정하는 방법도 알게 됐음

다음 시간에는 좀 복잡해짐

왜냐하면 다음에는 option creator를 만듦

요리에 옵션을 추가하기로 결정한 것이 너무나도 힘들게 함

코드가 너무 길어지고 있음

하지만 괜찮음

option creator를 만들어봄

## 20.10 DishOptions part One

html 작업을 좀 했음

description과 Button 사이에 div를 추가함

그리고 여기에 버튼이 있음

새롭게 추가한 기능은 없음

디자인만 바꿈

아직 counter를 안 만들었으니까 만듦

optionsNumber, setOptionsNumber라고 함

그리고 option 추가 버튼을 누른다면 setOptionsNumber를 1씩 증가시킴

이러면 됐음

이 부분은 option을 몇개나 추가했는지 확인하기 위해 넣음

이 Add Dish Option 밑에다가 div를 넣고 className도 넣음

그리고 여기에는 먼저 optionsNumber가 0이 아닐 때에만 보이도록 함

그리고 여기에는 add dish option을 누를때마다 form을 하나 추가시킴

그러니 form을 생성함

div라고 쓰고, 그런데 form 그 자체를 적을 것은 아님

왜냐하면 여기에 있는 이 form 한개만 원함

dish를 추가해주는 이 form만 가져오면 됨

여기에는 일단 dish option이라고 적어 놓음

클릭하면 dish option이라고 생겨남

이것은 optionsNumber를 토대로 만들어지도록 함

Array.from(new Array())라고 씀

길이가 optionsNumber인 비어있는 array를 생성함

이것은 길이가 optionsNumber인 비어있는 배열을 줌

만약 optionsNumber가 1이면, 이 코드는 슬롯이 1개인 비어있는 array를 줌

그리고 map()을 함

여기는 값을 줘야 하는데 빈 array니까 값이 없음

그 다음은 index가 들어가야 하니까 index를 씀

그리고 이것은 실제 dish option을 return함

Add Dish Option을 클릭할 때마다 dish option을 하나씩 추가함

새로고침하고, 다음 단계는 여기에 input을 하나 추가함

여기에 같은 것을 함

다만 type은 number고 min은 0으로 함

placeholder는 "Option Extra"로 함

클릭하면 이제 옵션명이랑 추가 가격이 나옴

스타일을 조금만 만져봄

Option Name과 Option Extra가 있음

여기에서는 mr-3을 추가함

이러면 됐음

문제는 어떻게 이 녀석들의 value를 알 수 있을까

이것은 좀 어려움

어떻게 이것들의 값을 알 수 있지

한가지 방법은 이것들을 등록하는 것임

여기에 이렇게 register함

이제 내 form은 이 녀석들을 계속 주시함

다만 여기에서 이름을 지정해야함

이 이름은 좀 유니크하게 만들어봄

여기에 있는 index는 숫자임

그러니 dynamic name을 만들 수 있음

그리고 이 녀석은 Name이고, 이것은 Extra가 됨

그러니까 우리는 옵션의 개수에 따라 동적으로 이름을 부여함

createDishMutation을 보면 submit하기 싫어서 주석 처리해놨음

테스트하는 중임

여기에 getValues가 있다면 어떻게 그 외의 value들을 사용할 수 있을까

왜냐하면 여기에서 동적으로 생성되는 이름들이 있음

그래서 여기에서 어떻게 하냐면 rest를 적어줌

그럼 이 rest가 나머지 value들을 줌

rest가 아니라 potato처럼 아무거나 가능함

그런데 난 rest라고 함

rest를 console.log 해보고, 제대로 되는지 봄

새로고침하고 개발자 도구를 엶

Console 탭을 열고 Create Dish를 클릭하면, 0OptionExtra랑 0OptionName이 보임

하나만 더 생성해봄

이제 item들이 동적으로 생성된 것이 보임

좀 더럽게 보임

그러니 이렇게 이름을 바꿈

왜냐하면 그냥 더 좋아 보임

제대로 돌아감

어떻게 보일지 한번 봄

Create Dish를 클릭함

이렇게 나옴

중복된 것은 신경 쓰지 마

새로고침 때문임

동적인 form을 생성할 수 있게 되었음

어떻게 생각해

나는 좋은 거 같음

지금부터는 삭제하기 위한 function을 만들어봄

여기 input들로 와서 option을 삭제할 수 있나 한번 해봄

form 내부에서는 button을 사용할 수 없음

이렇게 roll="button"이라고 한번 해봄

Delete Option이라고 함

내가 보고 싶은 것은 안 됨

버튼을 누를 때마다 submit을 누른 것처럼 돼버림

그러니 span을 씀

이 Delete Option을 클릭할 때마다 옵션이 삭제되는 함수를 여기에 하나 만듦

이름은 onDeleteClick임

이것은 idToDelete를 받을건데 이것은 숫자여야함

이것을 여기에 추가함

그리고 idToDelete는 그 시점의 index 값이어야함

이렇게 하면 안 돌아감

이러면 onDelete 함수를 즉시 실행시키게 됨

그러니 이렇게 해야함

이제는 onDeleteClick으로 와서 option 개수를 감소시켜야함

그런데 그 옵션들은 여전히 rest에 존재함

이것은 무엇을 하냐면, option input을 사라지게 함

그것은 괜찮음

문제는 어떤 input이 사라지는지를 모른다는 점임

이것을 좀 수정해야함

API로 이동함

그리고 만약 원한다면 값을 설정해도 됨(setValue)

setValue는 기본적으로 form 안에서 원하는 값을 설정할 수 있게 해줌

여기에서 value를 설정할 수 있음

마음대로 value를 set 할 수 있다는 것임

그러니 setValue를 쓰기로 하고, 그것을 form에서 가져옴

그러니 여기에서 우리가 삭제하고 싶은 id를 설정함

이 녀석의 이름을 수정해야함

optionName을 붙임

value로는 아무것도 주지 말자

그리고 똑같이 setValue를 하는데, 이것은 optionExtra로 함

아마 typescript는 이것을 안 좋아함

왜냐하면 지금 setValue는 여기로 보내는 값들(name, price, description)만을 인정함

일단은 typescript를 무시함

나중에 수정하면 되니까 잠깐 보류함

우리는 삭제하려는 id에 아무런 value도 설정하지 않음

optionName이랑 optionExtra들이 있음

이제 삭제해봄

그리고 다시 요리를 생성하면 0들(첫번째 옵션)만 나옴

만약에 새로운 옵션을 추가하면 어떻게 될까

다시 요리를 생성함

보면 다 들어있음

그런데 만약 두번째가 아니라 첫번째 옵션을 삭제하면 어떻게 될까

이론상으로는 여기의 0~들은 사라지고, 1~들은 남아있어야함

하지만 그렇게 안됨

문제가 생겼음

이 문제는 다음 수업에서 고쳐봄

다시 말하자면 우리는 지금 form을 생성하려고 하고 있음

그런데 react hook form에서 이런 field들을 만들어낼 수 있다는 점도 알아두면 좋음

동적으로 field를 생성할 수 있음

엄청 좋음

## 20.11 DishOptions part Two

숫자에 따라 array를 생성하는 대신에 addOptionClick을 할때마다, 그러니까 매번 Add Option을 클릭할 때마다 option들은 array가 되도록 함

optionsNumber는 날짜들의 array가 됨

이것은 setOptionsNumber라고 함

현재 배열인 current를 받고, 그리고 여기에서 새로운 array를 return하도록 함

하지만 이번에는 거의 unique한, 아주 간단한 id를 사용함

이렇게 할 수 없음

왜냐하면 보면 current는 type이 never라고 되어있음

이렇게 useState의 type을 number()라고 설정하면 됨

그러면 문제없음

Add Option을 클릭할때마다 날짜들만 들어간 array를 생성하게 됨

optionsNumber.length로 수정함

왜냐하면 array임

index는 불필요함

id라고 함

그러니 index를 전부 id로 바꿈

날짜에 따라 생성됨

물론 엄청나게 random하거나 완전히 unique한 것은 아님

만약 원하면 uuid를 생성한다거나 할 수도 있음

setOptionsNumber에서 삭제하고 싶을때, 이렇게 삭제하지 않고, filter를 return하는 방식으로 삭제함

그래서 current.filter()를 씀

여기를 보면 알겠지만 filter 메서드는 array에서 조건을 충족하는 element를 return해줌

id는 삭제하려는 id와 달라야 한다는 것이 조건임

이렇게 current 배열, 즉 optionsNumber에서 우리가 삭제하고 싶은 id를 지우고 있음

그리고 이 typescript 문제도 해결할 수 있음

지금 불만인 것은 setValue가 name, price, description만을 받도록 되어있어서임

왜냐하면 IForm에 적힌 내용이 그것들임

그러니 여기에 다른 값들을 얼마든지 추가로 받을 수 있게 해주면 됨

이렇게 하면 typescript가 조용해짐

마지막으로 한번 테스트해봄

value들을 봄

모든 것이 다 여기에 있음

(현재시각을 써서) 거의 랜덤하게 생성된 id도 있고, name도 있음

만약 중간에 있는 option을 지우면 어떻게 될까

optionName ffffff를 지우려는 것임

다시 Create Dish를 누르면 저기에서 없어졌음

옵션을 몇개 더 추가해봄

어떻게 뜨나 봄

이제 optionName: mmmmmm을 지움

그래서 이 mmmmmm과 666666은 지워짐

그 외의 옵션들은 그대로 유지됨

지우고 Create Dish를 함

뭐라고 뜨는지 봄

m~은 없지만 그 외의 것들은 그대로인 것 보이지

이렇게 react의 마법과 array를 좀 사용하면 이런 것을 만들어낼 수 있음

그리고 이름을 동적으로 생성할 수 있다는 점이 좋은 것 같음

이러면 register만 좀 하면 form이 무엇이든지 지니고 있을 수 있게 됨

그러면 validation 같은 것들도 얼마든지 할 수 있게 됨

이제 optionName을 required로 만듦

그런데 이 경우에는 별로 의미가 없음

왜냐하면 option 자체도 딱히 required가 아님

그러니 이렇게 register라고만 함

이제는 이 모든 field들을 처리해야함

이것들을 전부 다 여기에서 처리하게 됨

일단 rest가 있음

지금부터는 object를 만들어내야함

기억날지는 모르지만 Dish Option들은 name과 extra를 지님

그러니 이런 방식으로 object를 만들 수 있음

굉장히 중요함

optionsNumber는 그저 여러 id들의 배열에 불과함

그러니 여기에서 optionsNumber.map()이라고 적고, 이것은 id가 될테니까 theId라고 하고, 지금 할 일은 id를 찾아오는 것임

그러니 이렇게 써볼 수 있음

rest라는 name을 지니는 object를 return하라고 함

그리고 name은 optionName이 됨

그리고 extra도 똑같이 써줌

다만 optionExtra라고 해줌

이번에는 이것을 optionsObject라고 하고 출력해봄

맵기 옵션을 추가하고, extra는 비워둠

피클을 넣어봄

12개를 추가함

요리를 생성해 보면 array가 나옴

자바스크립트는 너무 좋음

우리가 원했던 그대로임

이것을 options에 추가할 준비가 끝났음

그러니 이것을 options에 넣어보고, typescript가 불만일지 확인해봄

다행하게도 모든 type definition들이 있음

그리고 optionObjects라고 하면 에러가 뜸

여기 보면 optionObjects는 문자열인 name과 extra의 array임

그런데 이 녀석은 extra가 숫자여야 한다고 말하고 있음

이것은 괜찮음

앞에 +를 붙이면 됨

그랬더니 typescript도 괜찮다고 함

typescript가 통과시켰음

이렇게 내버려두고, 내 delete 버튼을 수정함

한번 봄

그러니 Add Dish Option에서 만들었던 것을 복사해서 delete 부분에 붙여넣음

bg-red-500으로 하면 아름다움

이뻐 보였으면 하니까 input들만큼 크게 만듦

그런데 여전히 input들만큼 크지는 않음

훨씬 더 좋아보임

다 됐음

form에서 동적으로 item을 생성했고, typescript에서 escape하는 방법도 써봤고, 이제 다 됐음

제대로 한번 가봄

이제 옵션을 지닌 요리를 하나 생성함

Pickle 옵션은 extra 12라고 하고, 다른 옵션은 spicy에 option extra는 없게 함

어떤 일이 일어날까

내 생각에는 아마 여기 option error가 공백이라서 에러가 발생할 것 같음

0이거나 아무 것도 아니어야함

어떻게 될지 모르겠음

이런 식으로 하면 어떻게 되나 한번 봄

0이 됨

왜냐하면 extra에 아무 것도 안 들어갈 때도 있음

만약 +하고 빈 문자열을 넣으면 0이 됨

이것은 spicy 옵션이 사실상 0이라는 extra를 내재하고 있다는 뜻이 됨

그래도 좀 더 안전하도록 여기서 defaultValue=(0)이라고 할 수 있음

이것도 하나의 방법임

register에서는 defaultValue가 안 됨

react hook form을 사용할 때는 hook에서 default 값을 선언해 줘야함

Create Dish를 눌러봄

만약 전부 제대로 동작한다면, 우리 음식점 페이지로 되돌아가게 됨

한방에 됐음

새로고침 해보면 제대로 됨

바로 이것이 typescript가 대단하다는 이유임

만약 typescript를 쓰고 있지 않았다면 에러가 떴음

분명 에러가 좀 떴음

옵션이 붙은 요리를 생성하고 있음

그리고 이 디자인도 마음에 듬

보이듯이 여기에 한 가지가 남아있음 

바로 choices임

choice는 name과 extra를 가짐

이것은 여러분이 도전해봄

알겠지만 fake id랑 코드만으로 이것을 만들었음

마찬가지로 choice의 fake id를 만들면 됨

그래서 기본적으로 id는 아래의 이 optionName과 같음

이런 식임

아무튼 해보고 싶으면 스스로 할 수 있음

보기도 괜찮고 제대로 돌아감

우리는 옵션이 붙은 요리를 생성할 수 있고, 그 옵션들은 backend까지 전달됨

그리고 보다시피 구조도 맞고 모든 것이 맞음

다음 시간에는 아직 없는 dish component를 만들어봄

## 20.12 Dish Component

이제 요리가 생성됐음

지금부터는 dish component를 만듦

여기 보면 카테고리도 좀 있음

만약 이렇게 요리 카테고리도 다뤄보고 싶다면, 이런 방식으로 하지 않는 것을 권함

그 대신 dish category를 생성하기 위해 form을 만들고, dish category를 수정하기 위한 form도 하나 더 만들고 form들을 엄청 만들어야함

그래서 우리는 카테고리는 만들지 않음

그리고 요리를 업로드할 때 사진도 추가하지 않았음

사진을 추가한다는 것을 까먹었음

요리도 사진이 있음

그러니 원한다면 어떻게 하는지 이미 알지

음식점 사진을 올리는 과정과 완전히 동일함

backend에 이미지를 업로드하면 됨

이제 dish component를 만듦

그러고 나면 promotion 구매 부분을 시작할 수 있음

결제 기능을 보여주고 싶음

여기에 dish component를 만듦

dish.tsx라고 함

interface IDishProps도 있어야함

그리고 요리는 이름을 가지겠지

Console로 가서 검사해봄

my-restaurant으로 가서 data를 출력해봄

이 에러는 무시해도 됨

myRestaurant은 menu, description, name, price를 가짐

price는 숫자임

Dish의 type은 React Functional Component임

그리고 안에 description, name, price가 있음

이 Dish를 my-restaurant에서 사용함

여기에 myRestaurant의 grid와 매우 유사한 column 3개짜리 grid를 하나 더 만듦

이것이 마음에 드니까 계속 사용함

이 grid에서는 다음을 render함

그리고 type 덕분에 여기에 Dish라고 써야한다는 것을 알 수 있음

그리고 Dish는 name이 필요함

description도 필요하고 price도 필요함

typescript가 정말 좋음

Dish는 끝났음

이러면 됨

크기를 실감할 수 있도록 배경색만 좀 바꿔봄

나쁘지 않음

이제 위아래에 padding을 추가해봄

실물은 어떤지 한번 봄

실제로는 더 작음

실물도 안에 padding이 있음

5정도 될 거 같음

그것은 나중에 하고 description, title, price만 하면 됨

그리고 price는 여기 아래에 와야함

그러니 price는 container에 넣어서 다른 녀석들로부터 분리시킴

나쁘지 않음

padding만 함

상하좌우 모두 padding을 8씩 넣음

패딩을 px-8로 수정하고, 위아래로 패딩을 줌

앞에 이것은 더 이상 필요 없으니까 지움

class를 줘서 텍스트를 좀 더 키움

이 녀석도 스타일을 줌

margin bottom은 여기로 옮김

그리고 price는 앞에 달러 기호를 추가함

이제 border를 좀 추가함

1로 수정함

아니면 그냥 border라고 하면 될 거 같음

이러면 1이 됨

pt-4로 수정하고, 그리고 hover일 때는 회색이 되도록 함

그리고 transition-all을 줌

나쁘지 않음

다 됐음

나중에 주문 같은 것들을 보여주는 그래프를 여기에 만듦

예쁜 그래프를 보여줄 수 있도록 database에 가짜로 주문을 좀 만들어 넣음

일단 이 부분은 전부 끝났음

restaurant 생성, dish 추가하기 등 음식점 관련은 다 끝났음

다른 기능도 넣고 싶으면 알아서 해봄

이미 어떻게 하는지 다 보여줬음

특히 이 옵션 추가 기능이 너무 좋음

엄청난 거 같음

dynamic form도 좋음

## 20.13 Victory Charts part One

이제 우리의 dashboard에 차트를 추가해봄

일단 중앙에 이번달 매출이나, 매출 그래프 등 그런 것을 써봄

h4 태그를 써서 Sales라고 함

그리고 기본적으로 최근 날짜의 주문들을 전부 보여주도록 함

다르게 해도 괜찮음

어떻게 보이나 한번 봄

여기에 우리의 그래프를 만듦

그래프 container를 만듦

그러니 여기에 div를 만들고, 이 div 안에 그래프를 추가하게 됨

이것은 중앙에 옴

이제 우리가 무엇을 사용할지에 대해 이야기해봄

우리는 Victory라는 것을 사용함

Victory는 멋진 그래프들을 만들 수 있게 해주는 react component들이 있는 라이브러리임

우리가 만들 그래프는 간단한 line graph지만, victory를 사용하는 방법에 대해 배워봄

victory를 사용하는 기업들은 에어비앤비가 있음

우리는 이런 것을 만듦

다양한 종류의 그래프들이 있음

갤러리를 들어가보면 어떤 그래프들을 만들 수 있는지 더 볼 수 있음

그리고 Victory를 사용해서 이런 그래프를 만드는 것이 상당히 쉬움

우리는 이런 그래프를 만들어서 주문들을 보여줌

처음에는 가짜 데이터로 만들고, 어쩌면 나중에 backend의 데이터를 가져옴

엄청 다양한 일들을 할 수 있음

일단 Victory를 설치해봄

copy를 누르고 붙여서 실행함

터미널에 npm install victory@35.4.2 입력함

그것이 끝났으면 documentation으로 가봄

진짜 사용하기 쉬움

이것저것 import하기만 하면 됨

그러니 이것을 import해서 한번 아무런 차트를 만들어봄

Victory를 사용하는 것이 얼마나 쉬운지 보여주고 싶음

이것이 설치되었음

Victory에서 VictoryBar를 import함

그리고 차트 하나를 만들어봄

너무 쉬워서 놀람

frontend 쪽에 어떤 것이 생기지

새로고침하면 됐음

bar 그래프가 생겼음

이 사이에 여백을 좀 추가해봄

victory를 사용하는 것은 이 정도로 쉬움

victory는 component를 render 해줌

graph를 render 해줌

엄청 좋음

bar 그래프에 data를 추가하고, array를 만듦

이것을 좀 복사함

이제 x, y값들을 좀 손봄

이러면 어떻게 되지

쉼표로 분리함

그리고 이렇게 하는 것만으로 이 데이터를 보여주는 그래프가 생성됨

이렇게만 하면 됨

엄청 쉬움

이것만으로 그래프가 만들어졌음

이제 VictoryChart, 아니 VictoryLabel, 아니 VictoryAxis를 추가함

나중에 보면 VictoryChart를 추가함

이 라이브러리의 모든 것들은 Victory로 시작함

이 모든 것을 잘라내서 VictoryChart 안에 넣음

그리고 전부 다 typescript definition이 있음

엄청 좋은 거 같음

VictoryChart 안에 VictoryBar를 넣음

이 VictoryChart 덕분에 Victory는 우리가 넣은 값들에 label을 붙여줌

x축, y축, 수치들이 추가됨

여기에는 패딩을 좀 줌

이제 여기 보면 첫번째 데이터로 x:10, y:20이 있고, x:20, y:5가 있음

그래프를 생성하는 것은 이렇게나 쉬움

기본적으로 victory 그래프들은 지정받은 공간을 최대한 차지하게 된다는 점을 알아둬야함

예를 들어, 감싸고 있는 div 크기를 수정하면 엄청 큰 그래프가 됨

이런 것은 원하지 않음

이 데이터를 가지고 이렇게 그래프를 만들어냈음

조금만 더 연습해봄

VictoryAxis라고 하고, documentation을 보면 VictoryAxis는 prop을 몇개 지님

참고로 Victor는 최고의 documentation을 갖고 있음
 
animate도 지님

이거 한번 해봄

원하면 axisValue도 있고, crossAxis나 dependentAxis라고 할 수도 있음

그러니까 x축과 y축 중 어디에 대응되는지도 있음

예를 들어 이런 것이 dependentAxis임

여기 VictoryAxis에서 label을 추가할 수 있음

tickValues를 추가할 수 있음

그리고 여기에서는 우리가 원하는 array를 아무거나 넣을 수 있음

이 경우에 여기에는 dependentAxis라고 적음

이 tickValues는 어떻게 뜨지

이렇게 됨

이것이 dependentAxis와 tickValues임

원한다면 사용할 수 있음

물론 이 값은 99니까 tick value가 거기까지 도달하지 못했음

그래도 보이지

원하는 거의 모든 것들을 전부 만들 수 있음

예를 들어 여기에 label이라고 함

y축에 label이 생성됐음

다른 축을 하나 더 추가하고, 이 animation은 별 효과가 없으니 지움

그리고 이 axis에서는 이것은 그대로 내버려 두고 label만 Days of Life로 바꿔봄

현재 VictoryChart를 만들었고, 그 안에 VictoryAxis를 2개 만들었음

원한다면 label이나 tick values를 바꿀 수 있고, VictoryBar도 만들었음

label들을 보면 amount of money랑 days of life라고 해놨음

그리고 전혀 시간이 안 들었음

이것이 바로 Victory임

말했지만 진짜 다양한 예시들이 있음

만약 이런 것을 하나 클릭하면 어떻게 구현한 것인지를 알 수 있음

여기 보이듯이 VictoryChart랑 VictoryBar가 있고, 직접 Bar를 만들었고, data가 있음

그리고 태그 닫으면 끝임

이렇게 간단함

다음 강의에서는 이 map을 어떻게 꾸밀 수 있는지를 다뤄봄

실제 data를 만들어볼거고, Victory에 대해 좀 더 배워봄

그 다음에는 실제로 우리 웹사이트에 맞는 chart를 구현해봄

그래도 일단 얼마나 쉬운지를 봄

14줄인가 그 정도밖에 안 됨

이것을 만들어낸 것임

이제 검사해보면 전부 다 svg로 구현된 것을 알 수 있음

그러니까 이것은 아무리 확대해봐도 pixel화되지 않음

## 20.14 Victory Charts part Two

이것을 좀 수정해봄

왜냐하면 지금은 진짜 별로임

그런데 여기 보면 const chartData라고 데이터를 좀 추가했음

이것이 우리가 테스트 목적으로 사용할 data임

그러니 이것은 이제 필요가 없음

data를 삭제함

여기에 바로 chartData라고 적어줌

그리고 tickValues 값들은 없앰

이러면 그냥 bar만 있을거고, days of life는 days로 수정함

여기도 Order Amount로 수정함

한번 봄

반영되었는지 확인함

축 이름은 다 적용되었음

문제는 이것을 x랑 y로 해야하나봄

데이터도 구현됨

label이랑 tick이 서로 겹침

이것도 수정해야겠지만 그 전에 이 label을 잠깐만 지워봄

이 tick들을 format하는 것을 좀 보여주고 싶음

보면 1, 2, 3, ... 7까지 Days가 있음

그런데 여기를 보면 2000, 4000, 6000이라고 되어있음

그러니 이것 대신에 tickFormat을 설정해줌

아니면 그냥 step이라고 적을 수도 있음

그리고 여기서 원하는 것을 return 받을 수 있음

예를 들어 웃는 얼굴을 return 받고 싶으면 이렇게 하면 됨

우리가 return 받으려는 것은 2K, 4K, 6K라고 나옴

그리고 돈이니까 달러 기호를 추가함

이렇게 꾸밀 수 있음

day 4를 봄

day 4 데이터가 없음

그러니 추가해줌

이제 이 tick들도 수정할 수 있다는 것을 배웠음

그러니 해봄

여기 VictoryAxis로 와서 이 label을 지움

이러면 괜찮은 그래프가 만들어졌음

더 크거나 길게 만들 수도 있음

그리고 데이터가 더 많으면 얼마나 늘어나는지 볼 수 있음

그러니 빨리 해봄

크기가 자동조정 됨

이런 것은 신경 쓸 필요가 없음

지금부터는 pie 차트를 만들어봄

왜냐하면 여러분이 이런 것도 좋아할 거 같음

그러니 여기로 와서 여태까지 한 것을 다 지우고 VictoryPie를 추가함

Victory에 익숙해질 수 있도록 다양한 component를 보여주고 있음

왜냐하면 사용하는 것이 어렵지 않음

그래서 Victory는 이번 강의랑 다음 강의에서만 다룸

사용하기 쉬움

component랑 prop으로만 구성되어 있고 멋진 것을 만들어줌

이 경우에는 제대로 되나 봄

꽤 잘 만들어졌음

이렇게 만들어졌음

그런데 보면 옆에 x, y축이 남아있음

이것이 존재하는 이유는 지금 VictoryChart 내부에 들어와있기 때문임

그러니 VictoryChart를 지워주고 VictoryPie를 사용해봄

물론 원한다면 이 숫자들도 바꿀 수 있음

이미 어떻게 하는지 보여줬지

원하는대로 꾸밀 수 있음

prop을 봄

colorScale도 있음

cornerRadius도 있음

당연히 data prop도 있고, x와 y가 필요하고 원한다면 label도 추가할 수 있음

우리는 label을 안 넣었음

dataComponent는 사용하기 너무나도 쉬움

documentation을 읽으면 어떤 것을 할 수 있는지 바로 알 수 있음

원하면 특이한 것도 할 수 있고, 어떤 때에는 labelRadius가 좋음

이거는 꽤 사용하게 됨

왜냐면 많은 사람들이 이것을 사용함

엄청 간단함

우리가 사용할 그래프는 이전 강의에서 보여줬던 것임

이 녀석 같은 것을 만들어봄

매출을 보여주고, 어쩌면 여기에 주문 수를 적고, 날짜를 밑에 좀 추가할 수도 있음

기본적으로 내 음식점의 매출을 보여줌

그러니 한번 저장하고 pie 그래프가 어떻게 보이나 볼까

이제 매출을 보여줌

아직 주문 데이터는 없음

그러니 진짜로 생성한 음식점(Real One)에 주문을 좀 추가함

total과 createdAt에 임의로 값을 추가함

아마 10개정도 만들고, 10일 전부터 순차적으로 날짜를 수정할 거 같음

그러니 매일 주문 1개가 들어오고, 서로 total 값을 다르게 설정함

Victory는 사용하기 엄청 쉬움

그리고 엄청 다양한 chart들이 있음

Candlestick은 주식 관련한 것을 다룬다면 꽤 쓸모가 있음

그리고 사용하기도 엄청 간단했음

게다가 이 라이브러리는 React Native에도 있음

victory-native라고만 하면 됨

그리고 Expo에서도 돌아감

또한 Containers라는 것도 있음

기본적으로 container가 뭐냐하면, Victory Chart를 생성시켜주는 것임

굉장히 흥미롭고 쓸모가 많음

예를 들어, 이것은 brush container라는건데, 차트의 특정 영역을 선택할 수 있게 해줌

VictoryContainer는 기본 값임

Selection Container의 경우에는 이렇게 어떤 것을 선택할 수 있게 해주고, 다 우리를 위해 이미 만들어짐

우리가 해야 할 일은 VictoryChart를 containerComponent와 함께 render하기만 하면 됨

그리고 우리가 사용할 것은 이 VictoryVoronoiContainer임

이것은 위에 마우스를 올려놓으면 해당 data를 알려줌

그리고 여기를 보면 이렇게 쓰기만 하면 됨

엄청 멋짐

그리고 원하면 차트를 확대할 수도 있음

이것이 다 이미 만들어져있는 것임

그것이 Victory의 마법이라고 생각함

사용하기 진짜 쉬움

다음 시간에 우리가 사용할 진짜 그래프를 만들어봄

## 20.15 Victory Charts part Three

dashboard에 보여줄 주문들을 생성해놨음(DBeaver에서 order 테이블에 임의의 order를 생성함)

하지만 MY_RESTAURANT_QUERY를 좀 확장시켜야함

바로 여기에 orders를 지니게 되었음

order를 위한 fragment를 만들어야함

그러니 여기에 와서 export const ORDERS_FRAGMENT = gql함

fragment OrderParts on Order라고 적어야함

그리고 Order는 id, createdAt, total을 가짐

원한다면 status도 넣을 수 있음

일단 여기에서 멈춤

왜냐하면 이것은 지금 생성할 chart를 위한 것임

OrderParts가 됐음

여기로 와서 fragment를 추가하는 것도 잊지마

backend로 가서 orders라는 relation도 로드하도록 해야함

왜냐하면 그 relation도 봐야함

새로고침하고 이제 그래프가 만들어져야함

새로고침이 됐음

검사해보면 여기에 console.log를 추가해서 어떤 것을 받게 되는지 한번 봄

myRestaurant을 받고, 그 안에 restaurant, 다음으로 orders로 들어가 보면 모든 order들이 여기에 있음

12월 3일부터 12월 12일까지 있고, 이 total은 각 날짜에 들어온 모든 주문의 수임

그러니 이것으로 line chart를 만들어봄

그러니 여기로 와서 먼저 VictoryChart를 만들고, containerComponent는 VictoryVoronoiContainer로 함

그리고 여기에는 VictoryLine을 만듦

VictoryLine의 prop들을 한번 봄

그런데 지금 이미 data를 보낼 수 있음

그래서 데이터를 어떻게 구성할까

데이터는 이렇게 됨

createdAt을 X로 하고, total은 Y가 됨

이미 그 type이 있음

아직 없음

터미널에서 npm run apollo:codegen을 실행함

이것을 실행하는 이유는 우리가 방금 생성한 fragment를 가져오기 위해서임

여기로 와서 모든 order에 대해서 무엇을 리턴할거냐면, x값과 y값이 있을텐데, x는 order.createdAt이고, y는 order.total이 됨

새로고침을 해봄

이럴 때는 responsive하게 만들면 됨

그러니 우선 이것들을 다 지움

그러면 그래프가 엄청 커짐

VictoryChart의 width 설정은 숫자여야함

이것은 기본적으로 창만큼 커짐

데이터 10개가 다 존재함

몇 개를 생성했지

그러니 제대로 돌아감

다음으로 할 일은 더 좋게 보이도록 height를 설정해야함

나쁘지는 않음

그리고 중요한 것은 이렇게 창을 줄이면 못 생겨짐

왜냐하면 responsive함

하지만 새로고침하면 창의 넓이에 맞춰서 다시 생성됨

예를 들면 핸드폰의 넓이에 맞춰서 생성됨

물론 이것을 좀 고치기는 해야함

그러니 고쳐봄

어떻게 하는지 다 앎

다시 새로고침하면 다시 잘 돌아감

label도 수정함

그러니 VictoryLine으로 와서, 그 아래에 VictoryAxis가 제대로 적용됐는지 확인하기 위해 label="Days"함

그러면 여기에 보임

잘 동작함

그런데 tick을 좀 꾸며봄

그리고 각각의 tick은 날짜가 됨

그러니 지금 console.log하는 중이니까 날짜들을 한번 봄

빠르게 콘솔에서 봄

여기 있음

이것이 날짜임

JavaScript로 이것을 좀 만져봄

이러면 date 정보가 이런 식으로 나오게 됨

여기에서 예를 들어 toLocaleDateString을 하면 이런 형식으로 나옴

충분히 좋음

아니면 이렇게 toDateString을 하면 Sat Dec 12도 하나의 방법임

그리고 이 안에 ko라고 적어 넣을 수도 있음

이러면 한국식임

이것을 사용함

여기로 돌아와서 이러면 이것이 tick이 됨

그래서 어떻게 보이지

아래에 축이 있음

원한다면 victory container를 VictoryZoomContainer로 바꿀 수도 있음

원하면 그렇게 함

이러면 확대할 수 있는 거 보이지

그래프를 확대할 수 있음

내가 선택하면 됨

다양한 기능들을 간략하게 보여주려는 것임

이제 축을 하나 더 만듦

이 녀석은 dependentAxis가 됨

그리고 여기는 금액을 넣으면 됨

그러니 이렇게 함

이러면 다 됐음

돈 기호를 추가함

padding을 추가함

너무 작으니까 tick을 수정함

Axis쪽으로 와서 style을 줌

폰트 크기도 설정해줌

이러면 typescript이 짜증냄

그러니 as any라고 적음

뭐가 문제인지는 모르겠지만 이러면 엄청 큼

다시 좀 작게 만듦

20으로 함

이제 색을 넣고 테스트 해보기 위해 버튼의 색깔에 맞춰봄

color를 fill로 수정함

아래쪽 녀석들도 마찬가지로 다른 VictoryAxis도 똑같이 해줌

만약 style이 무엇인지 궁금하다면 우클릭하고 Go to Definition을 눌러보면 됨

가보면 parent, axis, axisLabel, grid, ticks 등이 보임

tickLabel이라던가 다양한 것을 수정할 수 있음

폰트 크기는 20임

왜 typescript가 불만인지 나도 잘 모르겠음

그래도 as any라고 붙이면 제대로 돌아감

날짜들은 이렇게 함

다음으로 넘어감

만약 원하면 이 선을 좀 더 굵게 만들 수도 있음

그러니 VictoryLine으로 와서 strokeWidth를 3으로 해봄

5로 해봄

그리고 부드럽게 만들 수도 있음

interpolation이라고 쓰면 선택지가 다양함

한번 basisClosed를 해봄

안 됨

catmullRom을 해봄

무엇인지 모르겠음

이처럼 interpolation으로 다양한 것을 해볼 수 있음

다 서로 비슷한 거 같음

stepBefore는 어떻게 보일까

natural로 감

생긴 것이 마음에 듦

여러분은 어떻게 생각해

원하면 색깔도 바꿀 수 있음

파란색은 별로임

VictoryLine에 가서 어떤 prop을 사용할 수 있는지 봄

만약 원한다면 chart에 theme을 적용할 수도 있음

VictoryChart로 와서 theme을 줌

VictoryTheme을 가져와서 material을 봄

옅게 선들도 생기고 material이 괜찮음

그런데 이러니까 label들이 너무 커진 거 같음

어떻게 생각해

마음에 듦

다른 prop들도 봄

events도 할 수 있고, groupComponent 등등 interpolation은 우리가 방금 사용해봤지

원하면 labelComponent도 더할 수 있음

한번 복사해봄

그런데 label도 생성해야함

이것도 VictoryLine에 붙여넣고 한번 봄

어떻게 보이지

모든 매출을 이제 다 볼 수 있음

너무 좋음

style을 줌

너무 작음

18로 수정함

y축은 필요없음

그러니 그냥 이 axis를 지워버림

만약 원한다면 VictoryLabel 대신 VictoryTooltip으로 바꿀 수 있음

이러면 마우스를 가져다 댔을 때 매출 정보가 나타나게 됨

이것은 내가 선택하면 됨

어떻게 하고 싶어

tooltip을 원해

아니면 label을 그냥 쓸래

이 datum 부분은 label을 어떤 방식으로 그릴지와 관련 있음

여기에서 label을 어떻게 보여주고 싶은지와 관련 있음

그리고 이 dy는 수직 방향으로 점으로부터 얼마나 떨어져 있는지를 나타냄

이러면 20y가 되고, 그래프 아래에 오게 되는 것이 보임

0으로 하면 그래프 바로 위에 오게 됨

-20이 괜찮은 거 같음

그리고 계속 VictoryTooltip을 씀

마지막으로 할 일은 이 x축의 날짜를 회전시킴

왜냐하면 그래야 하는 경우도 있음

그렇게 하려면 여기에 와서 angle함

그런데 이렇게 하면 삐져나온 것이 지워지게 됨

이 component를 대체하려면 여기로 와서 tickLabelComponent라고 씀

이렇게 하면 삐져나온 부분도 잘리지 않고 보이게 됨

이러니 훨씬 더 좋게 보임

그냥 이런 기능을 보여주고 싶었음

충분히 만족스러운 결과물임

Victory는 진짜 멋짐

보기도 좋음

처음으로 그래프를 생성했을 때는 끔찍했는데 이제는 멋지게 생겼음

## 20.16 Conclusions

음식점 부분은 이제 거의 다 끝났음

요리도 생성하고, 음식점도 생성할 수 있고, 주문들도 볼 수 있음

전체적으로 굉장히 좋아 보임

이제 promotion을 할 거고, 그 다음에는 driver 부분으로 넘어감

driver는 엄청 간단함 

실시간으로 자신의 위치를 우리의 api로 보내도록 하면 됨

그리고 subscription을 할 거고, 그 다음에는 다시 user 파트로 돌아감

왜냐하면 이제 고객들이 요리를 주문할 수 있게 되었음

그리고 주문이 있을 때에는 실시간으로 여기에 팝업이 튀어나오게 함

그리고 subscription은 나중에 함

## 21.0 Introduction

이 섹션에서는 paddle 계정이 필요함

paddle 계정이 꼭 필요함

paddle에 대해서는 이미 이야기를 나눴지만 조금 더 이야기 해봄

paddle은 소프트웨어 서비스 제품을 팔 수 있는 정말 멋진 곳임

디지털 다운로드를 팔 수 있음

디지털인 것을 팔 수 있음

시작하기도 매우 쉽고 다루기도 쉬움

돈을 지불하고 받는게 얼마나 쉬운지 보게 됨

이제 login으로 감(https://paddle.com/)

그리고 login으로 와서 'request a demo'를 클릭함

'request a demo'에서는 'create my free account'를 클릭함

질문 몇개 좀 물어봄

우리가 그들의 플랫폼을 쓰게 해주니까 질문을 하는 것이 당연함

무엇을 팔기 시작하기 전에 계정이 있어야함

방법은 쉬움

양식을 작성하기만 하면 됨

계정이 없다면 다음 영상으로 넘어가지마

내가 말했듯이 paddle은 정말 멋짐

프라이버시와 보안도 매우 중요하게 생각함

조언을 붙이자면 아직 돈이 없다는 이 항목을 클릭하면 됨

그리고 Software as a Service(SaaS)를 판다고 하면 됨

그리고 나머지 항목을 채워주면 됨

회사 이름, 이메일 등등 넣고 approved되면 다음으로 넘어감

이 섹션은 '버블' 같음

이 섹션은 다른 섹션과 완전히 따로 진행됨

지금 payments를 안 하고 싶다면 이 섹션은 안 봐도 됨

말했듯이 이 섹션은 버블 같으니까 paddle 계정을 만들었고 무엇을 팔 준비가 돼있으면 다시 돌아옴

아직 팔고 싶지 않거나, 계정을 만들고 싶지 않으면 다음 섹션으로 넘어감

계정 만들었으면 로그인하고 곧 만남

paddle 계정을 만드는데 제약이 있어서 paypal로 진행함

https://www.paypal.com/kr/home에서 paypal로 결제받기로 회원가입함

## 21.1 Paddle Product Test

paddle로 로그인하면 새로운 product를 생성해야함

로그인을 하고 catalog으로 가서 product를 생성함

paddle에는 products와 subscription plans가 있는데, subscription plan은 누구를 월 단위로 돈을 지불하게 만들고 싶을 때 씀

product는 돈을 한번만 지불하면 됨

product를 생성할건데, 이것을 Restaurant One Week Promotion이라고 해봄

여기는 'checkout custom message'임

restaurant 홍보 = 가게 매출 상승이라고 씀

그리고 'product description'은: 일주일 restaurant 홍보라고 씀

보다시피 이 부분은 영수증에 나옴

이 부분은 체크아웃(checkout) 페이지에 나옴

fulfillment method는 매우 중요함

한 가지 방법으로 download가 있음

무슨 말이냐면 우리가 돈을 지불하면 paddle이 구매자에게 download를 보냄

예를 들어, PDF를 판다치면 PDF를 다운받을 수 있게 보냄

다른 방법으로는 license가 있음

업로드된 license list에서 license를 보냄

업로드된 license list가 있고 코드 같은 license를 판다면 이 방법을 써도 됨

아니면 paddle license도 있음

paddle license를 생성해줌

'activations per license'도 있음

시험판도 가능함

시험판을 30일동안 쓸 수 있게 만들 수도 있음

보이는 것처럼 소프트웨어 제품을 만든다면 정말 유용하겠지

우리는 'server notification'이라는 친구를 사용함

server notification은 user가 다운로드하지 않아도 paddle이 알아서 우리 서버에 내용을 적용시켜줌

누가 이 product를 구입하면 paddle이 우리 서버에 내용을 적용시킴

이제 icon을 지정해봄

가지고 있는 가장 적합한 icon을 씀

이것이 바로 product가 됨

만약 3주짜리 홍보 제품, 또는 다른 제품이 있으면, paddle에 일단 제품을 만들어야함

이제 무엇을 해야할까

'일주일 restaurant 홍보'를 했고, delivery method는 webhook임

이제 webhook URL을 설정해야함

webhook URL은 우리에게 알림을 보내줌

우리가 이 제품을 구매하면 알림을 받음

그러면 이 알림을 어디선가 받아야겠지

module이 없어도 됨

이미 payments라는 친구가 있음

payments는 GraphQL resolver임

백엔드에서 payments.controller.ts를 만듦

아주 간단한 controller를 만듦

이 친구는 "/payments"로 감

그리고 post를 함

누가 payments에 post를 call하면, 알맞은 작업을 실행함

그리고 여기에서 다 가져옴

request의 body를 가져오고 싶음

request의 body를 씀

그리고 request의 body를 console.log함

이제 우리 module에 이 controller를 넣음

여기 module에 controller를 넣음

그리고 PaymentsController를 추가함

이제 locahost:XXXX/payments라는 route가 생겼음

그리고 우리는 '/payments'로 post함

REST API가 생겼음

문제는 paddle은 localhost를 승인해주지 않음

그러면 Visual Studio code로 가서 console에 npx ngrok을 해봄

ngrok이 무엇인지 보여주고 싶음

ngrok은 실제 URL을 만들어줌

그리고 localhost로 redirect 해줌

그러니까 ngrok, http, 그리고 열려 있는 port를 쓰면 됨

우리 localhost:4000의 열려 있는 port는 4000임

터미널에 npx ngrok http 4000을 씀

이렇게 하면 공용 URL을 열어줌

이 부분을 복사하고, 어떻게 나오는지 봄

이것이 공용 URL이고 우리 서버임

graphql을 쓰면 작동되는거 보임

playground가 나옴

이제 paddle은 이 URL을 찾음

webhook URL을 넣고 /payments

이미 해본 적이 있음

webhook을 test 해봄

아무것도 respond하지 않음

하지만 iTerm을 봄

이런 내용을 받음

이제 무엇인가 respond 해봄

그냥 return함

이제 이 링크는 7시간 58분동안 유효함

원한다면 https를 쓸 수 있음

이 링크는 localhost:4000을 가리키고 있음

이 링크(/payments)를 복사 붙이기 했는데 console.log가 작동하는 것을 보니 문제 없는 것 같음

한번 더 해봄

webhook을 test 해봄

parameter를 request하니 {ok : true}를 받았음

바로 우리 백엔드에서 보내준 것임

잘 작동하고 있고, 이것이 우리가 받고 있는 내용임

보다시피 알림을 받고 있음

우리는 이 내용을 쓰지 않음

별로 신경쓰는 부분이 아니라서 그럼

수입 등등 다 저장하고 싶으면 그렇게 해도 됨

하지만 paddle에서는 webhook을 꼭 써야하니까 이렇게 둠

이제 'custom field name'을 넣을건데 customer email을 넣음

owner를 넣어야함

한번 더 webhook test를 해봄

owner를 받았는지 한번 봄

email이 없으니까 owner를 못 받음

그러면 'save changes'를 클릭함

이제 누가 제품을 구매하면 paddle이 우리 API에 알림을 보냄

우리는 NestJS로 아주 빠르게 controller를 만들었음

'upload your application' 이 부분은 안해도 됨

그냥 payments 링크를 붙여넣고 저장함

이제 가격을 붙임

가격으로 들어가면 많은 옵션이 있음

미국 달러로 환율을 정함

10불로 가격을 매김

그냥 5불로 함

testing이 비싸짐

원한다면 무료로도 만들 수 있음

이제 저장함

여기서는 user가 checkout 후 어디로 갈지 설정할 수 있음

바꿀 수 있지만 우리는 아무것도 하지 않음

cancel 누르고 나중에 이 부분을 수정하도록 함

우리 제품임

이제 프론트엔드로 checkout process를 연결하고, user가 버튼을 클릭하면 overlay를 볼 수 있음

다른 페이지로 가지 않고 구매 상자 overlay가 나옴

상자가 어떻게 생겼는지 보여주고 싶지만, 아직 구매 과정을 만드는 마지막 단계가 남아있음

마지막 단계는 우리가 이것을 react에 연결하는 것임

paddle은 user가 page에서 구매할 수 있게 해줌

user가 nuber eats page에서 구매하거나 paddle이 checkout link를 제공함

여기로 와서 checkout link를 누르면 paddle checkout link로 보내줌

이렇게 생겼음

총 금액을 확인하고, 계속 버튼을 누름

위치가 어디인지 알려주고 계속을 누름

잠깐 기다리면 카드로 구매 가능하고, PayPal로 구매 가능함

카드로 구매를 누르면, 내 카드 정보를 입력함

비디오 상으로 보면 모자이크 처리가 되어있겠지만, 실제 카드 정보를 입력하고 있음

진짜 testing하는 중임

카드 정보를 확인함

거래가 성공적으로 이뤄졌음

상세 주문 정보는 이메일로 보냈음

여기서 나는 customer임

이 이메일로 구매했음

console을 봄

총 얼마를 벌었는지, 모든 정보를 받았음

이제 원한다면 백엔드에서 주문 기록을 확인할 수 있는 기능을 만드는게 좋을 것 같음

예를 들면 payment 알림을 만드는게 좋을 것 같음

user에게 제품을 몇번 구매했는지 알려주면 좋음

user가 몇번 구매했는지 알림

우리 웹사이트로 가면 payment 섹션에 payments 기록을 다 볼 수 있음

작동하는걸 확인했으니 내 이메일로 가서 paddle이 어떤 이메일을 보냈는지 확인해봄

이메일을 2개 받았음

하나는 license key임

내가 서버에서 무엇인가 return해서 보내준 것 같음

다른 이메일은 주문 확인서, 즉 영수증임

license가 없으니까 사람들이 이것을 안 받았으면 좋겠음

그래도 서버에서 무엇인가 return하면 license key로 보여준다는 것을 이렇게 배우게 됐음

어쨌든 이 이메일은 받지 않게 하고 싶음

다운로드 할게 없는데 다운로드 버튼을 보내고 싶지 않음

우리는 그냥 백엔드로 구매 내용을 활성화 시킬거잖아

이것을 위해서는 우리 product page로 돌아가야함

product page에는 보다시피 webhook URL 등등 있음

'고객에게 다운로드 링크와 주문 확인서를 이메일로 보냅니다'를 no로 바꿈

'고객은 주문 확인서만 이메일로 받습니다.'라는 뜻임

이 옵션을 선택하면 고객은 주문 확인서만 이메일로 받음

'download에는 접근권이 없으며..' 우리가 원하는게 이것임

이제 customer는 영수증만 받게 됨

checkout link가 다소 번거롭긴 함

user가 다른 페이지로 이동해서 구매해야함

하지만 걱정마 

paddle은 overlay가 있음

이것이 무슨 말이냐면 user를 어디 보낼 필요 없이, 이것처럼 프론트엔드에 JavaScript를 이용해서 overlay를 엶

예를 들면 이런 것을 우리 웹사이트에 띄움

이러면 어디로 갈 필요가 없음

이것은 그냥 testing용임

잘 작동하니까 돈 벌 수 있음

https://developer.paypal.com/home로 이동하여 Log in to Dashboard를 클릭하여 로그인함

DASHBOARD의 My Apps & Credentials에서 Create App함

App Name은 Restaurant One Week Promotion, App Type은 Merchant로 함

Create App 했을때의 Client ID와 Secret을 기억해놓음

## 21.2 Paddle Integration part One

이제 successCallback을 만들어야함

localhost:4000인 백엔드에 있다는거 잊지마

이미 createPayment mutation이 있고, createPayment는 transactionId와 restaurantId라는 input이 있음

이 mutation을 my-restaurant component에 만들어봄

이것을 복사해옴

createPayment input은 variable임

그리고 여기 안에는 또 createPayment를 쓸건데, input : $input이라 하고 여기서 ok, error를 받음

npm codegen을 run해봄

그동안 paddle 위에 mutation을 만듦

이제 types를 추가함

이제 paddle이 알려준대로 여기에 successCallback을 씀

function을 만들어서 createPaymentMutation을 call함

variables 안에는 input이 있고, 그 안에는 알아봐야할 transactionId와 restaurantId를 넣어야함

restaurantId는 이미 여기 parameter에 있음

restaurantId는 id라고 함

하지만 이것은 숫자여야함

그리고 transactionId는 어디서 가져오냐

successCallback을 보면 successCallback은 data object로 call 됨

그래서 여기에 data를 가져옴

그리고 data에는 우리를 위한 정보가 들어있음

이 경우에는 data.checkout.id임

data는 any라 하고. 여기에 data.checkout.id라 함

transactionId는 data.checkout.id라는 string임

그럼 끝임

구매하면 작동됨

onCompleted를 빠르게 만듦

Mutation은 여기 있고, 그럼 이렇게 함

그리고 createPayment인 data를 가져옴

data.createPayment.ok가 true라면, "당신의 가게가 홍보되고 있습니다."를 alert로 띄워봄

끝난 것 같음

다시 테스트해봄

돈을 계속 씀

새로고침을 하고 Buy Promotion을 클릭함

잠깐 멈추고 내 카드 정보를 입력하고 옴

pay now를 클릭했으니까 나옴

error도 없이 완전 깔끔하게 됐음.

이제 내 restaurant은 홍보되고 있음

한번 봄

내 restaurant으로 감

홍보되고 있음

드디어 promotion을 샀음

payment를 한번 봄

payment, transactionId, userId가 있음

이제 'restaurant이 홍보가 되고 있습니다.'가 쓰인 버튼을 만듦

남은 홍보 기간을 보여줘도 됨

이제 다 끝났음

여기를 보면, 결과를 백엔드로 받았음

이것으로 payment object를 만들 수 있으니까 좋음

error없이 잘 작동함

생각보다 쉽지

vendor, product가 필요한데, product가 정말 중요함

우선 product부터 만들어야함

product 없이는 안 됨

그리고 createPaymentMutation도 성공적으로 만들었음

react-paypal-button-v2 package를 설치함

react-paypal-button-v2에서 PayPalButton을 사용하여 결제 버튼을 만듦

## 21.3 Paddle Integration part Two

이제 successCallback을 만들어야함

localhost:4000인 백엔드에 있다는거 잊지마

여기 있음

이미 createPayment mutation이 있고, createPayment는 transactionId와 restaurantId라는 input이 있음

이 mutation을 my-restaurant component에 만들어봄

이것을 복사해옴

createPayment input은 variable임

그리고 여기 안에는 또 createPayment를 쓸건데, input : $input이라 함

여기서 ok, error를 받음

npm codegen을 run해봄

그동안 paddle 위에 mutation을 만듦

이제 types를 추가함

이제 paddle이 알려준대로 여기에 successCallback을 쓰고, function을 만들어서 createPaymentMutation을 call함

variables 안에는 input이 있고, 그 안에는 알아봐야할 transactionId와 restaurantId를 넣어야함

restaurantId는 이미 여기 parameter에 있음

restaurantId는 id라고 함

하지만 이것은 숫자여야함

그리고 transactionId는 어디서 가져오냐

successCallback을 보면 successCallback은 data object로 call됨

그래서 여기에 data를 가져옴

그리고 data에는 우리를 위한 정보가 들어있음

이 경우에는 data.checkout.id임

data는 any라 하고, 여기에 data.checkout.id라 함

transactionId는 data.checkout.id라는 string임

그럼 끝임

구매하면 작동됨

onCompleted를 빠르게 만듦

Mutation은 여기 있고, 그럼 이렇게 함

그리고 createPayment인 data를 가져옴

data.createPayment.ok가 true라면, "당신의 가게가 홍보되고 있습니다."를 alert로 띄워봄

끝난 것 같음

다시 테스트해봄

돈을 계속 씀

새로고침을 하고 Buy Promotion을 클릭함

잠깐 멈추고 내 카드 정보를 입력하고 옴

pay now를 클릭했으니까 나올텐데 완전 깔끔하게 됐음

error도 없음

이제 내 restaurant은 홍보되고 있음

한번 봄

내 restaurant으로 감

홍보되고 있음

드디어 promotion을 샀음

payment를 한번 봄

payment, transactionId, userId가 있음

이제 'restaurant이 홍보가 되고 있습니다.'가 쓰인 버튼을 만들고, 남은 홍보 기간을 보여줘도 됨

이제 다 끝났음

여기를 보면 결과를 백엔드로 받았음

이것으로 payment object를 만들 수 있으니까 좋음

error없이 잘 작동함

생각보다 쉽지

vendor, product가 필요한데, product가 정말 중요함

우선 product부터 만들어야함

product 없이는 안 됨

진짜 끝임

그리고 createPaymentMutation도 성공적으로 만들었음

Buy Promotion을 클릭하면 payment 페이지로 이동하게 함

결제 버튼을 클릭하고 구매자 계정으로 로그인하면 payment table에 레코드가 생성됨

react-toastify package를 설치함

successFunction과 createOrder를 props로 하는 PayPal 컴포넌트를 만듦  

## 22.0 Extending the Dish Component

이제 다시 customer로 돌아왔음

내 database에 있는 role을 바꿨음(DBeaver에서 user의 role을 Client로 변경함)

다시 client가 됐음

여기에 restaurant이 있고 이 restaurant은 몇 가지의 dish를 가지고 있음

그래서 dish 몇 가지를 render함

owner가 이미 dish를 업로드 해놨음

dish를 가져오고 order를 만듦

customer만 볼 수 있는 restaurant 스크린으로 감

아마 여기 있을텐데 이 restaurant은 menu가 있고 우리는 이미 여기서 가져올 수 있음

menu라고 쓰고 우리가 만들어 놓은 DISH_FRAGMENT를 fragment로 씀

복사해서 여기 붙이고 DISH_FRAGMENT를 import함

그리고 DishParts라고 해주면 됨

이것이 fragment의 장점임

이렇게 공유를 할 수 있음

프론트엔드에서 코드를 재사용 할 수 있는데, 나는 이렇게 하는 것이 좋은 것 같음

nomadcoders.co 프론트엔드도 fragments가 엄청 많은데 코드도 작고 재사용할 수 있어서 좋은 것 같음

우리 브라우저로 가서 새로고침하고, menu를 봄

console을 보면 restaurant이 있고, restaurant에는 menu가 있고, dish도 있음

이것은 owner가 만든 dish임

이제 menu를 render함

우리는 이미 dish를 render할 component가 있음

owner 폴더의 my-restaurant으로 가서 우리가 만든 grid인 menu를 복사하고 여기 붙임

이것이 title임

여기 div를 넣음

아니면 그냥 이렇게 붙여 넣음

그것이 더 나은 것 같음

그리고 data?.restaurant으로 바꾸면 작동됨

하지만 menu는 아직 존재하지 않음

아직 codegen을 만들지 않았음

npm run apollo:codegen을 씀

이제 menu를 만들었음

보다시피 Typescript도 뭐라 하지 않음

다시 restaurant으로 돌아감

이제 모두 container 안에 넣음

이 container는 내가 만든 class이고, src/styles/tailwind.css에 있음

container 그리고 link를 만들었음

이제 dish component를 조금 extend하고 싶음

왜냐하면 나는 이것을 토대로 order를 만들고 싶음

이 페이지에서 order를 만들고 싶음

"/restaurants/13"에서 order를 만들고 싶음

그래서 무엇을 할거냐면, dish component에 prop을 추가함

그리고 여기에 isCustomer라 쓰고 not required이며 Boolean으로 만듦

default로 isCustomer를 false로 함

우리가 restaurant의 owner라면 이것만 보임

달라지는 것은 없음

하지만 우리가 customer면 여기에 options를 render함

그러면 option을 선택해서 Dish로부터 order를 만들 수 있음

이제 isRestaurant에서 isCustomer를 전달함

true가 됨

그리고 우리는 dish options가 필요함

여기에 dish options가 있음

우리는 dish의 options를 가져옴

그리고 component에 보여주면 됨

그런데 우리가 customer일 때만 보여줘야함

dish component에 options가 추가됐으니 매우 흥미로워짐

customer면 일단 options만 써봄

그리고 customer일 때 어떻게 나오는지 봄

여기에 options가 있음

나쁘지 않음

그리고 options라는 type을 만듦

options는 이 interface가 됨

이름이 길어서 불편하다는 것을 앎

하지만 그냥 복붙만 하면 됨

options를 array로 만들고 not required로 함

이제 내 restaurant 스크린에 dish의 options를 전달할 수 있음

dish.options라고 씀

그러면 Type 때문에 문제가 생김

왜냐하면 Type이 array 또는 undefined여야하는데 dish.options는 array 또는 null임

여기 와서 그 부분을 바꿈

이제 문제 없음

이제 내 dish는 options가 있음

이것이 우리가 따를 로직임

dish는 여기서 options를 보여줌

options를 클릭하고 'make an order'나 뭐든지 add to basket(장바구니 추가)도 클릭함

dish로 가서 options를 보여줌

우선 options를 console.log해서 우리가 무엇을 다뤄야하는지 봄

아직 props에 없는 options를 props 안에 넣음

이제 console을 봄

그리고 options는 array임

이것이 우리가 가지고 있는 것들임

name, extra, choices가 있음

나는 choices를 추가하지 않았음

choices를 맡김

한번 도전해봄

나는 name, extra만 함

여기로 와서 뭐라 할거냐면 일단 물음표를 추가하고, option.name을 가진 span을 보여줌

key를 위해 여기에서 index를 가져옴

이제 한번 볼까

외관은 좀 별로지만 고침

이제 여기 위에, dish options라는 작은 텍스트를 만듦

className에 margin top을 넣음

my-3, 그리고 font는 medium임

dish option은 이것보다는 더 좋게 만듦

h6을 쓰고, 이 정도면 크게 신경쓰지 않아도 됨

만약 extra money가 있으면 여기에는 spicy, pickle이 있음

이제 flex items-center로 만듦

extra는 작게 만듦

text-small 그리고 opacity-75함

가격을 좀 감추고 싶음

이것만 하면 이 부분은 끝났음

option에는 더 많은 기능을 만듦

예를 들어 order를 만들 때 option을 클릭하면, option, name 등을 볼 수 있게 함

option을 클릭하면 볼 수 있게 onclick Handler를 여기에 추가함

이 경우에는 dish options가 없음

그러니까 여기는 dish options를 보여줄 필요가 없음

여기에만 dish options가 있음

그러니 여기 dish options는 보여줄 필요가 없음

options의 길이가 0이 아닐 때 그리고 options가 존재할 때 보여주도록 만듦

한번 봄

여기는 options가 없고, 여기는 options가 있음

말했다시피 나중에 options를 체크하는 버튼을 만들 계획이라 options를 보여줌

체크하기 위해 그렇게 만들고 싶음

더 좋아 보이게 잠깐 margin top을 수정함 .

다 했음

공간을 조금 더 줌

다음 영상에서는 'start order' 같은 버튼을 만들고, 'start order'는 dish를 클릭하면 고를 수 있게 만듦

말했듯이 options를 만든 이유는 내 장바구니나 그런 곳에 넣을 수 있게 Dish와 options를 클릭할 수 있게 만들기 위해서임

다음 영상에서 앞서 말한 내용을 진행함

step 1은 끝났음

이것은 owner가 보는 component랑 같은 것임

대신 owner는 dish options를 볼 수 없음

원한다면 이렇게 만들 수 있는데 order할 수 있는 사람은 customer뿐임

그래서 dish options를 보여줌

원하는대로 함

로직을 공유하고 싶었음

같은 dish component를 쓰지만 extend하는 방식으로 작업했음

## 22.1 Making Order part One

유저가 이 restaurant에 접속하면, 이쯤에서 볼 수 있는 버튼을 만들건데 make order라는 버튼임

그것을 클릭하면 이 dish들을 선택할 수 있게 하고, 선택해서 내 order(주문)에 추가할 수 있게 함

이런식으로 만들어봄

이제 restaurant에 버튼을 빠르게 만들어봄

이 부분에서 만듦

먼저 또 다른 div를 만듦

여기에 div를 만듦

여기다가 button을 만듦

버튼의 텍스트는 Start Order임

start order 버튼이 만들어졌음

mt-20을 추가함

나쁘지 않음

button component를 많이 커스터마이즈하긴 했는데, 그러면 클래스를 하나 새로 만듦

button이란 이름의 클래스를 만듦

이것을 언젠가 써먹을 수 있을 것 같음

빠르게 만들어봄

터미널에 npm run tailwind:build 입력함

Start Order를 다 만들었음

이제 onClick을 써서 Start Order를 클릭하면 무엇을 할지 적어줘야함

onClick={triggerStartOrder}을 restaurant에 추가함

triggerStartOrder는 state를 바꿈

orderStarted, setOrderStarted라고 함

useState의 기본값은 false로 함

그리고 triggerStartOrder는 setOrderStarted(true)를 해줌

그러면 Order Start를 클릭하면 무슨 일이 일어날까

Dish에서 정보를 받아와야함

orderStarted가 낫겠음

이제 Dish를 확장함

Dish에 orderStarted가 있어야함

기본값은 boolean이 되겠고, 항상 있어야하니까 required여야함

그런데 이렇게 함

orderStarted의 기본값을 false로 함

이렇게 하는 이유는 owner가 보는 Dish component를 망가뜨리고 싶지 않아서임

나쁘지 않음

padding을 넣음

flex flex-col 그리고 items-end w-full도 추가함

padding-bottom을 32로 함

이제 Start order를 클릭하면 dish를 고를 수 있게 만듦

클릭하면 선택이 됨

그럼 어떻게 order를 관리할 수 있을까

이것은 restaurant 스크린에서 local state로 처리함

그럼 이제 여기로 와서 orderItems랑 setOrderItems를 만듦

그리고 기본값은 array가 될건데, 여기에 type을 정해줌

우리가 무엇을 추가해야하는지 생각 좀 함

그런데 우리가 진작에 order item의 타입을 만들어뒀음

우리가 createOrder할 때에 dishId랑 options, input, items 등 이미 만들어뒀음

그러면 이 녀석을 가져오면 될 것 같음

하지만 우리는 아직 이 createOrder를 생성한 것은 아님

그러면 한번 해봄

여태까지 했던 과정이랑 비슷함

먼저 mutation을 만들고, NestJS와 우리가 setup한 것이 짱짱하기 때문에 mutation은 우리가 필요로 하는 모든 type을 제공함

그러면 CREATE_ORDER_MUTATION을 만듦

그리고 여기 있는거 싹 다 복사함

이것이 input이고 그리고 이 부분은 createOrder가 됨

여기서 input은 $input이 됨

그리고 ok랑 error를 가져옴

나중에 이것을 수정할건데, 왜인지는 차차 알게 됨

CREATE_ORDER_MUTATION이 다 됐음

다시 npm run apollo:codegen을 실행해봄

여기를 보면 CreateOrderItemInput이라는 type이 있는데 이런 타입이 있나 볼까?

CreateOrderItemInput이 있음

그리고 이것은 array로 만들어야함

이제 우리의 state가 우리 backend가 원하는 state와 매치된다는 것을 확인했음

CreateOrderItemInput을 보면 dishID랑 options가 있음

이제 Item 배열이 채워질 준비가 됐음

addItemToOrder라는 function을 만듦

이름이 좀 길지만 상관없음

여기에 필요한 것은 id임

dishId는 number임

보다시피 프로그래밍에서 가장 어려운 것 중 하나가 이름 짓는 것임

구글에서 관련된 글들을 볼 수 있는데, 프로그래밍에서 가장 어려운 것 2가지는 caching과 이름짓기라고 함

무엇을 할거냐면 setOrderItems()를 실행함

무슨 array일지는 모르지만 current array를 받음

그리고 dishId에 dishId를 넣고 options에는 아무것도 아닌 null을 넣음

보다시피 typescript가 도와주고 있음

왜냐하면 typescript는 current가 무엇인지 알고 있음

typescript는 current가 CreateOrderItemInput의 array라는 것을 알고 있음

그래서 내가 array 안에 object를 넣으려고 할 때 도움을 받을 수 있음

이것은 order에 item을 추가해줌

orderItems를 console.log 해봄

그리고 이 function을 dish에 전달함

보다시피 dish component가 엄청 중요해졌음

이제 dish는 새로운 prop을 가지게 되는데, 이것은 void이고 argument를 받음

argument는 바로 dishId고 이것은 number가 됨

보다시피 restaurant에 있는 것과 동일한 option signature를 선언해야함

argument의 이름이 다르더라도 type은 동일해야함

이제 addItemToOrder를 추가하고 여기에 onClick을 쓰고 안에는 이렇게 입력함

그리고 dishId를 넣어야 하는데, 아직 dishId를 받지 못하는 상태임

dishId가 없음

그러니까 dishId를 가져옴

dish props로부터 가져옴

restaurant owner가 이것을 꼭 입력할 필요 없으니까 이것을 required로 만들지는 않음

하지만 우리를 위해서 여기에서는 required로 해야함

전부 restaurant 스크린에서 온다는 것 기억하지

restaurant 스크린이 이런 모든 것들을 전달하는 곳임

이제 dishId는 string이어야 하는데 내가 넣은 것은 number임

number로 바꿈

거의 다 왔음

이제 누군가 div를 클릭하면, addItemToOrder를 실행함

id를 넣지 않았음

TypeScript가 정말 큰 도움이 됨

하지만 이것은 우리가 orderStarted일때만 발생함

orderStarted가 아니라면 이것을 실행하고 싶지 않음

그럼 여기로 와서 만약 orderStarted면 이것을 하고, 아니라면 아무것도 하지 않음

이것이 중요함

Dish에 오류가 있음

addItemToOrder is missing이라 react에서 문제가 생긴건가

여기 addItemToOrder가 버젓이 있는데 또 addItemToOrder is Missing임

내 실수일지도 모름

어쩌면 react 문제일 수도 있음