const tools = [
  { name: "GitHub", img: "/src/assets/github.png", url: "https://github.com" },
  { name: "Slack", img: "/src/assets/slack.png", url: "https://slack.com" },
  { name: "Figma", img: "/src/assets/figma.png", url: "https://figma.com" },
  { name: "Google", img: "/src/assets/google.png", url: "https://google.com" },
  { name: "Notion", img: "/src/assets/notion.png", url: "https://notion.so" },
];

const ToolsCarousel = () => {
  return (
    <section className="bg-[#1E4E8C4D] py-4 md:py-6 overflow-hidden">
      <div className="relative w-full">
        <div className="flex animate-marquee hover:pause">
          {[...tools, ...tools].map((tool, idx) => (
            <a
              key={idx}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-6 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img
                src={tool.img}
                alt={tool.name}
                className="h-5 md:h-8 w-auto"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsCarousel;
