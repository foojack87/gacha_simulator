/* eslint-disable react/prop-types */
import { useState } from 'react';
import SingleResult from './SingleResult';
import TenResult from './TenResult';
import Modal from '../layout/Modal';

const SeeleBanner = () => {
  const [pullResult, setPullResult] = useState([]);
  const [fiveStarCounter, setFiveStarCounter] = useState(0);
  const [fourStarCounter, setFourStarCounter] = useState(0);
  const [isSeele, setIsSeele] = useState();
  const [pullHistory, setPullHistory] = useState([]);
  const [isPullingSingle, setIsPullingSingle] = useState(false);
  const [isPullingTen, setIsPullingTen] = useState(false);
  const [openRecordModal, setOpenRecordModal] = useState(false);

  const possibleResults = {
    // 0.6% chance of drawing something from the fiveStars array. If drawed fiveStars array, 50% chance result is 'Seele', every 90 draws will result in a fiveStars. Starting from 74th draw each draw will increase the chance of drawing from the fiveStars array by 6%. If the previous fiveStars was not 'Seele', then the next fiveStar is 100% to be 'Seele'. Whenever a result is drawn from the fiveStars array, counter resets to 0.
    fiveStars: [
      'Seele',
      'Himeko',
      'Welt',
      'Bronya',
      'Gepard',
      'Clara',
      'Yanqing',
      'Bailu',
    ],

    // 5.1% chance of drawing something from the fourStars array, if drawed from fourStars, 50% it will be from the characters array, and 50% it will be from the lightcones array every 10 draws will atleast gaurantee a result from the fourStars array.
    fourStars: {
      characters: [
        'Natasha',
        'Hook',
        'Pela',
        'March 7th',
        'Herta',
        'Asta',
        'Serval',
        'Arlan',
        'Sampo',
        'Dan Heng',
        'Sushang',
        'Qingque',
        'Tingyun',
      ],
      lightcones: [
        'Post-Op Conversation',
        'Good Night and Sleep Well',
        'Day One of My New Life',
        'Only Silence Remains',
        'Memories of the Past',
        'The Moles Welcomes You',
        'The Birth of the Self',
        'Shared Feeling',
        'Eyes of the Prey',
        'Landaus Choice',
        'Swordplay',
        'Planetary Rendezvous',
        'A Secret Vow',
        'Make the World Clamor',
        'Perfect Timing',
        'Resolution Shines As Pearls of Sweat',
        'Trend of the Universal Market',
        'Subscribe for More!',
        'Dance! Dance! Dance!',
        'Under the Blue Sky',
        'Genuises Repose',
      ],
    },

    // If draw result is neither from fiveStars or fourStars, then it will be something from threeStars.
    threeStars: [
      'Arrows',
      'Cornucopia',
      'Collapsing Sky',
      'Amber',
      'Void',
      'Chorus',
      'Data Bank',
      'Darting Arrow',
      'Fine Fruit',
      'Shattered Home',
      'Defense',
      'Loop',
      'Meshing Cogs',
      'Passkey',
      'Adversarial',
      'Multiplication',
      'Mutual Demise',
      'Pioneering',
      'Hidden Shadow',
      'Mediation',
      'Sagacity',
    ],
  };

  const drawResult = () => {
    let result;
    console.log(isSeele);

    let fiveCounter = fiveStarCounter + 1;
    let fourCounter = fourStarCounter + 1;
    console.log(fiveCounter);
    console.log(fourCounter);

    const randNum = Math.random();
    console.log(randNum);

    let fiveStarProbability = 0.006;
    const fourStarProbability = 0.051;

    if (fiveCounter >= 74) {
      fiveStarProbability = (fiveCounter - 73) * 0.06;
    }

    console.log(fiveStarProbability);

    if (
      randNum < fiveStarProbability ||
      (fiveCounter > 0 && fiveCounter % 90 == 0)
    ) {
      // 0.6% chance of fiveStars
      // every 90 draws will result in a fiveStars

      if (!isSeele) {
        const seeleRandom = Math.random() < 0.5;
        console.log(seeleRandom);

        result =
          possibleResults.fiveStars[
            Math.floor(Math.random() * possibleResults.fiveStars.length)
          ];

        if (seeleRandom && result !== 'Seele') {
          result = 'Seele';
        }
        fiveCounter = 0;
      }

      if (isSeele) {
        result = 'Seele';
        fiveCounter = 0;
      }

      if (result !== 'Seele') {
        setIsSeele(true);
      } else {
        setIsSeele(false);
      }
    } else if (
      randNum < fourStarProbability ||
      (fourCounter > 0 && fourCounter % 10 === 0)
    ) {
      // 5.1% chance of fourStars
      // every 10 draws will guarantee at least one result from the fourStars array

      const characterOrLightconeRandom = Math.random() < 0.5;

      if (characterOrLightconeRandom) {
        result =
          possibleResults.fourStars.characters[
            Math.floor(
              Math.random() * possibleResults.fourStars.characters.length
            )
          ];
      } else {
        result =
          possibleResults.fourStars.lightcones[
            Math.floor(
              Math.random() * possibleResults.fourStars.lightcones.length
            )
          ];
      }
      fourCounter = 0;
    } else {
      // 94.3% chance of threeStars

      result =
        possibleResults.threeStars[
          Math.floor(Math.random() * possibleResults.threeStars.length)
        ];
    }

    setFiveStarCounter(fiveCounter);
    setFourStarCounter(fourCounter);

    const newPullHistory = [...pullHistory, result];
    setPullHistory(newPullHistory);
    return result;
  };

  const drawTenResult = () => {
    let results = [];
    let fiveCounter = fiveStarCounter;
    let fourCounter = fourStarCounter;

    for (let i = 0; i < 10; i++) {
      let result;

      fiveCounter++;
      fourCounter++;
      console.log(fiveCounter);
      console.log(fourCounter);

      const randNum = Math.random();
      console.log(randNum);

      let fiveStarProbability = 0.006;
      const fourStarProbability = 0.051;

      if (fiveCounter >= 74) {
        fiveStarProbability = (fiveCounter - 73) * 0.06;
      }

      console.log(fiveStarProbability);

      if (
        randNum < fiveStarProbability ||
        (fiveCounter > 0 && (fiveCounter + 1) % 90 == 0)
      ) {
        // 0.6% chance of fiveStars
        // every 90 draws will result in a fiveStars

        if (!isSeele) {
          const seeleRandom = Math.random() < 0.5;
          console.log(seeleRandom);

          result =
            possibleResults.fiveStars[
              Math.floor(Math.random() * possibleResults.fiveStars.length)
            ];

          if (seeleRandom && result !== 'Seele') {
            result = 'Seele';
          }
          fiveCounter = 0;
        }

        if (isSeele) {
          result = 'Seele';
          fiveCounter = 0;
        }

        if (result !== 'Seele') {
          setIsSeele(true);
        } else {
          setIsSeele(false);
        }
      } else if (
        randNum < fourStarProbability ||
        (fourCounter > 0 && (fourCounter + 1) % 10 === 0)
      ) {
        // 5.1% chance of fourStars
        // every 10 draws will guarantee at least one result from the fourStars array

        const characterOrLightconeRandom = Math.random() < 0.5;

        if (characterOrLightconeRandom) {
          result =
            possibleResults.fourStars.characters[
              Math.floor(
                Math.random() * possibleResults.fourStars.characters.length
              )
            ];
        } else {
          result =
            possibleResults.fourStars.lightcones[
              Math.floor(
                Math.random() * possibleResults.fourStars.lightcones.length
              )
            ];
        }

        fourCounter = 0;
      } else {
        result =
          possibleResults.threeStars[
            Math.floor(Math.random() * possibleResults.threeStars.length)
          ];
      }

      console.log(result);
      results.push(result);
    }

    console.log(results);
    setFiveStarCounter(fiveCounter);
    setFourStarCounter(fourCounter);
    const newPullHistory = [...pullHistory, ...results];
    setPullResult(results);
    setPullHistory(newPullHistory);
  };

  console.log(pullHistory);

  const tenPullHandler = () => {
    drawTenResult();
    setIsPullingTen(true);
  };

  const pullHandler = () => {
    const pullResult = drawResult();
    console.log(pullResult);
    setPullResult(pullResult);
    setIsPullingSingle(true);
  };

  const openModalHandler = () => {
    setOpenRecordModal(true);
  };

  const restartHandler = () => {
    setFourStarCounter(0);
    setFiveStarCounter(0);
    setPullHistory([]);
    setIsPullingSingle(false);
    setIsPullingTen(false);
  };

  const backHandler = () => {
    setIsPullingSingle(false);
    setIsPullingTen(false);
  };

  return (
    <>
      {openRecordModal && <Modal />}
      <div>
        {!isPullingSingle && !isPullingTen && (
          <div className="relative">
            <div className="flex justify-between items-center">
              <button
                onClick={restartHandler}
                className="w-[8rem] h-[2rem] bg-white text-gray-600 rounded-xl font-bold"
              >
                Reset History
              </button>
              <button
                onClick={openModalHandler}
                className="w-[8rem] h-[2rem] bg-white text-gray-600 rounded-xl font-bold"
              >
                Record
              </button>
              <div className="flex items-center justify-center gap-2 mb-3">
                <img
                  src="images/stellarjade_img.png"
                  className="w-[4rem] rounded-xl"
                />
                <h1>
                  X
                  <span className="text-xl font-bold">
                    {' '}
                    {pullHistory.length * 160}
                  </span>
                </h1>
              </div>
            </div>
            <img src="images/banner_img.png" className="rounded-xl" />
            <button
              onClick={pullHandler}
              className="absolute md:bottom-1.5 bottom-0.5 right-[78px] lg:right-[225px] md:right-[170px] lg:w-[13rem] md:w-[9rem] w-[5rem]"
            >
              <img src="images/warp_img.png" />
            </button>
            <button
              onClick={tenPullHandler}
              className="absolute md:bottom-2 bottom-0.5 md:right-2.5 right-[0.5px] lg:w-[13rem] md:w-[9rem] w-[5rem]"
            >
              <img src="images/warp10_img.png" />
            </button>
          </div>
        )}
        {isPullingSingle && (
          <div>
            <SingleResult
              result={pullResult}
              singlePull={pullHandler}
              onBack={backHandler}
            />
          </div>
        )}
        {isPullingTen && (
          <div>
            <TenResult
              result={pullResult}
              TenPull={tenPullHandler}
              onBack={backHandler}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SeeleBanner;
