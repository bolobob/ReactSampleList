import Section from "./Section";
import Heading from "./Heading";

export default function HeadingList() {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Section>
              <Heading>Sub-sub-sub-heading</Heading>
              <Heading>Sub-sub-sub-heading</Heading>
              <Heading>Sub-sub-sub-heading</Heading>
              <Section>
                <Heading>Sub-sub-sub-sub-heading</Heading>
                <Heading>Sub-sub-sub-sub-heading</Heading>
                <Heading>Sub-sub-sub-sub-heading</Heading>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
