import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import Image from "next/image";
import Link from "next/link";

export const Resources = ({ title, resources }: any) => {
  return (
    <SectionContainer>
      <h3>{title}</h3>
      <div className="flex gap-[32px]">
        {resources?.map?.(
          ({ image, title, description, link }: any, index: number) => {
            <div>
              <Image
                src={`${process.env.IMAGE_PATH}/${image}`}
                alt={`Resource image ${index}`}
              />
              <h4>{title}</h4>
              <p>{description}</p>
              <Link href={link ?? ""}>READ MORE</Link>
            </div>;
          }
        )}
      </div>
    </SectionContainer>
  );
};
