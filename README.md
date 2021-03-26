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