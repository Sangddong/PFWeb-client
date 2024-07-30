import LayoutPage from "@/components/layoutPage/LayoutPage";
import Title from "@/components/sectionTitle/Title";
import React from "react";
import { back, deploy, front, tools } from "./skill";
import Image from "next/image";
import style from "./Skills.module.css";

function Skills() {
  return (
    <div id="my-skills-wrap">
      <LayoutPage>
        <div className={style.inner}>
          <Title>My Skills</Title>
          <div className={style.skillWrap}>
            <ul className={style.skill}>
              <li>
                <div className={style.skillKind}>Back</div>
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
              </li>
              <li>
                <div className={style.skillKind}>Front</div>
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
              </li>
              <li>
                <div className={style.skillKind}>Tools</div>
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
              </li>
              <li>
                <div className={style.skillKind}>Deploy</div>
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
              </li>
            </ul>
          </div>
        </div>
      </LayoutPage>
    </div>
  );
}

export default Skills;
