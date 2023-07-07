import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChartBig, Crown, Hexagon } from "lucide-react";
import Typography from "./ui/typography";
import { useTranslations } from "next-intl";

const RechargeRankingList = [
  {
    name: "admin",
    amount: 100000,
  },
  {
    name: "admin",
    amount: 100000,
  },
  {
    name: "admin",
    amount: 100000,
  },
  {
    name: "admin",
    amount: 100000,
  },
  {
    name: "admin",
    amount: 100000,
  },
];

export default function TopRecharge() {
  const t = useTranslations();

  return (
    <Card className="md:min-w-[350px] lg:min-w-[450px]">
      <CardHeader>
        <CardTitle className="flex">
          {t("rechargeRanking")}
          <BarChartBig className="ml-2" />
        </CardTitle>
        <CardDescription>Card Description</CardDescription>
        <div className="bg-border w-full h-[1px]"></div>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {RechargeRankingList.map((item, index) => (
          <div className="flex items-center justify-between" key={index}>
            <div className="flex items-center">
              {index == 0 ? (
                <Crown />
              ) : (
                <div className="relative flex justify-center items-center cursor-default">
                  <Hexagon />
                  <div className="absolute flex justify-center items-center">
                    <Typography
                      variant={"p"}
                      className="font-semibold select-none"
                    >
                      {index + 1}
                    </Typography>
                  </div>
                </div>
              )}

              <Typography variant={"h4"} className="ml-2">
                {item.name}
              </Typography>
            </div>
            <Typography variant={"p"}>
              {item.amount.toLocaleString()}đ
            </Typography>
          </div>
        ))}
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}
