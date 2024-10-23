import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import OptionsFooter from "@components/OptionsFooter";

const TitleColumnFooter = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) => {
  return (
    <>
      <strong className="uppercase tracking-tighter text-xl">{title}</strong>
      {subTitle && <small className="text-slate-400">{subTitle}</small>}
    </>
  );
};

const CardContact = ({
  identifyContact,
  identifyName,
  ...rest
}: {
  identifyContact: string;
  identifyName: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}) => {
  return (
    <div className="flex flex-col hover:-translate-y-2 transition-all duration-200">
      <a href="#">
        <span className="flex gap-1 items-center">
          <rest.icon
            sx={{
              color: "rgb(251, 146, 60)",
            }}
          />
          <strong className="uppercase tracking-tighter text-lg">
            {identifyName}
          </strong>
        </span>
        <strong className="text-center text-xl text-orange-400">
          {identifyContact}
        </strong>
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto p-20">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between py-14">
            <div className="flex flex-col gap-4">
              <TitleColumnFooter title="Canais de atendimento" />
              <CardContact
                identifyContact="(51) 99166-3322"
                identifyName="Compre pelo Televendas"
                icon={HeadsetMicOutlinedIcon}
              />
              <CardContact
                identifyContact="(51) 99166-3322"
                identifyName="Compre Pelo WhatsApp"
                icon={WhatsAppIcon}
              />
              <span className="whitespace-break-spaces text-slate-400">
                {`Segunda à Sexta-feira das 7h às 19h\nSábados das 7h às 18h\nFeriados das 7h às 15h`}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <TitleColumnFooter title="Outlet Resolve" />
              <CardContact
                identifyContact="(51) 99166-3322"
                identifyName="Resolva pelo Telefone"
                icon={LocalPhoneOutlinedIcon}
              />
              <span className="whitespace-break-spaces text-slate-400">
                Segunda a sábado das 09h às 19h
              </span>
              <CardContact
                identifyContact="john@doe.com"
                identifyName="Resolva pelo e-mail"
                icon={EmailOutlinedIcon}
              />
            </div>
            <div className="flex flex-col gap-4">
              <TitleColumnFooter title="Para Você" />
              <OptionsFooter
                options={[
                  {
                    link: "#",
                    text: "Receitas Outlet Das Carnes",
                  },
                  {
                    link: "#",
                    text: "Churrasco Outlet Das Carnes",
                  },
                  {
                    link: "#",
                    text: "Peixaria Swift",
                  },
                  {
                    link: "#",
                    text: "Trabalhe Conosco",
                  },
                  {
                    link: "#",
                    text: "Política de Privacidade",
                  },
                  {
                    link: "#",
                    text: "Dúvidas Frequentes",
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-4">
              <TitleColumnFooter title="Compra Online" />
              <OptionsFooter
                options={[
                  {
                    link: "#",
                    text: "Seus pedidos",
                  },
                  {
                    link: "#",
                    text: "FAQ",
                  },
                  {
                    link: "#",
                    text: "Regulamentos",
                  },
                  {
                    link: "#",
                    text: "Encarte Digital",
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-4">
              <TitleColumnFooter title="Outlet+" />
              <OptionsFooter
                options={[
                  {
                    link: "#",
                    text: "A nossa história",
                  },
                  {
                    link: "#",
                    text: "Encontre Nossas Lojas",
                  },
                  {
                    link: "#",
                    text: "Sustentabilidade",
                  },
                ]}
              />
            </div>
          </div>
          <div className="flex flex-row justify-between w-2/4">
            <div className="flex flex-col">
              <TitleColumnFooter
                title="Formas de Pagamento"
                subTitle="(apenas cartões de crédito)"
              />
            </div>
            <div className="flex flex-col">
              <TitleColumnFooter title="Site Seguro" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
