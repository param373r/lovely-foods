import LoadingIcon from "./LoadingIcon";



const GlobalLoader = () => {
  return (
    <div className="text-center">
      <h1 className="py-6">Lovely Foods</h1>
      <span style={{fontSize: '30px'}}><LoadingIcon /></span>
      <p className="fs-4 w500">Loading...</p>
    </div>
  );
}

export default GlobalLoader;