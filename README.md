![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=500&section=header&text=Team%20Name&fontSize=100)

# 🔖 목차

> ## [✨ 프로젝트 소개](#-프로젝트-소개)
>
> ## [👥 팀원 소개](#-팀원-소개)
>
> ## [💼 역할 분담](#-역할-분담)
>
> ## [🤝 협업 방식](#-협업-방식)
>
> ## [📚 프로젝트 진행 상황 관리](#-프로젝트-진행-상황-관리)
>
> ## [🔍 브랜치 전략](#-브랜치-전략)
>
> ## [✔ 컨벤션](#-컨벤션)
>
> ## [🛠 개발 도구](#-개발-도구)
>
> ## [📆 프로젝트 일정](#-프로젝트-일정)
>
> ## [📄 API 명세서&ERD 설계도](#-api-명세서erd-설계도)
>
> ## [📋 메뉴 구조도](#-메뉴-구조도)
>
> ## [🖥 화면 구현](#-화면-구현)
>
> ## [💡 느낀점](#-느낀점)

<br/>
<br/>

## ✨ 프로젝트 소개 [Notion](https://mangrove-comic-a17.notion.site/Team-Project-dc414362131b4ee799fa852737236fa9?pvs=4)


### 🌟 제목

-   매장용 맥도날드 키오스크 개발

### 🚀 목적

-   학습 내용의 복습 및 활용, 팀원들 간 협업과 과정 이해

### 🤝 팀 프로젝트

-   팀원 4명

### 📆 제작 기간

-   2025.03.10 ~ 2025.04.11

### 🔎 주요 기능

-   관리자 회원가입 및 로그인
-   관리자 모드 메뉴

    > 전체 매출 및 제품별 매출 조회

    > 결제 내역 조회

    > 메뉴 추가/관리

    > 점포 관리(가게 설정, 비밀번호 변경하기)

-   사용자 모드 메뉴

    > 포장/매장 여부 선택

    > 전체 및 카테고리별 메뉴 선택

    > 결제 방법(카카오페이)

    > 포인트 적립/사용

<br/>
<br/>

<p align="right" dir="auto">
<a href="https://github.com/hz-uiw/Mcdonald_Kiosk">TOP 🔼</a>
</p>

## 👥 팀원 소개

<div align="center">
<img src="https://github.com/user-attachments/assets/292c4e68-ab8f-47bb-bfc7-c50deaa321eb" />
<table >
    <thead>
        <tr>
            <th align="center"><span>권민창(팀장)</span></th>
            <th align="center"><span>백진우</span></th>
            <th align="center"><span>최명준</span></th>
            <th align="center"><span>최석현</span></th>
        </tr>
    </thead>
    <tbody>
        <td align="center">
            <a href="https://github.com/hz-uiw">
                <img src="https://avatars.githubusercontent.com/u/174016319?v=4" width="150" height="150" />
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/initialX00">
                <img src="https://github.com/user-attachments/assets/abeb65dd-8e54-4ac8-a35e-58560d13211c" width="150" height="150" />
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/chlaudwns94">
                <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/83110386/b015e01d-1078-428e-a713-a92b23e4ff6a" width="150" height="150" />
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/doosan5464">
                <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/83110386/ffb0f7a2-6df1-4935-8b3f-036cf89e344b" width="150" height="150" />
            </a>
        </td>
    </tbody>
</table>
</div>

<p align="right" dir="auto">
<a href="https://github.com/hz-uiw/Mcdonald_Kiosk">TOP 🔼</a>
</p>

## 💼 역할 분담

<h3> 🛩 팀장: 권민창 </h3>

### 🔧 Back-End
- 제품 이름, 이미지, 카테고리, 노출여부, 우선순위 관리 (GET/POST/PUT/DELETE) 요청
- 제품 가격 관리 (GET/POST/PUT/DELETE) 요청
- 제품 영양정보 및 원산지 관리 (GET/POST/PUT/DELETE) 요청

