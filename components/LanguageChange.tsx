"use client";

import * as React from "react";
import { Globe2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const LanguageList = [
  {
    name: "English",
    locale: "en",
  },
  {
    name: "Tiếng Việt",
    locale: "vi",
  },
];

export default function LanguageChange({ locale }: { locale: string }) {
  const { push } = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe2 className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Language Change</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LanguageList.map((item, index) => (
          <DropdownMenuCheckboxItem
            key={index}
            checked={locale == item.locale}
            // onClick={() => redirect("/")}
            onClick={() => push(item.locale)}
          >
            {item.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
