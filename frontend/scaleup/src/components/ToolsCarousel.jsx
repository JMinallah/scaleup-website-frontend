import githubIcon from '../assets/github.png'
import slackIcon from '../assets/slack.png'
import figmaIcon from '../assets/figma.png'
import googleIcon from '../assets/google.png'
import notionIcon from '../assets/notion.png'

const tools = [
  { name: "GitHub", img: githubIcon, url: "https://github.com" },
  { name: "Slack", img: slackIcon, url: "https://slack.com" },
  { name: "Figma", img: figmaIcon, url: "https://figma.com" },
  { name: "Google", img: googleIcon, url: "https://google.com" },
  { name: "Notion", img: notionIcon, url: "https://notion.so" },
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
