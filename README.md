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