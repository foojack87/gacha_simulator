/* eslint-disable react/prop-types */
const TenResult = ({ result, TenPull, onBack }) => {
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
      <div className="flex flex-wrap justify-between sm:h-[28rem]">
        {result.map((res, index) => (
          <>
            <div
              key={index}
              className={`w-1/2 md:w-1/5 p-2 text-center sm:text-4xl ${
                fourStars.characters.includes(res) ||
                fourStars.lightcones.includes(res)
                  ? 'font-bold text-purple-500 animate-pulse'
                  : ''
              } ${
                fiveStars.includes(res)
                  ? 'font-bold text-yellow-500 animate-pulse'
                  : ''
              }`}
            >
              <div className="flex flex-col items-center justify-center gap-4">
                {res}{' '}
                {res.includes('Seele') && (
                  <img src="images/seele.png" className="sm:block hidden" />
                )}
                {res.includes('Welt') && (
                  <img src="images/welt.png" className="sm:block hidden" />
                )}
                {res.includes('Bronya') && (
                  <img src="images/bronya.png" className="sm:block hidden" />
                )}
                {res.includes('Himeko') && (
                  <img src="images/himeko.png" className="sm:block hidden" />
                )}
                {res.includes('Clara') && (
                  <img src="images/clara.png" className="sm:block hidden" />
                )}
                {res.includes('Gepard') && (
                  <img src="images/gepard.png" className="sm:block hidden" />
                )}
                {res.includes('Yanqing') && (
                  <img src="images/yanqing.png" className="sm:block hidden" />
                )}
                {res.includes('Bailu') && (
                  <img src="images/bailu.png" className="sm:block hidden" />
                )}
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={TenPull}
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

export default TenResult;
