import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import styles from "./Testimonial.module.scss";
import { Image } from "@/shared/UI/image/Image";

export type TestimonialProps = {
  title: string;
  subtitle: string;
  testimonials: {
    userId: number;
    userName: string;
    userProfile: string;
    comment: string;
  }[];
};

export const Testimonial = ({
  title,
  subtitle,
  testimonials,
}: TestimonialProps) => {
  return (
    <SectionContainer className={`${styles.container} container-px-200`}>
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
                <p className={`text-level-normal-100 text-font-normal`}>
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