### 🖥 Front-End
- 사용자 및 관리자 페이지 초기설정
- 관리자 - 제품관리 메인 페이지
- 관리자 - 제품관리 페이지
- 관리자 - 키오스크 카테고리 관리 페이지
- 관리자 - 영양정보 및 원산지 관리 페이지

### etc.

-   프로젝트 최종 발표

<h3> 👩‍💻 팀원: 백진우 </h3>

### 🔧 Back-End

- 메뉴 조회 GET요청
- 메뉴 노출 변경 PUT요청
- oAuth 중복 오류 수정
  

### 🖥 Front-End

- 고객페이지의 메뉴상세정보 조회

- 관리자 메뉴관리 페이지의 메뉴 조회 및 메뉴 이동
- 관리자 메뉴관리 페이지의 메뉴 노출 여부 변경
- 관리자 결제조회 페이지 portone을 통한 결제내역 조회
- 관리자 결제조회 페이지 portone을 통한 환불
- 관리자 oAuth2 로그인 및 oAuth 오류 수정


<h3> 🧑‍💻 팀원: 최명준 </h3>

### 🔧 Back-End

-   OAuth2 회원가입
-   security
-   포인트 관리
-   관리자 정보 변경
-   사용자 등록

### 🖥 Front-End

-   관리자 회원가입 페이지
-   관리자 로그인 페이지
-   관리자 정보 변경 페이지
-   매출 조회 페이지
-   포인트 등록 페이지
-   OAuth2 로그인 페이지

<h3> 🧑‍💻 팀원: 최석현 </h3>

### 🔧 Back-End
-   메뉴 항목을 위한 menu_tb GET 요청
-   주문 정보를 저장할 order_tb, order_detail_tb POST 요청

### 🖥 Front-End
-   메인 페이지(언어, 장소)
-   메뉴 페이지(카테고리별 메뉴)
-   주문을 조회하는 장바구니 페이지
-   결제방법 페이지
-   간편결제 페이지
-   마일리지 저장 페이지
-   주문번호 출력 페이지
-   관리자 카테고리 관리 페이지


> 공동 작업

-   디자인 도안 작업
-   Front 명세서 작성
-   API 명세서 작성
-   DB 설계

<p align="right" dir="auto">
<a href="https://github.com/hz-uiw/Mcdonald_Kiosk">TOP 🔼</a>
</p>

<br/>
<br/>

## 🤝 협업 방식

1. 해당하는 업무에 대해 GitHub Issue를 생성합니다.
2. GitHub Actions에 의해 자동으로 생성된 브랜치로 전환하여 해당하는 업무를 진행합니다.
3. 작업을 완료하면 각자의 생성한 브랜치에서 코드를 push합니다.
4. PR(Pull Request) 을 오픈합니다.

-   PR(pull request)을 오픈하면, 팀장이 코드를 확인하고 승인합니다.

-   코드 리뷰 & 승인은 팀장이 일임했지만, 팀원들의 코드 스타일은 다같이 공유하며 서로 잘 이해할 수 있도록 다 같이 정리하는 시간을 가지도록 하였습니다.

*   컨펌 담당

5. PR이 merge되어 close 되면 해당 이슈는 자동으로 Done상태로 변경됩니다.

<p align="right" dir="auto">
<a href="https://github.com/hz-uiw/Mcdonald_Kiosk">TOP 🔼</a>
</p>

<br/>
<br/>

## 📚 프로젝트 진행 상황 관리

-   <a href="https://www.notion.so/1b9670a125c880199577d132b04763fa">📋 맥도날드 키오스크 회의록</a>
    -   매일 조회의를 통해 금일 각자 본인이 해야할 내용을 주고 받으면서  + 팀원이 금일 어떤 작업을 진행하고 있는지를 알 수 있어 의사소통 비용을 줄일 수 있었습니다.
-   <a href="https://github.com/orgs/Novel-Ideas/projects/1">📁 GitHub Projects</a>
    -   칸반 보드로 프로젝트 진행 상황을 한 눈에 확인할 수 있어 일정을 관리하기 수월했습니다.

<p align="right" dir="auto">
<a href="https://github.com/hz-uiw/Mcdonald_Kiosk">TOP 🔼</a>
</p>
    
