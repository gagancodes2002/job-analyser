const LoadingCard = (props: any) => {
  return (
    <div
      className={`relative flex flex-col bg-gray-700 p-4 space-y-6 rounded-md min-h-screen ${props.height} `}
    >
      <div className="flex flex-row ">
        <div className="flex flex-col space-y-2">
          <div className="bg-gray-500 h-4 w-40 rounded-md"></div>
          <div className="bg-gray-500 h-4 w-20 rounded-md"></div>
        </div>
        <div className="flex flex-col space-y-2 ml-4">
          <div className="bg-gray-500 h-4 w-40 rounded-md"></div>
          <div className="bg-gray-500 h-4 w-20 rounded-md"></div>
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        <div className="bg-gray-500 h-4 w-40 rounded-md"></div>
        <div className="bg-gray-500 h-4 w-20 rounded-md"></div>
      </div>
      <div className="flex flex-row space-x-2">
        <div className="bg-gray-500 h-4 w-40 rounded-md"></div>
        <div className="bg-gray-500 h-4 w-20 rounded-md"></div>
      </div>
      <div className="flex flex-row space-x-2">
        <div className="bg-gray-500 h-4 w-40 rounded-md"></div>
        <div className="bg-gray-500 h-4 w-20 rounded-md"></div>
      </div>

      <div className="flex flex-row space-x-2">
        <div className="bg-gray-500 h-4 w-40 rounded-md"></div>
        <div className="bg-gray-500 h-4 w-20 rounded-md"></div>
      </div>
      <div className="flex flex-row space-x-2">
        <div className="bg-gray-500 h-4 w-40 rounded-md"></div>
        <div className="bg-gray-500 h-4 w-20 rounded-md"></div>
      </div>
      <div className="flex flex-row space-x-2">
        <div className="bg-gray-500 h-4 w-40 rounded-md"></div>
        <div className="bg-gray-500 h-4 w-20 rounded-md"></div>
      </div>
    </div>
  );
};

export default LoadingCard;
