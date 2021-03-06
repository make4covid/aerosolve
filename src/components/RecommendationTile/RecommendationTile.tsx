import React from "react";
import { Checkmark, Pause, ArrowDown, Plus } from "assets/svg";
import clsx from "clsx";

export type RecommendationTileProps = {
  color: "blue" | "red" | "light-blue";
  icon: "check" | "pause" | "down" | "plus";
  description: string;
  image:
    | string
    | React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string | undefined;
        }
      >;
};

const icons = {
  check: Checkmark,
  pause: Pause,
  down: ArrowDown,
  plus: Plus,
};

export const RecommendationTile: React.FC<RecommendationTileProps> = ({
  color = "blue",
  ...props
}) => {
  const Image = props.image;
  const Icon = icons[props.icon];

  return (
    <div
      className={clsx(
        ` w-full h-full p-2 pt-3 transition-colors duration-150 border-2 rounded-lg`,
        { "border-blue-500 hover:bg-blue-50 ": color === "blue" },
        {
          "border-light-blue-500 hover:bg-light-blue-50 ":
            color === "light-blue",
        },
        { "border-red-500 hover:bg-red-50 ": color === "red" }
      )}
    >
      <div className="relative w-12 h-12 mb-2">
        {typeof props.image === "string" ? (
          <img
            src={props.image}
            className="object-cover w-full h-full overflow-hidden rounded-full mix-blend-multiply"
          />
        ) : (
          <Image className="w-12 h-12 text-gray-500 fill-current" />
        )}
        <Icon
          className={`text-${color}-500 -top-1.5 -right-2 absolute w-4 h-4 fill-current`}
        />
      </div>
      <div className="w-5/6 text-xs font-semibold text-gray-600">
        {props.description}
      </div>
    </div>
  );
};
