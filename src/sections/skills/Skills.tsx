import LayoutPage from "@/components/layoutPage/LayoutPage";
import Title from "@/components/sectionTitle/Title";
import React from "react";
import { back, deploy, front, tools } from "./skill";
import Image from "next/image";
import style from "./Skills.module.css";
import MiniTitle from "@/components/miniTitle/MiniTitle";
import Card from "@/components/card/Card";

function Skills() {
  return (
    <div id="my-skills-wrap">
      <LayoutPage>
        <div className={style.inner}>
          <Title>My Skills</Title>
          <div className={style.skillWrap}>
            <Card miniTitle="Back">
              <div className={style.imageContainer}>
                {back.map((skill) => (
                  <div key={skill.id} className={style.imageWrapper}>
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div>{skill.alt}</div>
                  </div>
                ))}
              </div>
            </Card>
            <Card miniTitle="Front">
              <div className={style.imageContainer}>
                {front.map((skill) => (
                  <div key={skill.id} className={style.imageWrapper}>
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div>{skill.alt}</div>
                  </div>
                ))}
              </div>
            </Card>
            <Card miniTitle="Delpoy">
              <div className={style.imageContainer}>
                {deploy.map((skill) => (
                  <div key={skill.id} className={style.imageWrapper}>
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div>{skill.alt}</div>
                  </div>
                ))}
              </div>
            </Card>
            <Card miniTitle="Tools">
              <div className={style.imageContainer}>
                {tools.map((skill) => (
                  <div key={skill.id} className={style.imageWrapper}>
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div>{skill.alt}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </LayoutPage>
    </div>
  );
}

export default Skills;
