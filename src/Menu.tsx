import { useLocation } from "react-router-dom";

import { LarkinLink, LarkinRouterLink } from "./utils/Links";


interface Props {
    active: boolean;
    close: Function;
}
interface RouterLinksProps {
    pathname: string;
    closeMenu: Function;
}

export default function MenuPanel(props: Props) {

    const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    const location = useLocation();

    const routes: Record<string, string> = {
        "/"          : "\u{1F3E0} Home",
        "/mint"      : "\u{1F680} Mint",
        "/pouch"     : "\u{1F4B0} Pouch",
        "/trainers"  : "\u{1F464} Trainers",
        "/fantomons" : "\u{1F47E} Fantomons",
        "/rifts"     : "\u{1FA78} Rifts",
        "/quasar"    : "\u{1F300} Quasar",
        "/journey"   : "\u{1FA90} Journey",
        "/farm"      : "\u{1F331} Farm",
        "/mix"       : "\u{1F9EB} Mix",
        "/feed"      : "\u{1F363} Feed",
        "/about"     : "\u{1F4C3} About",
    };


    const RouterLinks = (props: RouterLinksProps) => {
        return (
            <div>
                {
                    Object.keys(routes).map((route: string) =>
                        <div key={"menu-route-" + route}>
                            <LarkinRouterLink to={route} current={route == props.pathname}
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
          <div className={props.active ? "menuModalList": ""}>
              <div className="vertical-centered-nofloat-mobile full-width">
                  {props.active &&
                  <div className="vertical-left">
                      <u><h3>Navigate</h3></u>
                      <RouterLinks pathname={location.pathname} closeMenu={props.close}/>
                  </div>
                  }
                  {props.active &&
                  <div className="vertical-left menuModalBottom">
                      <u><h3>Info</h3></u>
                      <LarkinLink href="https://fmons.gitbook.io/fantomon">
                          Docs
                      </LarkinLink>
                      <LarkinLink href="https://discord.gg/EGpwQ3PPQt">
                          Discord
                      </LarkinLink>
                      <LarkinLink href="https://twitter.com/fantomonftm">
                          Twitter
                      </LarkinLink>
                      <LarkinLink href="https://fmons.gitbook.io/fantomon/welcome/contracts">
                          Contracts
                      </LarkinLink>
                      <br/>
                      <u><h3>Team</h3></u>
                      <LarkinLink href="https://twitter.com/CodeLarkin">
                          Larkin
                      </LarkinLink>
                      <LarkinLink href="https://twitter.com/RiverBusy">
                          Water
                      </LarkinLink>
                      <br/>
                      <u><h3>Music</h3></u>
                      <LarkinLink href="https://www.instagram.com/synatrick/">Synatrick</LarkinLink>
                  </div>
                  }
              </div>
          </div>
    )
}
