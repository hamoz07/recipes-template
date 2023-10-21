// eslint-disable-next-line react/prop-types
const Headline = ({headline,desc,completeDesc,pitem}) => {
  return (
    <div className="headline">
      <h2>{headline}</h2>
      {pitem &&
      <p>
        {desc}<br />{completeDesc}
      </p>
      }
    </div>
  );
};

export default Headline;
