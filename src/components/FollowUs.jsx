import Tw from "../assets/twitter.webp";
import Fb from "../assets/facebook.webp";
import Ig from "../assets/insta.webp";
import Yt from "../assets/yt.webp";

const FollowUs = () => {
  return (
    <div className=" bg-gray-200 flex flex-col pt-7 xl:gap-7 xl:pt-9">
      <h2 className="text-gray-600 text-2xl text-center xl:text-3xl">Follow us on social media</h2>
      <div className="flex flex-col items-center xl:flex-row xl:justify-center xl:gap-2">
        <div className="flex items-center xl:gap-2">
          <img src={Tw} className="max-w-[8em] xl:max-w-[9em]" />
          <img src={Fb} className="max-w-[8em] xl:max-w-[9em]" />
        </div>
        <div className="flex items-center xl:gap-2">
          <img src={Ig} className="max-w-[8em] xl:max-w-[9em]" />
          <img src={Yt} className="max-w-[8em] xl:max-w-[9em]" />
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
