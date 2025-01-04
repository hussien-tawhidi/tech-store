import React from "react";

interface Level {
  name: string;
  requiredPoints: number;
  discount: number;
  cashback: number;
}

const levels = [
  { name: "Silver", requiredPoints: 0, discount: 5, cashback: 1 },
  { name: "Gold", requiredPoints: 8000, discount: 10, cashback: 2 },
  { name: "Platinum", requiredPoints: 40000, discount: 15, cashback: 3 },
  { name: "Diamond", requiredPoints: 115000, discount: 20, cashback: 5 },
];

interface PointsProps {
  points: number;
}

const Points = ({ points }: PointsProps) => {
  return (
    <div className='sm:p-4 p-2 bg-red-500 text-white rounded-md'>
      <h2 className='text-sm'>Your points</h2>
      <div className='flex items-center'>
        <span className='text-4xl font-bold'>{points}</span>
      </div>
    </div>
  );
};

const LevelCard = ({ level, points }: { level: Level; points: number }) => {
  const pointsNeeded = Math.max(level.requiredPoints - points, 0);
  const isActive = points >= level.requiredPoints;

  return (
    <div
      className={`border sm:p-4 p-2 rounded-md shadow-sm ${
        isActive ? "bg-slate-100 border-slate-500" : ""
      }`}>
      <h3 className={`text-lg font-bold ${isActive ? "text-slate-600" : ""}`}>
        {level.name}
      </h3>
      {pointsNeeded > 0 && !isActive && (
        <p className='text-sm text-gray-500'>
          {pointsNeeded.toLocaleString()} ₽ to reach the level
        </p>
      )}
      <p className='text-sm'>{level.discount}% discount with points</p>
      <p className='text-sm'>{level.cashback}% cashback</p>
    </div>
  );
};

const RewardsPage = ({ points }: PointsProps) => {
  return (
    <div className='sm:p-6 p-2'>
      <Points points={points} />
      <div className='mt-4'>
        <h2 className='text-lg font-bold mb-4'>Levels</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {levels.map((level) => (
            <LevelCard key={level.name} level={level} points={points} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
