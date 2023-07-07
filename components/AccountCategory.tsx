import React from "react";
import Typography from "./ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye } from "lucide-react";
import { Button } from "./ui/button";

export default function AccountCategory({
  title,
  items,
}: {
  title: string;
  items: any;
}) {
  return (
    <div className="accountcategory flex flex-col justify-center mt-5">
      <Typography variant="h1" className="text-3xl lg:text-5xl">
        {title}
      </Typography>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 mt-6">
        {items.map((item: any, index: number) => (
          <Card className="" key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>Tai khoan hien co: 100,000</CardDescription>
            </CardHeader>
            <CardContent className="w-full px-0">
              <img
                className="w-full"
                src="https://lienminhshop.vn/Content/images/page/lmht/LM20K.gif"
              />
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant={"outline"}>
                <Eye />
                <p className="ml-2">Show all</p>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
