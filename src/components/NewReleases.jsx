import Fifa from "../assets/fifa23.webp";
import Forspoken from "../assets/forspokengame.webp";
import Marvel from "../assets/marvels-midnight.webp";
import Forza from "../assets/forza-horizon.webp";
import Elden from "../assets/elden-ring.webp";
import GodOfWar from "../assets/god-of-war-game.webp";
import TheLastOfUs from "../assets/the-last-of-us.webp";
import Cod from "../assets/cod.webp";
import Nfs from "../assets/nfs.webp";
import Overwatch from "../assets/overwatch.webp";
import DeadSpace from "../assets/dead-space-game.webp";
import GT from "../assets/gran-turismo.webp";
const NewReleases = () => {
  const games = [
    {
      name: "EA SPORTS FIFA 23",
      url: Fifa,
    },
    {
      name: "Forspoken",
      url: Forspoken,
    },
    {
      name: "Marvel's Midnight Suns",
      url: Marvel,
    },
    {
      name: "Horizon Forbidden West",
      url: Forza,
    },
    {
      name: "Elden Ring",
      url: Elden,
    },
    {
      name: "God of War Ragnarök",
      url: GodOfWar,
    },
  ];
  const games2 = [
    {
      name: "The Last of Us part I",
      url: TheLastOfUs,
    },
    {
      name: "Call of Duty: MW II",
      url: Cod,
    },
    {
      name: "Need for Speed Unbound",
      url: Nfs,
    },
    {
      name: "Overwatch 2",
      url: Overwatch,
    },
    {
      name: "Call of Duty: MW 2",
      url: Cod,
    },
    {
      name: "Dead Space",
      url: DeadSpace,
    },
  ];
  console.log(games.length);
  return (
    <div className="bg-[#121314] flex flex-col gap-10 pt-10 items-center">
      <div className="flex flex-col text-white text-center gap-3">
        <h2 className="font-light text-xl xl:text-4xl">New releases</h2>
        <h3 className="font-semibold text-xl xl:text-2xl">Great PS5 and PS4 games available now</h3>
      </div>
      <div className="flex w-full justify-center gap-[4em] overflow-x-scroll min-h-[10em] scrollbar-hide whitespace-nowrap xl:whitespace-normal xl:max-w-[70%]">
        {games.map((game) => {
          return (
            <div className="flex flex-col text-center text-white items-start gap-3 min-w-[9em] md:min-w-[20em] xl:min-w-0 xl:w-[10em]  rounded-[15px] ">
              <div className="min-h-[10em] xl:min-h-[10em]">
                <img src={game.url} alt="" className="rounded-[15px] w-full h-full" />
              </div>
              <span className="text-lg">{game.name}</span>
            </div>
          );
        })}
      </div>
      <div className="flex w-full justify-center gap-[4em] overflow-x-scroll min-h-[13em] scrollbar-hide whitespace-nowrap xl:whitespace-normal xl:max-w-[70%]">
        {games2.map((game) => {
          return (
            <div className="flex flex-col text-center text-white items-start gap-3 min-w-[9em] md:min-w-[20em] xl:min-w-0 xl:w-[10em] rounded-[15px] ">
              <div className="min-h-[10em] xl:min-h-[10em]">
                <img src={game.url} alt="" className="rounded-[15px] w-full h-full" />
              </div>
              <span className="text-lg">{game.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewReleases;
