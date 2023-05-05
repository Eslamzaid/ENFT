import MainP1 from "./MainP1/MainP1";
import loadable from "@loadable/component";

const MainP2 = loadable(() => import("./MainP2/MainP2"));
const MainP3 = loadable(() => import("./FinalMains/MainP3"));

const Main = () => {
  return (
    <article>
      <MainP1 />
      <div className=" flex flex-col items-center">
        <MainP2 />
        <MainP3 />
      </div>
      <div></div>
    </article>
  );
};

export default Main;
