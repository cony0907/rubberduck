import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const Detail = ({ mintedNft }) => {
  const [metadata, setMetadata] = useState();

  const { tokenId } = useParams();

  const getNft = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNft();
  }, []);

  return (
    <div className="flex flex-col xl:flex-row justify-center items-center py-16 bg-gray-900">
      {metadata ? (
        <>
          <div className="max-w-[512px]">
            <img className="rounded-t-2xl" src={metadata.image} alt="NFT" />
            <ul className="grid grid-cols-4 gap-8 py-8 bg-gray-600 rounded-b-2xl text-center">
              {metadata.attributes.map((v, i) => {
                return (
                  <li key={i} className="mx-4">
                    <div>{v.trait_type}</div>
                    <div className="mt-1 border-t-2 font-bold">{v.value}</div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="m-8">
            <div className="text-4xl flex flex-col items-center">
              <div>{metadata.name}🐣</div>
              <div className="mt-5 mr-2">
                <Link
                  to={`https://testnets.opensea.io/assets/mumbai/0x66ce3ea74d3177655d0d2fb178aeacd6fab1ad1a/${tokenId}`}
                  target="_blank"
                >
                  <button
                    disabled={parseInt(mintedNft) < tokenId}
                    className="bg-gray-50 text-gray-950 px-4 py-2 rounded-xl hover:bg-gray-500"
                  >
                    Go to OpenSea
                  </button>
                </Link>
              </div>
            </div>
            <div className="mt-8 text-2xl ml-8">{metadata.description}</div>
          </div>
        </>
      ) : (
        <div>로딩중입니다...</div>
      )}
    </div>
  );
};

export default Detail;
