import { Header } from "@/src/components/header/Header";
import { Main } from "@/src/components/main/Main";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Main />
    </div>
  );
};

export default Page;
