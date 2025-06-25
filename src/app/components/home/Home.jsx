import Dishes from "./dishes/Dishes";
import Feedback from "./feedback/Feedback";
import TeamMembers from "./team-members/TeamMembers";
import WeWorkWithBestPeople from "./work-with-best-people/WeWorkWithBestPeople";

const HomePage = () => {
  return (
    <div className="py-10 md:py-20 -space-y-10 md:space-y-20">
      <Dishes />
      <Feedback />
      <TeamMembers />
      <WeWorkWithBestPeople />
    </div>
  );
};

export default HomePage;
