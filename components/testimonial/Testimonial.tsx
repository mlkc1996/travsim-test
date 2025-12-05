import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import styles from "./Testimonial.module.scss";
import Image from "next/image";

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
  title = a.subtitle,
  subtitle = a.subtitle,
  testimonials = a.testimonials,
}: any) => {
  return (
    <SectionContainer>
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
      <div className={styles.testimonialsContainer}>
        {testimonials.map(({ userId, userName, userProfile, comment }: any) => {
          return (
            <div className={styles.testimonial}>
              <Image
                src={`${process.env.USER_PROFILE_PATH}/${userProfile}`}
                alt={`${userName} profile`}
              />
              <p>{comment}</p>
              <span>{userName}</span>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
};
