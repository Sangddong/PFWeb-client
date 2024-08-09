import LayoutPage from "@/components/layoutPage/LayoutPage";
import Title from "@/components/sectionTitle/Title";
import React from "react";
import style from "./Sites.module.css";
import Image from "next/image";
import { SitesList } from "./SiteData";
import Card from "@/components/card/Card";
import Link from "next/link";

function Sites() {
  return (
    <div id="my-sites-wrap">
      <LayoutPage>
        <div className={style.inner}>
          <Title>My Sites</Title>
          <div className={style.siteList}>
            {SitesList.map((site) => (
              <Card key={site.id}>
                <div className={style.site}>
                  <Link href={site.link} target="blank">
                    <Image
                      src={site.src}
                      alt={site.id}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Link>
                </div>
                <p>{site.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </LayoutPage>
    </div>
  );
}

export default Sites;
