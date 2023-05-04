import MainP1 from "./MainP1/MainP1";
import loadable from "@loadable/component";

const MainP2 = loadable(() => import("./MainP2/MainP2"));

const Main = () => {
  return (
    <article>
      <MainP1 />
      <div className=" flex flex-col items-center">
        <MainP2 />
      </div>
    </article>
  );
};

export default Main;
