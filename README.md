# 👫 SK STORE
> 회원가입과 로그인 + 간단한 게시판 기능
<div align="center">
<img width="700" alt="image" src="https://user-images.githubusercontent.com/87024040/232529480-9aeacbf4-71b9-47ad-a31f-57d1feed3b43.png">
</div>

## 👩🏻‍💻 프로젝트 소개
회원가입과 로그인, 간단한 게시판을 만든 **개인** 프로젝트 입니다.<br/>
사용자 보안을 위하여 Firebase를 사용해 **Authentication** 기능을 이용했습니다.<br/>
Firebase로 **Email/Password** 기반으로 회원가입을 할 수 있도록 처리했습니다. <br />
이를 통해 실제 로그인 한 사용자만 게시글을 작성할 수 있도록 구현했습니다.


## 👀  Initial Screen
### 메인화면, 로그인 / 회원가입 화면
<img src="https://user-images.githubusercontent.com/87024040/209430396-49ee8e22-bfed-4d33-8386-e2639172279e.gif" width="430px"><br/>
- 게시물 등록시 로그인이 되어있지 않으면, 자동 로그인 화면으로 이동

### 게시판 / 게시판 등록 화면
<img src="https://user-images.githubusercontent.com/87024040/209430389-c30dcc46-f16d-47dc-bf75-a06f7a8cc41b.gif" width="430px">

## 🛠 주요 기능
- Firebase Authentication 사용
- 회원가입, 로그인 게시판 기능 구현
- 재사용에 유리한 custom hook 사용

## 🚀 사용 기술

<table>
<tr>
 <td align="center">언어</td>
 <td>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=ffffff"/>
 </td>
</tr>
<tr>
 <td align="center">IDE</td>
 <td>
    <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp
</tr>
<tr>
 <td align="center">상태관리</td>
 <td>
  <img src="https://img.shields.io/badge/ContextAPI-1678e0?style=for-the-badge&logo=Recoil&logoColor=ffffff"/>&nbsp  
 </td>
</tr>
<tr>
 <td align="center">라이브러리</td>
 <td>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=ffffff"/>&nbsp  
 <img src="https://img.shields.io/badge/ReactRouter-bf0f32?style=for-the-badge&logo=ReactRouter&logoColor=ffffff"/>
  </td>
</tr>

<tr>
 <td align="center">패키지</td>
 <td>
    <img src="https://img.shields.io/badge/NPM-2C8EBB?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp 
  </td>
</tr>
<tr>
 <td align="center">Formatter</td>
 <td>
  <img src="https://img.shields.io/badge/Prettier-373338?style=for-the-badge&logo=Prettier&logoColor=ffffff"/>&nbsp </td>
</tr>
<tr>
 <td align="center"></td>
 <td><img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">&nbsp</td>
</tr>
</table>

#### 📝 Handwriting code
<span><img src="https://user-images.githubusercontent.com/87024040/206638488-d021914d-b34b-40d5-bb4d-e42524ed4315.jpg" width="300" height="400"></span>
<span><img src="https://user-images.githubusercontent.com/87024040/206638975-ed454f0a-9b78-4989-8957-76fa90602604.jpg" width="300" height="400"></span>


## 👾 주요 개발 이슈
### Issue 1 - [Context API]로그인 토큰 관리

**🚨 Situation**
- Firebase에서 받은 사용자 토큰을 관리하고 사용자 인증 상태를 유지하기 위해 `Context API`를 사용했습니다.
- Context API를 사용하여 사용자 토큰을 전역으로 관리했습니다.
- 이를 통해 다른 컴포넌트에서 로그인 상태를 유지할 수 있게 되었고 코드의 가독성과 유지보수성도 향상시켰습니다.
- 회원 가입할 때 작성한 회원 정보를 Context에 저장한 뒤 로그인합니다.
- 커뮤니티에 글 작성 시 가입했던 이메일이 저장되어 게시글 작성자 이름에 자동 적용됩니다.

<img width="544" alt="image" src="https://user-images.githubusercontent.com/87024040/232700595-6f8b9174-f89e-4e99-bab1-57d23ab9accb.png">

<img width="545" alt="image" src="https://user-images.githubusercontent.com/87024040/232700849-6c2e07ce-ef50-4921-a399-f73862953090.png">


