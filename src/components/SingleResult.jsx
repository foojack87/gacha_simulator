/* eslint-disable react/prop-types */
const SingleResult = ({ result, singlePull, onBack }) => {
  const fiveStars = [
    'Seele',
    'Himeko',
    'Welt',
    'Bronya',
    'Gepard',
    'Clara',
    'Yanqing',
    'Bailu',
  ];

  const fourStars = {
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
  };

  return (
    <>
      <div className="p-6 flex flex-col gap-4 items-center">
        {result === 'Seele' && <img src="images/seele.png" />}
        {result === 'Welt' && <img src="images/welt.png" />}
        {result === 'Bronya' && (
          <img src="images/bronya.png " className="w-[6rem]" />
        )}
        {result === 'Himeko' && <img src="images/himeko.png" />}
        {result === 'Clara' && <img src="images/clara.png" />}
        {result === 'Gepard' && <img src="images/gepard.png" />}
        {result === 'Yanqing' && <img src="images/yanqing.png" />}
        {result === 'Bailu' && <img src="images/bailu.png" />}
        <span
          className={`font-bold ease-in duration-300 text-6xl${
            fourStars.characters.includes(result) ||
            fourStars.lightcones.includes(result)
              ? 'font-bold text-6xl text-purple-500 animate-pulse'
              : ''
          } ${
            fiveStars.includes(result)
              ? 'font-bold text-yellow-500 animate-pulse'
              : ''
          }`}
        >
          {result}
        </span>
      </div>
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={singlePull}
          className="w-[8rem] h-[2rem] bg-white text-gray-600 rounded-xl font-bold"
        >
          Again
        </button>
        <button
          onClick={onBack}
          className="w-[8rem] h-[2rem] bg-white text-gray-600 rounded-xl font-bold"
        >
          Back
        </button>
      </div>
    </>
  );
};

export default SingleResult;
