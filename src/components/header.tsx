import Link from "next/link";

type HeaderPropsType = {
  pages: {
    name: string;
    to: string;
  }[];
};

export const HeaderComponent = ({ pages }: HeaderPropsType): JSX.Element => {
  return (
    <header className="flex bg-[#1f2028] w-full">
      <div className="max-w-md mx-auto container lg:max-w-5xl">
        <section className="flex items-center justify-between">
          <Link href="/" legacyBehavior>
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-medium text-gray-600 dark:text-gray-300">
                EC
              </span>
            </div>
          </Link>
          <nav className="flex gap-2">
            {pages.map((page) => {
              return (
                <Link
                  className="block text-lg font-medium text-[#CECECE] hover:text-white hover:underline decoration-from-font focus:text-white focus:outline-none underline-offset-8"
                  key={page.name}
                  href={`${page.to}`}
                  legacyBehavior>
                  {page.name}
                </Link>
              );
            })}
          </nav>
        </section>
        <section></section>
      </div>
    </header>
  );
};

export default HeaderComponent;
