import React, { useState, useEffect } from "react";
import "./App.css";
import { links } from "./links";
// import Iframe from 'react-iframe'

// const handleSubmit = e => {
//   e.preventDefault();
//   console.log('Commencing...')
//   let i = 0
//   while (i < 134) {
//     task(i);
//     i++;
//   }
//   function task(i) {
//     setTimeout(function() {
//     //  window.open(links[i]);
//     console.log((Math.random(1000, 3000) * 2000 + 1000) * i)
//     }, (Math.random(1000, 3000) * 2000 + 1000) * i);
//   }
// }

const emptyArr = [];
const onlyHighLevelEnemies = [
  1119159,
  59647,
  750589,
  922230,
  594067,
  1041099,
  983015,
]
const thanksgivingEvent = [
  126202,
  619334,
  1084127,
  140426,
  763220,
  843358,
  1093964,
  818811,
  903777,
  559874,
  590117,
  589877,
  914499,
  658602,
  861852,
  297870,
  957141,
  949112,
  51306,
  619945,
  317425,
  831050,
  4873,
  1030923,
  1079684,
  1106295,
  996543,
  772519,
  551204,
  831100,
  258469,
  925589,
  31664,
  888743,
  266903,
  784516,
  816593,
  611799,
  820158,
  462067,
  969704,
  896941,
  947903,
  397885,
  1010993,
  278372,
  834449,
  327358,
  4626,
  284073,
  383102,
  603161,
  236282,
  1032074,
  1060498,
  378722,
  980075,
  759022,
  968775,
  1086112,
  947142,
  905889,
  1118768,
  836981,
  238480,
  885730,
  635289,
  916106,
  814777,
  935266,
  992181,
  596168,
]
const iDs = [
  "354739",
  "867577",
  "1114337",
  "660846",
  "1037785",
  "832942",
  "541029",
  "366930",
  "386573",
  "303819",
  "59647",
  "682790",
  "848282",
  "151811",
  "16507",
  "868609",
  "485657",
  "594067",
  "28362",
  "940247",
  "922230",
  "1041099",
  "779988",
  "931474",
  "328385",
  "983015",
  "232697",
  "918322",
  "706436",
  "631877",
  "681901",
  "1031950"
];

function App() {
  const [count, setCount] = useState(0);
  const [flyingMonkeyEvent, setFlyingMonkeyEvent] = useState(0)

  useEffect(() => {
    onlyHighLevelEnemies.forEach((id, index) => {
      emptyArr.push(`http://www.samuraioflegend.com/attack.php?ID=${id}`);
      emptyArr.push(`http://www.samuraioflegend.com/attack.php?ID=${id}&sc=X`);
      emptyArr.push(
        `http://www.samuraioflegend.com/attack.php?nextstep=1&ID=${id}&wepid=3066&ds=9`
      );
      emptyArr.push(`http://www.samuraioflegend.com/attacktake.php?ID=${id}`);
     
      if ((index + 1) % 3 === 0) {
        emptyArr.push(
          `http://www.samuraioflegend.com/crystaltemple.php?spend=refill`
        );
      }
    });
  }, []);

  const onClick = useEffect(() => {
    const timer = setInterval(() => {
      if (count < emptyArr.length) {
        setCount(count + 1);
        window.open(emptyArr[count])
        // console.log(emptyArr[count]);
      }
    }, Math.random(300) * 600 + 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Click the button to commence leveling</p>
        <p>Link Number: {count}</p>

        <button onClick={null}>Attack</button>
      </header>
    </div>
  );
}

export default App;
