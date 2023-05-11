![bottom](https://github.com/Final-Project-Team11/Meer_catlender_FE/assets/124993422/c7aac152-34cd-40f2-ac32-2528b76f06c5)

---
# Meer : 캣린더
![image](https://github.com/Final-Project-Team11/Meer_catlender_FE/assets/124577334/eb462824-687b-485c-9223-0399ef3c82a4)

### Together : 2023.03.31 ~ 2023.05.12

---
## Link

### Meer : [캣린더 Notion](https://magical-puppy-b7f.notion.site/Final_Project_Team11-Meer-71cb657348d24b188150a5e12df42b86)
### Meer : [캣린더 Domain](https://meercatlendar.store)
---
## Github

> FE : https://github.com/Final-Project-Team11/Meer_catlender_FE 

> BE : https://github.com/Final-Project-Team11/Meer_catlender_BE

---

## 팀원 소개 


| 역할 | 이름   | 기술 스택 |  Github 링크              |
| --- | ------ | --------- | ------------------------ |
| 팀장 | 최다현 | React     |  https://github.com/choidami5126 |
| 팀원 | 박찬우 | React     |  https://github.com/chanw9503 |
| 팀원 | 송철환 | React     |  https://github.com/SsongCh94 |
| 팀장 | 류현주 | Node      |  https://github.com/ryu820 |
| 팀원 | 주영성 | Node      |  https://github.com/wndudtjd |
| 팀원 | 민수현 | Node      |  https://github.com/SuHyeon-Eleven |
| 귀하신 분 | 이미현 | Designer   | -                        |


## 프로젝트 소개 
Meer : 캣린더는 팀원들이 회사를 다니며 겪었던 불편했던 경험들에 시작되었습니다.

- 여러 상급자에게 결제를 받아야하는 결재 프로세스
- 일정관리, 휴가관리, 사내업무 등을 통합적인 사이트에서 사용하지 못하던 경험
- 휴가를 겹치지 않게 사용하기 위해서 여러 팀원에게 묻고 다녔던 경험
겪었던 불편함들을 개선하고 통합적인 일정&업무 관리 서비스를 기획하게 되었습니다.

---

## 기능 소개

### 회원가입&로그인

- 회원가입은 `대표 관리자`만 가능합니다.
대표 관리자는 회원가입 후 좌측 상단 카트 박스에 `유저 관리`를 통해
유저 조회&생성 페이지로 이동하여
`기존 유저를 조회` 하거나 `신규 유저를 생성`할 수 있습니다.
- 신규 유저 생성 시 비밀번호는 아이디와 같으며, `최초 로그인 시 변경`합니다.

### 메인 페이지(캘린더)

- 우측 상단 `Change Icon`을 통해 `일정 ←→ 휴가 탭`을 변경할 수 있습니다.
- 캘린더를 `클릭, 드래그` 하여 일정, 휴가를 생성할 수 있습니다.
- 일정 탭에서는 `회의, 이벤트, 출장, 미팅` ****중 선택하여 작성합니다.
파일을 첨부하거나, 팀원을 멘션할 수 있습니다.
- 우측 상단 드롭다운을 통해 `문서류(보고서, 회의록, 결제요청서)`를 작성할 수 있습니다.
- 휴가 탭에서는 `휴가, 반차, 연차, 병가`를 선택하여 작성할 수 있습니다.
- 좌측 Todo 보드를 통해 내 업무 리스트들을 작성하고, 확인할 수 있습니다.
**(마이페이지와 연동됩니다.)**
- 프로필 카드의 `수정 아이콘`을 통해, 유저의 정보를 수정할 수 있습니다.

### 마이페이지(관리자&직원)

- 프로필 카드의 기능은 메인 페이지와 동일합니다.
- Todo 리스트의 기능은 메인 페이지와 동일합니다.
- 상단 미니 캘린더로 `금주의 일정을 확인`할 수 있고 클릭 시 메인 페이지로 이동합니다.
- 좌측 하단 내가 올린 최근 휴가의 `승인, 반려, 대기중` 상태에 따라 아이콘이 변경됩니다.

- **언급된 일정** : 내가 멘션된 일정 리스트를 볼 수 있습니다.(관리자의 경우 모든 일정에 태그 됩니다.)
- **보고서** : 팀내에 작성된 보고서 리스트를 볼 수 있습니다.
클릭 시 상세 내용 확인이 가능합니다.
- **출장관련/내가 올린 결재** : 
`관리자` 직원이 올린 출장 일정을 확인하고 승인/반려 합니다.
`직원` 내가 올린 결재 리스트와 승인/반려 상태를 확인할 수 있습니다.
- 휴가 요청 : 
`관리자`의 경우에만 표출 됩니다. 팀원이 올린 휴가에 대해서 승인/반려 할 수 있습니다.
- **회의록, 보고서** : 팀내에 작성된 회의록과 보고서 리스트를 볼 수 있습니다.
클릭 시 상세 내용 확인이 가능합니다
- **결재요청/ 내가 올린 파일** : 
`관리자`직원이 올린 결재요청을 확인하고 승인/반려 할 수 있습니다. 
`직원` 팀내에 내가 올린 파일 리스트를 볼 수 있습니다.

### 대표 관리자 페이지(유저 조회&생성)

- 전체 유저를 조회할 수 있고, `팀별로 필터링, 이름으로 특정 유저를 검색`할 수 있습니다.
- 특정 유저 클릭 시 `상세 정보를 조회`할 수 있습니다
상세 조회 중 유저의 정보를 `수정, 삭제`할 수 있습니다.
- 신규 유저 계정을 `생성`할 수 있습니다.
---
## 서비스 아키택쳐

![Service-Architecture (1)](https://github.com/Final-Project-Team11/Meer_catlender_FE/assets/124577334/2d549489-3aaf-40d2-902e-ecc28485db05)

---


# Front-End Tool
<div align=center> 
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=react query&logoColor=white">
</div>

# Back-End Tool
<div align=center> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/amazon ec2-FF9900?style=for-the-badge&logo=amazon ec2&logoColor=white">
  <img src="https://img.shields.io/badge/pm2-2B037A?style=for-the-badge&logo=pm2&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/json web tokens-000000?style=for-the-badge&logo=json web tokens&logoColor=white">
  <img src="https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white">
  <img src="https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/github actions-2088FF?style=for-the-badge&logo=github actions&logoColor=white">
  <img src="https://img.shields.io/badge/multer-F46519?style=for-the-badge&logo=multer&logoColor=white">
  <img src="https://img.shields.io/badge/amazon rds-527FFF?style=for-the-badge&logo=amazon rds&logoColor=white">
</div>


