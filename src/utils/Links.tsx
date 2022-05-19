// External packages
import { useNavigate } from "react-router-dom";

// Reusable link that includes logic to open in other tabs
interface LinkProps {
    href: string;
    children: any;
}
export const LarkinLink = (props: LinkProps) => {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            {props.children}
        </a>
    );
}

// Reusable Router-link with logic to
//   - style differently based on current-route
//   - perform some setup function on click before navigating to route
interface RouterLinkProps {
    to: string;
    current?: boolean;
    setupFunc?: Function;
    children: any;
}
export function LarkinRouterLink (props: RouterLinkProps) {
    const navigate = useNavigate();
    return (
        <button className={props.current ? "currentRoute" : ""}
            onClick={() => {navigate(props.to); if (props.setupFunc) props.setupFunc();}}>
            {props.children}
        </button>
    );
}
