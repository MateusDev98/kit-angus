import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import IconWithText from "@components/IconWithText";
import OptionOffer from "@components/OptionOffer";
import OptionsSubOffers from "@components/OptionsSubOffers";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import gifVemdeZap from "/assets/vem-de-zap.gif";
import logo from "/assets/logo.png";

const Header = () => {
  return (
    <div className="container flex flex-col mx-auto">
      <div className="px-20 py-4 flex gap-6 place-items-center w-full justify-center">
        <span>
          <a href="#" target="_blank">
            <img
              src={logo}
              alt="Vem de zap"
              width={80}
              height={34}
              className="rounded-full"
            />
          </a>
        </span>
        <span>
          <OptionOffer title="Categorias" text="Veja nossos Produtos" />
        </span>
        <span>
          <OptionOffer title="Super Kits" text="Combinações exclusivas" />
        </span>
        <span>
          <a
            href="https://api.whatsapp.com/send/?phone=5511958881903&text=Olá vim pelo site!&type=phone_number&app_absent=0"
            target="_blank"
          >
            <img src={gifVemdeZap} alt="Vem de zap" width={100} height={34} />
          </a>
        </span>
        <span className="flex-initial w-72">
          <FormControl variant="standard" className="w-full">
            <OutlinedInput
              sx={{
                backgroundColor: "#fff",
                borderRadius: 12,
                borderTopRightRadius: 0,
              }}
              size="small"
              placeholder="Procure por proteínas, cortes..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </span>
        <span className="flex-initial w-54">
          <IconWithText
            text={`Bem vindo,\nacesse aqui seu perfil`}
            icon="person"
          />
        </span>
        <span className="flex-initial w-54">
          <IconWithText text="Carrinho" icon="shopping_cart" />
        </span>
      </div>
      <OptionsSubOffers
        options={[
          {
            icon: ShoppingCartOutlinedIcon,
            link: "",
            text: `Prontos \npara comer`,
          },
          {
            icon: ShoppingCartOutlinedIcon,
            link: "",
            text: `Bovinos`,
          },
          {
            icon: ShoppingCartOutlinedIcon,
            link: "",
            text: `Bovinos`,
          },
          {
            icon: ShoppingCartOutlinedIcon,
            link: "",
            text: `Bovinos`,
          },
          {
            icon: ShoppingCartOutlinedIcon,
            link: "",
            text: `Bovinos`,
          },
          {
            icon: ShoppingCartOutlinedIcon,
            link: "",
            text: `Bovinos`,
          },
          {
            icon: ShoppingCartOutlinedIcon,
            link: "",
            text: `Bovinos`,
          },
          {
            icon: ShoppingCartOutlinedIcon,
            link: "",
            text: `Bovinos`,
          },
        ]}
      />
    </div>
  );
};

export default Header;
