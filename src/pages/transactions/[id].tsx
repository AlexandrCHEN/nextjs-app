import { FC, useEffect } from "react";
import { axiosFetch } from "@/utils/fetchApi";
import { notification, Typography } from "antd";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ITransaction } from "@/interfaces/transaction.interface";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

interface IDetailProps {
  transaction: ITransaction | null;
  resStatus: number | null;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const id = context.query.id;

  try {
    const response = await axiosFetch.get(`/transactions/${id}`);
    const status = response.status;
    const data: ITransaction = await response.data;

    return {
      props: { transaction: data, resStatus: status },
    };
  } catch (error) {
    console.error("Error fetching transaction data:", error);
    return {
      props: { transaction: null, resStatus: null },
    };
  }
};

const DetailTransaction: FC<IDetailProps> = ({ transaction, resStatus }) => {
  const route = useRouter();
  const { t } = useTranslation();
  useEffect(() => {
    if (resStatus !== 200) {
      notification.warning({
        placement: "top",
        message: "Транзакция не найдена",
        duration: 1,
      });
      route.push("/transactions");
    }
  }, [resStatus]);

  return (
    <>
      <Typography.Title
        level={2}
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        {t("detailsLink")} №{transaction?.id}
      </Typography.Title>
      {transaction && (
        <div
          style={{
            textAlign: "center",
            width: "50%",
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>{t("detailsLink")}:</strong>{" "}
            <Typography>{transaction.date}</Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>{t("amount")}:</strong>{" "}
            <Typography>{transaction.amount}$</Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>{t("chooseType")}:</strong>{" "}
            <Typography>{transaction.type}</Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>{t("description")}:</strong>{" "}
            <Typography>{transaction.description}</Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>{t("status")}:</strong>{" "}
            <Typography>{transaction.status}</Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>{t("category")}:</strong>{" "}
            <Typography>{transaction.category}</Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>{t("detailsLink")}:</strong>{" "}
            <Typography>{transaction.paymentDetail}</Typography>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailTransaction;
