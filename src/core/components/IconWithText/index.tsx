import IconContainer from "@mui/material/Icon";

interface IPropsIconWithText {
  icon: string;
  text: string;
  link?: string;
}

const IconWithText = ({ icon, text, link }: IPropsIconWithText) => {
  return (
    <a href={link ?? "#"}>
      <span className="flex items-center justify-center gap-2">
        <IconContainer fontSize="large">{icon}</IconContainer>
        <span className="font-bold whitespace-pre uppercase tracking-tighter text-xs">
          {text}
        </span>
      </span>
    </a>
  );
};

export default IconWithText;
