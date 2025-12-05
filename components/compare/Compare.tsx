import { SectionContainer } from "@/shared/UI/sectionContainer/SectionContainer";
import styles from "./Compare.module.scss";
import { Icon } from "@/shared/UI/icon/Icon";

const a = {
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
      <span className={clasName}>{content}</span>;
  }
};

export const Compare = ({
  title = a.title,
  headers = a.headers,
  features = a.features,
}: any) => {
  return (
    <SectionContainer>
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            {headers.map((header: string, index: number) => {
              return (
                <th key={index} className={`${styles.tableheader}`}>
                  {!index ? (
                    <Icon icon="logo" className={styles.logo} />
                  ) : (
                    header
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {features.map(
            ({ title, our, other, wifi, roaming }: any, index: number) => {
              <tr key={index}>
                <td className={styles.compareText}>
                  <TableCellContent content={title} />
                </td>
                <td>
                  <TableCellContent content={our} />
                </td>
                <td>
                  <TableCellContent content={other} />
                </td>
                <td>
                  <TableCellContent content={wifi} />
                </td>
                <td>
                  <TableCellContent content={roaming} />
                </td>
              </tr>;
            }
          )}
        </tbody>
      </table>
    </SectionContainer>
  );
};
