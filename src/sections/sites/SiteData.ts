export interface Sites {
  id?: string;
  link?: string;
  src?: string;
  content?: string;
}
export const SitesList: Sites[] = [
  {
    id: "tistory-cs",
    link: "https://sangddongvoid.tistory.com/",
    src: "/img/tistory.png",
    content: "CS지식을 기록하는 기술 블로그입니다.",
  },
  {
    id: "tistory-back",
    link: "https://sangddong-back.tistory.com/",
    src: "/img/tistory.png",
    content: "Backend 개발 관련 지식을 기록하는 기술 블로그입니다.",
  },
  {
    id: "tistory-front",
    link: "https://sangddong-front.tistory.com/",
    src: "/img/tistory.png",
    content: "Frontend 개발 관련 지식을 기록하는 기술 블로그입니다.",
  },
  {
    id: "github",
    link: "https://github.com/Sangddong",
    src: "/img/tools/github.png",
    content: "깃허브 주소입니다.",
  },
  {
    id: "intagram",
    link: "https://www.instagram.com/3d.model.blender/",
    src: "/img/instagram.png",
    content: "제작한 3D모델을 올리는 인스타그램입니다.",
  },
  {
    id: "naver-blog",
    link: "https://blog.naver.com/dbsnjdbsnj1227",
    src: "/img/blog.png",
    content: "일상 일기를 기록하는 블로그입니다.",
  },
];
