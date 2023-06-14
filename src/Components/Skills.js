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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-20">
        {skill.map((val, idx) => {
          return (
            <>
              <div>
                <h1 className="text-gray-400 font-medium mb-1">{val.title}</h1>
                <div class="h-2 w-full bg-[#282670] rounded overflow-hidden">
                  <div class={`w-[${val.percent}%] h-full bg-gradient-to-r from-[#FE689D] to-[#FEAC73] rounded-full`}></div>
                </div>
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