<br/>
<br/>

## 🔍 브랜치 전략

<h3>💡 GitHub Flow 전략</h3>

-   개발과 동시에 지속적으로 배포를 진행할 것이 아니라, 기능을 모두 개발하고 최종적으로 배포를 할 예정이었기 때문에 Git flow에 비해 흐름이 단순해짐에 따라 그 규칙도 단순한 GitHub Flow 전략이 적합하다고 생각했습니다.

-   프로젝트 기간 동안 팀원들이 같은 시간에 작업하기 때문에 잦은 충돌이 발생할 것을 우려하여 충돌의 크기를 줄이고자 GitHub Flow 전략을 채택하여 작은 단위로 이슈를 쪼개 이슈 별로 브랜치를 분기하고 main 브랜치에 지속적으로 merge 하는 방식으로 진행했습니다.

-   기본적으로 master branch에 대한 규칙만 정확하게 정립되어 있다면 나머지 가지들에 대해서는 특별한 관여를 하지 않으며 pull request기능을 사용하도록 권장하였습니다.

<p align="right" dir="auto">
<a href="https://github.com/hz-uiw/Mcdonald_Kiosk">TOP 🔼</a>
</p>

<br/>
<br/>

## ✔ 컨벤션

팀원 간의 원활한 소통과 협업을 위해 커밋 컨벤션과, 코드 컨벤션을 만들어 이를 따랐습니다. 리드미에는 간략히 작성하고, 자세한 컨벤션은 각각의 타이틀에 링크된 깃허브 위키에 적어두었습니다.

<h3>
<a href="https://mangrove-comic-a17.notion.site/Git-Commit-Message-Convention-8e5410868b7d4bb6a9e61e976d638963">📍 커밋 컨벤션</a>
</h3>

<div>
<pre background-color="#dbdbdb">
<p>
1. 커밋 유형 지정
    - 커밋 유형은 영어 대문자로 작성하기
    - 커밋 유형
    - Feat : 새로운 기능 추가
    - Fix : 버그 수정
    - Docs : 문서 수정
    - Style : 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우
    - Refactor : 코드 리팩토링
    - Test : 테스트 코드, 리팩토링 테스트 코드 추가
    - Chore : 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
    - Design : CSS 등 사용자 UI 디자인 변경
    - Comment : 필요한 주석 추가 및 변경
    - Rename : 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우
    - Remove : 파일을 삭제하는 작업만 수행한 경우
    - !BREAKING CHANGE : 커다란 API 변경의 경우
    - !HOTFIX : 급하게 치명적인 버그를 고쳐야 하는 경우

🧾 2. 제목과 본문을 빈행으로 분리 - 커밋 유형 이후 제목과 본문은 한글로 작성하여 내용이 잘 전달될 수 있도록 할 것 - 본문에는 변경한 내용과 이유 설명 (어떻게보다는 무엇 & 왜를 설명)

#️⃣ 3. 제목 첫 글자는 대문자로, 끝에는 . 금지

↩️ 4. 제목은 영문 기준 50자 이내로 할 것

⏺️ 5. 자신의 코드가 직관적으로 바로 파악할 수 있다고 생각하지 말자

👆 6. 여러가지 항목이 있다면 글머리 기호를 통해 가독성 높이기

</p>
</pre>
</div>

<h3>
<a href="https://mangrove-comic-a17.notion.site/Code-Convention-ed0bf7dc4b974f17acae503ba05efc24?pvs=74">📍 코드 컨벤션</a>
</h3>
<div>
<pre>
<p>
🛼 문자열을 처리할 때는 쌍따옴표를 사용하도록 합니다.

🐫 문장이 종료될 때는 세미콜론을 붙여줍니다.

💄 함수명, 변수명은 카멜케이스로 작성합니다.

🐫 가독성을 위해 한 줄에 하나의 문장만 작성합니다.

❓ 주석은 설명하려는 구문에 맞춰 들여쓰기 합니다.

🔠 연산자 사이에는 공백을 추가하여 가독성을 높입니다.

