import LoadingIcon from "./LoadingIcon";



const PageLoader = () => {
  return (
    <div className="text-center">
      <span style={{fontSize: '30px'}}><LoadingIcon /></span>
      <p className="fs-4 w500">Loading...</p>
    </div>
  );
}

export default PageLoader;