import { Flex, FlexProps } from "../Flex/Flex";

type VStackProps = Omit<FlexProps, "direction">;

/**
 *  Устарел, используем новые компоненты из папки redesigned
 *  @deprecated
 */
export const VStack = (props: VStackProps) => {
  const { align = "start" } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Flex {...props} direction="column" align={align} />
  );
};
