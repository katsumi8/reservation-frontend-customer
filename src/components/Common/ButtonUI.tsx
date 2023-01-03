import type { UIButtonPropsType } from "@/types/propTypes";
import { Button, Group } from "@mantine/core";
import { useRouting } from "@/hooks/useRouting";

const ButtonUI = ({
  primaryLabel,
  secondaryLabel,
  buttonType,
  pathNames,
  secondaryButtonType,
}: UIButtonPropsType) => {
  const [{ routingHandler }] = useRouting();

  return (
    <Group position="right">
      {secondaryLabel && (
        <Button
          onClick={pathNames ? () => routingHandler(pathNames[1]) : () => {}}
          type={secondaryButtonType ? secondaryButtonType : buttonType}
          variant="outline"
          color="gray"
          styles={(theme) => ({
            root: {
              width: 100,
              paddingLeft: 0,
              paddingRight: 10,
            },
          })}
        >
          {secondaryLabel}
        </Button>
      )}
      {buttonType === "submit" ? (
        <Button type={buttonType}>{primaryLabel}</Button>
      ) : (
        <Button
          type={buttonType}
          onClick={pathNames ? () => routingHandler(pathNames[0]) : () => {}}
        >
          {primaryLabel}
        </Button>
      )}
    </Group>
  );
};

export default ButtonUI;
