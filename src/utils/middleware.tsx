export const createOrders = (data: any) => {
  console.log("data items", data);
  const rows = data?.rows?.map((item: any) => {
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

  return {
    rows,
    pagination: {
      total: data?.total,
      page: data?.page,
      perPage: data?.perPage,
    },
  };
};
