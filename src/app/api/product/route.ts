import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Sepatu",
    price: 100000,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_411,c_limit/9dadce8a-77aa-4317-8713-63d820c0dac9/air-pegasus-89-shoes-Jh7lxZ.png",
  },
  {
    id: 2,
    name: "Zion 3 PF",
    price: 2199000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/73b0741b-e8a6-4d99-a5e6-32e65432fe88/zion-3-pf-basketball-shoes-vTjpz4.png",
  },
  {
    id: 3,
    name: "Air Jordan 1 Low",
    price: 1729000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d3123e79-53e5-4a03-aa5b-fbc5c18b9bfd/air-jordan-1-low-shoes-459b4T.png",
  },
  {
    id: 4,
    name: "Air Jordan 2 Low",
    price: 1729000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d3123e79-53e5-4a03-aa5b-fbc5c18b9bfd/air-jordan-1-low-shoes-459b4T.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        mesagge: "success",
        data: detailProduct,
      });
    }

    return NextResponse.json({
      status: 404,
      mesagge: "Not Found",
      data: {},
    });
  }

  return NextResponse.json({ status: 200, mesagge: "success", data: data });
}
