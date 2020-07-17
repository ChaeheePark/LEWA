## 영어 단어 학습 사이트 LEWA (Learning English with Article)

[Meteor](https://www.meteor.com/)   
[Codeasy](https://github.com/codeasy-org/codeasy)

## Contributer
* [201910787youngseo](https://github.com/201910787youngseo) 
* [ChaeheePark](https://github.com/ChaeheePark) 
* [hhz2000](https://github.com/hhz2000) 
* [limjustin](https://github.com/limjustin) 
* [polyn00](https://github.com/polyn00) 
* [yoonho0922](https://github.com/yoonho0922) 

## Application Sample
<p align="center"><img src="https://github.com/yoonho0922/LEWA/blob/master/public/capture/main_capture.png" width="90%" height="90%"></p>
<p align="center"><img src="https://github.com/yoonho0922/LEWA/blob/master/public/capture/autoupload_capture.png" width="90%" height="90%"></p>
<p align="center"><img src="https://github.com/yoonho0922/LEWA/blob/master/public/capture/uploadsuc_capture.png" width="90%" height="90%"></p>
<p align="center"><img src="https://github.com/yoonho0922/LEWA/blob/master/public/capture/post01_capture.png" width="90%" height="90%"></p>
<p align="center"><img src="https://github.com/yoonho0922/LEWA/blob/master/public/capture/quiz01_capture.png" width="90%" height="90%"></p>
<p align="center"><img src="https://github.com/yoonho0922/LEWA/blob/master/public/capture/wordbook_capture.png" width="90%" height="90%"></p>

## Run Project
#### install meteor
* [미티어 설치](https://www.meteor.com/install)
#### npm install (최초 1회 실행)
```
meteor npm install
```
#### run
```
meteor
```
* 실행 후 웹브라우저에서 localhost:3000 접속  (```meteor run --port <port number>```로 포트번호 지정 가능)
* Sign up 또는 Login. admire@gmail.com으로 signup하면 관리자 계정임
* localhost:3000/postingAuto에서
[The Korea Herald](http://www.koreaherald.com/index.php) 기사의 링크를 scraping한 후 upload하여 기사 업로드 가능

## Document
* [페이지 구성](/docs/client_structure.md)
* [DB 구조](/docs/DB_collection.md)
* [추가한 package](/docs/npm_install.md)
* [참조](/docs/reference.md)

## Project Structure
* Client : 화면 구성 모음
* docs : 정리한 문서 모음
* public : 사진 파일 등 모음
* server : 백엔드 관련
* lib : html HEAD, 라이브러리, 함수 등..  

