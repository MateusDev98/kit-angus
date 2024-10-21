interface IPropsOptionOffer {
  title: string;
  text: string;
  link: string;
}

const OptionOffer = ({ title, text, link }: IPropsOptionOffer) => {
  return (
    <a href={link} className="hover:text-orange-400 transition duration-300">
      <span className="flex flex-col leading-none">
        <strong className="uppercase tracking-tighter">{title}</strong>
        <span className="whitespace-pre tracking-tighter">{text}</span>
      </span>
    </a>
  );
};

export default OptionOffer;
