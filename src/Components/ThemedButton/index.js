import React from 'react';

import { useStateValue } from '../../State';

const ThemedButton = () => {
  const [{theme} , dispatch] = useStateValue();

  console.log(theme)

  return (
    <button
      primary={theme.primary}
      onClick={() => dispatch({
        type: 'changeTheme',
        newTheme: { primary: 'blue'}
      })}
    >
      Make me blue!
    </button>
  );
}

export default ThemedButton