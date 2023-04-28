import { CONTRACT_ADDRESS } from "../web3.config";

const ranNum = Math.floor(Math.random() * 100) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

const Intro = ({ totalNft, mintedNft, myNft }) => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url('/img/duck.png')`,
        height: "550px",
        width: "100%",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-10 relative">
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
        <div className="mt-4 text-3xl font-bold flex items-center text-black">
          Rubber Ducks
          <div className="bg-black w-7 h-7 rounded-full flex justify-center items-center ml-2">
            🐤
          </div>
        </div>
        <div className="mt-2 flex items-center text-white">
          by
          <div className="text-white ml-2">{CONTRACT_ADDRESS}</div>
        </div>
        <div className="mt-2 text-black text-xl">
          "I created 100 ducks in pixel art. They are everywhere, and I believe
          someday they will conquer the world. The ducks will find you."
        </div>

        <div className="py-4 text-center flex">
          <div className="bg-gray-500 rounded-lg bg-opacity-60">
            <div className="font-bold">{totalNft}</div>
            <div className="text-black font-medium">총 NFT</div>
          </div>
          <div className="ml-4 bg-gray-500 rounded-lg bg-opacity-60">
            <div className="font-bold">{mintedNft}</div>
            <div className="text-black font-medium">발행된 NFT</div>
          </div>
          <div className="ml-4 bg-gray-500 rounded-lg bg-opacity-60">
            <div className="font-bold">{myNft}</div>
            <div className="text-black font-medium">내 NFT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
