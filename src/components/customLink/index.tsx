import { useMatch, useResolvedPath } from "react-router";
import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

export const CustomLink = ({ children, to, ...props }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const style = {color: match ? "#0860D8" : "#BCC4CE"}
  return (
    <span>
      <Link to={to} style={style} {...props}>
        {children}
      </Link>
    </span>
  );
};