🔢 콤마 다음에 값이 올 경우 공백을 추가하여 가독성을 높입니다.

💬 생성자 함수명의 맨 앞글자는 대문자로 합니다.

🔚 var는 절대 사용하지 않는다. (const를 let 보다 위에 선언한다)

👆 const와 let은 사용 시점에 선언 및 할당을 한다. (함수는 변수 선언문 다음에 오도록한다.)

✏️ 외부 모듈과 내부 모듈을 구분하여 사용한다.

🧮 배열과 객체는 반드시 리터럴로 선언한다. (new 사용 X)

📠 배열 복사 시 반복문을 사용하지 않는다.

😎 배열의 시작 괄호 안에 요소가 줄 바꿈으로 시작되었다면 끝 괄호 이전에도 일관된 줄 바꿈 해야한다. (일관되게 모두 줄 바꿈을 해주어야 한다.)

🧶 객체의 프로퍼티가 1개인 경우에만 한 줄 정의를 허용하며, 2개 이상일 경우에는 개행을 강제한다. (객체 리터럴 정의 시 콜론 앞은 공백을 허용하지 않음 콜론 뒤는 항상 공백을 강제)

🧂 메서드 문법 사용 시 메서드 사이에 개행을 추가한다.

🌭 화살표 함수의 파라미터가 하나이면 괄호를 생략한다.

🍳 변수 등을 조합해서 문자열을 생성하는 경우 템플릿 문자열을 이용한다.

🧇 변수 등을 조합해서 문자열을 생성하는 경우 템플릿 문자열을 이용한다.

🥞 wildcard import는 사용하지 않는다. (import문으로부터 직접 export하지 않는다.)

🥖 한 줄짜리 블록일 경우라도 {}를 생략하지 않으며 명확히 줄 바꿈 하여 사용한다.

🥯 switch-case 사용 시 첫 번째 case문을 제외하고 case문 사용 이전에 개행한다.

🥐 삼중 등호 연산자인 ===, !==만 사용한다.

🚐 반복문 사용은 일반화된 순회 메서드 사용을 권장한다.

🚑 람다함수 안에서 밖에 있는 변수를 사용하지 말라

🚚 코드 블럭 주석 처리를 위해서는 한 줄 주석을 사용한다. 여러 줄 주석을 작성할 때는 \*의 들여쓰기를 맞춘다. 주석의 첫 줄과 마지막 줄은 비워둠

💫 시작 괄호 바로 다음과 끝 괄호 바로 이전에 공백이 있으면 안 된다.

</p>
</pre>
</div>

<p align="right" dir="auto">
<a href="https://github.com/hz-uiw/Mcdonald_Kiosk">TOP 🔼</a>
</p>

<br/>
<br/>

## 🛠 개발 도구

### 1. Back-End

<p>
<img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white"/>
<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white"/>
<img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazonwebservices&logoColor=white"/>
</p>

### 2. Front-End

<p>
<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=JAVASCRIPT&logoColor=black"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTMl5&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/>
</p>

### 3. Database

<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/>

### 4. SCM & Deployment

<p>
<img src="https://img.shields.io/badge/Git-181717?style=for-the-badge&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">
</p>

### 5. Library

-   ### Back-end

