export interface Link {
  id: string;
  link: string;
  src: string;
}

export interface Portfolio {
  name: string;
  info: string;
  team: string;
  term: string;
  image: string;
  tech: string[];
  role: string;
  troubleShooting: string;
  links: Link[];
}
export const portfolios: Portfolio[] = [
  {
    name: "Sweatier",
    info: "💧Sweatier는 수준별 운동 매칭을 통해 실력이 비슷한 사람들과 운동을 즐기고 사용자의 운동 수준🎖️을 평가받을 수 있는 서비스입니다.",
    team: "back-3 / front-3 / designer-1",
    term: "2024.02 - 2024.03",
    image: "/img/sweatier.png",
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
  },
  {
    name: "Home-Log",
    info: "🏠 Home-log는 집에 초대된 손님들이 방명록을 남기고, 집 주인이 방명록을 모아볼 수 있는 서비스입니다. 집에서 만든 소중한 추억들을 한 곳에 모아보세요!✨",
    team: "full stack - 2",
    term: "2024.05 - 2024.07",
    image: "/img/slide1.png",
    tech: [
      "/img/front/next.png",
      "/img/front/tailwind.png",
      "/img/deploy/vercel.png",
      "/img/back/nest.png",
      "/img/back/prisma.png",
      "/img/back/postgresql.png",
      "/img/deploy/docker.png",
      "/img/deploy/awsec2.png",
    ],
    role: "카카오 소셜로그인 기능 구현, 프로필 관련 로직 구현, 로그인 페이지 구현, 홈페이지 구현, 프로필 수정 페이지 구현, swagger api 작성",
    troubleShooting: "준비중",
    links: [
      {
        id: "github",
        link: "https://github.com/HomeLog",
        src: "/img/tools/github.png",
      },
    ],
  },
];
