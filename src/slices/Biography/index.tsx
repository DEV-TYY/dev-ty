import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";


  const body = [
    {
      type: "paragraph",
      text: "Suon Ty is a web developer with experience building modern web applications."
    },
    {
      type: "paragraph",
      text: "He loves working with modern technologies and creating seamless user experiences."
    },
    {
      type: "paragraph",
      text: "He specializes in front-end and back-end development using React, Node.js, and Laravel."
    },
    {
      type: "paragraph",
      text: "Suon Ty enjoys collaborating with teams, solving complex problems, and continuously learning new skills."
    },
    {
      type: "paragraph",
      text: "In his free time, he contributes to open-source projects and writes technical blogs to share knowledge with the community."
    }
  ];

// Additional menu item for contact page
const contactData = [
  { name: "Contact", url: "/about" },
]
/**
 * Component for "Biography" Slices.
 */

const Biography = (): JSX.Element => {

  return (
    <Bounded
      data-slice-type="biography"
      data-slice-variation="default"
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading size="xl" className="col-start-1">
          John Doe - Full Stack Developer
        </Heading>

        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          {body.map((block, idx) => (
            <p key={idx}>{block.text}</p>
          ))}
        </div>
        {contactData.map(({ url, name }, index) => (
          <Button
            key={index} // <-- Add this
            linkField={{ link_type: "Web", url }}
            label={name}
            className="ml-3"
          />
        ))}

       <Avatar
          image={{ url: "/avatar.jpg", alt: "John Doe" }}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3" />

      </div>
    </Bounded>
  );
};

export default Biography;
