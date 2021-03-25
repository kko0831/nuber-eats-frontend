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