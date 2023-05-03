import MainP1 from "./MainP1/MainP1";
import loadable from "@loadable/component";

const MainP2 = loadable(() => import("./MainP2/MainP2"));

const Main = () => {
  return (
    <article>
      <MainP1 />
      <MainP2 />
    </article>
  );
};

export default Main;
