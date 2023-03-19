import Heading from "./Heading";
import { Post } from "./Post";
import { AllPosts } from "./AllPosts";
import Section from "./Section";

const ProfilePage = () => {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post title="Hello traveller!" body="Read about my adventures." />
      <AllPosts />
    </Section>
  );
};

export default ProfilePage;
