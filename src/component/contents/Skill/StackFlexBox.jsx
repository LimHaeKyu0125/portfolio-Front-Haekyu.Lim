import React from 'react';

export default function StackFlexBox() {
  const stackItems = [
    {
      alt: 'HTML',
      title: 'HTML',
    },
    {
      alt: 'CSS',
      title: 'CSS',
    },
    {
      alt: 'SCSS',
      title: 'SCSS',
    },
    {
      alt: 'JQUERY',
      title: 'JQUERY',
    },
    {
      alt: 'JAVASCRIPT',
      title: 'JAVASCRIPT',
    },
    {
      alt: 'TYPESCRIPT',
      title: 'TYPESCRIPT',
    },
    {
      alt: 'JAVA',
      title: 'JAVA',
    },
    {
      alt: 'SPRING BOOT',
      title: 'SPRING BOOT',
    },
    {
      alt: 'MYSQL',
      title: 'MYSQL',
    },
    {
      alt: 'QUERYDSL',
      title: 'QUERYDSL',
    },
    {
      alt: 'GIT',
      title: 'GIT',
    },
  ];

  return (
    <>
      <section className="stack-container">
        <div>
          <ul className="stack-item-list">
            {stackItems.map((item, idx) => {
              return (
                <li className="stack-item" key={idx}>
                  <img src="" alt={item.alt} />
                  <span className="blind">{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
