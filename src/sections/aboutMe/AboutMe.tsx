import LayoutPage from "@/components/layoutPage/LayoutPage";
import Title from "@/components/sectionTitle/Title";
import React from "react";

function AboutMe() {
  return (
    <div id="about-me-wrap">
      <LayoutPage>
        <div>
          <Title>About Me</Title>
          <div>image-slider</div>
          <div id="introducing">
            <p>
              <strong>안녕하세요! 개발자 박상희입니다.</strong>
            </p>
            <p>
              저는 주로 Node.js 또는 Java를 사용하여 백엔드 시스템을 개발합니다.
              백엔드 개발을 위해 데이터베이스, 배포 지식을 쌓고 있으며
              프론트엔드에 대한 지식도 꾸준히 확장해 나가고 있습니다.
            </p>
            <p>
              제가 개발자라는 꿈을 꾸게 된 것은 프로그래밍을 통해 무엇이든
              창조할 수 있다는 무한한 가능성 때문입니다. 저는 이러한 가능성을
              탐구하며 지속적으로 배우고 성장해나가는 것을 목표로 하고 있습니다.
            </p>
          </div>
        </div>
      </LayoutPage>
    </div>
  );
}

export default AboutMe;
