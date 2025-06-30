import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

export const SkeletonGrid = ({ count, className }) => {
  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
};
