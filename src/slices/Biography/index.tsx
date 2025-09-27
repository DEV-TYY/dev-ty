import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";

const body = [
  { text: "Suon Ty is a web developer with experience building modern web applications." },
  { text: "He loves working with modern technologies and creating seamless user experiences." },
  { text: "He specializes in front-end and back-end development using React, Node.js, and Laravel." },
  { text: "Suon Ty enjoys collaborating with teams, solving complex problems, and continuously learning new skills." },
  { text: "In his free time, he contributes to open-source projects and writes technical blogs to share knowledge with the community." },
];

const contactData = [
  { name: "Contact", url: "/about" },
];

// Mock avatar image data
const avatarImage = {
  id: "1",
  url: "/avatar.jpg",
  alt: "Suon Ty",
  name: "avatar.jpg",
  dimensions: { width: 400, height: 400 },
  copyright: null,
  edit: "", // <-- Required for type
};

const Biography = (): JSX.Element => {
  return (
    <Bounded data-slice-type="biography" data-slice-variation="default">
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading size="xl" className="col-start-1">
          Suon Ty - Web Developer
        </Heading>

        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          {body.map((block, idx) => (
            <p key={idx}>{block.text}</p>
          ))}
        </div>

        {contactData.map(({ url, name }, index) => (
          <Button
            key={index}
            linkField={{ link_type: "Web", url }}
            label={name}
            className="ml-3"
          />
        ))}

        <Avatar
          image={avatarImage}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Biography;
