import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="bg-orange-400">
      <div className="container mx-auto px-20 py-4 grid lg:grid-cols-7 md:grid-cols-2 place-items-center">
        <span>Logo</span>
        <span>Categorias</span>
        <span>Kits</span>
        <span>Whatsapp</span>
        <span>
          <FormControl variant="outlined">
            <OutlinedInput
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
        <span>Login/Perfil</span>
        <span>Carrinho</span>
      </div>
    </div>
  );
};

export default Header;
