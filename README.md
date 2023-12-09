# 지피타로 | GPTarot

<div align="center">

![한글버전 인트로-min](https://github.com/agnes0304/GPTarot/assets/86249667/f92fc85b-047e-4d43-ae9c-6a4ca058b5e3)

</div>

## 지피타로?

OpenAI api, DeepL api를 활용하여 유저가 작성한 운세 질문에 대해 답을 얻고 SNS을 통해 지인과 결과를 공유할 수 있는 서비스입니다. 


</br></br>



## 프로젝트 정보
- 👤 개인 / 2023년 10월 ~ 11월
- 배포링크: <a href="https://gptarot.jiwoo.best">GPTarot</a>
- 서버 레포지토리: <a href="https://github.com/agnes0304/tarot-reader-backend">tarot-reader-backend</a>

</br></br>

## 개발 환경 및 기술 스택

<h4 align="center">Client</h4>
<div align="center">

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)


</div>

<h4 align="center">Server</h4>
<div align="center">
  
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

</div>


<h4 align="center">Deployment</h4>
<div align="center">
  
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Flyio](https://img.shields.io/badge/fly.io-A682E8.svg?style=for-the-badge&logo=flyio&logoColor=white)

</div>

<h4 align="center">Others (Web services)</h4>
<div align="center">
   
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)
![PlanetScale](https://img.shields.io/badge/planetscale-%23000000.svg?style=for-the-badge&logo=planetscale&logoColor=white)

</div>

</br></br>

## 구현 기능

### 공유 기능

- 클립보드 복사 구현
  - 다양한 환경(웹,모바일,사파리,크롬 등)에 대응할 수 있는 개발
  - <a href="https://velog.io/@inmyhead/%ED%81%B4%EB%A6%BD%EB%B3%B4%EB%93%9C-%EB%B3%B5%EC%82%AC-%EB%A7%81%ED%81%AC-%EA%B3%B5%EC%9C%A0%ED%95%98%EA%B8%B0-%EA%B8%B0%EB%8A%A5-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%82%AC%ED%8C%8C%EB%A6%AC%ED%81%AC%EB%A1%AC-%EC%95%A0%ED%94%8C%EA%B8%B0%EA%B8%B0-%EC%97%90%EB%9F%AC">관련 글 바로가기</a>
- 카카오톡 공유하기 구현
  - <a href="https://velog.io/@inmyhead/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1-%EA%B3%B5%EC%9C%A0%ED%95%98%EA%B8%B0-%EB%A7%8C%EB%93%A4%EA%B8%B0-%ED%8A%B8%EC%9C%84%ED%84%B0">관련 글 바로가기</a>
  - <a href="">데모 영상 바로가기</a>

</br>

### 사용자 경험 고려한 컴포넌트 구성

- 웹 클릭을 고려한 카드 스프레드와 모바일 터치를 고려한 카드 스프레드 구분
  - <a href="">데모 영상 바로가기</a>
- Open AI의 한국어를 보완하기 위해 번역 API, DeepL을 활용하여 두 가지 언어 지원
- 추가 api 요청으로 발생하는 응답 지연에 대한 사용자 경험 개선을 위해 별도 안내 컴포넌트 추가


</br></br>

## 데모 영상

### 🎦 웹 카드스프레드, 모바일 카드 스프레드

![웹 용 카드 스프레드, 앱 용 카드 스프레드](https://github.com/agnes0304/chronos-nextjs/assets/86249667/ca1c65dd-f139-4009-93ca-65db24a5f5a9)


### 🎦 링크 클립보드 복사 및 카카오톡 공유하기

![링크공유 및 카톡공유](https://github.com/agnes0304/chronos-nextjs/assets/86249667/900d95a9-f5f7-4cff-93db-81e2c6f3fe70)


</br></br></br>

---

</br>

# GPTarot

GPTarot is where AI meets mysticism, offering a unique digital tarot reading experience. It's an engaging way to explore fortune-telling with a modern twist, designed to connect and share with friends.

Technically, GPTarot is built using TypeScript for type-safe code and React for dynamic user interfaces. The backend is powered by JavaScript with Express.js, and data is managed using MySQL. Hosted on Vercel and Fly.io, the project benefits from the scalability and performance of these platforms.

<div align="center">
  
![영어버전 인트로-min](https://github.com/agnes0304/GPTarot/assets/86249667/1c7db3a6-f367-48f1-8228-6c453c6690f2)
</div>