<p>
<img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/><img src="https://img.shields.io/badge/MyBatis-271e1f?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABuElEQVR4nO3US4hPcRQH8H9RI+Wx8FohkVfkUdQkC5FXxs6WhZSysSBCTWyRZpryWDHZi7LxSGRBKUtKMmGiRB6ZIvPRqbP4u917/zP/maXv6t77u+f7Ped8z/k1GiMANuI29mJuY7yBM/7F2bGQLcR2TMR8rMVsHMJd/MSftirBKgwrx03Mwv1839BuBdHnAfzCezzH1yR9gjv53IdH+IR3uIWudkXn4G0Sf8GQapxuV2QLvmENJqRXXTiGG0k+lAmsrCLpRTc2Y2rJ+YqKuGhVYFmrLPubSh1ODx7jepSOzoq4+E8mNg+TyxKMH1fnCNahP1pUiNuKF2n2ASzBDxwuE7moNQ5iJqZVVLQYr7G+7HA6XrYQuIxd+I2HOIUdafyUaA/WFSttFlmEjzUCx7G/5rynzuiOVI9snpYED2R77tUI7C4jjrKOYjAn6Fx+25bP13ACM3L2qxDxHc3Em3A1l6iID7iAPblo0ZYH6nGkmPl544dncQuXtWcfvo+RfBALWl1ol3L0RotXWF5JXhBamstW5kkRkcyV2J0RkReEJmFnehTGvsHnvLZjuU7GKI+a+D8aBfwFL0hrRFV1ciwAAAAASUVORK5CYII=&logoColor=white">
<img src="https://img.shields.io/badge/Lombok-ca0124?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEeElEQVR4nO2aW4hVVRjHP01HzZJGJcpuU6l00Uqzgl4sCrqgDz5IZZjZQxlEaKBJWVA9pEEG3QkqESrtAqWhY+WDQZBpF2ys1DLz0s3spqU2Nr/42GvR19eZaVpzBtaZs39wmLPP3vs/a+219ndbS6SkpKSkpKSk1gEOA14H/gBukXoDmMHfvCf1BHAU8L15AHOlngAeNJ3/Augv9QIwAjhoHsAkqSeAl03nV0tPAjgDuBt4E9gItAAXm/NnAW2h8/r3HOkJAKcElxY7Z1lmrnvE/L5cegLAJGAflTkE3GCu3WnOfQyMlFoGmBw6GWkFloTfTwcGmWsHVHhAvwDjpRYBTnMj/2lH7zQwtJ1Zshc4U2oNYIXr/OBOhL77jQHUjkc+AHpLrQCMcu/52Z2870Vz33bgN3N8tdQKwP2m4Uv/x30nAdvCfa8C9xidt6RWoAhfIxPduaOBdcAmf87kAZcBhwPHGNeps6FBcgcYZzr/M9DPnZ/mjNzzQFMHel+aa0+U3AEWmAYvrnB+mOtUdI865a8HRodZol5kivMkx0nOAL2Are1Nf3PdIOCpdiLD9mjNPisELu1o+le4/oIw8n924gF8KLkDrDQNfiMYLv3b9z/uawJuDpng2mBE1VD+aPRulBrw/W2hsTqi35nGj0rQ09kR+QkYKDkDLDINft98/wrok6C32GgslJyhmMK2imOt/KwEPfUCB8L9OqtGSM4AL5kOf+YM4ZEJevOMRrPkDDDeNLbNjf78BL2BwG6jMUFyhSKD+8g0dr35/quGsgmas41GS9ZZIIXrivwO7DHHdyToaVHkW6MxWXIFODWMcuRdl8oOSNCcaTQ+yXb0gb4hYLGuzkZz1yVo9gd2GY1rJFeA+1yMriMeWa05QRct/2a1L5Kx1T9kGvuOM3xNCZrDXAnsKskRYLhzUS0uo0uK14EXjMbbKTOo2wEGhypOZI8zgs2JU3+i0dCZNUZyA+gHrDEN3e8ehhrBoQm6jW4x5CHJDaCPFjZNI3XKL3P+f2xi8URrAZHPtQ4oOQE0AK/wT+4EnjPH0xK1b3NTP68VIAq/vNx1/olw7njgMWB6ovYVwX1G7pKcoEhIVrnOP1mNsrS+Ls7lNWcV8VGEuBtc51eFabqxK++prg26SpHqNUouUCxI2IRGmQ+8Zo7PTdQ+D/jB6HytK0GSAxQW+XYX4WmF56Zw/vyQ9i5KCVGBqcFbRL5JqRN256akNW7UdXQurIK2prePOu1tWZS4KPz7bDcyMbY/tgr6lwBbnLYWTE6oTg+6bujWuca1hve9oQrl8aUVVn2ezmJlh6Liandhxg0IY7ug2Vt3e4WFDb/Ko//rWskFim1qNqafm1i31/f7IuABYAf/Rh/EM8AQyQngWdPIe0NCYj9HmDC4MdT8dUPTlcCtwMMhZY11+0odX5KNlfcAc+ge1HMs1IclOQMMcSWsVNrCXj7d3Hh5tiWsSgAnh50ZO8MKrP3EjUkHwvHWELLq9tbHQxY3ISX/LykpKSkpKZHu5C8+ETRdu+5D6AAAAABJRU5ErkJggg==&logoColor=white">
</p>

