import { CONTRACT_ADDRESS } from "../web3.config";

const ranNum = Math.floor(Math.random() * 49) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

const Intro = ({ totalNft, mintedNft, myNft }) => {
  return (
    <div className="bg-gradient-to-b from-transparent to-yellow-300 pt-10">
      <div className="max-w-screen-xl mx-auto px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-Black text-9xl truncate opacity-60 pointer-events-none"></div>
        <div className="relative">
          <img
            className="absolute w-40 h-40 rounded-full"
            src={imgSrc}
            alt="NFT"
          />
          <div className="w-40 h-40 rounded-full bg-black text-white flex justify-center items-center">
            Loading...
          </div>
        </div>
        <div className="mt-4 text-2xl font-bold flex items-center">
          Rubber Ducks
          <div className="bg-black w-7 h-7 rounded-full flex justify-center items-center ml-2 text-gray-950">
            🐤
          </div>
        </div>
        <div className="mt-2 flex items-center text-gray-100">
          by
          <div className="text-white ml-2">{CONTRACT_ADDRESS}</div>
        </div>
        <div className="mt-2 text-black">
          "I created 49 ducks in pixel art. They are everywhere, and I believe
          someday they will conquer the world. The ducks will find you."
        </div>

        <div className="py-4 text-center flex">
          <div>
            <div className="font-bold">{totalNft}</div>
            <div className="text-gray-600">총 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{mintedNft}</div>
            <div className="text-gray-600">발행된 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{myNft}</div>
            <div className="text-gray-600 ">내 NFT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
