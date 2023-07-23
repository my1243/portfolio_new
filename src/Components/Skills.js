import "../App.css";
const Skills = () => {
  const skill = [
    {
      title: "Java",
      percent: 75,
    },
    {
      title: "Spring MVC",
      percent: 70,
    },
    {
      title: "C/C++",
      percent: 90,
    },
    {
      title: "React.js",
      percent:90,
    },
    {
      title: "React Native",
      percent: 80,
    },
    {
      title: "Node.js",
      percent: 80,
    },
    {
      title: "MongoDB",
      percent: 85,
    },
    {
      title: "Hibernate",
      percent: 85,
    },
    {
      title: "MySQL",
      percent: 90,
    },
    {
      title: "AWS",
      percent: 60,
    },
  ];
  return (
    <>
    <div className="pb-12">
      <h1 className="text-3xl font-semibold mb-8">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-20">
        {skill.map((val, idx) => {
          return (
            <>
              <div>
                <h1 className="text-gray-400 font-medium">{val.title}</h1>
                    <progress className="w-full"  max={100} value={val.percent}/>
              </div>
            </>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Skills;
