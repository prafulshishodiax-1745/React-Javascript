function Card (props)
{
    console.log(props);
    return(
<>

<div className="flex flex-col items-center gap-6 rounded-2xl p-7 md:flex-row md:gap-8">
        <div>
          <img
            className="size-48 rounded-md shadow-xl"
            alt="Class Warfare cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81bNIEaGCzdwl2QV5sIrD4JXpsyk1smkr4psQ6MhDvA8lGy5_6Y4sEyk&s=10"
          />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-medium">{props.obj}</span>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
      </> )
}
export default Card;