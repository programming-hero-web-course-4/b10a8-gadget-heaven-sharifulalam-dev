import PropTypes from "prop-types";

export default function Headertitle({ children }) {
  return <>{children}</>;
}
Headertitle.propTypes = {
  children: PropTypes.node.isRequired,
};
