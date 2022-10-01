export interface ShowProps {
  children: React.ReactElement | null;
  visible: boolean;
  empty?: React.ReactElement | null;
}

const Show: React.FC<ShowProps> = ({ children, visible, empty, ...props }) => {
  if (visible) return children;

  return empty || null;
};

Show.defaultProps = {};

export default Show;
