export default function TeamCard({ image, name, role, description }) {
  return (
    <div className="m-4 w-45 md:w-80 lg:w-86 border-[0.3px] border-[#0000001A] rounded-t-md overflow-hidden bg-primary shadow-sm hover:shadow-lg transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-56 md:h-100 lg:h-110 object-cover"
      />
      <div className="w-full p-4 border-t-[1.5px] border-[#0000001A] text-secondary text-center">
        <h2 className="font-semibold text-sm md:text-2xl lg:text-3xl mb-1">{name}</h2>
        <h3 className="text-[10px] md:text-xl lg:text-2xl pb-2">{role}</h3>
        <p className="font-light text-[8.4px] md:text-sm lg:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

