import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import styles from "./Testimonial.module.scss";
import { Image } from "@/shared/UI/image/Image";

const a = {
  title: "Hear what travellers say about use",
  subtitle: "Your United States of America eSim features",
  testimonials: [
    {
      userId: 0,
      userName: "Jane Foster",
      userProfile: "avatar.png",
      comment:
        "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
    },
    {
      userId: 0,
      userName: "Jane Foster",
      userProfile: "avatar.png",
      comment:
        "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
    },
    {
      userId: 0,
      userName: "Jane Foster",
      userProfile: "avatar.png",
      comment:
        "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
    },
    {
      userId: 0,
      userName: "Jane Foster",
      userProfile: "avatar.png",
      comment:
        "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
    },
    {
      userId: 0,
      userName: "Jane Foster",
      userProfile: "avatar.png",
      comment:
        "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
    },
    {
      userId: 0,
      userName: "Jane Foster",
      userProfile: "avatar.png",
      comment:
        "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
    },
    {
      userId: 0,
      userName: "Jane Foster",
      userProfile: "avatar.png",
      comment:
        "Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
    },
  ],
};

export const Testimonial = ({
  title = a.title,
  subtitle = a.subtitle,
  testimonials = a.testimonials,
}: any) => {
  return (
    <SectionContainer>
      <h3 className="text-level-header text-font-x-bold">{title}</h3>
      {subtitle && (
        <p className="text-level-normal-200 text-font-normal">{subtitle}</p>
      )}
      <div className={styles.testimonialsContainer}>
        {testimonials.map(
          ({ userId, userName, userProfile, comment }: any, index: number) => {
            return (
              <div className={styles.testimonial} key={index}>
                <Image
                  className={styles.image}
                  fill
                  src={`${process.env.USER_PROFILE_PATH}/${userProfile}`}
                  alt={`${userName} profile`}
                />
                <p
                  className={`text-level-${
                    index !== 1 ? "normal-100" : "subheader-300"
                  } text-font-normal`}
                >
                  {comment}
                </p>
                <span className="text-level-normal-300 text-font-x-bold">
                  {userName}
                </span>
              </div>
            );
          }
        )}
      </div>
    </SectionContainer>
  );
};
