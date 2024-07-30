export const Sweatier = {
  name: "Sweatier",
  info: "Sweatier는 수준별 운동 매칭을 통해 실력이 비슷한 사람들과 운동을 즐기고 사용자의 운동 수준(티어)을 평가받을 수 있는 서비스입니다.땀을 의미하는 Sweat 💧와 등급을 의미하는 Tier 🎖️를 결합해, 유저들과 함께 땀을 흘리며 당신의 운동 티어를 올려보세요!",
  tech: [
    "/img/front/next.png",
    "/img/front/tailwind.png",
    "/img/deploy/vercel.png",
    "/img/back/nest.png",
    "/img/back/prisma.png",
    "/img/back/postgresql.png",
    "/img/deploy/gcp.png",
  ],
  role: "백엔드 - 경기 관련 로직 구현, 유효성 검사 및 에러처리, postman api작성",
  troubleShooting:
    "timezone이슈 - prisma에서 timezone을 지원하지 않는 문제로 인해 rds 시스템을 변경하는 등의 과정을 거쳤고 라이브러리를 사용하여 해결하였습니다.",
  links: [
    {
      id: "github",
      link: "https://github.com/team-sweatier",
      src: "/img/tools/github.png",
    },
    {
      id: "postman-api",
      link: "https://documenter.getpostman.com/view/32959422/2sA2xpRUCX",
      src: "/img/tools/postman.png",
    },
  ],
};

export const Homelog = {
  name: "Home-Log",
  info: "🏠 Home-log는 집에 초대된 손님들이 방명록을 남기고, 집 주인이 방명록을 모아볼 수 있는 서비스입니다. 집에서 만든 소중한 추억들을 한 곳에 모아 남겨보세요!✨",
  tech: [
    "/img/front/next.png",
    "/img/front/tailwind.png",
    "/img/deploy/vercel.png",
    "/img/back/nest.png",
    "/img/back/prisma.png",
    "/img/back/postgresql.png",
    "/img/tools/docker.png",
    "/img/deploy/awsec2.png",
  ],
  role: "백엔드 - 카카오 소셜로그인 구현, 프로필 관련 로직 구현, swagger api 작성 / 프론트 - 로그인 페이지, 홈 페이지, 프로필 수정 페이지",
  troubleShooting: "준비중",
  links: [
    {
      id: "github",
      link: "https://github.com/HomeLog",
      src: "/img/tools/github.png",
    },
  ],
};
