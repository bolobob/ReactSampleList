import Section from "./Section";
import Heading from "./Heading";
import { RecentPosts } from "./RecentPosts";

export const AllPosts = () => {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
};
