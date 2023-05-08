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
      <div className="p-6">
        <span
          className={`font-bold text-6xl${
            fourStars.characters.includes(result) ||
            fourStars.lightcones.includes(result)
              ? 'font-bold text-6xl text-purple-500'
              : ''
          } ${fiveStars.includes(result) ? 'font-bold text-yellow-500' : ''}`}
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
