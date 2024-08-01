import LayoutPage from "@/components/layoutPage/LayoutPage";
import Title from "@/components/sectionTitle/Title";
import React from "react";
import { back, deploy, front, tools } from "./skill";
import Image from "next/image";
import style from "./Skills.module.css";
import Card from "@/components/card/Card";

function Skills() {
  return (
    <div id="my-skills-wrap">
      <LayoutPage>
        <div className={style.inner}>
          <Title>My Skills</Title>
          <ul className={style.skillWrap}>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
              <Card miniTitle="Devops">
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
            </li>
            <li>
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
            </li>
          </ul>
        </div>
      </LayoutPage>
    </div>
  );
}

export default Skills;
