import { info } from '../../constants';

const Tag = () => {
  return (
    <>
      {info.skillTags.map((tag, i) => (
        <button className='resume-btn text-[15px]' key={i}>
          {tag}
        </button>
      ))}
    </>
  );
};

export default Tag;
