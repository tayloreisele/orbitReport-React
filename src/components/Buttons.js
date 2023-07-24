import satData from './satData';

const Buttons = ({displaySats, filterByType, setSat}) => {
  return (
    <div>
      {displaySats.map((sat, id) => {
        return (
          <div key={id}>
            <button onClick = {() => filterByType(sat)}>
              {sat} Orbit
            </button>
          </div>
        );
      })}
      <button onClick={() => setSat(satData)}>
        All Orbits
      </button>
    </div>
  );
};

export default Buttons;
