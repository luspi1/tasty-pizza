import {FC} from "react";
import {cn} from "@/lib/utils";

type Props = {
  className?: string
}

export const Header: FC<Props> = ({className}) => {
  return (
    <header className={cn('border border-b', className)}>
      <div>

      </div>
    </header>
  );
};

