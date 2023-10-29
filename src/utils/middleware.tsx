export const createOrders = (data: any) => {
  return data?.rows?.map((item: any) => {
    console.log("Items x", item);
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
      assigned: {
        title: item?.receiver.name,
        profileUrl: item?.user?.profileImage,
      },
      options: "",
    };
  });
};
