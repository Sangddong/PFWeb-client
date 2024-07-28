import LayoutPage from "@/components/layoutPage/LayoutPage";
import Title from "@/components/sectionTitle/Title";
import React from "react";
import style from "./AboutMe.module.css";

function AboutMe() {
  return (
    <div id="about-me-wrap">
      <LayoutPage>
        <div className={style.inner}>
          <div>
            <Title>About Me</Title>
            <div>image-slider</div>
            <div id="introducing">
              <p>
                안녕하세요! 개발자 박상희입니다. 저는 주로 Node.js 또는 Java를
                사용하여 백엔드 시스템을 개발합니다. 백엔드 개발을 위해
                데이터베이스, 배포 지식을 쌓고 있으며 프론트엔드에 대한 지식도
                꾸준히 확장해 나가고 있습니다.
              </p>
              <p>
                제가 개발자라는 꿈을 꾸게 된 것은 프로그래밍을 통해 무엇이든
                창조할 수 있다는 무한한 가능성 때문입니다. 저는 이러한 가능성을
                탐구하며 지속적으로 배우고 성장해나가는 것을 목표로 하고
                있습니다.
              </p>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <p>information</p>
                <ul>
                  <li>이름 : 박상희</li>
                  <li>생일 : 1998.07.13</li>
                  <li>주소 : 서울 강서구</li>
                </ul>
              </li>
              <li>
                <p>educated</p>
                <ul>
                  <li>
                    <strong>상명대학교 서울캠퍼스</strong> 2017.02 - 2023.02
                  </li>
                  <li>
                    <strong>웅진X사람인 풀스택 웹 개발자 양성과정</strong>{" "}
                    2023.12 - 2024.03
                  </li>
                </ul>
              </li>
              <li>
                <p>certificated</p>
                <ul>
                  <li>SQLD</li>
                  <li>AIFB</li>
                  <li>TOEIC 870</li>
                </ul>
              </li>
              <li>
                <p>contact</p>
                <ul>
                  <li>e-mail : hehe74029@gmail.com</li>
                  <li>phone : 010-8641-8018</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </LayoutPage>
    </div>
  );
}

export default AboutMe;
