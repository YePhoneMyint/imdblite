import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <div className="flex justify-center gap-6 bg-amber-100 p-4 dark:bg-gray-600 lg:text-lg">
      <NavBarItem title="Trending" param="trending" />
      <NavBarItem title="Top Rated" param="top-rated" />
    </div>
  );
};

export default NavBar;
