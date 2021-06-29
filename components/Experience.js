export default function Experience({ experience }) {
  return (
    <section
      className="w-full px-5 my-10 md:w-4/5 md:m-auto md:my-20"
      id="experience"
    >
      <h1 className="text-2xl md:text-3xl md:text-left font-semibold text-white py-10 text-center md:flex md:items-center">
        👨‍🎓 Experience{" "}
        <span className="md:inline-block md:w-3/10 md:h-0.5 md:ml-5 md:bg-indigo-400"></span>
      </h1>
      {experience.map((data) => {
        return (
          <div className="pb-7  md:flex ">
            <div className="md:w-3/10 md:px-5">
              <p className="text-md text-gray-300 font-semibold pb-2 md:text-lg ">
                {data.year}
              </p>
            </div>

            <div>
              <p className="text-md md:text-lg text-gray-300 font-semibold pb-2">
                {data.title}
              </p>
              <ul className="list-disc pb-2 px-5">
                {data.points.map((point) => {
                  return <li>{point}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
}
