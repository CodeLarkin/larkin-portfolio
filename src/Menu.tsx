import { useLocation } from "react-router-dom";

import { LarkinRouterLink } from "./utils/Links";

import fantomon from './images/fantomon/trainer-01.png';
import cult from './images/cult/skullys-logo.png';
import farmgod from './images/farmgod/farmgod-logo.png';
import happies from './images/happies/happies.jpg';


interface Props {
    active: boolean;
    close: Function;
}
interface RouterLinksProps {
    iconsOnly?: boolean;
    pathname: string;
    closeMenu: Function;
}

export default function Menu(props: Props) {

    const isMobile = window.matchMedia("only screen and (max-width: 800px)").matches;

    const location = useLocation();

    const routeImgs: Record<string, string> = {
        "/fantomon" : fantomon,
        "/cult"     : cult,
        "/farmgod"  : farmgod,
        "/happies"  : happies,
    };
    const routeIcons: Record<string, string> = {
        "/"         : "\u{1F3E0}",
        "/fantomon" : "\u{1F47E}",
        "/cult"     : "\u{1f56f}\u{fe0f}",
        "/farmgod"  : "\u{2728}",
        "/happies"  : "\u{1F642}",
        "/resume"   : "\u{1F4C3}",
        "/about"    : "\u{1F92A}",
    }
    const routes: Record<string, string> = {
        "/"              : "\u{1F3E0} Home",
        "/fantomon"      : "\u{1F47E} Fantomon",
        "/fantomon-dive" : "\u{00A0}\u{00A0}\u{00A0}\u{00A0}└─ Deep Dive",
        "/cult"          : "\u{1f56f}\u{fe0f} The Cult",
        "/farmgod"       : "\u{2728} Farmgod",
        "/happies"       : "\u{1F642} Happies",
        "/resume"        : "\u{1F4C3} Resumé",
        "/about"         : "\u{1F92A} About Me",
    };
    const routesOnly: Record<string, string> = {
        "/"              : " Home",
        "/fantomon"      : " Fantomon",
        "/fantomon-dive" : " Deep Dive",
        "/cult"          : " The Cult",
        "/farmgod"       : " Farmgod",
        "/happies"       : " Happies",
        "/resume"        : " Resumé",
        "/about"         : " About Me",
    };


    const RouterLinks = (props: RouterLinksProps) => {
        return (
          <div className="MenuRoutes">
            {
              Object.keys(routes).map((route: string) =>
                <div key={"menu-route-div-" + route}>
                  {(!props.iconsOnly || routeIcons[route]) &&
                    <LarkinRouterLink key={"menu-route-" + route} to={route} current={route === props.pathname}
                                      setupFunc={() => {if (isMobile) props.closeMenu()}}>
                      {routeImgs[route] ?
                        <span className="menuLine">
                          <img className="menuIcon" src={routeImgs[route]} alt=""/>
                          {!props.iconsOnly && routesOnly[route]}
                        </span>
                      : props.iconsOnly ?
                        routeIcons[route]
                      :
                        routes[route]
                      }
                    </LarkinRouterLink>
                  }
                </div>
              )
            }
          </div>
        );
    }

    return (
      <div className={props.active ? "OpenMenu": "ClosedMenu"}>
        {props.active ?
          <div className="vertical-centered">
            <div className="vertical-left">
              <RouterLinks pathname={location.pathname} closeMenu={props.close}/>
            </div>
          </div>
        : !isMobile &&
            <div className="vertical-left">
              <RouterLinks iconsOnly={true} pathname={location.pathname} closeMenu={props.close}/>
            </div>
        }
      </div>
    )
}
