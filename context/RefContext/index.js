import { createContext } from 'react';

export const RefContext = createContext();

const RefState = (props) => {
  const moveAbout = () => {
    window.scrollTo({
      behavior: 'smooth',
      top:
        document.getElementById('About').getBoundingClientRect().top +
        window.pageYOffset -
        80,
    });
  };
  const moveContact = () => {
    window.scrollTo({
      behavior: 'smooth',
      top:
        document.getElementById('Contact').getBoundingClientRect().top +
        window.pageYOffset -
        80,
    });
  };

  return (
    <RefContext.Provider
      value={{
        moveAbout,
        moveContact,
      }}
    >
      {props.children}
    </RefContext.Provider>
  );
};

export default RefState;
