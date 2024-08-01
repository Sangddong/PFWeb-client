"use client";
import LayoutPage from "@/components/layoutPage/LayoutPage";
import Title from "@/components/sectionTitle/Title";
import React from "react";
import style from "./AboutMe.module.css";
import Image from "next/image";
import Card from "@/components/card/Card";
import Link from "next/link";

function AboutMe() {
  const copyToClipBoard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    alert("복사되었습니다");
  };
  return (
    <div id="about-me-wrap">
      <LayoutPage>
        <div className={style.inner}>
          <Title>About Me</Title>
          <div className={style.photo}>
            <p className={style.motion}>
              <Image
                src="/img/profile.png"
                alt="profile"
                layout="fill"
                objectFit="cover"
              />
            </p>
            <div className={style.introduce}>
              <p>
                안녕하세요! 백엔드 개발자 박상희입니다. 저는 주로 Node.js 또는
                Java를 사용하여 백엔드 시스템을 개발합니다. 백엔드 개발을 위해
                데이터베이스, 배포 지식을 쌓고 있으며 프론트엔드에 대한 지식도
                꾸준히 확장해 나가고 있습니다. <br />
                <br />
                처음 프로그래밍을 접했던 것은 대학교 재학 중 수강한 UI/UX
                강의에서였습니다. Processing이라는 프로그램을 통해 제가 코드를
                짜면 원하는대로 결과물이 만들어지는 것에 흥미를 느껴 개발 공부를
                본격적으로 시작하게 되었습니다. 처음엔 눈에 보여지는 디자인
                요소에 흥미를 느꼈지만, 자바와 스프링을 공부하며 데이터를
                정제하고 필요한 데이터를 가져오는 것에 재미를 느끼게 되었고
                데이터베이스를 공부하며 백엔드 개발자가 되기로 결심했습니다.
                <br />
                <br />
                개발자는 프로그래밍을 통해 무엇이든 창조할 수 있다는 무한한
                가능성을 가지고 있다고 생각합니다. 저는 이러한 가능성을 탐구하며
                지속적으로 배우고 성장해나가는 것을 목표로 하고 있습니다.
              </p>
            </div>
          </div>
          <div className={style.cardWrap}>
            <div className={style.card}>
              <Card miniTitle="personal-info">
                <p>
                  <strong>이름</strong> 박상희
                </p>
                <p>
                  <strong>생일</strong> 1998.07.13
                </p>
                <p>
                  <strong>주소</strong> 서울시 강서구
                </p>
              </Card>
            </div>
            <div className={style.card}>
              <Card miniTitle="educated">
                <p>
                  <strong>상명대학교 서울캠퍼스</strong>
                  <br />
                  2017.02 - 2023.02
                </p>
                <p>
                  <strong>웅진X사람인 풀스택 웹 개발자 양성과정</strong>
                  <br />
                  2023.12 - 2024.03
                </p>
              </Card>
            </div>
            <div className={style.card}>
              <Card miniTitle="certificated">
                <p>SQLD</p>
                <p>AIFB</p>
                <p>TOEIC 870</p>
              </Card>
            </div>
            <div className={style.card}>
              <Card miniTitle="contact">
                <p
                  onClick={() => copyToClipBoard("hehe74029@gmail.com")}
                  className={style.copy}
                >
                  <Link href={"mailto: hehe74029gmail.com"}>
                    <strong>e-mail</strong> hehe74029@gmail.com
                  </Link>
                </p>
                <p
                  onClick={() => {
                    copyToClipBoard("01086418018");
                  }}
                  className={style.copy}
                >
                  <strong>phone</strong> 010-8641-8018
                </p>
              </Card>
            </div>
          </div>
        </div>
      </LayoutPage>
    </div>
  );
}

export default AboutMe;
