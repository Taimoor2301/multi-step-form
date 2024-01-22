const Layout = ({ children }) => {
  return (
    <div className="relative lg:pl-16 pl-4 pt-10 pb-3 pr-3 flex-1 md:min-h-[40rem] max-w-lg">
      {children}
    </div>
  );
};

export default Layout;
