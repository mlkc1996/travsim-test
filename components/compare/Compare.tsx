import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import styles from "./Compare.module.scss";
import { Icon } from "@/shared/UI/icon/Icon";
import { Image } from "@/shared/UI/image/Image";

const data = {
  title: "Our eSIM vs. the Competition",
  headers: [
    "OUR ESIM",
    "OTHER ESIM PROVIDERS",
    "WIFI HOTSPOTS",
    "INTERNATIONAL ROAMING",
  ],
  features: [
    {
      title: "Low usage cost",
      our: "Yes",
      other: "Yes",
      wifi: "Yes",
      roaming: "No",
    },
    {
      title: "No activation fees",
      our: "Yes",
      other: "Yes",
      wifi: "Yes",
      roaming: "No",
    },
    {
      title: "No hidden fees",
      our: "Yes",
      other: "Yes",
      wifi: "Yes",
      roaming: "No",
    },
    {
      title: "No roaming charges",
      our: "Yes",
      other: "Yes",
      wifi: "Yes",
      roaming: "No",
    },
    {
      title: "Nationwide coverage",
      our: "Yes",
      other: "Yes",
      wifi: "No",
      roaming: "No",
    },
    {
      title: "Fast internet speeds",
      our: "Yes",
      other: "Yes",
      wifi: "No",
      roaming: "No",
    },
    {
      title: "No throttling data speeds",
      our: "Yes",
      other: "No",
      wifi: "No",
      roaming: "Yes",
    },
    {
      title: "One eSIM. Multiple destinations",
      our: "Yes",
      other: "No",
      wifi: "No",
      roaming: "No",
    },
    {
      title: "No log-in process for usage",
      our: "Yes",
      other: "Yes",
      wifi: "No",
      roaming: "Yes",
    },
    {
      title: "Can be used anywhere",
      our: "Yes",
      other: "Yes",
      wifi: "No",
      roaming: "No",
    },
  ],
};

export const TableCellContent = ({ content, clasName }: any) => {
  switch (content) {
    case "Yes":
      return <Icon icon="check" className={clasName} />;
    case "No":
      return <Icon icon="x-close" className={clasName} />;
    default:
      return (
        <span className={"text-level-normal-100 text-font-medium"}>
          {content}
        </span>
      );
  }
};

export const Compare = ({
  title = data.title,
  headers = data.headers,
  features = data.features,
}: any) => {
  return (
    <SectionContainer className={styles.container}>
      <h3 className="text-level-header text-font-x-bold">{title}</h3>
      <table className={styles.table}>
        <thead>
          <tr className={styles["no-border"]}>
            <th></th>
            {headers.map((_: any, index: number) => (
              <th
                key={index}
                className={`${
                  !index ? `${styles.highlight} ${styles.head}` : ""
                }`}
              >
                <div></div>
              </th>
            ))}
          </tr>
          <tr>
            <th></th>
            {headers.map((header: string, index: number) => {
              return (
                <th
                  key={index}
                  className={`${styles.tableheader} ${
                    !index ? styles.highlight : ""
                  }`}
                >
                  <div>
                    {!index ? (
                      <Image
                        src={`${process.env.IMAGE_PATH}/logo.png`}
                        alt="logo"
                        className={styles.logo}
                      />
                    ) : (
                      <span
                        className="text-level-normal-100 text-font-medium"
                        style={{ textTransform: "capitalize" }}
                      >
                        {header}
                      </span>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {features.map(
            ({ title, our, other, wifi, roaming }: any, index: number) => {
              return (
                <tr key={index}>
                  <td>
                    <div>
                      <TableCellContent content={title} />
                    </div>
                  </td>
                  <td
                    className={`${styles.highlight} ${
                      index & 1 ? "" : styles.darker
                    }`}
                  >
                    <div>
                      <TableCellContent content={our} />
                    </div>
                  </td>
                  <td>
                    <div>
                      <TableCellContent content={other} />
                    </div>
                  </td>
                  <td>
                    <div>
                      <TableCellContent content={wifi} />
                    </div>
                  </td>
                  <td>
                    <div>
                      <TableCellContent content={roaming} />
                    </div>
                  </td>
                </tr>
              );
            }
          )}
          <tr className={styles["no-border"]}>
            <td></td>
            {headers.map((_: any, index: number) => (
              <td
                key={index}
                className={`${
                  !index
                    ? `${styles.highlight} ${styles.tail} ${
                        (features.length - 1) & 1 ? "" : styles.highlight
                      }`
                    : ""
                }`}
              >
                <div></div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </SectionContainer>
  );
};
