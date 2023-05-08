// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return (
    <>
      <div className="h-screen flex items-center justify-center text-center mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="w-full sm:rotate-0 rotate-90 flex items-center justify-center">
          {children}
        </div>
      </div>
    </>
  );
};

export default Container;
