import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IPropsIconWithText {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  text: string;
  link?: string;
}

const IconWithText = (props: IPropsIconWithText) => {
  return (
    <a
      href={props.link ?? "#"}
      className="hover:text-orange-400 transition duration-300"
    >
      <span className="flex items-center justify-center gap-2">
        <props.icon fontSize="large" />
        <strong className="whitespace-pre uppercase tracking-tighter leading-none">
          {props.text}
        </strong>
      </span>
    </a>
  );
};

export default IconWithText;
