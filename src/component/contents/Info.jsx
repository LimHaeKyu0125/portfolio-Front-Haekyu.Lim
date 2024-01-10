import React from 'react';

export default function Info() {
  return (
    <>
      <section className="info-container">
        <div className="info-item-box">
          <div className="info-container-title">
            Info<span className="blind">Info</span>
          </div>
          <div className="info-item-list">
            <div className="info-picture">
              <img src="" alt="test" />
            </div>
            <ul className="info-item-content">
              <li className="info-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis aspernatur similique voluptatibus ab laudantium,
                asperiores est ut? Odit quisquam laudantium rerum molestiae
                repellendus, nemo unde expedita nesciunt perspiciatis
                consectetur aut.
              </li>
              <li className="info-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                harum velit eum ab distinctio eos exercitationem pariatur
                voluptate deserunt eaque iste omnis consequuntur culpa!
                Molestias nihil placeat magnam laudantium dolore.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
