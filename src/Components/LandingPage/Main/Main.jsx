import MainP1 from "./MainP1/MainP1";
import loadable from "@loadable/component";
import lazy from "@loadable/component";
import NavShad from "./../../../assets/images/Images/hexo.webp";

const MainP2 = loadable(() => import("./MainP2/MainP2"));
const MainP3 = loadable(() => import("./FinalMains/MainP3"));
const MainP4 = lazy(() => import("./FinalMains/MainArt"));

const Main = () => {
  return (
    <article
      style={{ backgroundImage: `url('${NavShad}')` }}
      className=" bg-cover"
    >
      <MainP1 />
      <div className=" flex flex-col items-center">
        <MainP2 />
        <MainP3 />
        <MainP4 />
      </div>
    </article>
  );
};

export default Main;
