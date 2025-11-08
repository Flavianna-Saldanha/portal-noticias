import { Main } from "@/src/components/main/Main";
import { Menu } from "@/src/components/menu/Menu";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Menu />
      <Main />
    </div>
  );
};

export default Page;
