import Section from "./Section";
import Heading from "./Heading";

export const Post = ({ title, body }: { title: string; body: string }) => {
  return (
    <Section isFancy>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  );
};
