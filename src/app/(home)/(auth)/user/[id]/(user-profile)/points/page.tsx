import RewardsPage from "@/components/auth/user-profile/RewardsPage";
import React from "react";

interface Props {}

const UserPointsPage = () => {
  return (
    <div className='w-full'>
      <RewardsPage points={100} />
    </div>
  );
};

export default UserPointsPage;
