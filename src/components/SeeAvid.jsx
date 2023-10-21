import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
/* eslint-disable react/no-unescaped-entities */
const SeeAvid = () => {
  return (
    <section className="explore_by-vid">
      <h3>
        When a man's stomach is full it makes <br /> no difference whether he is rich
        or poor.
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus <br />
        a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
      </p>
      <a href="https://youtu.be/bZx8rPd-PKQ">
      <FontAwesomeIcon icon={faPlay} className='mx-2'/>Watch Our Story

      </a>
    </section>
  );
};

export default SeeAvid;
