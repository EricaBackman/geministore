
import styled from 'styled-components';
import { useState } from 'react';

function MoonIcon() {
  const [moon, setMoon] = useState(false)

    function toggleMoon() {
      return setMoon(!moon)
    }

    return (
      <Moon onClick={toggleMoon}>
      {moon ? (
        <div className="filled-moon">
          <ion-icon className="outline" name="moon"></ion-icon>
        </div>
      ) : (
        <div className="moon">
          <ion-icon name="moon-outline"></ion-icon>
        </div>
      )}
    </Moon>
    );

}

export default MoonIcon

const Moon = styled.div`
.moon {
  display: inline;
  position: relative;
  left: 50px;
  bottom: 35px;
  font-size: 1.6rem;
  cursor: pointer;
}

.filled-moon {
  display: inline;
  position: relative;
  left: 50px;
  bottom: 35px;
  font-size: 1.6rem;
  cursor: pointer;
  color: yellow;
}
`
