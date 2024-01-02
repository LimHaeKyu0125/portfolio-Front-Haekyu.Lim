import React from 'react';
import HtmlImage from '../../assets/images/html_image.svg';
import ThymeleafImage from '../../assets/images/thymeleaf_image.png';
import CssImage from '../../assets/images/css_image.svg';
import ScssImage from '../../assets/images/scss_image.svg';
import JqueryImage from '../../assets/images/jquery_image.svg';
import JsImage from '../../assets/images/js_image.svg';
import TjsImage from '../../assets/images/typescript_image.png';
import JavaImage from '../../assets/images/java_image.svg';
import SpringImage from '../../assets/images/spring_image.png';
import JPA from '../../assets/images/jpa_image.png';
import Mysql from '../../assets/images/mysql_image.png';
import Hibernate from '../../assets/images/hibernate_image.svg';
import QueryDsl from '../../assets/images/querydsl_image.png';
import GitImage from '../../assets/images/git_image.svg';

export default function MySkill() {
  const stackItems = [
    {
      src: HtmlImage,
      alt: 'HTML',
      title: 'HTML',
    },
    {
      src: ThymeleafImage,
      alt: 'THYMELEAF',
      title: 'THYMELEAF',
    },
    {
      src: CssImage,
      alt: 'CSS',
      title: 'CSS',
    },
    {
      src: ScssImage,
      alt: 'SCSS',
      title: 'SCSS',
    },
    {
      src: JqueryImage,
      alt: 'JQUERY',
      title: 'JQUERY',
    },
    {
      src: JsImage,
      alt: 'JAVASCRIPT',
      title: 'JAVASCRIPT',
    },
    {
      src: TjsImage,
      alt: 'TYPESCRIPT',
      title: 'TYPESCRIPT',
    },
    {
      src: JavaImage,
      alt: 'JAVA',
      title: 'JAVA',
    },
    {
      src: SpringImage,
      alt: 'SPRING BOOT',
      title: 'SPRING BOOT',
    },
    {
      src: JPA,
      alt: 'JPA',
      title: 'JPA',
    },
    {
      src: Mysql,
      alt: 'MYSQL',
      title: 'MYSQL',
    },
    {
      src: Hibernate,
      alt: 'HIBERNATE',
      title: 'HIBERNATE',
    },
    {
      src: QueryDsl,
      alt: 'QUERYDSL',
      title: 'QUERYDSL',
    },
    {
      src: GitImage,
      alt: 'GIT',
      title: 'GIT',
    },
  ];

  return (
    <>
      <section className="stack-container">
        <div className="stack-item-box">
          <div className="stack-container-title">
            FLEX BOX<span className="blind">My Skill</span>
          </div>
          <ul className="stack-item-list">
            {stackItems.map((item, idx) => {
              return (
                <li className="stack-item" key={idx}>
                  <img src={item.src} alt={item.alt} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
