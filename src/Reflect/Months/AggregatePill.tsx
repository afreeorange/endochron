import clsx from "clsx";
import { PiPencilDuotone } from "react-icons/pi";

const P = "badge badge-sm join-item";
const CNT = "badge badge-sm join-item opacity-50";

export const Heading = ({
  label,
  onAdd,
}: {
  label: string;
  onAdd?: () => void;
}) => (
  <div className="flex items-center mb-1">
    <span className="font-semibold text-pink-500 text-sm grow">{label}</span>
    {onAdd && (
      <button
        type="button"
        aria-label={`Add to ${label}`}
        className="btn btn-sm btn-circle"
        onClick={onAdd}
      >
        <PiPencilDuotone className="text-xl" />
      </button>
    )}
  </div>
);

export const CountPill = ({
  label,
  cls,
  n,
  onClick,
}: {
  label: string;
  cls: string;
  n: number;
  onClick?: () => void;
}) => {
  const inner = (
    <>
      <span className={clsx(P, cls)}>{label}</span>
      <span className={clsx(CNT, cls)}>{n}</span>
    </>
  );
  return onClick ? (
    <button type="button" className="join cursor-pointer" onClick={onClick}>
      {inner}
    </button>
  ) : (
    <div className="join">{inner}</div>
  );
};
