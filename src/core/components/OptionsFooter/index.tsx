interface IPropsOptionsFooter {
  options: Array<{
    link: string;
    text: string;
  }>;
}

const OptionsFooter = ({ options }: IPropsOptionsFooter) => {
  return (
    <div className="flex flex-col gap-y-2">
      {options.map((option, index) => {
        return (
          <a href={option.link} key={index}>
            <p className="uppercase tracking-tighter text-lg text-orange-400 font-medium">
              {option.text}
            </p>
          </a>
        );
      })}
    </div>
  );
};

export default OptionsFooter;
