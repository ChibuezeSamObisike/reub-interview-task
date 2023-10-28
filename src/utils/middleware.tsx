export const createOrders = (data: any) => {
  return data?.rows?.map((item: any) => {
    return {
      customer: {
        name: item?.user?.fullName,
        id: item?.id,
      },
      amount: item.paymentInfo?.totalAmount,
      date: item.createdAt.split("T")[0],
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
