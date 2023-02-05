import Tw from "../assets/twitter.webp";
import Fb from "../assets/facebook.webp";
import Ig from "../assets/insta.webp";
import Yt from "../assets/yt.webp";

const FollowUs = () => {
  return (
    <div className=" bg-gray-200 flex flex-col pt-7">
      <h2 className="text-gray-600 text-2xl text-center">Follow us on social media</h2>
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <img src={Tw} className="max-w-[8em]" />
          <img src={Fb} className="max-w-[8em]" />
        </div>
        <div className="flex items-center">
          <img src={Ig} className="max-w-[8em]" />
          <img src={Yt} className="max-w-[8em]" />
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