-   ### Front-end
<p>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>
<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"/>
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
<img src="https://img.shields.io/badge/Emotion-cb0096?style=for-the-badge&logo=react&logoColor=white">
</p>

### ⛓️ pom.xml(Back-end)

| 라이브러리                          | 용도                                  |
| ----------------------------------- | ------------------------------------- |
| lombok                              | 어노테이션(@)으로 코드 자동 생성      |
| spring-boot-starter-security        | spring security 적용                  |
| spring-boot-starter-validation      | 입력 값 검증                          |
| spring-boot-starter-web             | Spring Web 프로젝트에 필수 라이브러리 |
| spring-boot-starter-test            | 프로젝트 작동을 테스트하는 역할       |
| mybatis-spring-boot-starter         | 백엔드에서 MyBatis 문법 적용          |
| spring-boot-devtools                | 빠른 재시작                           |
| mysql-connector-java                | DB인 MySQL과 연결                     |
| jjwt-api / jjwt-impl / jjwt-jackson | JWT(JSON Web Token) 활용              |
| spring-boot-starter-oauth2-client   | Oauth2 인증                           |
| spring-boot-starter-aop             | spring aop 적용                       |
| spring-boot-starter-thymeleaf       | 동적인 화면 생성의 역할               |

### ⛓️ node_modules(Front-end)

| 모듈 이름                                                                   | 용도                                       |
| --------------------------------------------------------------------------- | ------------------------------------------ |
| emotion/react, emotion/styled                                               | 리액트 내 css 적용                         |
| portone/browser-sdk                                                         | QR 코드로 결제 기능 구현                   |
| react-google-maps/api                                                       | 구글 맵을 불러와 화면에 구현               |
| testing-library/jest-dom, testing-library/react, testing-library/user-event | 리액트 dom 테스트                          |
| axios                                                                       | 서버로 요청을 보내 통신                    |
| firebase                                                                    | 저장된 이미지를 업로드                     |
| react-dom, react-router-dom                                                 | 주소 요청 발생 시 각 페이지로 이동         |
| react-icons                                                                 | 리액트 아이콘을 불러와 사용                |
| react-query                                                                 | 서버 데이터 동기화(fetching, caching) 지원 |
| react-select                                                                | select 요소를 쉽게 사용                    |
| react-switch                                                                | 토글 기능 스위치 구현                      |
| react, react-scripts                                                        | 리액트 라이브러리 적용                     |
| recharts                                                                    | 가져온 데이터를 차트로 시각화하는 역할     |
| recoil                                                                      | 전역 상태 관리                             |
| styled-reset                                                                | 초기 CSS 스타일 재설정                     |
| sweetalert2                                                                 | 알림창 구현                                |
| uuid                                                                        | 고유 아이디 값을 생성하는 함수 제공        |
| web-vitals                                                                  | 사용자의 웹 바이탈 항목 측정               |

<p align="right" dir="auto">
<a href="https://github.com/hz-uiw/Mcdonald_Kiosk">TOP 🔼</a>
</p>

<br/>
<br/>

## 📆 프로젝트 일정

