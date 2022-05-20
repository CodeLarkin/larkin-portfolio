import { useLocation } from "react-router-dom";

import { LarkinRouterLink } from "./utils/Links";


interface Props {
    active: boolean;
    close: Function;
}
interface RouterLinksProps {
    pathname: string;
    closeMenu: Function;
}

export default function Menu(props: Props) {

    const isMobile = window.matchMedia("only screen and (max-width: 800px)").matches;

    const location = useLocation();

    const routes: Record<string, string> = {
        "/"                 : "\u{1F3E0} Home",
        "/farmgod"          : "\u{2728} Farmgod",
        "/cult"             : "\u{1f56f}\u{fe0f} Cult NFTs",
        "/fantomon"         : "\u{1F47E} Fantomon",
        "/fantomon-gallery" : "\u{00A0}\u{00A0}\u{00A0}\u{00A0}└─ Gallery",
        "/resume"           : "\u{1F4C3} Resume",
        "/about"            : "\u{1F92A} About Me",
    };


    const RouterLinks = (props: RouterLinksProps) => {
        return (
          <div className="MenuRoutes">
            {
              Object.keys(routes).map((route: string) =>
                <div key={"menu-route-" + route}>
                  <LarkinRouterLink to={route} current={route === props.pathname}
                                    setupFunc={() => {if (isMobile) props.closeMenu()}}>
                    {routes[route]}
                  </LarkinRouterLink>
                  <br/><br/>
                </div>
              )
            }
          </div>
        );
    }

    return (
      <div className={props.active ? "OpenMenu": "ClosedMenu"}>
        {props.active &&
          <div>
            <h2>Navigate</h2>
            <div className="vertical-left">
              <RouterLinks pathname={location.pathname} closeMenu={props.close}/>
            </div>
          </div>
        }
      </div>
    )
}
