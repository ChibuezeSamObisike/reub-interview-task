export const destructureData = (data: any) => {
  console.log("Data book", data);
  return data?.rows?.map((item: any) => {
    return {
      customer: {
        name: item?.user?.fullName,
        id: item?.id,
      },
      date: item.createdAt.split("T")[0],
      amount: item.paymentInfo?.totalAmount,
      payment_type: {
        type: item?.paymentInfo?.type,
        status: item?.paymentInfo?.status,
      },
      status: item.orderStatus,
      assigned: item?.receiver.name,
      options: "",
    };
  });
};