![Image](https://github.com/user-attachments/assets/f5d76794-af35-4d10-a8a5-275daf22d89c)

<p align="right" dir="auto">
<a href="https://github.com/hz-uiw/Mcdonald_Kiosk">TOP 🔼</a>
</p>

<br/>
<br/>

## 📄 API 명세서&ERD 설계도

### 🛰 API 명세서
[https://mangrove-comic-a17.notion.site/da55c3b2cb47486eb592dbc297ae8e01?v=f865787f598c4dec933cb6990c5719cd&pvs=4](https://www.notion.so/API-1ba6b4c1c40a8088bf05f6da67394a8b)

### 📐 ERD 설계도

![ERD 다이어그램](https://github.com/user-attachments/assets/ba929533-2ae5-4b65-b2e8-2989c5875b7e)

<p align="right" dir="auto">
<a href="https://github.com/hz-uiw/Mcdonald_Kiosk">TOP 🔼</a>
</p>

<br/>
<br/>

## 📋 메뉴 구조도

### 🧑‍🤝‍🧑 사용자 메뉴 구조도

![사용자 메뉴 구조도](https://github.com/user-attachments/assets/fa0cec62-2c8a-4b35-87b2-377dc99100f7)

### 👷‍♂️ 관리자 메뉴 구조도
![관리자 메뉴 구조도](https://github.com/user-attachments/assets/c29ba4b1-2ac6-418a-8060-0c45af858e71)

<p align="right" dir="auto">
<a href="https://github.com/hz-uiw/Mcdonald_Kiosk">TOP 🔼</a>
</p>

<br/>
<br/>

## 🖥 화면 구현

### 🔐 관리자 계정 화면

<div align="center" dir="auto">
    <b>회원가입 및 로그인 화면</b>
    <img src="https://github.com/user-attachments/assets/d4ee4323-8ff7-46cf-aae0-2e35884f7291" align="center" width="100%"/>
    <img src="https://github.com/user-attachments/assets/b78b7858-19b4-4909-bdb8-6ca15435fe8" align="center" width="100%"/>
    <img src="https://github.com/user-attachments/assets/f8ab0644-dd1f-40f0-8eda-5c72f426b250" align="center" width="100%"/>
</div>
</br>
</br>
<div align="center" dir="auto">
    <b>메뉴 관리 화면</b>
    <img src="https://github.com/user-attachments/assets/571b67ec-2693-4a74-be21-0bb65e3bb5d4" align="center" width="100%"/>
    <img src="https://github.com/user-attachments/assets/b751a3fc-30dc-4b6e-9436-0e1786956f97" align="center" width="100%"/>
    <img src="https://github.com/user-attachments/assets/46e73636-d758-4bbf-94c0-e229b61ec15c" align="center" width="100%"/>
    
</div>
</br>
</br>
<div align="center" dir="auto">
    <b>제품 관리 화면</b>
    <img src="https://github.com/user-attachments/assets/84b0c11c-20d5-44ae-b77e-c7e82c704a80" align="center" width="100%"/>
    <img src="https://github.com/user-attachments/assets/18f0f32f-f136-4366-9063-5dcffe914cf6" align="center" width="100%"/>
    <img src="https://github.com/user-attachments/assets/1a9b2517-7bb5-4e38-b1c1-055968e79120" align="center" width="100%"/>
    <img src="https://github.com/user-attachments/assets/297e2915-de1e-40e1-af31-7b8f5e8606db" align="center" width="100%"/>
</div>
</br>
</br>
<div align="center" dir="auto">
    <b>매출 집계 조회 화면</b>
    <img src="https://github.com/user-attachments/assets/6aaa707d-21f2-4a6c-b941-cbfd44830bac" align="center" width="100%"/>
    <img src="https://github.com/user-attachments/assets/69c63e81-f482-430a-91ee-f1f34e739481" align="center" width="100%"/>
</div>
</br>
</br>
<div align="center" dir="auto">
    <b>결제 내역 조회 및 취소 화면</b>
    <img src="https://github.com/user-attachments/assets/3f78e538-b01f-45fb-8137-bef73cca0adb" align="center" width="100%"/>
    <img src="https://github.com/user-attachments/assets/86afcce4-38ee-4109-84f3-393c18aa9e1f" align="center" width="100%"/>
    <img src="https://github.com/user-attachments/assets/07dec122-b63a-48f2-a7bb-042428117307" align="center" width="100%"/>
</div>
</br>
</br>
<div align="center" dir="auto">
    <b>관리자 정보 변경 화면</b>
    <img src="https://github.com/user-attachments/assets/d5a30499-8932-4988-81f4-43d0e8af63bc" align="center" width="100%"/>
    <img src="https://github.com/user-attachments/assets/5c800bd9-fb91-4ca6-b7b4-d89d9b74b31f" align="center" width="100%"/>
</div>
</br>
</br>
</br>
</br>

### 🍔 주문 화면
</br>
</br>
<div align="center" dir="auto">
    <b>홈 화면</b></br>
    <img src="https://github.com/user-attachments/assets/c9ccc4b3-637e-472b-8406-f47a8a0b985c" width="50%"/>
</div>
</br>
</br>
<div align="center" dir="auto">
    <b>주문 화면</b></br>
    <img src="https://github.com/user-attachments/assets/9ad22a6e-82c7-4f01-97c3-17d7b2feca17" width="50%"/>
    <img src="https://github.com/user-attachments/assets/7f79cb9c-78c3-4670-89a5-b38b9dc3384d" width="50%"/>
    <img src="https://github.com/user-attachments/assets/248537ed-4833-447f-ad24-59382e124071" width="50%"/>
</div>
</br>
</br>
<div align="center" dir="auto">
    <b>포인트 및 결제</b></br>
    <img src="https://github.com/user-attachments/assets/2917aa6b-e7bf-4c13-87a1-fa8d5a76e282" width="50%"/>
</div>
</br>
</br>
</br>
</br>

<p align="right" dir="auto">
<a href="https://github.com/hz-uiw/Mcdonald_Kiosk">TOP 🔼</a>
</p>

</br>
</br>

## 💡 느낀점

### 권민창(팀장)

<div align="center">
    <img src="https://avatars.githubusercontent.com/u/174016319?v=4" width="200" height="200" />
</div>
<span>처음해보는 프로젝트에 조장이 돼서 부담이 많이 됐지만 팀원들이 저를 많이 도와줘서 정말 감사히 생각하고 있습니다. 강사님이 만드시는 것을 따라 만드는 것이 아닌 스스로 웹페이지를 만들어 보는 기회가 되어서 제 부족한 부분과 보충해야 할 점을 알게 되었습니다. 아쉬운 부분도 있지만, 이번 프로젝트 덕에 여태 학습했던 내용을 되짚어보는 좋은 시간이었다고 생각합니다.</span>

---

### 백진우

<div align="center">
    <img src="https://github.com/user-attachments/assets/abeb65dd-8e54-4ac8-a35e-58560d13211c" width="200" height="200" />
</div>
<span>직접해보면서 배워가는 것들이 많았습니다. 스스로 코드 짜는 것 자체도 공부가 많이 되었고, 팀원들의 코드를 리뷰하는 것도 많은 공부가 되었습니다. 이번 국비 수업 시간이 짧다고 들었는데, 국비 수업 시간이 길어서 다른 팀의 코드를 리뷰할 시간이 있다거나 프로젝트를 2개 해봤으면 좋았을것같습니다.</span>

---

### 최명준

<div align="center">
    <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/83110386/b015e01d-1078-428e-a713-a92b23e4ff6a" width="200" height="200" />
</div>
<span>처음에는 팀원들과 잘 어울릴 수 있을까, 협업은 어떻게 진행될까 하는 걱정이 있었지만, 막상 프로젝트가 시작되고 각자의 역할이 정해지자 다들 자신이 맡은 부분에 집중하며 자연스럽게 협업이 이루어졌습니다.
처음에는 내가 팀에 얼마나 도움이 될 수 있을까 하는 부담도 있었지만, 맡은 부분을 책임지고 해내면서 작은 성취감도 느낄 수 있었습니다</span>


---

### 최석현

<div align="center">
    <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/83110386/ffb0f7a2-6df1-4935-8b3f-036cf89e344b" width="200" height="200" />
</div>
<span>코드를 쓸 때 무작정 쓰는 것 보다 조금이라도 계획을 짜고 써야 나중에 더  편하고 유용하다는 걸 알게 됐고 다른 사람들과 협업하는 것 자체로도 재미있었습니다.</span>
